import "./App.css";
import Person from "./Person/Person";
import { Component } from "react";
class App extends Component {
  state = {
    persons: [
      {  id:'abc1' , name: "Yashwin", age: 22 },
      {  id:'bcd1' , name: "Suraj", age: 24   },
      {  id:'def1' , name: "Preeti",  age: 23 }
    ],
    otherState: "some other state",
    showPersons: false
  };

  deletePersonHandler = (index) =>  {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }

  nameChangeHandler  = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
  
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    
    // const style = {
    //   backgroundColor:'green',
    //   color: 'white',
    //   font:'inherit',
    //   border:'1px solid blue',
    //   padding:'8px',
    //   cursor:'pointer',
    //   ':hover':{
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons =  null;

    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event,person.id)} />
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color:'black'
      // }
    }

    const classes = [];
    if(this.state.persons.length <=2 )
    {
      classes.push('red');
    }
    if(this.state.persons.length <= 1)
    {
      classes.push('bold');
    }

    return (
      <div className="App">
          <h1>Hi this is react App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button className="button"  onClick={this.togglePersonsHandler} >Toggle Persons</button> 
          {persons}
      </div>
    );
  }
}

export default App;
