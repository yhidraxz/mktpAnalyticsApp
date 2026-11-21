import mongoose from "mongoose"
console.log("im running dude!!")
export async function connectDb (mongoUrl) {
    try {
        await mongoose.connect(mongoUrl)
        console.log("database connected succesfully");
        return mongoose
    } catch (err) {
        console.dir(err);
        throw err
    }
}

export async function disconnectDB() {
        await mongoose.connection.close();
}