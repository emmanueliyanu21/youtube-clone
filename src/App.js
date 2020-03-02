import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components';
import youtube from './youtube/youtube'

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  componentDidMount() {
    this.handleSubmit('tech tology')
  }
  onVideoSelected = (video) => {
    this.setState({
      selectedVideo: video
    });
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.api('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBTHwD3oy0xhntLeWCC4v7_RadSHaBYZnI',
        q: searchTerm,
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.videos
    })

    console.log(this.videos);
  }

  render() {
    const { selectedVideo, video } = this.state
    return (
      <div className="App">
        <Grid justify="center" container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={this.selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelected={} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;


