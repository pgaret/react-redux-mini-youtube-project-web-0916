import React from 'react'

const MainPlayer = (props) => {
  let srcString = "https://www.youtube.com/embed/" + props.video.id.videoId
  let value = <iframe className="mainVid" src={srcString}></iframe>

  return(
    <div>
      {value}
    </div>
  )
}

module.exports = MainPlayer
