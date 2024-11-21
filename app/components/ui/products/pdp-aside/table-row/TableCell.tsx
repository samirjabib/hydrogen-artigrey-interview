export const TableCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => <td className={className}>{children}</td>;
