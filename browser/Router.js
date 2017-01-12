import React from 'react'
import SimpleReactRouter from 'simple-react-router'

// Pages
import NotFoundPage      from './components/pages/NotFoundPage'
import LoggedInAdminPage  from './components/pages/LoggedInAdminPage'
import LoggedInHomePage  from './components/pages/LoggedInHomePage'
import LoggedOutHomePage from './components/pages/LoggedOutHomePage'
import RequestReviewPage from './components/pages/RequestReviewPage'


export default class Router extends SimpleReactRouter {
  getRoutes(map, props){
    const { session } = props
    if (session.user){
      map('/',           LoggedInHomePage)
      map('/all',        LoggedInAdminPage)
      map('/request', RequestReviewPage)
    }else{
      map('/',        LoggedOutHomePage)
    }
    map('/:path*', NotFoundPage)
  }
}
