
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim:true
    },
    registerationID: {
        type:String,
        required: true,
        trim:true
    },
    password: {
        type:String,
        required: true,
        trim:true
    }
   
  });
  const User = mongoose.model('user', UserSchema);
  export default User