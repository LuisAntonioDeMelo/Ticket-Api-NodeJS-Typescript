import { Document } from "mongoose";

export interface User extends Document{
    email:string 
    firstName:string
    lastName:string
    fullName():string
}