import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { dataFromApi } from '../../utils/dataFromApi';
import Loader from '../loader/Loader';
import ReactPlayer from "react-player";
import Videos from '../videos/Videos';






const VideoDetails = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    dataFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

      // second call
    dataFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  // destructruting

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;





  return (
    <section className='min-h-screen w-full'>
        <div className='flex flex-col w-full'>

          {/* one */}
            <div className='p-2'>
              <div className='w-full sticky'>
                 <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                 <h4 className='font-semibold my-3'>{title}</h4>
                 <div className='flex items-center justify-between'>
                  <Link to={`/channel/${channelId}`}>
                    <h4>{channelTitle}</h4>
                  </Link>

                  <div className='flex items-center gap-x-3'>
                    <h4>{parseInt(viewCount).toLocaleString()} views</h4>
                    <h4> {parseInt(likeCount).toLocaleString()} likes</h4>
                  </div>
                 </div>
              </div>

            </div>


        {/* two */}
            <div className='my-14'>
              <Videos videos={videos} />
            </div>
        </div>
    </section>
  )
}

export default VideoDetails