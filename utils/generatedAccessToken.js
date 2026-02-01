import jwt from 'jsonwebtoken'


const generatedAccessToken = async(userId) => {
    const tonken = await jwt.sign({_id : userId},
        process.env.SECRET_KEY_ACCESS_TOKEN,
        { expiresIn : '5h'}
    )

    return tonken
}

export default generatedAccessToken
