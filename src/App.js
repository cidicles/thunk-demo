import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './Actions/Index';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchPosts('reactjs'));
  }
  render() {
    const { gifs, updating } = this.props;
    return (
      <div className="App">
          { updating === true &&
            <div>
              Loading...
            </div>
          }
          { gifs.map((gif, i) => 
            <a className='item' href={gif.url} key={`gid-${i}`}>
              {gif.title}
            </a>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs,
    updating: state.updating
  };
}

export default connect(mapStateToProps)(App);