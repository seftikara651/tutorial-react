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
				element: '.object4',
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
				<button onClick={this.startTourRoot}>run component tutorial</button><br/>
				{[{class: "object4", content: "Object4"}, {class: "object5", content: "Object5"}].map((item)=>(
					<><span className={item.class}>{item.content}</span><br/></>
				))}
			</div>
		);
	}

}

export default InnerComponent;