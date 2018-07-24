import React from 'react';
import './styles/SeriesList.css';

const SeriesListItem = ({series}) => (
  <li className="four wide column" key={series.show.id}>
    <div>
      <ul>
        <li>{series.show.name}</li>
        <li>Language: {series.show.language}</li>
      </ul>
    </div>
  </li>
)

export default SeriesListItem;
