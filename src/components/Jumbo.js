import React from "react";


function Jumbo() {
    return (
        <div>
            <h2>
                Created by: Ryan Anderson
            </h2>
            <div className="jumbotron jumbotron-fluid text-dark jumbotron">
                <div className="container">
                    <h1 className="display-4 text-center"> User Directory </h1>
                    <p className="lead text-center"> Select by picture or search in the box below </p>
                </div>
            </div>
        </div>

    );
}

export default Jumbo;