import React, { Component } from 'react';
import './App.css';
import Navabr from './components/TestItem'
import TestAdd from './components/TestAdd'

import * as actions from './redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class App extends Component {

    componentDidMount() {
        console.log('componentDidMount')
        // console.log(this.props.items);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        // console.log(prevProps, prevState);
    }

    render() {
        return (
            <div className="App">
                <h1>Salom do'stlar</h1>
                <Navabr
                    items={this.props.items}
                    deleteItem={this.props.actions.deleteItem}
                    curItem = {this.props.curItem}
                />
                <TestAdd curItem = {this.props.curItem} addItem={this.props.actions.addItem} editItem={this.props.actions.editItem} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        items: state.reducer.items,
        curItem: state.reducer.curItem
    };
}
/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...actions }, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
