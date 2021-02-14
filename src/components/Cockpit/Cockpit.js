import React from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    let btnClasses = [classes.button];

    if(props.showPersons){
        btnClasses.push(classes.Red);
    }

    const assignedClasses =[];
    if(props.persons.length <=2){
    assignedClasses.push(classes.red);
    }
    if(props.persons.length<= 1){
    assignedClasses.push(classes.bold);
    }


    return (
        <div>
        <h1>Hi, This is the first React App</h1>
        <p className={assignedClasses.join(' ')}>This is inside the App component</p>
        <button className={btnClasses.join(' ')}
        alt ={props.showPersons}
        onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;