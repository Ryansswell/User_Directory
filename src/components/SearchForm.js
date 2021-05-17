import React from "react";

function SearchForm(props) {
    return (
        <form className="mb-5">
            <div className="form-group formGroup">
                <label htmlFor="search"></label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control searchBox"
                    placeholder="search for a user"
                    id="search"
                />
            </div>
        </form>

    );
}

export default SearchForm;