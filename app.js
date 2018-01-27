var  express = require('express');

var app=express();


var port = process.env.PORT || 3000;


var userRouter = express.Router();


userRouter.route("/users")
    .get(function (req,res) {
        var responseJson= {hello: "this is my hello world "};
        res.json(responseJson);
    });

app.use("/api",userRouter);


app.listen(port, () => {
    console.log(`Server started on port `+port);
});