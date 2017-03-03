import Prrrs from './Prrrs'
import catImageSrc from './images/favicon.ico'
import state from './state'
import moment from 'moment'
//
// let lastNumPendingPrrrs = 0
// const updateNumFavicon = (numPendingPrrrs) => {
//   if (lastNumPendingPrrrs === numPendingPrrrs) return
//   lastNumPendingPrrrs = numPendingPrrrs
//   if (numPendingPrrrs === 0) {
//     const linkEl = document.getElementsByClassName('favicon')[0]
//     linkEl.href = cat
//   } else {
//     let canvas = document.createElement('canvas')
//     canvas.width = 16
//     canvas.height = 16
//
//     let context = canvas.getContext('2d')
//
//     let catHeadImage = document.createElement('img')
//     catHeadImage.src = catHead
//
//     // console.log("prrrs", claimed() )
//     //
//     // const startTime =
//     //
//     // const countDown = () => {
//     //   return startTime.diff(moment(), 'seconds')
//     // }
//
//
//
//     // const claimedPrrr = Prrrs.claimed()[0]
//     // console.log('claimedPrrr  ' , claimedPrrr)
//     // let deadline = moment(claimedPrrr.claimed_at).add(1, 'hour')
//     // const { deadline } = this.props
//     // const secondsRemaining = deadline.diff(moment(), 'seconds')
//     // console.log(secondsRemaining)
//
//     catHeadImage.onload = () => {
//       context.drawImage(catHeadImage, 0, 0)
//       context.fillStyle = "white";
//
//       // if ( claimedPrrr ) {
//       //   context.font = '12px sans-serif'
//       //   context.fillText()
//       // }
//       if ( numPendingPrrrs < 10 ) {
//         context.font = '12px sans-serif'
//         context.fillText(numPendingPrrrs, 4.5, 13.5)
//       } else if ( numPendingPrrrs < 100 ) {
//         context.font = '10px sans-serif'
//         context.fillText(numPendingPrrrs, 2.5, 13)
//       } else {
//         context.font = '8px sans-serif'
//         context.fillText(numPendingPrrrs, 1.25, 12)
//       }
//
//       const linkEl = document.getElementsByClassName('favicon')[0]
//       linkEl.href = context.canvas.toDataURL()
//     }
//   }
// }

state.subscribe(state => {
  const prrrs = new Prrrs({
    currentUser: state.session.user,
    prrrs: state.prrrs,
  })

  const claimedPrrr = prrrs.claimed()
  if (claimedPrrr){
    const deadline = moment(claimedPrrr.claimed_at).add(1, 'hours')
    renderCountdownFavicon(deadline)
  }else{
    renderPendingCountFavicon(prrrs.pending().length)
  }
})

let renderCountdownFaviconInterval
const renderCountdownFavicon = (deadline) => {
  const update = () => {
    const minutesRemaining = deadline.diff(moment(), 'minutes')
    if ( minutesRemaining >= 1 ){
      renderFavicon(minutesRemaining + 1, 'green')
    } else {
      const secondsRemaining = deadline.diff(moment(), 'seconds')
      renderFavicon(secondsRemaining, 'red')
    }
  }
  renderCountdownFaviconInterval = setInterval(update, 1000)
}

const renderPendingCountFavicon = (numberOfPendingPrrrs) => {
  clearInterval(renderCountdownFaviconInterval)
  renderFavicon(numberOfPendingPrrrs, 'white')
}

const renderFavicon = (text, color) => {
  loadCatImage(catImage => {
    let canvas = document.createElement('canvas')
    canvas.width = canvas.height = 16
    const canvas2D = canvas.getContext('2d')
    canvas2D.drawImage(catImage, 0, 0)
    renderText(canvas2D, text, color)
    const linkEl = document.getElementsByClassName('favicon')[0]
    linkEl.href = canvas2D.canvas.toDataURL()
  })
}

const loadCatImage = (callback) => {
  const catImage = new Image
  catImage.src = catImageSrc
  catImage.onload = function(){
    callback(catImage)
  }
}

const renderText = (canvas2D, text, color) => {
  text = text.toString()
  const length = text.length
  canvas2D.fillStyle = color
  if ( length < 2 ) {
    canvas2D.font = '12px sans-serif'
    canvas2D.fillText(text, 4.5, 13.5)
  } else if ( length < 3 ) {
    canvas2D.font = '10px sans-serif'
    canvas2D.fillText(text, 2.5, 13)
  } else {
    canvas2D.font = '8px sans-serif'
    canvas2D.fillText(text, 1.25, 12)
  }
}
