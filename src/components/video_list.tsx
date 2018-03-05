
import * as React from 'react';
import { VideoListItem } from './index'

const Fragment = React.Fragment;

class VideoList extends React.Component<any, any>  { 
  constructor(props: any) {
    super(props);
  }
  
  render() {
    let videos;

    if(this.props.videos.length) {
      videos = this.props.videos.map((video) => {
        return (
          <Fragment key={video.etag}>
            <VideoListItem video={video} />
          </Fragment>
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
