import {Schema , model , models} from "mongoose"

const Userschema = new Schema({
    firstName:{
        type:String,
        required : true
    },
    lastName:{
        type:String ,
        required : true
    },
    email:{
        type:String ,
        required : true
    },
    phoneNumber:{
        type:Number ,
        required : true
    },
    password:{
        type:String ,
        required : true
    },
    role:{
        type:String,
        enum:["admin" , "user"],
        default:"user"

    }


})
const user = models.user || model("user" , Userschema)
export default user