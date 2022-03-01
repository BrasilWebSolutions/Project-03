const Block = require('../source/block.js')

describe('Block', () => {
  it('should create a new block', () => {
    const block = new Block('4931', '5SDFH559HGFH', '5SDFH559HGFH', '100')
    expect(block.toString()).toEqual(`Block -
      Timestamp : 4931
      Last Hash : 5SDFH559HGFH
      Hash      : 5SDFH559HGFH
      Data      : 100`)
  })

  it('sets the `data` to match the input', () => {
    const block = new Block('4931', '5SDFH559HGFH', '5SDFH559HGFH', '100')
    expect(block.data).toEqual('100')
  })

  it('should create a genesis block', () => {
    const genesis = Block.genesis()
    expect(genesis.toString()).toEqual(`Block -
      Timestamp : Genesis time
      Last Hash : -----
      Hash      : FJB45TVDC4522
      Data      : []`)
  })

  it('should mine a new block', () => {
    const lastBlock = Block.genesis()
    const block = Block.mineBlock(lastBlock, '$525')
    expect(block.toString()).toEqual(`Block -
      Timestamp : ${Date.now()}
      Last Hash : 5SDFH559HGFH
      Hash      : 5SDFH559HGFH
      Data      : $525`)
  })
})
