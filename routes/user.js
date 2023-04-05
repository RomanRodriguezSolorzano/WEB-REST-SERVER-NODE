const {Router} = require('express');
const { getUser, putUser, postUser, delUser } = require('../controllers/user');
const router = Router();


router.get('/', getUser);

router.post('/', postUser);

router.put('/:id', putUser);

router.delete('/:id', delUser);


module.exports = router;