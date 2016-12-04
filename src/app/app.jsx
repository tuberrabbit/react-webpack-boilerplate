'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getDependencies } from './action';

import './app.scss';

const App = ({items, error, getDependencies})=> {
    getDependencies();
    return (
        <table className="table-container">
            <caption className="table-caption">My react boilerplate table</caption>
            <thead className="table-head">
            <tr>
                <th>Dependency</th>
                <th>Version</th>
            </tr>
            </thead>
            <tbody className="table-body">
            {items.length ? items.map((item, idx)=> (
                <tr key={`dependency-${idx}`}>
                    <td>{item.dependency}</td>
                    <td>{item.version}</td>
                </tr>
            )) : <tr><td colSpan="2">{error.message}</td></tr>}
            </tbody>
        </table>
    );
};

const mapStateToProps = (state) => ({
    items: state.appReducer.items,
    error: state.appReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    getDependencies: () => getDependencies(dispatch)
});

App.propTypes = {
    items: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired,
    getDependencies: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);