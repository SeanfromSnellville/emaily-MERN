//SurveyFormReview shows users form inputs for review
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux'; 
import formFields from './formFields'; 
import * as actions from '../../actions'; 
import {withRouter} from 'react-router-dom';


const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

    const reviewFields = _.map(formFields,({name, label}) =>{
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })

    return(
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
                Back
            </button>
            <button className="green btn-flat right white-text" onClick= {()=> submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStatetoProps(state){
    return {formValues: state.form.SurveyForm.values}; 
}
export default connect(mapStatetoProps, actions)(withRouter(SurveyFormReview));