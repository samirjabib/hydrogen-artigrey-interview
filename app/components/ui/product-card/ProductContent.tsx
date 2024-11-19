import {Button} from '../Button';
import {StarsRating} from '../StarRatings';
import {Tag} from '../Tag';

export const ProductContent = () => {
  const mockTags = ['GMO-Free', 'Gluten Free'];

  return (
    <div className="px-5">
      <div className="flex flex-row gap-1 items-center pb-4">
        {mockTags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <h3 className="text font-medium text-[#1B1F23]">Magnesium L-Threonate</h3>
      <p className="text-[13px] leading-4 text-[#1B1F23B2] mb-2">
        Enhances the quality of sleep
      </p>
      <div className="flex flex-row items-center justify-between pb-5">
        <StarsRating isProductRating />
        <Button className="font-medium text-[13px] py-[5px] px-4 inline-flex">
          Add • $49.95
        </Button>
      </div>
    </div>
  );
};
