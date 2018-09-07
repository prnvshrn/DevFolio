import React, {Component} from 'react';
import {Modal, Button, FormGroup, form, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class ReportComponent extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			value:'',
			user_data:[]
		};
		this.handleChange = this.handleChange.bind(this);
		this.processState = this.processState.bind(this);
	}

	handleChange(e){
		this.setState({ value: e.target.value });
	}

	processState(){
		 fetch('/info/' + this.state.value)
      	.then(res => res.json())
      	.then(temp => console.log(temp));
	}

	render(){
		return(
			<form>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            placeholder="Enter GitHub username"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="button" onClick={this.processState}>Get Info</Button>
      </form>
		);
	}
}

export default ReportComponent;