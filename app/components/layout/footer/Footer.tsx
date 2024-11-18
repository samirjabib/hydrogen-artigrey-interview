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
            className="bg-[#F6F6F5] py-12"
            aria-labelledby="footer-heading"
          >
            <h2 id="footer-heading" className="sr-only">
              footer page
            </h2>
            <div className="wrapper px-4 md:px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-4">
                  <Newsletter />
                </div>
                <div className="md:col-span-5">
                  {footer?.menu && header.shop.primaryDomain?.url && (
                    <FooterMenu
                      menu={footer.menu}
                      primaryDomainUrl={header.shop.primaryDomain.url}
                      publicStoreDomain={publicStoreDomain}
                    />
                  )}
                </div>

                <div className="md:col-span-3">
                  <ContactInfo />
                </div>
              </div>
            </div>
            <FooterBottom shopName={header.shop.name} />
          </footer>
        )}
      </Await>
    </Suspense>
  );
}
