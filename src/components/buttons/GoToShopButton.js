import React from 'react';
import { useHistory } from 'react-router-dom';

export const GoToShopButton = (props) => {
  const history = useHistory();

  function cartClick(e) {
    e.stopPropagation();
    history.push('/');
  }

  return (
    <div>
      <button className="button-modal" onClick={(e) => cartClick(e)}>
        Return to shop!
      </button>
    </div>
  );
};
