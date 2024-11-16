import {BackgroundVideo} from './BackgroundVideo';

export const Banner: React.FC = () => {
  return (
    <div className="relative h-[600px] md:h-[720px] sm:h-[920px] w-full">
      <BackgroundVideo
        videoUrl="https://res.cloudinary.com/dsxn0nfhf/video/upload/v1731623398/artic-grey-video-test_eishcg.mp4"
        className="h-full"
        muted
        loop
        autoPlay
      />
      <div className="absolute top-40 md:bottom-16 left-0 z-10  max-w-[980px] pl-10">
        <h1 className="font-bold text-white text-5xl md:text-7xl leading-[60px] md:leading-[83px]">
          Great things never came from comfort zones.
        </h1>
        <div className=" mt-2 md:mt-10">
          <button
            className="bg-white text-black py-3 rounded-lg px-10 font-medium text-base leading-5"
            type="button"
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};
