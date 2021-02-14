import React, { Component, useState } from 'react';
import { render } from 'react-dom';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import logo from './logo.svg';
import classes from './App.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
//import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'



class App extends Component  {

  state = {persons : [
    {id:1,name:"Kaustav 123456",age: 33 },
    {id:2,name:"Mridu",age: 29   },
    {id:3,name:"Chaitali",age: 52}
  ],
  otherState: 'some other value',
  showPersons: false
}

  switchNameHandler = (newName)=> {
    console.log("Switch Name Clicked!!");
    this.setState({
      persons : [
        {name:newName,age: 33 },
        {name:"Mridu",age: 29   },
        {name:"Chaitali Das",age: 52}
      ]}
    )
  
    //console.log(personState, otherState);
  }

  nameChangedHandler = (event, id)=> {
    console.log("Switch Name Clicked!!");
    let personindex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    let newPersons = [...this.state.persons];
    const newPerson = {...this.state.persons[personindex]};
    newPerson.name = event.target.value;

    newPersons[personindex]= newPerson;


    this.setState({
      persons : newPersons}
    )
  
    //console.log(personState, otherState);
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (index) => {
    let persons = this.state.persons.slice();
    persons.splice(index,1);
    this.setState({
      persons: persons
    })
  }

  render() {

    let persons = null;
    // let btnClasses = [classes.button];
if(this.state.showPersons){
  persons  = (

    <Persons  persons= {this.state.persons} changed={this.nameChangedHandler} clicked={this.deletePersonHandler}/>


    // <div>
    //   {
    //     this.state.persons.map((person,index) => {
    //       return <Person name={person.name} age={person.age} key={person.id}
    //       change ={(event) => this.nameChangedHandler(event, person.id)}
    //       click= {()=> this.deletePersonHandler(index)} />

                // return <ErrorBoundary key={person.id} ><Person name={person.name} age={person.age} 
                // change ={(event) => this.nameChangedHandler(event, person.id)}
                // click= {()=> this.deletePersonHandler(index)} /></ErrorBoundary>

  //       })
  //     }
  // </div>
  )

  // btnClasses.push(classes.Red);
}

// const assignedClasses =[];
// if(this.state.persons.length <=2){
//   assignedClasses.push(classes.red);
// }
// if(this.state.persons.length<= 1){
//   assignedClasses.push(classes.bold);
// }

    return (
      <div className={classes.App}>
        {/* <h1>Hi, This is the first React App</h1>
        <p className={assignedClasses.join(' ')}>This is inside the App component</p>
        <button className={btnClasses.join(' ')}
        alt ={this.state.showPersons}
        onClick={this.togglePersonHandler}>Toggle Persons</button> */}

        <Cockpit 
        persons={this.state.persons}
        showPersons={this.state.showPersons}
        clicked= {this.togglePersonHandler}
        />
        {persons}
      </div>

    );

  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is the first React App'));
  }
}


export default App;