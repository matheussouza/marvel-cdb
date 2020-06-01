import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadSeriesRequest } from '../../store/ducks/series';
import { loadDetailsRequest } from '../../store/ducks/detail';

import CharactersSeries from './component';

const mapStateToProps = (state) => ({
  series: state.series.data,
  loading: state.series.loading,
  page: state.series.page,
  total: state.series.total,
  character: state.detail.data
})

const mapDispatchToProps = { loadSeriesRequest, loadDetailsRequest }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharactersSeries));
