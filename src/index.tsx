import * as React from 'react';
import * as ReactDOM from 'react-dom';

// API KEY
// This will only work with your own API key, in a file at the speficied directory path
// More information on setting up a YouTube API key can be found at https://console.developers.google.com
import API_KEY from './API_KEY';

// App Components
import { SearchBar, VideoDetail, VideoListDetail, VideoList } from './components/index';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>)
 }

ReactDOM.render(<App />, document.querySelector('.container'))
