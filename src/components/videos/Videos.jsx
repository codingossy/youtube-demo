import React from 'react'
import VideoCard from '../videocard/VideoCard'
import Channel from '../channelcard/Channel'
import Loader from '../loader/Loader'

const Videos = ( {videos}) => {

  console.log(videos);

  if(!videos?.length) return <Loader />;


  return (
    <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 place-items-center p-4 w-full'>
      {videos?.map((item, id) => (
        <div key={id} className='w-full'>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <Channel channelCard={item} />}
        </div>
      ))}
    </section>
  )
}

export default Videos