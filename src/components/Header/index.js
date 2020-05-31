import { connect } from 'react-redux';
import { loadCharactersRequest } from '../../store/ducks/characters';

import Header from './component';

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  loadCharactersRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
