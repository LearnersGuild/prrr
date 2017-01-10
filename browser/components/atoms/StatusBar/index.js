import React, { Component, PropTypes } from 'react'
import moment from 'moment'


//set Full Week  the total amount of time in a week in seconds
export default class StatusBar extends Component {
  static propTypes = {
    prrrs: PropTypes.array.isRequired
  }

  render(){
    const { prrrs } = this.props

    let currentTime = moment()
    const startOfWeek = currentTime.clone().startOf('isoweek')
    const endOfWeek = currentTime.clone().endOf('isoweek')
    const weekInSeconds = Math.round( (endOfWeek.valueOf() - startOfWeek.valueOf() )/1000 )


    let createTimeofPrrr = moment(prrrs[0].created_at) //long format - string of time


    let elapsedFromStartofWeek = (createTimeofPrrr.valueOf() - startOfWeek.valueOf())

    console.log('prrrs ', prrrs[0])
    console.log('created at time ', createTimeofPrrr   )
    console.log('Time from begin of week', elapsedFromStartofWeek/1000 );
    console.log('startOfWeek.value', startOfWeek.valueOf() );
    //
    // console.log('currentTime', currentTime)
    console.log('startOfWeek', startOfWeek)
    // console.log('endOfWeek', endOfWeek);
    // console.log('weekInSeconds', weekInSeconds);

    return <div className ='status-bar'>
      This is where our status bar will appear

    </div>


  }
}
