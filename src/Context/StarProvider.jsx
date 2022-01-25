import PropTypes from 'prop-types';
import React, { useState } from 'react';

import StarContext from './StarContext';

export default function StarProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [renderFilter, setRenderFilter] = useState(false);

  const context = { data, setData, filter, setFilter, renderFilter, setRenderFilter };

  return (
    <StarContext.Provider value={ context }>
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;
