// This file is autogenerated by the hyperschema compiler
// Schema Version: 1
/* eslint-disable camelcase */
/* eslint-disable quotes */

const VERSION = 1
const { c } = require('hyperschema/runtime')

// eslint-disable-next-line no-unused-vars
let version = VERSION

// @rpc-discovery/service-entry
const encoding0 = {
  preencode (state, m) {
    c.fixed32.preencode(state, m.publicKey)
  },
  encode (state, m) {
    c.fixed32.encode(state, m.publicKey)
  },
  decode (state) {
    const r0 = c.fixed32.decode(state)

    return {
      publicKey: r0
    }
  }
}

// @rpc-discovery/op
const encoding1 = {
  preencode (state, m) {
    c.uint.preencode(state, m.op)
    state.end++ // max flag is 2 so always one byte

    if (m.writerKey) c.fixed32.preencode(state, m.writerKey)
    if (m.serviceKey) c.fixed32.preencode(state, m.serviceKey)
  },
  encode (state, m) {
    const flags =
      (m.writerKey ? 1 : 0) |
      (m.serviceKey ? 2 : 0)

    c.uint.encode(state, m.op)
    c.uint.encode(state, flags)

    if (m.writerKey) c.fixed32.encode(state, m.writerKey)
    if (m.serviceKey) c.fixed32.encode(state, m.serviceKey)
  },
  decode (state) {
    const r0 = c.uint.decode(state)
    const flags = c.uint.decode(state)

    return {
      op: r0,
      writerKey: (flags & 1) !== 0 ? c.fixed32.decode(state) : null,
      serviceKey: (flags & 2) !== 0 ? c.fixed32.decode(state) : null
    }
  }
}

// @rpc-discovery/register-service-request
const encoding2 = encoding0

// @rpc-discovery/service-entry/hyperdb#0
const encoding3 = {
  preencode (state, m) {

  },
  encode (state, m) {

  },
  decode (state) {
    return {
      publicKey: null
    }
  }
}

function setVersion (v) {
  version = v
}

function encode (name, value, v = VERSION) {
  version = v
  return c.encode(getEncoding(name), value)
}

function decode (name, buffer, v = VERSION) {
  version = v
  return c.decode(getEncoding(name), buffer)
}

function getEnum (name) {
  switch (name) {
    default: throw new Error('Enum not found ' + name)
  }
}

function getEncoding (name) {
  switch (name) {
    case '@rpc-discovery/service-entry': return encoding0
    case '@rpc-discovery/op': return encoding1
    case '@rpc-discovery/register-service-request': return encoding2
    case '@rpc-discovery/service-entry/hyperdb#0': return encoding3
    default: throw new Error('Encoder not found ' + name)
  }
}

function getStruct (name, v = VERSION) {
  const enc = getEncoding(name)
  return {
    preencode (state, m) {
      version = v
      enc.preencode(state, m)
    },
    encode (state, m) {
      version = v
      enc.encode(state, m)
    },
    decode (state) {
      version = v
      return enc.decode(state)
    }
  }
}

const resolveStruct = getStruct // compat

module.exports = { resolveStruct, getStruct, getEnum, getEncoding, encode, decode, setVersion, version }
