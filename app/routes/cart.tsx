import { Await, type MetaFunction, useRouteLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import type { CartQueryDataReturn } from '@shopify/hydrogen';
import { CartForm } from '@shopify/hydrogen';
import { json, type ActionFunctionArgs } from '@netlify/remix-runtime';
import type { RootLoader } from '~/root';
import { CartMain } from '~/components/cart/components/CartMain';

export const meta: MetaFunction = () => {
  return [{ title: `Hydrogen | Cart` }];
};

export async function action({ request, context }: ActionFunctionArgs) {
  const { cart } = context;
  console.log('Cart at start of action:', cart);

  const formData = await request.formData();
  const { action, inputs } = CartForm.getFormInput(formData);

  console.log('Action being performed:', action);
  console.log('Inputs received for action:', inputs);

  if (!action) {
    throw new Error('No action provided');
  }

  let status = 200;
  let result: CartQueryDataReturn;

  switch (action) {
    case CartForm.ACTIONS.LinesAdd:
      console.log('Adding lines:', inputs.lines);
      result = await cart.addLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesUpdate:
      console.log('Updating lines:', inputs.lines);
      result = await cart.updateLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesRemove:
      console.log('Removing lines:', inputs.lineIds);
      result = await cart.removeLines(inputs.lineIds);
      break;
    case CartForm.ACTIONS.DiscountCodesUpdate:
      console.log('Updating discount codes:', inputs.discountCode);
      const discountCodes = (inputs.discountCode ? [inputs.discountCode] : []) as string[];
      discountCodes.push(...inputs.discountCodes);
      result = await cart.updateDiscountCodes(discountCodes);
      break;
    case CartForm.ACTIONS.BuyerIdentityUpdate:
      console.log('Updating buyer identity:', inputs.buyerIdentity);
      result = await cart.updateBuyerIdentity({
        ...inputs.buyerIdentity,
      });
      break;
    default:
      throw new Error(`${action} cart action is not defined`);
  }

  console.log('Cart after action result:', result);

  const cartId = result?.cart?.id;
  const headers = cartId ? cart.setCartId(result.cart.id) : new Headers();
  const { cart: cartResult, errors } = result;

  const redirectTo = formData.get('redirectTo') ?? null;
  if (typeof redirectTo === 'string') {
    status = 303;
    headers.set('Location', redirectTo);
  }

  return json(
    {
      cart: cartResult,
      errors,
      analytics: {
        cartId,
      },
    },
    { status, headers },
  );
}

export default function Cart() {
  const rootData = useRouteLoaderData<RootLoader>('root');
  if (!rootData) return null;

  return (
    <div className="cart">
      <h1>Cart</h1>
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await
          resolve={rootData.cart}
          errorElement={<div>An error occurred</div>}
        >
          {(cart) => {
            return <CartMain layout="page" cart={cart} enhanceCollection={rootData.enhanceCollection} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}