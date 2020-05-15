import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import data from './data'
import Context from './Context'
import Transition from './Transition'


class App extends Component{
  constructor(){
      super()


      this.state = {
        people: data,
        currentValue: 0
      }
      this.goForward = this.goForward.bind(this);
      this.goBack = this.goBack.bind(this);

  }

  goForward (){
    if(this.state.currentValue === data.length -1){
    this.setState({currentValue: 0})
    }
    else{
      this.setState({currentValue: this.state.currentValue+1})
    }
  }
  goBack(){
    if(this.state.currentValue === 0){
      this.setState({currentValue: data.length -1})
    }else{
    this.setState({currentValue: this.state.currentValue-1})}
  }
  render(){
    
    const people = this.state.people.map((e, i) => {
      if(i===this.state.currentValue)
      {return <div><Context people={e}/></div>}})
    
      return (<div>
        <Nav/>
      <div className ="main-body">
      
          <div className ="center-stage">
            <div className="center-box">
            <h2>{this.state.currentValue+1}/25</h2>
              {/* <Context/> */}
              {people}

            </div>
            {/* <div className ="txt-under"> */}
            <button className ="first" onClick={this.goBack}>Previous</button>
            <button className ="second" onClick={this.goForward}>Next ></button>

        {/* </div> */}
              {/* <Transition/> */}
            
          </div>
        </div>
       </div>  ) }
}

export default App;
