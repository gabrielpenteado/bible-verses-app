import { useVerse } from "@/hooks/useVerse";
import { Verse } from "@/interfaces/verseInterface";
import { Skeleton } from "./Skeleton";

export function VerseCard({ imageURL }: { imageURL: string }) {
  const { data, isFetching } = useVerse();
  //   console.log(imageURL);
  console.log(data);

  return (
    <>
      <img src={imageURL} alt="image" />
      <div className="absolute top-10 w-full flex justify-center items-center">
        <div className="flex-col justify-center align-middle">
          {isFetching && <Skeleton />}

          <h1 className="text-white pb-4 text-sm font-semibold md:text-3xl max-w-[250px] md:max-w-[350px] text-wrap text-left">
            {data?.text}
          </h1>

          <span className="text-white font-semibold md:text-3xl max-w-[250px] flex justify-end pr-4 md:max-w-[350px] ">
            {data?.book.name} {data?.chapter}:{data?.number}
          </span>
        </div>
      </div>
    </>
  );
}
