import {Image} from '@shopify/hydrogen';

interface GoalCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  dimensions?: string;
}

interface GoalsProps {
  goals: {
    node: {
      id: string;
      type: string;
      fields: {
        key: string;
        value: string;
        reference?: {
          id: string;
          image?: {
            url: string;
            altText: string;
            width: number;
            height: number;
          };
        };
      }[];
    };
  }[];
}

export default function Goals({goals}: GoalsProps) {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h4 className="text-sm uppercase tracking-wider mb-2">
          COMFORTABLY UNCOMFORTABLE
        </h4>
        <h2 className="text-4xl font-bold mb-4">Start with your Goals</h2>
        <p className="text-gray-600">
          We cannot become what we want to be by
          <br />
          remaining what we are.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
                    className="object-cover w-full h-[250px]"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 100vw"
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
