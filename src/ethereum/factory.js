import web3 from './web3'
import EventFactory from './build/EventFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(EventFactory.interface),
  '0xCa0218871F7b43869054127ADd1365467cca7a47'
)

export default instance
