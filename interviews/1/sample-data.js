// [ 1 1 1 1 1 1 1 1 1 1 1 1 ] - list o blocks, each block apartment i want to live in

// determine if its good (when its close to gym or something else)

export const blocks = [
  {
    "gym": false,
    "school": true,
    "store": false
  },
  {
    "gym": true,
    "school": false,
    "store": false
  },
  {
    "gym": true,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "school": true,
    "store": false
  }, // this
  {
    "gym": false,
    "school": true,
    "store": true
  }
]

export const reqs = ["gym", "school", "store"]

