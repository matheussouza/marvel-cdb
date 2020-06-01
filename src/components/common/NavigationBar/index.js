import React from 'react';

export default ({ page, total, search, changePage, pageSize = 20 }) => {
  if (!page || page === 0 )
    return <></>;

  return (
    <div className="d-flex app-navigation-bar-container" >
      <div className="d-flex">
        <button
          data-testid="previous-page-button"
          disabled={ page === 1 } 
          className="btn btn-danger app-navigation-button"
          onClick={() => changePage(search, page - 1)}
        >
          <i className="fa fa-chevron-left" />
        </button>
        <button
          data-testid="next-page-button"
          disabled={ total <= pageSize || page === Math.ceil(total / pageSize) }
          className="btn btn-danger app-navigation-button"
          onClick={() => changePage(search, page + 1)}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};
