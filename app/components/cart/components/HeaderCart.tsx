export const HeaderCart = ({ totalQuantity }: { totalQuantity: number }) => {
    return (
        <div className='flex flex-row gap-3 pb-6 border-b border-gray-200 items-center'>
            <h2 className='text-2xl sm:text-[34px] font-medium leading-10'>Your bag</h2>
            <div className='flex items-center justify-center w-5 h-5 sm:w-9 sm:h-9 bg-[#1B1F23] text-white rounded-full font-normal text-sm sm:text-lg leading-5 relative top-1'>
                {totalQuantity}
            </div>
        </div>
    )
}