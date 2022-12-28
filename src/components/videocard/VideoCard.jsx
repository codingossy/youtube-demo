import React from 'react'
import { Link } from 'react-router-dom'


import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../../utils/data";


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className='h-full w-full p-2 md:p-2'>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="" className='w-full h-44 object-cover' />
      </Link>

      <div className='bg-gray-900 w-full  h-48 md:h-36 p-2 text-gray-300'>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
          <h4 className='text-gray-50'>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 50)}</h4>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <p className='my-3 text-gray-500'>{snippet?.channelTitle || demoChannelTitle}</p>
        </Link> 
      </div>
    </div>
  )
}

export default VideoCard