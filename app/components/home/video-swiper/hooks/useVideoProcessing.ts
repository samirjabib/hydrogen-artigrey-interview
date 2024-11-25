import { useMemo } from 'react';
import type { VideosSwiperQuery } from 'storefrontapi.generated';
import { ProductInfo, Video } from '../types';

export function useVideoProcessing(
  videoSwiper: VideosSwiperQuery['metaobjects'],
) {
  const processedData = useMemo(() => {
    const metaobject = videoSwiper.edges[0]?.node;
    if (!metaobject) return { videosUrl: [], middleIndex: 0, product: null };

    const videosField = metaobject.fields.find(
      field => field.key === "videos"
    );


    const videoEdges = videosField?.references?.edges || [];
    const videosUrl: Video[] = videoEdges.map((edge: any) => ({
      url: edge.node.sources[2].url, // Usando el tercer source que es HD-720p
      id: edge.node.id || Math.random().toString(36).substr(2, 9),
    }));

    // Por ahora, creamos un producto dummy ya que no viene en el metaobject
    const product: ProductInfo = {
      title: "Magnesium L-Threonate",
      price: "39.99",
      image: "https://cdn.shopify.com/s/files/1/0917/5161/2725/files/Magnesium_L-Threonate.png?v=1732554316",
      id: "dummy-product"
    };

    return {
      videosUrl,
      middleIndex: Math.floor(videosUrl.length / 2),
      product,
    };
  }, [videoSwiper]);

  return processedData;
}