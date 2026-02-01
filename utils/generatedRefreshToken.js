import UserModel  from "../models/user.model.js"
import jwt from 'jsonwebtoken'

const generatedRefreshToken = async(userId) => {
    const tonken = await jwt.sign({_id : userId},
            process.env.SECRET_KEY_REFRESH_TOKEN,
            { expiresIn : '7d'}
    )


    const updateRefereshToken = await UserModel.updateOne(
        { _id: userId },
        {
            refresh_token: tonken
        }
    )




    return tonken
}


export default generatedRefreshToken