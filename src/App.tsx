import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { images } from "./assets/images";
import { VerseCard } from "./components/VerseCard";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="w-full h-[100vh] justify-center bg-[url('./assets/bible-wallpaper.jpg')] flex-col items-center bg-cover">
      <img src={logo} className="w-[300px] md:w-[500px] pt-4 pb-6 m-auto" />
      <div className="border-[6px] border-double w-fit m-auto flex justify-center items-center align-middle">
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
