import React, { Component } from 'react'
import request from '../../../../request'

export default class Reviews extends Component {
  constructor( props ) {
    super( props )

    this.state = { count: 'Retrieving...' }
  }

  componentDidMount() {
    request( 'GET', '/api/statistics/totalReviewsLastWeek' )
      .then( result => this.setState( result.json ))
  }

  render() {
    const { count } = this.state

    return (
      <div className="statistic blue">
        <div className="body">{count}</div>
        <div className="title">Total Code Reviews</div>
      </div>
    )
  }
}
