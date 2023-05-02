import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="   px-2 mx-auto max-w-screen-sm  md:max-w-screen-md md:px-5 lg:max-w-screen-lg lg:px-10     sm:max-w-screen-xl   ">
      {children}
    </div>
  );
}
