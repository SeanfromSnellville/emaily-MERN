//This is Survey New. It shows Survey Form and Survey Form Review
import React, {Component} from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import {reduxForm} from 'redux-form';



class SurveyNew extends Component {

    state = {showFormReview: false}; 
    
    renderContent(){
        if(this.state.showFormReview){
            return <SurveyFormReview
                        onCancel={() => this.setState({showFormReview: false})}
                    />;
        }
        return <SurveyForm
                onSurveySubmit = {() => this.setState({ showFormReview: true})}
                />;
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({form: 'surveyForm'})(SurveyNew);