import React from 'react';
import classes from './Person.css'

const person = (props) => {


    // const rnd = Math.random();

    // if(rnd >0.7){
    //     throw new Error('Something went wrong')
    // }
    console.log('Person.js render')
        return (
            // <div className={classes.Person} >
            [<p key="i1" onClick={props.click}>I am {props.name} and I am {props.age} years old</p>,
            <p key="i2" >{props.children}</p>,
            <input key="i3" type="text" onChange = {props.change} value={props.name} />]
            // </div>
        );


}

export default person;