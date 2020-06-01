import React, { useState } from 'react';

import logo from '../../../assets/img/logo.png';

export default ({ history }) => {
  const [subject, setSubject] = useState('');

  return (
    <div className="fixed-top">
      <nav className="navbar app-nav">
        <img src={logo} onClick={() => history.push('/')} className="img-fluid app-nav-logo" alt="Marvel Logo" />
        <div>
          <div className="input-group app-container-reset app-search">
            <input className="form-control" type="text" placeholder="Search by name..." onChange={(event) => setSubject(event.target.value)} />
            <div className="input-group-append">
              <button
                className="btn btn-danger"
                onClick={() => {
                  history.push(`/?search=${subject}`);
                }}
              >
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
