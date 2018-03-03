import * as React from 'react';
import { VideoListItem } from './index'

class VideoList extends React.Component<any, any>  { 
  constructor(props: any) {
    super(props);
    
    this.state = {
      videos: []
    }
  }
  


  render() {
    let videos;

    if(this.props.videos.length) {
      videos = this.props.videos.map((video) => {
        return (
          <React.Fragment>
          <VideoListItem video={video} />
          </React.Fragment>
        )
      })
    }

    return (
      <ul className="col-md-4 list-group">
        {videos}
      </ul>
    )
  }
}

export default VideoList;
