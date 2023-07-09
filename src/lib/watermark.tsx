import { ImageResponse } from "next/server";

export function watermark(
  imagePath: string,
  size: {
    width: number;
    height: number;
  }
){

    return URL.createObjectURL( new ImageResponse(
        (
          <div tw="relative flex items-center justify-center">
            <img src={imagePath} alt={"dddd"} />
            <div tw="absolute flex bg-black opacity-50 inset-0 " />
            <div tw="absolute flex items-center top-2 w-full ">
              <p tw="text-white text-4xl flex font-bold m-5">{"ddddd"}</p>
              <p tw="text-indigo-200 text-xl flex font-bold m-5">{"authorName"}</p>
              <p tw="text-purple-200 text-xl flex font-bold m-5">{"date"}</p>
            </div>
          </div>
        ),
        size
      ));
}
