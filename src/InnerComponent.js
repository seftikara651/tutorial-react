import React, { Component } from "react";

class InnerComponent extends Component {

	constructor(props){
		super(props);

		this.startTourRoot=this.startTourRoot.bind(this);
	}

	startTourRoot() {
		this.props.setSteps([{
			id: '1',
			text: '1',
			attachTo: {
				element: '.object5',
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
				<span className="object4">Object4</span> <button onClick={this.startTourRoot}>run component tutorial</button><br/>
				<span className="object5">Object5</span><br/>
			</div>
		);
	}

}

export default InnerComponent;