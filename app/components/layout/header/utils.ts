export function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

export const getUrl = (
  itemUrl: string,
  primaryDomainUrl: string,
  publicStoreDomain: string,
) => {
  if (
    itemUrl.includes('myshopify.com') ||
    itemUrl.includes(publicStoreDomain) ||
    itemUrl.includes(primaryDomainUrl)
  ) {
    return new URL(itemUrl).pathname;
  }
  return itemUrl;
};
