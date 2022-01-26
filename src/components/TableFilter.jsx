import React, { useContext, useEffect, useState } from 'react';
import StarContext from '../Context/StarContext';

export default function TableFilter() {
  const { data, filterName, filterByNumericValues } = useContext(StarContext);
  const [filterDone, setFilterDone] = useState([]);

  useEffect(() => {
    const filterNumeric = () => {
      if (filterByNumericValues.length === 0) {
        setFilterDone(data);
      } else {
        filterByNumericValues.forEach((filtro) => {
          const teste = data
            .filter((item) => {
              if (filtro.comparison === 'maior que') {
                return Number(item[filtro.column]) > Number(filtro.value);
              } if (filtro.comparison === 'menor que') {
                return Number(item[filtro.column]) < Number(filtro.value);
              }
              return Number(item[filtro.column]) === Number(filtro.value);
            });
          setFilterDone(teste);
        });
      }
    };

    // Number(filtro.value)
    // > Number(item[filtro.column]

    filterNumeric();
  }, [data, filterByNumericValues]);

  return (
    <tbody>
      { filterDone.filter((item) => item.name.includes(filterName))
        .map((item, index) => (
          <tr key={ item.name + index }>
            <td>{item.name}</td>
            <td>{item.rotation_period}</td>
            <td>{item.orbital_period}</td>
            <td>{item.diameter}</td>
            <td>{item.climate}</td>
            <td>{item.gravity}</td>
            <td>{item.terrain}</td>
            <td>{item.surface_water}</td>
            <td>{item.population}</td>
            <td>{item.films}</td>
            <td>{item.created}</td>
            <td>{item.edited}</td>
            <td>{item.url}</td>
          </tr>
        ))}
    </tbody>
  );
}
