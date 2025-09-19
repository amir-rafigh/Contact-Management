import {Schema , model , models} from "mongoose"

const contact_schema = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true
    },
    user_id:{
        type:String
    }
})

const contact = models.contact || model("contact" , contact_schema )
export default contact