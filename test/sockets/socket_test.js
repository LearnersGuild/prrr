import {testSockets} from './setup'


describe('archive', () => {
  testSockets(() => {
    it('archives a Prrr', function(done){
      console.log('IN THE TEST!!');
      this.client.emit('message', {id: 5})
      this.server.on('message', function(data){
        // expect(data).to.equal({id: 5})
        console.log(data)
        done()
      })

    })
  })
})
