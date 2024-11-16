import {Image} from '@shopify/hydrogen';
import type {GoalsCardsQuery} from 'storefrontapi.generated';

interface GoalsProps {
  goals: GoalsCardsQuery['metaobjects']['edges'];
}

export function Goals({goals}: GoalsProps) {
  return (
    <section className="pt-20 pb-[61px] px-4 wrapper mx-auto">
      <div className="text-center mb-10">
        <h4 className="text-base uppercase leading-5 mb-2 font-normal">
          COMFORTABLY UNCOMFORTABLE
        </h4>
        <h2 className="text-[40px] font-medium leading-[47px] mb-4">
          Start with your Goals
        </h2>
        <p className="text-[#1B1F23B2] font-normal">
          We cannot become what we want to be by
          <br />
          remaining what we are.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-9  md:gap-5">
        {goals.map(({node}) => {
          const title = node.fields.find((f) => f.key === 'title')?.value || '';
          const description =
            node.fields.find((f) => f.key === 'description')?.value || '';
          const imageField = node.fields.find((f) => f.key === 'image');
          const imageData = imageField?.reference?.image;

          return (
            <div key={node.id} className="relative group cursor-pointer">
              {imageData && (
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    data={imageData}
                    className="object-cover w-full h-[392px]"
                  />
                </div>
              )}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 mt-1">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
