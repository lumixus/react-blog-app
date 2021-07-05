import bcrypt from "bcryptjs"
export const data = {

    users : [{
        username : "Lumixus",
        name : "Emir Taşkın",
        email : "emirtaskin123@gmail.com",
        password : bcrypt.hashSync("1234",8),
        isAdmin : true,

    }]


}