import React, { Component } from 'react';
import '../App.css';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            city: 'Kathmandu',
        };
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=ff5d084541aac5b27ef0f46c449da8ca`)
            .then(res => res.json())
            .then(data => this.setState({ posts: data.list }));
    }

    changeCity = (e) => {
        this.setState({ city: e.target.value });
    }

    searchByCity = () => {
        this.fetchData();
    }


    render() {
        console.log(this.state.posts);
        console.log(this.state.city);
        return (
            <div>
                <h1 className="App">Weather	forecast</h1>
                <input className="searchField" list="browsers" name="browser" id="browser" type="search" placeholder="Search by city" value={this.state.city} onChange={this.changeCity} />
                <datalist id="browsers">
                    <option value="london" />
                    <option value="Mumbai" />
                    <option value="Delhi" />
                    <option value="Kathmandu" />
                    <option value="Kerela" />
                </datalist>
                <button onClick={this.searchByCity}>Search</button>
                {/* <h2>{this.state.posts.city.name}</h2> */}
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Humidity</th>
                        <th>Max Temp</th>
                        <th>Min Temp</th>
                        <th>Weather Description</th>
                        <th>Wind Speed</th>
                    </tr>
                    {this.state.posts.map((post, i) => (
                        <tr key={i}>
                            <td>{post.dt_txt}</td>
                            <td>{post.main.humidity}</td>
                            <td>{post.main.temp_max}</td>
                            <td>{post.main.temp_min}</td>
                            <td>{post.weather[0].description}</td>
                            <td>{post.wind.speed}</td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export default Post;
