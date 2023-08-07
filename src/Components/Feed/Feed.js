import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div className=''>
      {modalPhoto &&  <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </div>
  )
}

export default Feed