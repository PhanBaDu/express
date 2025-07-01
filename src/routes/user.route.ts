import { Router } from 'express'
import { createUser, deleteUser, getALlUser, getUser, udpateName, updateAll } from '~/controllers/user.controller'

const router = Router()

// CREATE [USER]
router.post('/create', createUser)

// GET ALL [USER]
router.get('/getall', getALlUser)

// GET USER
router.get('/getuser/:id', getUser)

// DELETE USER
router.delete('/delete/:id', deleteUser)

// UPDATE USER
router.patch('/udpatename/:id', udpateName)

router.put('/udpatename/:id', updateAll)

export default router
