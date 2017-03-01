import Prrrs from './Prrrs'
import cat from './images/favicon.ico'
import catHead from './images/favicon_head.ico'
import state from './state'

function loadCatImage(callback){
  var catImg = document.createElement('img')
  catImg.src = catHead
  catImg.onLoad = function(){
    callback(catImg)
  }
}



let lastNumPendingPrrrs = 0
const updateNumFavicon = (numPendingPrrrs) => {
  if (lastNumPendingPrrrs === numPendingPrrrs) return
  lastNumPendingPrrrs = numPendingPrrrs
  if (numPendingPrrrs === 0) {
    const linkEl = document.getElementsByClassName('favicon')[0]
    linkEl.href = cat
  } else {

    loadCatImage( (catHeadImage) => {
      let canvas = document.createElement('canvas')
      canvas.width = 16
      canvas.height = 16

      let context = canvas.getContext('2d')

      context.drawImage(catHeadImage, 0, 0)
      context.fillStyle = "white";


      if ( numPendingPrrrs < 10 ) {
        context.font = '12px sans-serif'
        context.fillText(numPendingPrrrs, 4.5, 13.5)
      } else if ( numPendingPrrrs < 100 ) {
        context.font = '10px sans-serif'
        context.fillText(numPendingPrrrs, 2.5, 13)
      } else {
        context.font = '8px sans-serif'
        context.fillText(numPendingPrrrs, 1.25, 12)
      }

      const linkEl = document.getElementsByClassName('favicon')[0]
      linkEl.href = context.canvas.toDataURL()
    })

    const claimedPrrr = prrrs.claimed()

      if( claimedPrr ) {
        const { deadline } = this.props
        const secondsRemaining = deadline.diff(moment(), 'seconds')
        const className = `Timer ${secondsRemaining > 0 ? '' : 'Timer-out-of-time'}`
        return <div className={className}>
          <TimeRemaining secondsRemaining={secondsRemaining} />
        </div>

      const TimeRemaining = ({secondsRemaining}) => {
        if (secondsRemaining <= 0) return <span>00:00:00</span>
        const hour = Math.floor(secondsRemaining / 3600)
        const minutes = Math.floor(secondsRemaining / 60)
        const seconds = secondsRemaining % 60
        const formattedTime = `${padd(hour)}:${padd(minutes)}:${padd(seconds)}`
        return <span>{formattedTime}</span>
      }
    }
  }
}

state.subscribe(state => {
  const prrrs = new Prrrs({
    currentUser: state.session.user,
    prrrs: state.prrrs,
  })

  updateNumFavicon(prrrs.pending().length)
})
