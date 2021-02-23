import React, { Component } from "react";

class InnerComponent extends Component {

	constructor(props){
		super(props);

		this.startTourRoot=this.startTourRoot.bind(this);

		this.innerComps=[{class: "object4", content: "Object4"}, {class: "object5", content: "Object5"}];
	}

	startTourRoot() {
		this.props.setSteps(this.innerComps.map((item, idx)=>({
			id: idx+1,
			text: idx+1,
			attachTo: {
				element: `.${item.class}`,
				on: 'left'
			},
			classes: 'example-step-extra-class',
			buttons: [{
				text: 'Next',
				action: this.props.next,
			}]
		})), () => {
			this.props.startTour();
		});
	}

	render(){
		return (
			<div>
				<button onClick={this.startTourRoot}>run component tutorial</button><br/>
				{this.innerComps.map((item, idx)=>(
					<><span id={`child-${idx}`} className={item.class}>{item.content}</span><br/></>
				))}
			</div>
		);
	}

}

export default InnerComponent;