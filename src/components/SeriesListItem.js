import React from 'react';
import './styles/SeriesList.css';


const SeriesListItem = ({series}) => {

  let imageUrl = series.show.image.medium;
  let rating = series.show.rating.average;

  if (rating == null) {
    rating = "No rating";
  }

  if (imageUrl == null) {
    imageUrl = "#";
  }

  return (
    <li className="four wide column" key={series.show.id}>
      <div>
        <ul>
          <li><img src={imageUrl}></img></li>
          <li><h4 className="ui header">{series.show.name}</h4></li>
          <li>
            <div class="ui label">
              <i class="star icon"></i> {rating}
            </div>
          </li>
          <li>{series.show.type}</li>

          <li>Language: {series.show.language}</li>
        </ul>
      </div>
    </li>
  );

}

export default SeriesListItem;
