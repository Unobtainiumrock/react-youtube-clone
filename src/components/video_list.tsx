import * as React from 'react';
import { VideoListItem } from './index'

class VideoList extends React.Component<any, any>  { 
  constructor(props: any) {
    super(props);

    this.state = {
      videos: []
    }

    this.addVideos = this.addVideos.bind(this);
  }

  addVideos() {
    this.setState({
      videos: this.props.videos.map((video) => {
        return <VideoListItem video={video} />
      })
    })
  }
  
  render() {
    this.addVideos();
    return (
      <ul className="col-md-4 list-group">
        {this.state.videos}
      </ul>
    )
  }
}

export default VideoList;
