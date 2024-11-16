import {Image} from '@shopify/hydrogen';
import type {CleanSuplementsQuery} from 'storefrontapi.generated';

export const CleanSuplements = ({
  cleanSupplements,
}: {
  cleanSupplements: CleanSuplementsQuery['metaobjects']['edges'];
}) => {
  return (
    <section className="wrapper bg-white py-20 px-4 md:px-10">
      <div className="mb-12">
        <h4 className="subtitle mb-2">🧐 Why Health & Fitness</h4>
        <h2 className="title mb-4">
          Clean Supplements -
          <br />
          Made For You
        </h2>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row flex-row gap-8 ">
        {cleanSupplements.map(({node}) => {
          const title = node.fields.find((f) => f.key === 'title')?.value || '';
          const description =
            node.fields.find((f) => f.key === 'description')?.value || '';
          const imageField = node.fields.find((f) => f.key === 'image');
          const imageData = imageField?.reference?.image;

          return (
            <div key={node.id} className="flex flex-col">
              {imageData && (
                <div className="w-12 h-12 mb-6">
                  <Image
                    src={imageData.url}
                    alt={imageData.altText || ''}
                    className="object-contain "
                  />
                </div>
              )}
              <div className="">
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-[#1B1F23CC] mt-1 text-base leading-5">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
