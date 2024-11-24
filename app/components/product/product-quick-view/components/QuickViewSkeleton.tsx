export const QuickViewSkeleton: React.FC = () => {
    return (
        <div className="animate-pulse">
            {/* Product Image Skeleton */}
            <div className="w-full aspect-square bg-gray-200 rounded-lg mb-6" />

            {/* Product Title Skeleton */}
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />

            {/* Product Price Skeleton */}
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-4" />

            {/* Product Description Skeleton */}
            <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-11/12" />
                <div className="h-4 bg-gray-200 rounded w-10/12" />
            </div>

            {/* Variant Selector Skeleton */}
            <div className="mt-6 space-y-4">
                <div className="h-10 bg-gray-200 rounded w-full" />
                <div className="h-10 bg-gray-200 rounded w-full" />
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex gap-4 mt-6">
                <div className="h-12 bg-gray-200 rounded-lg w-1/2" />
                <div className="h-12 bg-gray-200 rounded-lg w-1/2" />
            </div>
        </div>
    );
};
