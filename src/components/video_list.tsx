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
    let dog = 7;
    console.log(dog);
    if(this.props.videos.length) {
      videos = this.props.videos.map((video) => {
        return <VideoListItem video={video} />
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
