import React from 'react';
import './styles/SeriesList.css';

const SeriesListItem = ({series}) => (
  <li className="four wide column" key={series.show.id}>
    {series.show.name}
  </li>
)

export default SeriesListItem;
