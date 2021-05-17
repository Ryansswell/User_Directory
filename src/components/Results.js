import React from "react";
const moment = require("moment");



function Results(props) {
    const users = props.results;
    return (
        <table className="table align-middle table-primary table-hover table-bordered">
            <thead>
                <tr>
                    <th> Images: </th>
                    <th data-name="first" onClick={props.handleSort}>First Name</th>
                    <th data-name="last" onClick={props.handleSort}>Last Name</th>
                    <th data-name="email" onClick={props.handleSort}>Email</th>
                    <th>Date of Birth</th>
                </tr>

            </thead>
            <tbody>
                {users.map(result => (
                    <tr key={`${result.first} ${result.last} ${result.date}`}>
                        <td className="d-flex justify-content-center">
                            <img
                                alt={`${result.first} ${result.last}`}
                                src={result.picture}
                                className="rounded-circle"
                            />
                        </td>
                        <td> {result.first} </td>
                        <td> {result.last} </td>
                        <td> {result.email} </td>
                        <td> {moment(result.date).format("MM-DD-YYYY")} </td>

                    </tr>
                ))}
            </tbody>

        </table>

    )
}

export default Results;