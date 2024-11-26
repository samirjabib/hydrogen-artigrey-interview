import { cn } from '~/utils/cn';
import type { Variant } from './ProductCard';

export const ProductCardSkeleton = ({ variant = 'default' }: { variant?: Variant }) => {
    return (
        <div
            className={cn(
                'rounded-lg pt-8',
                variant === 'gray' ? 'bg-[#F6F6F5]' : 'bg-white',
            )}
        >
            <div>
                {/* Image container */}
                <div className="flex items-center justify-center pb-[42px] relative mb-4">
                    {/* Image skeleton */}
                    <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg animate-pulse" />



                    {/* Tags skeleton */}
                    <div className="absolute bottom-0 left-0 px-4 flex flex-row items-center gap-1">
                        <div className="w-16 h-6 bg-gray-200 rounded animate-pulse" />
                        <div className="w-16 h-6 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>

                {/* Content container */}
                <div className="px-5">
                    {/* Title skeleton */}
                    <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-1" />

                    {/* Description skeleton */}
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2" />

                    {/* Rating and button container */}
                    <div className="flex flex-row items-center justify-between pb-5">
                        {/* Stars rating skeleton */}
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="w-3 h-3 bg-gray-200 rounded animate-pulse" />
                            ))}
                        </div>

                        {/* Button skeleton */}
                        <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};