import { useVerse } from "@/hooks/useVerse";
import { Skeleton } from "./Skeleton";

import { exportComponentAsJPEG } from "react-component-export-image";
import { useRef } from "react";

import downloadIcon from "../assets/download.svg";

export function VerseCard({ imageURL }: { imageURL: string }) {
  const { data, isFetching } = useVerse();
  //   console.log(imageURL);
  //   console.log(data);
  const divRef = useRef(null);

  return (
    <div className="relative">
      <div ref={divRef}>
        <img src={imageURL} alt="image" />
        <div className="absolute top-10 w-full flex justify-center items-center">
          <div className="flex-col justify-center align-middle">
            {isFetching && <Skeleton />}

            <h1 className="text-white pb-4 text-sm font-semibold md:text-2xl max-w-[250px] md:max-w-[350px] text-wrap text-start">
              {data?.text}
            </h1>

            <span className="text-white font-semibold md:text-3xl max-w-[250px] flex justify-end pr-4 md:max-w-[350px] ">
              {data?.book.name} {data?.chapter}:{data?.number}
            </span>
          </div>
        </div>
      </div>
      <button
        className={` right-2 md:right-2 md:w-16 w-11 bg-yellow-600 2xl:top-[425px] md:top-[330px] top-[250px] absolute rounded-xl`}
        onClick={() =>
          exportComponentAsJPEG(divRef, { fileName: "versiculo-do-dia.jpg" })
        }
        title="Download"
      >
        <img src={downloadIcon} alt="download" />
      </button>
    </div>
  );
}
