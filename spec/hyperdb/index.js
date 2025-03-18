// This file is autogenerated by the hyperdb compiler
/* eslint-disable camelcase */

const { IndexEncoder, c } = require('hyperdb/runtime')
const { version, getEncoding, setVersion } = require('./messages.js')

// '@autodiscovery/service-entry' collection key
const collection0_key = new IndexEncoder([
  IndexEncoder.BUFFER
], { prefix: 0 })

function collection0_indexify (record) {
  const a = record.publicKey
  return a === undefined ? [] : [a]
}

// '@autodiscovery/service-entry' value encoding
const collection0_enc = getEncoding('@autodiscovery/service-entry/hyperdb#0')

// '@autodiscovery/service-entry' reconstruction function
function collection0_reconstruct (version, keyBuf, valueBuf) {
  const key = collection0_key.decode(keyBuf)
  setVersion(version)
  const record = c.decode(collection0_enc, valueBuf)
  record.publicKey = key[0]
  return record
}
// '@autodiscovery/service-entry' key reconstruction function
function collection0_reconstruct_key (keyBuf) {
  const key = collection0_key.decode(keyBuf)
  return {
    publicKey: key[0]
  }
}

// '@autodiscovery/service-entry'
const collection0 = {
  name: '@autodiscovery/service-entry',
  id: 0,
  encodeKey (record) {
    const key = [record.publicKey]
    return collection0_key.encode(key)
  },
  encodeKeyRange ({ gt, lt, gte, lte } = {}) {
    return collection0_key.encodeRange({
      gt: gt ? collection0_indexify(gt) : null,
      lt: lt ? collection0_indexify(lt) : null,
      gte: gte ? collection0_indexify(gte) : null,
      lte: lte ? collection0_indexify(lte) : null
    })
  },
  encodeValue (version, record) {
    setVersion(version)
    return c.encode(collection0_enc, record)
  },
  trigger: null,
  reconstruct: collection0_reconstruct,
  reconstructKey: collection0_reconstruct_key,
  indexes: []
}

const collections = [
  collection0
]

const indexes = [
]

module.exports = { version, collections, indexes, resolveCollection, resolveIndex }

function resolveCollection (name) {
  switch (name) {
    case '@autodiscovery/service-entry': return collection0
    default: return null
  }
}

function resolveIndex (name) {
  switch (name) {
    default: return null
  }
}
