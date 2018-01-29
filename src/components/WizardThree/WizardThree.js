import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProp } from '../../ducks/reducer.js';

class WizardThree extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={(e) => this.props.updateProp("primaryHome")}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={(e) => this.props.updateProp("rentalProperty")}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={(e) => this.props.updateProp("secondaryHome")}>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        propToBeUsedOn: state.propToBeUsedOn
    }
}

let actions = {
    updateProp: updateProp
}

export default connect(mapStateToProps, actions)(WizardThree); 
