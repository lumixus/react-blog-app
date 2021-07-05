import jwt from "jsonwebtoken"


export const isAuth = (req,res,next) => {

    const authorization = req.headers.authorization;
    if(authorization){
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token,process.env.JWT_SEC , (err,decode) => {
        if(err){
            res.status(401).send({message : "Invalid Token !"});
        }else{
            req.user = decode;
            next();
        }
        }
        )
    }else{
        res.status(401).send({message : "No token !"});
    }

} 





export const generateToken = (user) => {

    const token = jwt.sign({
        _id : user._id,
        username : user.username,
        email : user.email,
        name : user.name,
        isAdmin : user.isAdmin

    },process.env.JWT_SEC,{expiresIn : "30d"});

    return token;

}