import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as YTsearch from 'youtube-api-search';

// API KEY
// This will only work with your own API key, in a file at the speficied directory path
// More infrmation on setting up a YouTube API key can be found at https://console.developers.google.com
import API_KEY from './API_KEY';

// App Components
import { SearchBar, VideoDetail, VideoListDetail, VideoList } from './components/index';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = { videos: [] };

    YTsearch({ key: API_KEY, term: 'Composition Over Inheritance' }, (videos) => {
      this.setState({ videos });
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>)
  }
 }

ReactDOM.render(<App />, document.querySelector('.container'))
