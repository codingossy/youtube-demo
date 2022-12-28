import React from 'react'
import ScrollToTop from '../utils/ScrollToTop'
import { Routes, Route} from 'react-router-dom'
import Feed from '../components/feed/Feed'
import VideoDetails from '../components/videodetails/VideoDetails'
import ChannelDetails from '../components/channelDetails/ChannelDetails'
import SearchFeed from '../components/searchFeed/SearchFeed'


const RouthPath = () => {
  return (
    <ScrollToTop>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/channel/:id' element={<ChannelDetails />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
    </ScrollToTop>
  )
}

export default RouthPath