// plugins/formbody-plugin.js
import fp from 'fastify-plugin'
import formbody from '@fastify/formbody'

export default fp(async (fastify, options) => {
  fastify.register(formbody)
})