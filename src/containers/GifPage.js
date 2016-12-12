import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchGif } from '../actions';

class GifPage extends Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.params.searchTerm}!
        </h1>
        {this.props.isFetching ?
          <div>
            Loading ...
            <br />
            <br />
            <img alt={''} style={{ width: 600, height: 400 }} />
          </div>
         :
          <div>
            Found this one...
            <br />
            <br />
            <img alt={'gif'} width="600" height="400" src={this.props.gif} />
          </div>
        }
        <br />
        <br />
        <button type="submit" onClick={this.props.searchClick} disabled={this.props.isFetching}>
          Refresh for another gif!
        </button>
        <br />
        <br />
        <button type="submit" onClick={this.props.backPage}>
          Return to Search Page
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gif: state.data.gif,
  isFetching: state.data.isFetching,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchClick: () => {
    dispatch(fetchGif(ownProps.params.searchItem));
  },
  load: () => {
    dispatch(fetchGif(ownProps.params.searchItem));
  },
  backPage: () => {
    browserHistory.push('/');
  },
});

GifPage.propTypes = {
  load: PropTypes.func,
  searchClick: PropTypes.func,
  backPage: PropTypes.func,
  params: PropTypes.shape({
    searchTerm: PropTypes.string,
  }),
  gif: PropTypes.string,
  isFetching: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(GifPage);
