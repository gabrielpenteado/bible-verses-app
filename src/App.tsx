import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import images from "./assets/images";
import { VerseCard } from "./components/VerseCard";

function App() {
  return (
    <div className="w-[100vw] bg-[url('./bible-wallpaper.jpg')] flex-col justify-center items-center bg-cover">
      <h1 className="text-center text-white pt-20 text-3xl md:text-5xl font-semi-bold underline">
        Versiculo do dia
      </h1>
      <div className="w-[400px] h-[100vh] m-auto flex justify-center items-center align-middle pb-64">
        <Carousel>
          <CarouselContent className="md:w-[500px] md:h-[500px] relative w-[300px] h-[300px]">
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <VerseCard imageURL={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
