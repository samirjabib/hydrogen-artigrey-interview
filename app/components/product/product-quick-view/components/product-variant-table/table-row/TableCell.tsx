import { cn } from "~/lib/utils";

export const TableCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => <td className={cn("w-full", className)}>{children}</td>;
