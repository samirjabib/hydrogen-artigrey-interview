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
            <div className="wrapper px-4 md:px-10">
              <h2 id="footer-heading" className="sr-only">
                footer page
              </h2>
              <div>
                <div className="flex flex-col lg:gap-[140px] lg:flex-row justify-between pb-[106px]">
                  <Newsletter />

                  {footer?.menu && header.shop.primaryDomain?.url && (
                    <FooterMenu
                      menu={footer.menu}
                      primaryDomainUrl={header.shop.primaryDomain.url}
                      publicStoreDomain={publicStoreDomain}
                    />
                  )}

                  <ContactInfo />
                </div>
                <FooterBottom shopName={header.shop.name} />
              </div>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}
