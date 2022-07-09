import {reqs, blocks} from './sample-data.js'


const pointer = {}


for(let i = 0; i < blocks.length; i++) {
  if(blocks[i].gym === false) {
    blocks[i].gymDistance = find('gym')
  }

  if(blocks[i].gym === true) {
    blocks[i].gymDistance = 0
  }
}
