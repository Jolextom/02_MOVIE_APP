import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full py-10">
      <div
        className=" mx-auto h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#BE123C] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
