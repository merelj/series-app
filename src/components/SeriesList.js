import React from 'react';
import './styles/SeriesList.css';
import SeriesListItem from './SeriesListItem.js';

// const SeriesListItem = ({series}) => (
//   <li key={series.show.id}>
//     {series.show.name}
//   </li>
// )

const SeriesList = ({list}) => {
  return (
    <div>
      <ul className="series-list">
        {list.map((series) => (
          <SeriesListItem key={"series"} series={series} />
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;
