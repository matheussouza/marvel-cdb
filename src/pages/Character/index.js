import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadDetailsRequest, updateDetails } from '../../store/ducks/detail';
import Character from './component';

const mapStateToProps = state => ({
  charDetails: state.detail.data,
  loading: state.detail.loading,
});

const mapDispatchToProps = {
  loadDetailsRequest, updateDetails
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Character));
