// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
//       // useNewUrlParser: true,
//     //   useUnifiedTopology: true
//     });
//     console.log(`Database Connected`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1); // Exit process with failure
//   }
// };

// import mongoose from 'mongoose'

// const connectDB = async()=>{

//     mongoose.connect.on('connected',()=>console.log("Database Connected"))
//    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
// }


// // export default connectDB
// export default connectDB;


import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); // Exit the process if unable to connect
    }
};

export default connectDB;

