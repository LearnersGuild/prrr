import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import Link from '../../atoms/Link'
import Date from '../../atoms/Date'
import Button from '../../atoms/Button'
import GithubUsername from '../../atoms/GithubUsername'
import PrrrsTable from '../PrrrsTable'
import unclaimPrrr from '../../../actions/unclaimPrrr'
import completePrrr from '../../../actions/completePrrr'
import './index.sass'


export default class PersonalClaimedPrrrs extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    prrrs: PropTypes.array.isRequired,
  }

  completePrrr(prrr){
    completePrrr(prrr.id)
  }

  renderAdditionalHeaders(){
    return [
      <th key="claimed-by-current-user">Claimed</th>,
      <th key="actions">Actions</th>,
      <th key="completed">Completed</th>
    ]
  }

  renderAdditionalCells = (prrr) => {
    const { currentUser } = this.props
    const claimedByCurrentUser = prrr.claimed_by === currentUser.github_username

    return [
      <td key="claimed-by-current-user">
        <Date fromNow date={prrr.claimed_at} />
      </td>,
      <td key="actions">
        <Button onClick={_ => unclaimPrrr(prrr.id)} disabled={!claimedByCurrentUser}>
          Unclaim
        </Button>
      </td>,
      <td key="completed">
        <Button
          onClick={_=> this.completePrrr(prrr)}
          disabled={!claimedByCurrentUser}
        >
          Complete
        </Button>
      </td>,
    ]
  }

  render(){
    const prrrs = this.props.prrrs
      .filter(prrr => prrr.claimed_by === this.props.currentUser.github_username)

      return <PrrrsTable
        className="PersonalClaimedPrrrs"
        currentUser={this.props.currentUser}
        prrrs={prrrs}
        renderAdditionalHeaders={this.renderAdditionalHeaders}
        renderAdditionalCells={this.renderAdditionalCells}
      />
  }
}
