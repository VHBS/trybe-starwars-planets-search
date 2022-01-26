import React, { useContext, useState } from 'react';
import StarContext from '../Context/StarContext';

export default function Inputs() {
  const { filterName, setFilterName,
    filterByNumericValues, setFiltroNumero } = useContext(StarContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueNumber, setValue] = useState(0);

  const handleChange = ({ target }) => setFilterName(target.value);

  const handleClick = () => {
    setFiltroNumero([...filterByNumericValues, {
      column,
      comparison,
      value: valueNumber,
    }]);
  };

  const columnArr = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ filterName }
        onChange={ (e) => handleChange(e) }
      />
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
          id="column"
          value={ column }
        >
          {columnArr.map((item, index) => (
            <option
              value={ item }
              key={ item + index }
            >
              {item}
            </option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
          data-testid="comparison-filter"
          id="comparison"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Filtro Número
        <input
          id="value-filter"
          data-testid="value-filter"
          type="number"
          value={ valueNumber }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Adicionar Filtro
      </button>
    </div>);
}
