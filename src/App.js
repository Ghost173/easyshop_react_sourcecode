import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class App extends Component {
  render() {
    return (
      <div>
         <Button variant="success">Success</Button> 
         <Button variant="info"><i className='fa fa-home'></i></Button> 
      </div>
    )
  }
}

export default App
