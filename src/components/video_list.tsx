import * as React from 'react';
import { VideoListItem } from './index'

class VideoList extends React.Component<any, any>  { 
  constructor(props: any) {
    super(props);

    this.state = {
      test: 5,
      videos: this.props.videos.map((video) => {
      return <VideoListItem video={video} />
    }) }
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.props.videos.map((video) => {
      return <VideoListItem video={video} />
    })}
      </ul>
    )
  }
}

export default VideoList;
