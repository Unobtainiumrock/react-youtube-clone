import * as React from 'react';
import * as ReactDOM from 'react-dom';

//API KEY
import API_KEY from '../API_KEY';

// App Components
import { SearchBar, VideoDetail, VideoListDetail, VideoList } from './components/index';
// import SearchBar from './components/search_bar';
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>)
 }

ReactDOM.render(<App />, document.querySelector('.container'))
