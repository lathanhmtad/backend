import db from '../models/index'

const checkEmailExist = async (userEmail) => {
    try {
        let user = await db.User.findOne({
            where: { email: userEmail }
        });
        console.log(user);
        if (user) {
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        // Handle the error appropriately
        return false; // Or rethrow the error
    }
};

export const registerNewUser = async (rawUserData) => {
    // check email/phoneNumber are exist
    let isEmailExist = await checkEmailExist(rawUserData.email)
    
    // hash user password

    // console.log(">>>> isEmail", isEmailExist)


    // create new user
    await db.User.create(rawUserData)

    // console.log(">>>> check", rawUserData)

    return {
        EM: 'A user is created successfully',
        EC: 0
    }
}