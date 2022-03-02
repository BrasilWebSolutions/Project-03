const Blockchain = require('../source/blockchain')
const Block = require('../source/block')

describe('Blockchain', () => {
  let blockchain, data

  beforeEach(() => {
    blockchain = new Blockchain()
    data = 'index.html'
  })

  it('starts with the genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis())
  })

  it('adds a new block to the chain', () => {
    const block = blockchain.addBlock(data)

    expect(blockchain.chain[blockchain.chain.length - 1]).toEqual(block)
  })
})
