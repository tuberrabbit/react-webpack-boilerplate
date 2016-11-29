'use strict';
import React from 'react';
import './app.scss';

const App = ()=>(
    <table className="table-container">
        <caption className="table-caption">My react boilerplate table</caption>
        <thead className="table-head">
        <tr>
            <th>Dependency</th>
            <th>Version</th>
        </tr>
        </thead>
        <tbody className="table-body">
        <tr>
            <td>react</td>
            <td>15.4.1</td>
        </tr>
        <tr>
            <td>react-redux</td>
            <td>4.4.6</td>
        </tr>
        <tr>
            <td>react-router</td>
            <td>3.0.0</td>
        </tr>
        <tr>
            <td>webpack</td>
            <td>2.1.0-beta.27</td>
        </tr>
        <tr>
            <td>sass</td>
            <td>3.13.0</td>
        </tr>
        <tr>
            <td>eslint</td>
            <td>3.11.0</td>
        </tr>
        </tbody>
    </table>
);
export default App;