import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import SeriesListItem from '../../components/SeriesListItem';
import Loader from '../../components/Loader';
import Intro from "../../components/Intro";

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    };

    onSeriesInputChange = (e) => {
        // React destroys event objects as soon as it can, so we have to store value in this const:
        const { value: seriesName = '' } = e.target;
        this.setState({ seriesName, isFetching: true });

        clearTimeout(this.STO);
        this.STO = setTimeout(() => { // sends requests 300 ms after user finished typing (unless he decides to type some more)
            fetch(`http://api.tvmaze.com/search/shows?q=${seriesName || ''}`)
                .then(response => response.json())
                .then(json => this.setState({ series: json, isFetching: false }));
        }, 300);

        console.log(e);
        console.log(seriesName)
    };

    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <Intro message="Here you can find all of your most loved series!" />

                <div className="ui input">
                    <input
                        placeholder="Search..."
                        value = { seriesName }
                        type="text"
                        onChange={this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No TV series have been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }
}

export default Series
