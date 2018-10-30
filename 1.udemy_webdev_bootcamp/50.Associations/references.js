var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

Post.create({
    title: "How to cook Part 2",
    content: "Find recipes"
}, function(err, post){
    User.findOne({email: lily@gmail.com}, function(err, foundUser){
      if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// User.create({
//     email: "lily@gmail.com",
//     name: "Lily Potter"
// });

//Find user
//Find all posts for that user

// User.findOne({email: "lily@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });