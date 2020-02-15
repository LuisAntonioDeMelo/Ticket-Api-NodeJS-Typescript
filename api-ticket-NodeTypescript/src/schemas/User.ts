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
