import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div className=''>
      <FeedModal/>
      <FeedPhotos/>
    </div>
  )
}

export default Feed