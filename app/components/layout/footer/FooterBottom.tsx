export const FooterBottom = ({ shopName }: { shopName: string }) => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} {shopName}. All rights reserved.
      </p>
      <p className="text-gray-400 text-xs mt-2">
        Made with ❤️ and 🛍️ by Arctic Grey
      </p>
    </div>
  );
};
