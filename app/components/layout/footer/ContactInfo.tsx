import React from 'react';
import { Link } from '@remix-run/react';
import { Icon, IconName } from '~/components/ui/Icon';

interface SocialLink {
  name: string;
  href: string;
  iconName: IconName;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: '#',
    iconName: 'instagram'
  },
  {
    name: 'Twitter',
    href: '#',
    iconName: 'twitter'
  },
  {
    name: 'Facebook',
    href: '#',
    iconName: 'facebook'
  },
  {
    name: 'Youtube',
    href: '#',
    iconName: 'youtube'
  }
];


export const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h3 className="text-[#1B1F23] font-medium text-base leading-[22px] mb-4">
        Contact Us
      </h3>

      <div className="space-y-4">
        <h4 className="text-[#1B1F23CC]/80 text-base text-center lg:text-start">
          Let Us Help You
        </h4>
        <span className="text-[#1B1F23] text-2xl leading-7 font-bold">
          (888) 860-0572
        </span>
      </div>

      <div className="mt-[34px]">
        <h4 className="text-lg font-medium text-[#1B1F23] md:text-xl mb-4 leading-5">
          Connect With Us
        </h4>
        <div className="flex gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${item.name} page`}
            >
              <Icon name={item.iconName} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
