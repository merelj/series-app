import React from 'react';
import './styles/SeriesList.css';
import SeriesListItem from './SeriesListItem.js';

const SeriesList = ({list}) => {
  return (
    <div>
      <ul className="series-list ui grid">
        {list.map((series) => (
          <SeriesListItem key={"series-" + series.show.id} series={series} />
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;
