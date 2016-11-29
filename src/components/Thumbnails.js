import React from 'react'

const Thumbnails = (props) => {

  const handleClick = (prop) => {
    props.changeMain(props.thumbnails, prop)
  }

  let thumbs = props.thumbnails.map((prop, i) => {
      return <img key={i} onClick={handleClick.bind(props, prop)} src={prop.snippet.thumbnails.default.url}></img>
  })

  return(
    <div>
      {thumbs}
    </div>
  )
}

module.exports = Thumbnails
