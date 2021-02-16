import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component  {
  render(){

    
    console.log('Persons.js render')
    return this.props.persons.map((person,index) => {
      return <Person name={person.name} age={person.age} key={person.id}
      change ={(event) => this.props.changed(event, person.id)}
      click= {()=> this.props.clicked(index)} />
    })
  }
}


export default Persons;