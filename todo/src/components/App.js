import React, { Component } from "react";
import { connect } from 'react-redux';
import { action } from '../actions';

class App extends Component {    

    // Add functions if needed

    render() {
        // use this.props.stateItem
        return (
            <div className='main'>
                Display State Item: {this.props.stateItem} 
            </div>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. 

const mapStateToProps = (state) => {
    return {
        stateItem: state.stateItem
    };
};

// The mapDispatchToProps is used to dispatch the actions
const mapDispatchToProps = { 
    action: action
}

// The connect function makes this component aware of the rest of the redux architecture. 
export default connect(mapStateToProps, mapDispatchToProps)(App);
