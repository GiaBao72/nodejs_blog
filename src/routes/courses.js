var express = require('express');
var router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.route('/:id').put(courseController.update).delete(courseController.delete);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);

module.exports = router;
