export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => (
  <a
    href={href}
    className="text-gray-600 hover:text-black transition-colors inline-block"
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);
