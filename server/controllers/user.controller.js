import UserModel from '../models/user.model.js';

export async function registerUserController(request, response) {
    try {
        const { nmae , email, password } = request.body

        if(!nmae || !email || !password) {
            return response.status(400).json({
                message : "provide email, name, password",
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({ email })

        if(user){
            return response.json({
                message : " Already register email",
                error : true,
                success : false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const payload = {
            nmae,
            email,
            password : hashedPassword
        }

        const newUser = new UserModel(payload)
        const save = await newUser.save()

        const verifyEmail = await sendEmail({
            sendTo: email,
            subject: "Verify email from binkeyit",
            html: `<p>Click <a href="${process.env.BASE_URL}/verify-email">here</a> to verify your email</p>`
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}