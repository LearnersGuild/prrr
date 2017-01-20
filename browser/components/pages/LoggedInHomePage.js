import React, { Component } from 'react'
import Button from '../atoms/Button'
import Layout from '../molecules/Layout'
import InspectObject from '../utils/InspectObject'
import PendingPrrrs from '../molecules/PendingPrrrs'
import MyRequestedPrrrs from '../molecules/MyRequestedPrrrs'
import MyReviewedPrrrs from '../molecules/MyReviewedPrrrs'
import ClaimedPrrrs from '../molecules/ClaimedPrrrs'
import PersonalClaimedPrrrs from '../molecules/PersonalClaimedPrrrs'

export default class LoggedInHomePage extends Component {
  render(){
    const { session, prrrs=[] } = this.props
    console.log('user-->', session.user.github_username)
    return <Layout className="HomePage" session={session}>
      <h1>
        <span>{session.user.github_username}'s</span>
        &nbsp;
        prrrs:
      </h1>
      <PersonalClaimedPrrrs
        currentUser={session.user}
        prrrs={prrrs}
      />

      <h1>Pull Requests Waiting For Review:</h1>
      <PendingPrrrs
        currentUser={session.user}
        prrrs={prrrs}
      />

      <h1>Claimed Pull Requests:</h1>
      <ClaimedPrrrs
        currentUser={session.user}
        prrrs={prrrs}
      />
      <h1>My Requested Prrrs</h1>
      <MyRequestedPrrrs
        currentUser={session.user}
        prrrs={prrrs}
      />
      <h1>My Reviewed Prrrs</h1>
        <MyReviewedPrrrs
          currentUser={session.user}
          prrrs={prrrs}
      />
    </Layout>
  }
}
