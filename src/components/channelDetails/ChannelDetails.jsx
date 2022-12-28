import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataFromApi } from "../../utils/dataFromApi";
import Channel from "../channelcard/Channel";
import Videos from "../videos/Videos";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await dataFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await dataFromApi(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <section className="w-full h-full">
      <div className="bg-gray-800/95 backdrop-blur-xl z-10">
        <Channel channelDetail={channelDetail} className="" />
        <h4 className="font-semibold pt-4 text-gray-300 text-center text-2xl my-4">
          {channelDetail?.snippet?.title}
        </h4>
      </div>

      <span className="flex ">
        <div>
          <Videos videos={videos} />
        </div>
      </span>
    </section>
  );
};

export default ChannelDetails;
