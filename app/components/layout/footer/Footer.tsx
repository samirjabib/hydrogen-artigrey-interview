import {Suspense} from 'react';
import {Await} from '@remix-run/react';
import {Newsletter} from './Newsletter';
import {ContactInfo} from './ContactInfo';
import {FooterMenu} from './footer-menu/FooterMenu';
import type {FooterProps} from './types';
import {FooterBottom} from './FooterBottom';

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer
            role="contentinfo"
            className="bg-[#F6F6F5] pt-20"
            aria-labelledby="footer-heading"
          >
            <div className="px-4 md:px-10 wrapper">
              <h2 id="footer-heading" className="sr-only">
                Footer Page
              </h2>

              <div className="grid grid-cols-1 gap-10 lg:flex lg:flex-row lg:justify-between pb-[106px] w-full lg:gap-[60px] 2xl:gap-[140px]">
                <Newsletter />
                {footer?.menu && header.shop.primaryDomain?.url && (
                  <div className="flex-1">
                    <FooterMenu
                      menu={footer.menu}
                      primaryDomainUrl={header.shop.primaryDomain.url}
                      publicStoreDomain={publicStoreDomain}
                    />
                  </div>
                )}
                <ContactInfo />
              </div>

              {/* Footer inferior */}
              <FooterBottom shopName={header.shop.name} />
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}
