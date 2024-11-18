import {Image} from '@shopify/hydrogen';
import type {GoalsCardsQuery} from 'storefrontapi.generated';
import {Icon} from '~/components/ui/Icon';

interface GoalsProps {
  goals: GoalsCardsQuery['metaobjects']['edges'];
}

export function Goals({goals}: GoalsProps) {
  return (
    <section
      aria-labelledby="goals-title"
      className="pt-20 pb-[61px] wrapper px-4 md:px-10"
    >
      <div className="text-center mb-10">
        <h2 id="goals-title" className="title mb-4">
          Start with your Goals
        </h2>
        <p className="text">
          We cannot become what we want to be by
          <br />
          remaining what we are.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-9 md:gap-5">
        {goals.map(({node}) => {
          const title = node.fields.find((f) => f.key === 'title')?.value || '';
          const description =
            node.fields.find((f) => f.key === 'description')?.value || '';
          const imageField = node.fields.find((f) => f.key === 'image');
          const imageData = imageField?.reference?.image;

          return (
            <li key={node.id} className="relative group cursor-pointer">
              {imageData && (
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    data={imageData}
                    className="object-cover w-full h-[392px]"
                    alt={imageData.altText || ''}
                  />
                </div>
              )}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <Icon name="arrow" size={36} />
                </div>
                <p className="text-[#1B1F23CC] mt-1 text-base leading-5">
                  {description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
