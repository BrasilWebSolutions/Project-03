const Block = require('../source/block.js')

const block = new Block('4931', '5SDFH559HGFH', '5SDFH559HGFH', '100')

console.log(block.toString())
console.log(Block.genesis().toString())
const firstBlock = Block.mineBlock(Block.genesis(), '$525')

console.log(firstBlock.toString())
