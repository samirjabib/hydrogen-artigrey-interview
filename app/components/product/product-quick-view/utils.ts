import { CartForm } from "@shopify/hydrogen";
import type { CartApiQueryFragment } from 'storefrontapi.generated';

export const getTotalQuantity = (cart: CartApiQueryFragment | null, excludeLineId?: string) => {
    if (!cart?.lines?.nodes) return 0;
    return cart.lines.nodes.reduce((total, line) => {
        if (excludeLineId && line.id === excludeLineId) return total;
        return total + (line.quantity || 0);
    }, 0);
};

export const getDiscountPercentage = (totalQuantity: number) => {
    if (totalQuantity >= 15) return 15;
    if (totalQuantity >= 10) return 10;
    if (totalQuantity >= 5) return 5;
    return 0;
};

export const calculateDiscount = async (
    cartId: string | undefined,
    lineId: string,
    quantity: number,
    originalPrice: number,
    cart: CartApiQueryFragment | null
) => {
    try {
        // Obtener el total actual excluyendo la línea que estamos modificando
        const currentCartTotal = getTotalQuantity(cart, lineId);
        // Sumar la nueva cantidad para obtener el total real
        const totalQuantity = currentCartTotal + quantity;

        console.log('Cart quantities:', {
            currentCartTotal,
            newQuantity: quantity,
            totalQuantity
        });

        const discountPercentage = getDiscountPercentage(totalQuantity);

        if (discountPercentage > 0) {
            const discountedAmount = originalPrice * quantity * (discountPercentage / 100);
            const finalPrice = originalPrice - (originalPrice * (discountPercentage / 100));

            console.log('Discount calculation:', {
                cartId,
                lineId,
                currentCartTotal,
                newQuantity: quantity,
                totalQuantity,
                discountPercentage,
                discountedAmount,
                originalTotal: originalPrice * quantity,
                finalPrice
            });

            return {
                discountPercentage,
                finalPrice,
                discountedAmount
            };
        }

        return null;
    } catch (error) {
        console.error('Error calculating discount:', error);
        throw error;
    }
};
