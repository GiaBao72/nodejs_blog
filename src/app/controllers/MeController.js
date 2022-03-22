const Course = require('../models/Course');
const {
    mongooseToObject,
    muntipleMongooseToObject,
} = require('../../util/mongoose');

const MeController = {
    //get me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: muntipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = MeController;
