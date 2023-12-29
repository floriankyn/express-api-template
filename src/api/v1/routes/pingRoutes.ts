// ping.ts//
import express, { Router } from 'express'
const router: Router = express.Router()
import { get, post, del, put } from '../controllers/pingController.js'

router.get('/api/v1/ping', get)
router.post('/api/v1/ping', post)
router.delete('/api/v1/ping', del)
router.put('/api/v1/ping', put)

export { router }
