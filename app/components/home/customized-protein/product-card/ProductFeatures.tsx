import {Image} from '@shopify/hydrogen';

export const ProductFeatures: React.FC = () => {
  const features = ['Whey Based', 'Build Muscle', 'Clean Ingredients'];

  return (
    <ul
      className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10"
      aria-label="Product Features"
    >
      {features.map((feature) => (
        <li
          key={feature}
          className="flex flex-row items-center gap-4 md:gap-6 w-full"
        >
          <Image
            src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/sheets.png?v=1731742190"
            width={40}
            height={40}
            className="object-cover"
            alt="Feature icon"
          />
          <p className="text-white text-sm md:text-base leading-5 font-normal whitespace-nowrap">
            {feature}
          </p>
        </li>
      ))}
    </ul>
  );
};
