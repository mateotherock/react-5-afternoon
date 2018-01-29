import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAddressOne, updateAddressTwo, updateAddressThree } from '../../ducks/reducer.js';

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e) => this.props.updateAddressOne(e.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(e) => this.props.updateAddressTwo(e.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(e) => this.props.updateAddressThree(e.target.value)}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        addressOne: state.addressOne,
        addressTwo: state.addressTwo,
        addressThree: state.addressThree
    }
}

let actions = {
    updateAddressOne: updateAddressOne,
    updateAddressTwo: updateAddressTwo,
    updateAddressThree: updateAddressThree
}

export default connect(mapStateToProps, actions)(WizardNine);