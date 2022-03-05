const Blockchain = require('../source/blockchain')
const Block = require('../source/block')

describe('Blockchain', () => {
  let blockchain
  let blockchain_A

  beforeEach(() => {
    blockchain = new Blockchain()
    blockchain_A = new Blockchain()
  })

  it('starts with the genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis())
  })

  it('adds a new block to the chain', () => {
    data = 'index.html'
    const block = blockchain.addBlock(data)
    expect(blockchain.chain[blockchain.chain.length - 1]).toEqual(block)
  })

  it('validates a valid chain', () => {
    blockchain_A.addBlock('block A')
    expect(blockchain.isValidChain(blockchain_A.chain)).toBe(true)
  })

  it('invalidates a chain with a corrupt genesis block', () => {
    blockchain_A.chain[0].lastHash = 'broken'
    expect(blockchain.isValidChain(blockchain_A.chain)).toBe(false)
  })

  it('invalidates a corrupt chain', () => {
    blockchain_A.addBlock('block X')
    blockchain_A.chain[1].lastHash = 'block Y'
    expect(blockchain.isValidChain(blockchain_A.chain)).toBe(false)
  })

  it('replaces the chain with a valid chain', () => {
    blockchain_A.addBlock('block A')
    blockchain.replaceChain(blockchain_A.chain)
    expect(blockchain.chain).toEqual(blockchain_A.chain)
  })

  it('does not replace the chain with one of less than or equal to the length', () => {
    blockchain.addBlock('block A')
    blockchain.replaceChain(blockchain_A.chain)
    expect(blockchain.chain).not.toEqual(blockchain_A.chain)
  })
})
