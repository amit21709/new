import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        const conn = await mongoose .connect(process.env.DB_URL)
        console.log("connected to database");
    } catch(err){
        console.log(err);
    }
}

export default connectDB