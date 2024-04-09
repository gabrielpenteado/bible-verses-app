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
    <div className="w-[400px] h-[100vh] m-auto flex justify-center items-center align-middle">
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
  );
}

export default App;
