import React from 'react';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-1">
      <LoadingIcon className="text-6xl animate-spin" />
      <span className="animate-pulse">Loading data...</span>
      <span className="opacity-0 animate-fadeIn">I'm still working on it</span>
    </div>
  );
}

export default Loading;
