import {Image} from '@shopify/hydrogen';
import React from 'react';

type InstagramSectionProps = {
  logo: string;
  username: string;
  images: string[];
};

export const InstagramSection: React.FC<InstagramSectionProps> = ({
  logo,
  username,
  images,
}) => {
  return (
    <div className="w-full bg-[#fef8ef] p-10">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Section */}
        <div className="w-full md:w-1/3 bg-white p-5 rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </div>
          <p className="text-lg font-semibold">@{username}</p>
          <button className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            Follow Us on Instagram
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-32 sm:h-40 lg:h-48 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
