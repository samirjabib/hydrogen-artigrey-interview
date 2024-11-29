import { Image } from '@shopify/hydrogen';
import type { GoalsCardsQuery } from 'storefrontapi.generated';
import { Icon } from '~/components/ui/Icon';
import { Heading } from '../design-system/Heading';

interface GoalsProps {
  goals: GoalsCardsQuery['metaobjects']['edges'];
}

export function Goals({ goals }: GoalsProps) {
  return (
    <section
      aria-labelledby="goals-title"
      className="pt-20 pb-[61px] wrapper px-2 sm:px-4 md:px-10"
    >
      <div className="text-center mb-10 max-w-2xl mx-auto px-2 sm:px-0">
        <Heading
          title="Start with your Goals"
          className="mb-4"
          subtitle="COMFORTABLY UNCOMFORTABLE"
        />

        <p className="text sm:text-lg">
          We cannot become what we want to be by
          <br className="hidden sm:block" />
          remaining what we are.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center gap-5 lg:grid lg:grid-cols-5">
        {goals.map(({ node }) => {
          const title = node.fields.find((f) => f.key === 'title')?.value || '';
          const description =
            node.fields.find((f) => f.key === 'description')?.value || '';
          const imageField = node.fields.find((f) => f.key === 'image');
          const imageData = imageField?.reference?.image;

          return (
            <li key={node.id} className="w-[calc(100%-1rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-full max-w-[320px] sm:max-w-[288px] lg:max-w-none flex flex-col">
              {imageData && (
                <div className="relative overflow-hidden rounded-2xl aspect-[288/392] w-full">
                  <Image
                    data={imageData}
                    className="object-cover w-full h-full"
                    alt={imageData.altText || ''}
                    width={288}
                    height={392}
                    sizes="(min-width: 1200px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              )}
              <div className="mt-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                  <Icon name="arrow" className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
                <p className="text-[#1B1F23CC] text-sm sm:text-base leading-5">
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
