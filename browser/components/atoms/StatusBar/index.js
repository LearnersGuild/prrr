import React, { Component, PropTypes } from 'react'
import moment from 'moment'

export default class StatusBar extends Component {
  static propTypes = {
    prrrs: PropTypes.array.isRequired
  }

  render(){
    const { prrrs } = this.props

    let currentTime = moment().subtract(7, 'day')//NOTE: Remove subtract function before final PR --- console.log
    const startOfWeek = currentTime.clone().startOf('isoweek')
    const endOfWeek = currentTime.clone().endOf('isoweek')
    const weekInSeconds = Math.round( (endOfWeek.valueOf() - startOfWeek.valueOf() )/1000 )

    let prrrCreation = moment(prrrs[0].created_at) //long format - string of time


    let timeFromStartofWeekInSeconds = (input) => Math.round((input.valueOf() - startOfWeek.valueOf())/1000)

    const areaFromWeekStartToPrrrCreation = (input) => Math.round((timeFromStartofWeekInSeconds(prrrCreation)/weekInSeconds)*100)

    const areaFromWeekStartToPrrrClaimed = Math.round(( timeFromStartofWeekInSeconds(prrrClaimed)/weekInSeconds)*100)

    //Create a function that takes an input to create margin-left when we give it prrrCreation, prrrClaimed, prrrCompleted

    // Create a function that calculates the area between prrrClaimed and prrrCompleted

    //Display visually

    //Refactor : state of stuff?/ default properties/ link to PR in the status bar   


    console.log('prrrs ', prrrs[0])
    console.log('prrrCreation', prrrCreation)
    console.log('created at time ', prrrCreation)
    console.log('Time from begin of week', timeFromStartofWeekInSeconds(prrrCreation) )
    console.log('areaFromWeekStartToPrrrCreation', areaFromWeekStartToPrrrCreation)

    console.log('currentTime', currentTime)
    console.log('startOfWeek', startOfWeek)
    console.log('endOfWeek', endOfWeek)
    console.log('weekInSeconds', weekInSeconds)

    return <div className ='status-bar'>
      This is where our status bar will appear

    </div>


  }
}
