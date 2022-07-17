const mongoose = require('mongoose');

// Blogs = {
//     _id : "ObjectId by Default",
//     title: String,
//     body: String,
//     category_ids: [ ObjectIds()]
//     }
// Users = {
//     _id : "ObjectId by Default",
//     name: String,
//     email: String,
//     social_profile : {
//         linkedIn: String,
//         facebook: String,
//         twiter: String,
//         github: String,
//         instagram: String,
//     },
//     addresses: [{
//         Line1: String,
//         City: String,
//         State: String,
//         PinCode: String,
//     }],
//     Blog_id : [ObjectId()]
//     }
// Category = {
//     _id : "ObjectId by Default",
//     name: String
// }
// Comments = {
//     _id: "ObjectId by Default",
//     Blog_id: [ObjectId()],
//     User_id: [ObjectId()],
//     message: String,
//     rating : String
// }
// Likes = {
//     _id: "ObjectId by Default",
//     User_id: [ObjectId()],
//     Blog_id: [ObjectId()],
//     emoji: String
// }


const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    category_ids: [mongoose.Schema.Types.ObjectId],
    user_id: mongoose.Schema.Types.ObjectId
}
);

