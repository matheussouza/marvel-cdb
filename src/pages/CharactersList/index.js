import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loadCharactersRequest } from '../../store/ducks/characters';

import CharactersList from './component';

const mapStateToProps = (state) => ({
  loading: state.characters.loading,
  chars: state.characters.data,
  charSearch: state.characters.search,
  total: state.characters.total,
  page: state.characters.page,
  modified: state.detail.changed,
})

const mapDispatchToProps = { loadCharactersRequest }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharactersList));
