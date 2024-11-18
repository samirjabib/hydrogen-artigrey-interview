import type {MenuItem} from '../types';
import {processUrl} from '../utils';
import {ExternalLink} from './ExternalLink';
import {InternalLink} from './InternalLink';

export const MenuColumn = ({
  title,
  items,
  primaryDomainUrl,
  publicStoreDomain,
}: {
  title: string;
  items: MenuItem[];
  primaryDomainUrl: string;
  publicStoreDomain: string;
}) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="space-y-2">
      {items
        .filter((item) => item.url !== null) // Filtra elementos con URL válidas
        .map((item) => {
          const url = processUrl(item.url as string, [
            primaryDomainUrl,
            publicStoreDomain,
          ]);
          const isExternal = !url.startsWith('/');

          return (
            <li key={item.id}>
              {isExternal ? (
                <ExternalLink href={url}>{item.title}</ExternalLink>
              ) : (
                <InternalLink to={url}>{item.title}</InternalLink>
              )}
            </li>
          );
        })}
    </ul>
  </div>
);
