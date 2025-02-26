import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://albin:albinv2003@mernapp.wlh5s.mongodb.net/food_del').then(() => console.log('Database connected!'))
}