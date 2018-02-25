import * as React from 'react';

class VideoList extends React.Component<any, any>  {

  render() {
    return (
      <ul className="col-md-4">
        {this.props.videos.length}
      </ul>
    )
  }
}

export default VideoList;
