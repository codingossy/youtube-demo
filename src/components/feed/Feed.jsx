import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataFromApi } from "../../utils/dataFromApi";
import Sidebar from "../sidebar/Sidebar";
import Videos from "../videos/Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null)
    // getting catgeries
    dataFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data?.items));
  }, [selectedCategory]);

  return (
    <section className="flex flex-col md:flex-row w-full">
      <div className=" ">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="h-full md:ml-56 p-3 w-full">
        <h1 className="capitalize flex gap-x-2 font-semibold">
          <span className="text-red-500 font-semibold">{selectedCategory}</span>
          <span>videos</span>
        </h1>
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default Feed;
