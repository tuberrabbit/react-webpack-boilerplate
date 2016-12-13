'use strict';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getDependencies } from './action';
import MyTable from './MyTable';

import './app.scss';

class App extends Component {
    render() {
        return <MyTable {...this.props}></MyTable>;
    }

    componentDidMount() {
        this.props.getDependencies();
    }
}

const mapStateToProps = (state) => ({
    title: 'My react boilerplate table',
    items: state.appReducer.items,
    error: state.appReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    getDependencies: () => getDependencies(dispatch)
});

App.propTypes = {
    getDependencies: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);