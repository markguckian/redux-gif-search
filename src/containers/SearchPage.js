import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Search from '../components/Search';
import { updateName } from '../actions';

const mapStateToProps = state => ({
  name: state.data.name,
});

const mapDispatchToProps = dispatch => ({
  inputClick: (e) => {
    dispatch(updateName(e));
    browserHistory.push(e);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
