import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Jumbo from "./Jumbo";
import Results from "./Results";
import API from "../utils/API";

class ResultContainer extends Component {
    state = {
        search: "",
        user: [],
        results: [],
        first: 1,
        last: 1,
        email: 1
    };

    componentDidMount = async () => {
        const results = await this.randomUser();
        await this.setState({ results, employees: results });
    }



    randomUser = async () => {
        let results = [];
        await API.search()
            .then((res) => {
                results = res.data.results.map(result => {
                    return {
                        first: result.name.first,
                        last: result.name.last,
                        email: result.email,
                        date: result.dob.date,
                        picture: result.picture.large
                    }
                });
            })
            .catch((err) => console.log(err));
        return results;
    };

    handleSort = async (event) => {
        const column = event.target.getAttribute("data-name");
        let sorted = this.state.users.map(e => e);
        sorted.sort((a, b) => {
            if (a[column] > b[column]) {
                return 1 * this.state[column];
            } else if (a[column] < b[column]) {
                return -1 * this.state[column];
            }
            return 0;
        });

        this.setState({ users: sorted, [column]: this.state[column] * (-1) });
    };


    handleInputChange = async (event) => {
        const value = event.target.value;
        const users = await this.state.results.filter(users =>
            users.first.toLowerCase().includes(value.toLowerCase())
            || users.last.toLowerCase().includes(value.toLowerCase())
            || users.email.toLowerCase().includes(value.toLowerCase())
        );
        await this.setState({
            search: value,
            users
        });
    };



    render() {
        return (
            <div>
                <Jumbo />
                <SearchForm
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <Results
                    results={this.state.users}
                    handleSort={this.handleSort}
                />
            </div>
        );
    }
}

export default ResultContainer;