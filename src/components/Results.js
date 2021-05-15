import React from "react";

function Results(props) {
    return (
        <div className="container-fluid">
            <table className="table">
                <ul>
                    <li> Tom </li>
                    <li> {props.name} </li>
                    <li> {props.cell} </li>
                    <li> {props.email} </li>
                    <li> {props.dob} </li>
                </ul>
            </table>
        </div>
    )
}

export default Results;