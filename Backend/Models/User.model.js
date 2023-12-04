import mongoose, {Schema} from "mongoose";

const user = new Schema({
    name: String,
    surname: String,
    day: Number,
    month: Number,
    year: Number,
    password: String,
    email: String,
    gender: String
})

export default mongoose.model('users',user);