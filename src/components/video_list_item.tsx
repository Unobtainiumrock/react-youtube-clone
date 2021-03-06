import * as React from 'react';

class VideoListItem extends React.Component<any, any> {
  // constructor(video: any) {
  //   super(video);
  // }

  render(){
    
    const {video, onVideoSelect} = this.props;
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
      <li onClick={() => onVideoSelect(video) } className="list-group-item">
        <div className="video-list media">

          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>

          <div className="media-body">
            <div className="media-heading">
              {video.snippet.title}
            </div>
            
          </div>

        </div>
      </li>
    ) 
  }
} 

export default VideoListItem;
