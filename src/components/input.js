import React from "react";

const Input = ({placeholder}) => {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text"/>
                </label>
            </form>
        );
    }
};

export default Input;
