import React, { Component } from "react";
import { connect } from 'react-redux';
import { action } from '../actions';

class ThisComponent extends Component {    

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

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, mapDispatchToProps)(ThisComponent);
