import { Schema , model } from 'mongoose' 
import { User } from '../model/user.model'
import { json } from 'express'

const UserSchema = new Schema ({
    email:String ,
    firstName:String,
    lastName:String
},{
    timestamps:true
})

UserSchema.methods.fullname = function():string {
    return this.firstName + ' ' + this.lastName
}

export default model<User>('User',UserSchema)

//test Object
//json.prototype(
//    {
       // "email":"tyluis20@gmail.com",
       // "firstName":"Luis Antônio",
       // "lastName":"de Melo Gomes"
    //}
//)