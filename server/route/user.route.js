import { Router } from 'express'
<<<<<<< HEAD
import { loginController, logoutController, registerUserController, updateUserDetails, uploadAvatar, verifyEmailController } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'
=======
import { loginController, logoutController, registerUserController, verifyEmailController } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js'
>>>>>>> d09d2d5eaed67ef805eb313b7b9526361ca3776c

const userRouter = Router()

userRouter.post('/register', registerUserController)
userRouter.post('/verify-email', verifyEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
<<<<<<< HEAD
userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)
userRouter.put('/upload-user',auth,updateUserDetails)
// userRouter.put("/upload-avatar", uploadAvatarController);    
=======
>>>>>>> d09d2d5eaed67ef805eb313b7b9526361ca3776c

export default userRouter
