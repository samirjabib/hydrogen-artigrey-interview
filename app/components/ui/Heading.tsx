import React from 'react';
import {cn} from '~/utils/cn';

export type HeadingProps = {
  title: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  className?: string;
}


export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={cn(className)}>
      {subtitle && <h4 className="text mb-2 text-black">{subtitle}</h4>}
      <h2 className="title">{title}</h2>
    </div>
  );
};
