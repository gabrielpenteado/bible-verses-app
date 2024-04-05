import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import images from "./assets/images";

function App() {
  const slidesArray: string[] = [];

  const slidesGenerator = (n: number) => {
    for (let i = 0; i < n; i++) {
      slidesArray.push(images[Math.floor(Math.random() * (images.length - 1))]);
    }
  };

  slidesGenerator(33);

  return (
    <div className="w-[400px] h-[100vh] m-auto flex items-center align-middle">
      <Carousel>
        <CarouselContent className="w-[400px]">
          {slidesArray.map((image) => (
            <CarouselItem>
              <img src={image} alt="image" />
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
