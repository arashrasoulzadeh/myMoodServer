var gulp = require("gulp"),
    nodemon=require("gulp-nodemon");
gulp.task("default",function (params) {
    nodemon({
        script:'app.js',
        ext:'js',
        env:{
            PORT:3000
        },
        ignore: ['./node_modules/**']
    })
    .on("restart",function () {
        console.log("files changed, restarting...")
    });
});