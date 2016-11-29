import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import MainPlayer from './components/MainPlayer'
import Thumbnails from './components/Thumbnails'
import Description from './components/Description'
import {connect} from 'react-redux'
import {fetchVideos} from './actions'
import {changeMain} from './actions'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Search fetchVideos={this.props.fetchVideos}/>
        {this.props.mainVideo &&
          <div><MainPlayer video={this.props.mainVideo}/>}
              <Thumbnails changeMain={this.props.changeMain} thumbnails={this.props.thumbnails}/>
              <Description video={this.props.mainVideo}/>
          </div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {mainVideo: state.reducer.mainVideo, thumbnails: state.reducer.thumbnails}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideos: (searchTerm) => {
      dispatch(fetchVideos(searchTerm))
    },
    changeMain: (thumbnails, video) => {
      dispatch(changeMain(thumbnails, video))
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
