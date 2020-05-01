import React, { Component } from 'react'
import Header from '../../components/Header'
export default class NotFound extends Component {
 
  componentDidMount() {
    console.log('huydev')
    console.log(this.props)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>
          <p> Huy test </p>
        </div>
      </React.Fragment>
    )
  }
}
