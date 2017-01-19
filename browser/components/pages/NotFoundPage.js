import React, { Component } from 'react'
import cat1 from '../../images/sadcat1.gif'
import cat2 from '../../images/sadcat2.gif'
import cat3 from '../../images/sadcat3.gif'
import cat4 from '../../images/sadcat4.gif'
import Link from '../atoms/Link'
import './NotFoundPage.sass'
const sadCats = [ cat1, cat2, cat3, cat4 ]

export default class NotFoundPage extends Component {

whichSadCat() {
  let sadCat = sadCats[ Math.floor( Math.random() * sadCats.length )]
  return sadCat
}

  render(){
    const sadCat = sadCats[ Math.floor( Math.random() * sadCats.length )]
    return <div className="NotFoundPage">
      <div className="header">
        <Link className="hompageLink" href="/"><h2>Home</h2></Link>
      </div>

      <div className="PageMain">
        <h1 className="NotFound">Page Not Found</h1>
        <h2>{this.props.location.pathname}</h2>
        <img src={ this.whichSadCat() } className='SadCat'/>
      </div>
      <div className="links">
        <div className="SendIssue">
          <h4 className="SomethingWrong">Think you got this error by mistake?</h4>
          <Link className="hompageLink" href="https://github.com/GuildCrafts/prrr/issues/new">Let us know!</Link>
        </div>
      </div>
    </div>
  }
}
