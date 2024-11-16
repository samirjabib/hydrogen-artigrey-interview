import {Button} from '~/components/ui/Button';
import {BackgroundImage} from './BackgroundImage';

export const SecondBanner: React.FC = () => {
  return (
    <div className="relative h-[550px] sm:[600px] md:h-[750px] w-full">
      <BackgroundImage
        imageUrl="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/image-second-banner.png?v=1731778812"
        className="h-full w-full"
      />
      <div className="wrapper relative w-full h-full">
        <div className="absolute top-32 md:top-[287px]  left-0 z-10 max-w-[980px] px-4 md:px-10">
          <h2 className="font-bold text-white text-center sm:text-start text-4xl sm:text-5xl md:text-7xl sm:leading-[60px]]">
            Great things never came from comfort zones.
          </h2>
          <p className="text-white text-center sm:text-start text-base sm:text-lg md:text-xl sm:leading-[30px]">
            Innovative Engineering. Intelligent Design. Meet The Plunge All-I.
          </p>
          <div className="mt-10 w-full md:w-auto gap-3 flex  flex-col md:flex-row items-center justify-center md:justify-start">
            <Button variant="secondary" className="py-4 w-full md:w-auto">
              Take The Plunge
            </Button>
            <Button variant="outline" className="py-4 w-full md:w-auto">
              Dive Deeper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
