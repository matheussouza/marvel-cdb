import React from 'react';

const NavigationBar = ({ page, total, search, changePage, pageSize = 20 }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: 20 }}>
      <div style={{ display: 'flex' }}>
        <button
          disabled={ page === 1 } 
          className="btn btn-danger"
          style={{ marginRight: 20, width: 56 }}
          onClick={() => changePage(search, page - 1)}
        >
          <i className="fa fa-chevron-left" />
        </button>
        <button
          disabled={ total <= pageSize || page === Math.ceil(total / pageSize) }
          className="btn btn-danger"
          style={{ marginLeft: 20, width: 56 }}
          onClick={() => changePage(search, page + 1)}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;