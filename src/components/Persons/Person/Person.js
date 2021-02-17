import React,{Fragment} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';

const person = (props) => {


    // const rnd = Math.random();

    // if(rnd >0.7){
    //     throw new Error('Something went wrong')
    // }
    console.log('Person.js render')
        return (
            // <div className={classes.Person} >
            <Fragment>
            <p  onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
            <p  >{props.children}</p>
            <input  type="text" onChange = {props.change} value={props.name} />
            </Fragment>
            // </div>
        );


}

export default person;