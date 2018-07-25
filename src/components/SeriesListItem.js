import React from 'react';
import './styles/SeriesList.css';


const SeriesListItem = ({series}) => {

  const imageUrl = series.show.image.medium;

  return (
    <li className="four wide column" key={series.show.id}>
      <div>
        <ul>
          <li>{series.show.name}</li>
          <li>Language: {series.show.language}</li>
          <img src={imageUrl}></img>
        </ul>
      </div>
    </li>
  );

}

export default SeriesListItem;
