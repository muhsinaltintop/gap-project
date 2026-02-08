import React from "react";
import PosterCard from "../_components/PosterCard";
import posters from "../../public/_mocks_/posters.json";

const page = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-primary">Posters</h1>
        
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posters.slice(0, 10).map((poster) => (
          <PosterCard key={poster.id} poster={poster} />
        ))}
      </div>
    </div>
  );
};

export default page;
