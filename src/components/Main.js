import React, { Component } from 'react'

export default class Main extends Component{
  state = {
    newTask: '',
  }

  handleChange = (e) =>{
    this.setState({
      newTask: e.target.value
    })
  }

    render(){
      return(
        <div className="main">
          <h1>Standard Flutter</h1>
          <h2>{newTask}</h2>

          <form action="#">
            <input onChange={this.handleChange} type="text" />
            <button type="submit">Enviar</button>
          </form>
        </div>

      )
    }
}
