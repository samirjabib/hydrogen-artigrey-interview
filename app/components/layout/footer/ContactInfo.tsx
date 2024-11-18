import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-6" aria-labelledby="contact-title">
      <h3 id="contact-title" className="text-xl font-semibold">
        Contact Us
      </h3>
      <address className="not-italic">
        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>
              <a
                href="tel:+1234567890"
                className="hover:underline"
                aria-label="Call us at +1 (234) 567-890"
              >
                +1 (234) 567-890
              </a>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>
              <a
                href="mailto:contact@example.com"
                className="hover:underline"
                aria-label="Email us at contact@example.com"
              >
                contact@example.com
              </a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <svg
              className="w-5 h-5 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>
              123 Business Street
              <br />
              Suite 100
              <br />
              San Francisco, CA 94111
            </span>
          </li>
        </ul>
      </address>
    </div>
  );
};
