import { Icon } from "~/components/ui/Icon";

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
      <p className="text-gray-400 text-xs mt-2 flex items-center gap-1">
        <span className="sr-only">Made by</span>
        Made with <Icon name="heart" className="w-3 h-3" /> and{' '}
        <span aria-hidden="true"><Icon name="cup" className="w-3 h-3" /></span> by Arctic Grey
      </p>
    </div >
  );
};
