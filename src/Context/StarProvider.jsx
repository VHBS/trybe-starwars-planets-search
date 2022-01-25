import PropTypes from 'prop-types';
import React, { useState } from 'react';

import StarContext from './StarContext';

export default function StarProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <StarContext.Provider value={ { data, setData } }>
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;
