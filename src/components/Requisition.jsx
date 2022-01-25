import { useEffect, useContext } from 'react';
import StarContext from '../Context/StarContext';

export default function Requisition() {
  const { setData } = useContext(StarContext);

  useEffect(() => {
    const fetchAPI = async () => {
      const starWarsFetch = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const starWarsJson = await starWarsFetch.json();
      setData(starWarsJson.results);
    };
    fetchAPI();
  }, [setData]);

  return null;
}
