import * as React from 'react';

class SearchBar extends React.Component<any, any> {
  constructor (props: any) {
    super(props);

    this.state = { term: '' };
  }
  
	render() {
    return (
      <div>
        <input onChange={ e => this.setState({ term: e.target.value }) } />
        Value of the state: { this.state.term }
      </div>
    )
  }
}

export default SearchBar;
