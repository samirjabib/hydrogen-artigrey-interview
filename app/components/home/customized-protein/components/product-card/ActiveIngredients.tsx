import { Image } from '@shopify/hydrogen';
import { ingredients } from '../../constants';

export const ActiveIngredients: React.FC = () => {

  return (
    <ul
      className="flex flex-col md:flex-row items-start gap-8 mb-8"
      aria-label="Ingredients List"
    >
      {ingredients.map((ingredient) => (
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
