import {Image} from '@shopify/hydrogen';
import type {CleanSuplementsQuery} from 'storefrontapi.generated';
import {Heading} from '~/components/ui/Heading';

export const CleanSuplements = ({
  cleanSupplements,
}: {
  cleanSupplements: CleanSuplementsQuery['metaobjects']['edges'];
}) => {
  return (
    <section
      className="wrapper bg-white py-20 px-4 md:px-10"
      aria-labelledby="clean-suplements-title"
    >
      <Heading
        title={
          <>
            Clean Supplements -
            <br />
            Made For You
          </>
        }
        className="mb-12"
        subtitle="🧐 Why Health & Fitness"
      />
      <div
        className="grid grid-cols-2 md:flex md:flex-row flex-row gap-8 "
        aria-label="Clean Supplements"
        role="list"
      >
        {cleanSupplements.map(({node}) => {
          const title = node.fields.find((f) => f.key === 'title')?.value || '';
          const description =
            node.fields.find((f) => f.key === 'description')?.value || '';
          const imageField = node.fields.find((f) => f.key === 'image');
          const imageData = imageField?.reference?.image;

          return (
            <li key={node.id} className="flex flex-col" aria-label={title}>
              {imageData && (
                <div className="w-12 h-12 mb-6">
                  <Image
                    src={imageData.url}
                    alt={imageData.altText || ''}
                    className="object-contain "
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="">
                <h3
                  className="text-xl font-semibold mb-4"
                  id={`${node.id}-title`}
                >
                  {title}
                </h3>
                <p
                  className="text-[#1B1F23CC] mt-1 text-base leading-5"
                  aria-labelledby={`${node.id}-title`}
                >
                  {description}
                </p>
              </div>
            </li>
          );
        })}
      </div>
    </section>
  );
};
