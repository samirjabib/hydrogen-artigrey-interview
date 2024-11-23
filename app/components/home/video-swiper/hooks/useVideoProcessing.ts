import { useMemo } from 'react';
import type { VideosSwiperQuery } from 'storefrontapi.generated';
import { ProductInfo, Video } from '../types';



export function useVideoProcessing(
  videoSwiper: VideosSwiperQuery['metaobjects'],
) {
  const processedData = useMemo(() => {
    const videoEdges = videoSwiper.edges[0]?.node.fields[2]?.references?.edges;
    const videosUrl: Video[] = videoEdges
      ? videoEdges.map((video: any) => ({
        url: video.node.sources[2].url,
        id: video.node.id || Math.random().toString(36).substr(2, 9),
      }))
      : [];

    const reference = videoSwiper.edges[0]?.node?.fields[0]?.reference as any;
    const product: ProductInfo | null = reference
      ? {
        title: reference.title,
        price: reference.priceRange.minVariantPrice.amount,
        image: reference.featuredImage.url,
        id: reference.id,
      }
      : null;

    return {
      videosUrl,
      middleIndex: Math.floor(videosUrl.length / 2),
      product,
    };
  }, [videoSwiper]);

  return processedData;
}
