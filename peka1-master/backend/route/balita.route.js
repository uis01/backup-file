import express from 'express'
import { getBalita, getBalitaById, getBalitaTest, insertBalita, updateBalita, deleteBalita} from '../controller/balita.controller.js'
<<<<<<< HEAD
// import { verifyUser } from '../middleware/authUser.js'
=======
import { verifyUser } from '../middleware/authUser.js'
>>>>>>> b5dd2b3cfca9809f902db63bfbcbb06005c2171e


const router = express.Router()

router.get('/balita', verifyUser, getBalita)
router.get('/balita/:id_balita', verifyUser, getBalitaById)
router.get('/balitafilter', verifyUser, getBalitaTest)
router.post('/balita', verifyUser, insertBalita)
router.put('/balita/:id_balita', verifyUser, updateBalita)
router.delete('/balita/:id_balita', verifyUser, deleteBalita)


export default router
