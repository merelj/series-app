import React from 'react';
import './styles/SeriesList.css';


const SeriesListItem = ({series}) => {

  let imageUrl = series.show.image && series.show.image.medium;
  let rating = series.show.rating.average;
  let seriesPageUrl = "https://www.tvmaze.com/shows/" + series.show.id;

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
          <a href={seriesPageUrl}>
            <li><img src={imageUrl}></img></li>
            <li><h4 className="ui header">{series.show.name}</h4></li>
            <li>
              <div className="ui label">
                <i className="star icon"></i> {rating}
              </div>
            </li>
            <li>{series.show.type}</li>

            <li>Language: {series.show.language}</li>
          </a>
        </ul>
      </div>
    </li>
  );

}

export default SeriesListItem;
