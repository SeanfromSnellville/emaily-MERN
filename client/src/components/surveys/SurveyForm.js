//SurveyForm shows a form for a user to add input 
import _ from 'lodash'; 
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'; 
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields'; 


class SurveyForm extends Component {
    
    //Helper function
    renderFields(){
        return _.map(formFields, ({label, name}) => {
            return (
                <Field component={SurveyField} type="text" key={name} label={label} name={name}/>
            );
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        CANCEL
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Submit
                        <i className="material-icons right">
                            done
                        </i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({name}) =>{
        if(!values[name]){
            errors[name] = 'Please provide appropriate value';
        }
    });

    return errors;
}


export default reduxForm({validate, form: 'SurveyForm', destroyOnUnmount: false})(SurveyForm);