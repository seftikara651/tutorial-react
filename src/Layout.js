import React, { Component } from "react";
import InnerComponent from "./InnerComponent";

class Layout extends Component {

	constructor(props){
		super(props);

		this.startTourRoot=this.startTourRoot.bind(this);
	}

	startTourRoot() {
		this.props.setSteps([{
			id: '1',
			text: '1',
			attachTo: {
				element: '.object2',
				on: 'left'
			},
			classes: 'example-step-extra-class',
			buttons: [{
				text: 'Next',
				action: this.props.next,
			}]
		},{
			id: '2',
			text: '2',
			attachTo: {
				element: '.object3',
				on: 'left'
			},
			classes: 'example-step-extra-class',
			buttons: [{
				text: 'Next',
				action: this.props.next,
			}]
		},{
			id: '3',
			text: '3',
			attachTo: {
				element: '.object4',
				on: 'left'
			},
			classes: 'example-step-extra-class',
			buttons: [{
				text: 'Next',
				action: this.props.next,
			}]
		},{
			id: '4',
			text: '4',
			attachTo: {
				element: '.object5',
				on: 'left'
			},
			classes: 'example-step-extra-class',
			buttons: [{
				text: 'Next',
				action: this.props.next,
			}]
		},{
			id: '5',
			text: '5',
			attachTo: {
				element: '.object6',
				on: 'left'
			},
			classes: 'example-step-extra-class',
			buttons: [{
				text: 'Next',
				action: this.props.next,
			}]
		}], () => {
			this.props.startTour();
		});
	}

	render(){
		return (
			<div>
				<button onClick={this.startTourRoot}>run layout tutorial</button><br/>
				<span className="object2">Object2</span><br/>
				<span className="object3">Object3</span><br/>
				<InnerComponent setSteps={this.props.setSteps} startTour={this.props.startTour} next={this.props.next} />
				<span className="object6">Object6</span><br/>
			</div>
		);
	}

}

export default Layout;