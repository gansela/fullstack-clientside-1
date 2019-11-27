import React from 'react';
import axios from 'axios';
// import MovieCard from "../MovieCard/index"

const SpinnerPage = () => {
    return (
        <>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </>
    );
}

export default class CardsList extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = { searchField: "", searchFieldChange: true, movieList: [] }
    }

    changeToTrue = (searched: string): void => {
        this.setState({ searchFieldChange: true, searchField: searched, movieList: [] });
    }

    getApiResults = (searched: string): void => {
        axios.get(`http://www.omdbapi.com/?s=${searched}&type=movie&apikey=1fa83abf`)
            .then(res => {
                let movies = res.data;
                this.setState({ movieList: movies.Search, searchFieldChange: false });
            })
    }

    render() {
        const { movieList, searchField, searchFieldChange } = this.state
        const { searched } = this.props
        if (searched !== searchField) this.changeToTrue(searched)
        this.getApiResults(searched)
        if (searchFieldChange) return (<div><SpinnerPage /></div>)
        if (!movieList) return (<h1>NO Reasults</h1>)
        return (
            <div>
                {/* {movieList.map((item: any, index: number) => <MovieCard key={index} title={item.Title} pic={item.Poster} year={item.Year} />)} */}
            </div>
        )
    }
}