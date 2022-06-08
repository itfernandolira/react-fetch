import React from "react";

import LocalElement from "../components/LocalElement";

const LocalList = props => {

    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Tech</th>
                        <th scope="col">URL</th>
                        <th scope="col">Stars</th>
                        <th scope="col">Logo</th>
                    </tr>
                </thead>
                <tbody>
                    <LocalElement />
                </tbody>
            </table>
        </>
        );

}

export default LocalList;