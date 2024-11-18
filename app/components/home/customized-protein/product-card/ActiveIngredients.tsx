import { Image } from "@shopify/hydrogen";

export const ActiveIngredients: React.FC = () => {
  const ingredients = [
    {
      name: 'Whey Protein Isolate',
      description:
        'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.',
    },
    {
      name: 'L-Glutamine',
      description:
        'An amino acid that supports muscle recovery, reduces soreness, and enhances performance.',
    },
    {
      name: 'BCAAs',
      description:
        'Essential amino acids that promote muscle growth and reduce exercise fatigue.',
    },
  ];

  return (
    <ul
      className="flex flex-col md:flex-row items-start gap-8 mb-8"
      aria-label="Ingredients List"
    >
      {ingredients.map((ingredient, index) => (
        <li
          key={ingredient.name}
          className="flex flex-col max-w-full md:max-w-[200px]"
        >
          <Image
            src="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/sheets-white.png?v=1731953235"
            width={40}
            height={40}
            className="object-cover mb-2 md:mb-3"
            alt="Ingredient icon"
          />
          <h4 className="font-medium mb-2 md:mb-3 text-sm md:text-base">
            {ingredient.name}
          </h4>
          <p className="text-xs md:text-sm text-[#1B1F2399]">
            {ingredient.description}
          </p>
        </li>
      ))}
    </ul>
  );
};
