export class HashTable {
  constructor() {
    this._bucketSize = 23
    this._buckets = []
    this._buckets.length = this._bucketSize
  }

  _computeHash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }

    return total % this._bucketSize
  }

  put(key, value) { // separate chaining
    const hash = this._computeHash(key)

    if(this._buckets[hash] === undefined) {
      this._buckets[hash] = {}
    }

    const chain = this._buckets[hash];

    chain[key] = value
  }

  get(key) { // separate chaining
    const hash = this._computeHash(key)

    const chain = this._buckets[hash]

    return chain[key]
  }

  putOpenAddressing(key, value) { // open addressing\
    const hash = this._computeHash(key)

    if(this._buckets[hash] === undefined) {
      this._buckets[hash] = {}
      this._buckets[hash][key] = value
      return;
    }

    // found collision, looking for another bucket
    let bucketId = hash + 1
    do {
      if (bucketId >= this._bucketSize) {
        bucketId = 0
      }

      if(this._buckets[bucketId] === undefined) {
        // Found an empty slot
        this._buckets[bucketId] = {}
        this._buckets[bucketId][key] = value
        return;
      }

      bucketId++
    } while (bucketId !== hash)
  }

  getOpenAddressing(key) { // open addressing\
    const hash = this._computeHash(key)

    if(this._buckets[hash] === undefined) {
      return undefined
    } else if(this._buckets[hash].hasOwnProperty(key)) {
      return this._buckets[hash][key]
    }

    // collission, handle
    let bucketId = hash + 1
    do {
      if (bucketId >= this._bucketSize) {
        bucketId = 0
      }

      if(this._buckets[bucketId] === undefined) {
        return undefined
      } else if(this._buckets[bucketId].hasOwnProperty(key)) {
        return this._buckets[bucketId][key]
      }

      bucketId++
    } while (bucketId !== hash)
  }
}
