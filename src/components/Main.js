import React, { Component } from 'react'

export default class Main extends Component{
    constructor(props){
      super(props)

      this.state = {
        novaTarefa: '',
      }
    }

    render(){
      return(
        <div className="main">
          <h1>Standard Flutter</h1>

          <form action="#">
            <input onChange={this.inputPlus} type="text" />
            <button type="submit">Enviar</button>
          </form>
        </div>

      );
    }
}
