import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowerCase: true,
      unique: true,
      trim:true, 
      index:true,   // to enable searching field do not overuse
    },
    email: {
      type: String,
      required: true,
      unique:true,
      trim:true,
    },
    fullname:{
     type:String,
     required:true,
     trim:true,
     index:true,
     },
     avatar:{
        type:String, //cloudinary url
        required:true

     },
     coverImage:{
        type:String, //cloudinary url
     },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref: "Video"
    }],
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken:{
        type:String,
    }
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10)
  next()
})
userSchema.methods.isPasswordCorret=async function(password) {
  return await bcrypt.compare(password,this.password);
}



export const User = mongoose.model("User", userSchema);
