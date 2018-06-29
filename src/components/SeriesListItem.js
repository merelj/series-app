import React from 'react';
import './styles/SeriesList.css';

const SeriesListItem = ({series}) => (
  <li key={series.show.id}>
    {series.show.name}
  </li>
)

export default SeriesListItem;
