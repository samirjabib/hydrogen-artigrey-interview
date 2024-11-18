import React from 'react';
import {Button} from '~/components/ui/Button';

export const Newsletter: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 lg:max-w-[368px] pb-16 lg:pb-0 ">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Be a Part of Our Journey
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Welcome to UNCMFRT. Sign up for exclusive content and we&apos;ll send
          you 10% off.
        </p>
      </div>

      <form
        className="flex flex-col sm:flex-row gap-4 sm:gap-0"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex-grow">
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            required
            placeholder="Email Address"
            className="w-full h-12 px-4 border border-gray-300 rounded-md sm:rounded-r-none focus:outline-none"
            aria-describedby="email-description"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="h-12 w-full sm:w-auto px-6 rounded-md sm:rounded-l-none"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};
