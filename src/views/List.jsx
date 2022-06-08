import React from "react";

import ListElement from "../components/ListElement";

const List = props => {

    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Country</th>
                        <th scope="col">Region</th>
                        <th scope="col">Subregion</th>
                        <th scope="col">Flag</th>
                    </tr>
                </thead>
                <tbody>
                    <ListElement />
                </tbody>
            </table>
        </>
    );
}

export default List;