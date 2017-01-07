import React, { Component } from 'react'
import Button from '../atoms/Button'
import Link from '../atoms/Link'
import Layout from '../molecules/Layout'
import InspectObject from '../utils/InspectObject'
import PersonalClaimedPrrrs from '../molecules/PersonalClaimedPrrrs'

export default class LoggedInHomePage extends Component {
  render(){
    console.log(prrrs)
    const { session, prrrs=[] } = this.props
    const claimedPrrr = prrrs.find( prrr => prrr.claimed_by === session.user.github_username )
    const topSection = claimedPrrr
      ? <div> <h3> Pending Review </h3>
          <PersonalClaimedPrrrs
            currentUser={session.user}
            prrrs={prrrs}
          />
      </div>
      : <div> <Button href="/all"> Claim a Prrr </Button> </div>
    return <Layout className="HomePage" session={session}>
      <div className="HomePage-SectionOne">
        <span className="HomePage-Text"> Welcome back {session.user.github_username} </span>
         {topSection}
      </div>
      <Link className="HomePage-Link"href='/all'> View All </Link>
    </Layout>
  }
}
