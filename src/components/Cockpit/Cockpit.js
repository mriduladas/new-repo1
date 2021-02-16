import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    useEffect(()=> {
        console.log("Cockpit.js ");
        //HTTP Request...
    })

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
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is inside the App component</p>
        <button className={btnClasses.join(' ')}
        alt ={props.showPersons}
        onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;