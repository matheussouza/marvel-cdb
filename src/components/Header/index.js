import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadCharactersRequest } from '../../store/ducks/characters';

import logo from '../../assets/img/logo.png';

const Header = (props) => {
  const { loadCharactersRequest } = props;
  const [subject, setSubject] = useState('');

  return (
    <div className="fixed-top">
      <nav className="navbar" style={{ backgroundColor: '#F04B52' }} >
        <img src={logo} className="img-fluid" style={{ maxWidth: 60 }} alt="Marvel Logo" />
        <div>
          <div className="input-group" style={{ padding: 0, margin: 0, maxWidth: 220 }}>
            <input className="form-control" type="text" placeholder="Search by name..." onChange={(event) => setSubject(event.target.value)} />
            <div className="input-group-append">
              <button className="btn btn-danger" onClick={() => loadCharactersRequest(subject, 1)}><i className="fa fa-search" /></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  loadCharactersRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
