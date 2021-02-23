import React, { Component } from 'react';
import Shepherd from 'shepherd.js';
import './App.css';
import Layout from './Layout';

class App extends Component {

  constructor(props) {
    super(props);

    let tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shadow-md bg-purple-dark',
        scrollTo: true,
      }
    });
    this.state = {
      tour: tour,
    };

    this.setSteps=this.setSteps.bind(this);
    this.startTour=this.startTour.bind(this);
    this.startTourRoot=this.startTourRoot.bind(this);
    this.next=this.next.bind(this);
  }

  setSteps(steps, callback){
    let tour=this.state.tour;
    tour.steps=[];
    tour.addSteps(steps);
    console.log(tour.steps);

    this.setState((p)=>({...p, tour: tour}), callback);
  }
  startTour(){
    this.state.tour.start();
  }
  next(){
    this.state.tour.next();
  }

  startTourRoot(){
    this.setSteps([{
      id: '1',
      text: '1',
      attachTo: {
        element: '.object5',
        on: 'left'
      },
      classes: 'example-step-extra-class',
      buttons: [
        {
          text: 'Next',
          action: this.next
        }
      ]
    }], ()=>{
      this.startTour();
    });
  }

  render(){
    return (
      <div style={{marginLeft: 350}}>
        <span className="object1">Object1</span> <button onClick={this.startTourRoot}>run main tutorial</button><br/>
        <Layout setSteps={this.setSteps} startTour={this.startTour} next={this.next} />
        <span className="object7">Object7</span><br/>
      </div>
    );
  }

}

export default App;
