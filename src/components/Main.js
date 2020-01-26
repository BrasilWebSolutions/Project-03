import React, { Component } from 'react'
import { FaPlus } from 'react-icons/fa'

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import './Main.css'

export default class Main extends Component{
//  constructor(props){
//    super(props)

//   this.state = {
//     newTask: '',
//   }
//   this.handleChange = this.handleChange.bind(this)
//  }

state = {
      newTask: '',

     }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

    render(){
      const { newTask, tasks } = this.state

      return(
        <div className="main">
          <h1>Standard Flutter</h1>
          {/* <h2>{newTask}</h2> */}

          <form action="#" className="form">
            <input onChange={this.handleChange} type="text" value={newTask} />
            <button type="submit"><FaPlus /></button>
          </form>

          <ul className="tasks">
            {tasks.map(task => (
              <li key={task}>{task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
              </li>
            ))}
          </ul>
        </div>

      )
    }
}
