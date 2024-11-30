export const FooterBottom = ({ shopName }: { shopName: string }) => {
  return (
    <div
      className="border-t border-gray-200 flex  flex-col md:flex-row items-center justify-between py-4"
      role="contentinfo"
      aria-label="Footer bottom"
    >
      <p className="text-gray-500 text-sm">
        <span className="sr-only">Copyright</span>
        &#169; {shopName}. All right reserved.
      </p>
      <p className="text-gray-400 text-xs mt-2">
        <span className="sr-only">Made by</span>
        Made with <span aria-hidden="true">❤️</span> and{' '}
        <span aria-hidden="true">🛍️</span> by Arctic Grey
      </p>
    </div>
  );
};
