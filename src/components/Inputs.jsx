import React, { useContext } from 'react';
import StarContext from '../Context/StarContext';

export default function Inputs() {
  const { filter, setFilter, setRenderFilter } = useContext(StarContext);

  const handleChange = ({ target: { value } }) => {
    if (value !== '') {
      setRenderFilter(true);
      return setFilter(value);
    }
    setFilter(value);
    return setRenderFilter(false);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ filter }
        onChange={ (e) => handleChange(e) }
      />
    </div>);
}
