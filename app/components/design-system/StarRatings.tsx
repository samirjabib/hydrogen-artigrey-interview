import {cn} from '~/utils/cn';

export const StarsRating = ({
  reviewsLabel,
  isProductRating,
  size = 5,
}: {
  reviewsLabel?: string;
  isProductRating?: boolean;
  size?: number;
}) => (
  <div className="flex gap-2 flex-col-reverse md:flex-row items-center">
    <div
      className={cn('flex text-[#F5BD41]', isProductRating && 'text-[#101226]')}
    >
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    {reviewsLabel ? (
      <span className="text-base leading-4 font-normal">{reviewsLabel}</span>
    ) : null}
  </div>
);
