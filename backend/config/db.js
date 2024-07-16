import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://zinodev:zinodev03@cluster0.z0fbksi.mongodb.net/food-del').then(() => console.log("DB Connected"));
}

export default connectDB
