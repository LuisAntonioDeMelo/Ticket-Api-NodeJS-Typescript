# Ticket-Api-NodeJS-Typescript
This is an implementation of a Rest API using NodeJs + Typescript with a practical way with the standards and the best technologies  available as yarn, sucrase and mongoDb

<img src="https://miro.medium.com/max/1756/1*fzcYZIhdZjuQaT8gTk1YAQ.png">
<br/>
<h4>Usign the TypesPower</h4>
  <p>this is simples node Schema gonna be!!!</p>
  
  <pre>const UserSchema = new Schema ({
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
  </pre>

<p><small><b>Demo:</b>TicketController</small></p>
<img src="https://drive.google.com/uc?export=view&id=1WMr-2RMVG82FyE-7JHIL4VtovoEroR3Y">

###### byLuis :)
