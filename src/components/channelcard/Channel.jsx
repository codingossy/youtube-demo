import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../utils/data";

const Channel = ({ channelCard }) => {
  return (
    <div className="flex items-center justify-center my-14 w-full h-full  md:h-[320px] md:w-[350px] mx-auto container bg-gray-700">
      <div className="flex flex-col justify-center items-center ">
        <Link to={`/channel/${channelCard?.id?.channelId}`}>
          <img
            src={
              channelCard?.snippet?.thumbnails?.medium?.url ||
              demoProfilePicture
            }
            className="w-full h-44 object-cover"
            alt=""
          />
        </Link>

        <h4 className="font-semibold pt-4 text-gray-300">
          {channelCard?.snippet?.title}
        </h4>

        <div>
          {channelCard?.statistics?.subscriberCount && (
            <span className="text-sm text-gray-500 ">
              {parseInt(
                channelCard?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Channel;
