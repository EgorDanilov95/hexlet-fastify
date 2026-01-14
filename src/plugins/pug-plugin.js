// plugins/pug-plugin.js
import fp from 'fastify-plugin'
import pointOfView from '@fastify/view'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import pug from 'pug'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default fp(async (fastify, options) => {
  fastify.register(pointOfView, {
    engine: {
      pug: pug
    },
    root: path.join(__dirname, '..', 'views'), 
    viewExt: 'pug',
    options: {} 
  })
})