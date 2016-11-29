import React from 'react'

const Description = (props) => {

  return (
    <div className="description">
      <p className="videoTitle">{props.video.snippet.title}</p>
      <p className="channel">{props.video.snippet.channelTitle}</p>
    </div>
  )
}

module.exports = Description
