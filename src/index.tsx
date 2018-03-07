import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as YTsearch from 'youtube-api-search';

// API KEY
// This will only work with your own API key, in a file at the speficied directory path
// More infrmation on setting up a YouTube API key can be found at https://console.developers.google.com
import API_KEY from './API_KEY';

// App Components
import { SearchBar, VideoDetail, VideoListDetail, VideoList } from './components/index';


// Top level of component tree. This is where the main app resides.
// All props are passed from here (top-down data flow)
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = { 
      videos: [],
      selectedVideo: null
     };

    //Populate state with a default video search
    YTsearch({ key: API_KEY, term: 'Composition Over Inheritance' }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
      </div>)
  }
 }

ReactDOM.render(<App />, document.querySelector('.container'))
 