import React from "react";
import { Error, Home } from "../icons/icons";
import { useRouter } from "next/router";

const Error404 = () => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="flex flex-col w-full lg:w-1/2 h-1/2 lg:h-screen justify-evenly  bg-purple-900">
        <h2 className="text-center text-4xl lg:text-6xl font-bold">Error</h2>
        <div className="mx-auto error w-1/4 lg:w-1/2">
          <Error />
        </div>
        <h2 className="text-center text-2xl lg:text-4xl font-bold">
          Page not Found
        </h2>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 h-1/2 lg:h-screen justify-evenly  bg-purple-800">
        <div className="house flex flex-col mx-auto w-1/2  sm:w-1/4 lg:w-1/2">
          <Home />
          <div className="mx-auto my-4 w-3/4" onClick={() => push("es")}>
            <button className="w-full mx-auto text-center text-lg lg:text-2xl font-bold">
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
