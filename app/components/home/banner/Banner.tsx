import {BackgroundVideo} from './BackgroundVideo';

export const Banner: React.FC = () => {
  return (
    <div className="relative h-[550px] sm:[720px] md:h-[920px] w-full">
      <BackgroundVideo
        videoUrl="https://res.cloudinary.com/dsxn0nfhf/video/upload/v1731623398/artic-grey-video-test_eishcg.mp4"
        className="h-full w-full"
        muted
        loop
        autoPlay
      />
      <div className="wrapper relative w-full h-full">
        <div className="absolute top-48 md:top-auto md:bottom-16 left-0 z-10 max-w-[980px] px-4 md:px-10">
          <h1 className="font-bold text-white text-center sm:text-start text-4xl sm:text-5xl md:text-7xl leading-[50px] sm:leading-[60px] md:leading-[83px]">
            Great things never came from comfort zones.
          </h1>
          <div className="mt-16 sm:mt-10 w-full md:w-auto">
            <button
              className="bg-white text-black py-3 rounded-lg px-10 font-medium text-base leading-5 w-full sm:w-auto"
              type="button"
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
