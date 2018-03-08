import * as React from 'react';

class SearchBar extends React.Component<any, any> {
  constructor (props: any) {
    super(props);

    this.state = { term: 'search video' };
  }
  
	render() {
    return (
      <div className="search-bar">
        <input
         value={this.state.term}
         onChange={ e => this.setState({ term: e.target.value }) } />
      </div>
    )
  }
}

export default SearchBar;
