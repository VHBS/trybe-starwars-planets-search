import PropTypes from 'prop-types';
import React, { useState } from 'react';

import StarContext from './StarContext';

export default function StarProvider({ children }) {
  // Salva a requisição no estado
  const [data, setData] = useState([]);

  // Filtra o arquivo data salvo em outro estado.
  const [filterName, setFilterName] = useState('');

  // Number filters
  const [filtroNumero, setFiltroNumero] = useState([]);

  const context = {
    data,
    setData,
    filterName,
    setFilterName,
    filterByNumericValues: filtroNumero,
    setFiltroNumero,
  };

  return (
    <StarContext.Provider value={ context }>
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;
