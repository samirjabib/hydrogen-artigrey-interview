import { Button } from '~/components/ui/Button';
import { BackgroundImage } from './BackgroundImage';

export const SecondBanner: React.FC = () => {
  return (
    <section
      className="wrapper pt-20 px-4 md:px-10"
      aria-labelledby="second-banner-heading"
    >
      <div className="relative h-[550px] sm:[600px] md:h-[750px] w-full">
        <BackgroundImage
          imageUrl="https://cdn.shopify.com/s/files/1/0917/5161/2725/files/image-second-banner.png?v=1731778812"
          className="h-full w-full object-cover md:object-contain"
          aria-label="Second banner background image"
        />
        <div className="relative w-full h-full">
          <div className="absolute top-32 md:top-[287px]  left-0 z-10 max-w-[980px] px-4 md:px-10">
            <h2
              className="font-semibold text-white text-center sm:text-start text-4xl sm:text-5xl leading-[50px]] mb-2"
              id="second-banner-heading"
            >
              The Next Generation is Here
            </h2>
            <p className="text-white text-center sm:text-start text-base leading-5 font-normal">
              Innovative Engineering. Intelligent Design. Meet The Plunge All-I.
            </p>
            <nav aria-labelledby="second-banner-links">
              <div className="mt-10 w-full md:w-auto gap-3 flex flex-col md:flex-row items-center justify-center md:justify-start">
                <Button
                  variant="secondary"
                  className="py-4 w-full md:w-auto"
                  aria-label="Take the plunge"
                >
                  Take The Plunge
                </Button>
                <Button
                  variant="outline"
                  className="py-4 w-full md:w-auto"
                  aria-label="Dive deeper"
                >
                  Dive Deeper
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};