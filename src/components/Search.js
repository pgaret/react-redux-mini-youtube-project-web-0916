import React from 'react'

const Search = (props) => {

  const handleClick = (event) => {
    let searchTerm = event.currentTarget.parentElement.children[1].value
    document.getElementsByClassName("title")[0].style.cssText = "text-align: center; display: inline-block; margin: 0%; font-size: 2em; padding: 1%; width: 20%;"
    document.getElementsByTagName("input")[0].style.cssText = "text-align: center; text-align: center; font-size: 1em; margin: 0% 1%; padding: 1%; width: 40%;"
    document.getElementsByTagName("button")[0].style.cssText = "text-align: center; text-align: center; font-size: .75em; margin: 1% 1% 0% 1%; padding: 0% 1%;"
    props.fetchVideos(searchTerm)
  }

  return(
    <div>
      <label className="title">Youtube Clone</label>
      <input type="text" placeholder="Search the tubes"></input>
      <button onClick={handleClick.bind(props)}>Go</button>
    </div>
  )
}

module.exports = Search
