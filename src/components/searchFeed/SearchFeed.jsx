import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataFromApi } from "../../utils/dataFromApi";
import Videos from "../videos/Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    dataFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen">
      <div className="text-center text-white ">
        search results for <span className="text-red-500">{searchTerm}</span>{" "}
        videos...
      </div>

      <div className="flex ">{<Videos videos={videos} />}</div>
    </div>
  );
};

export default SearchFeed;

// pulling this from the search in header
// using params
