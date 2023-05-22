
const path = require('path');
const express = require('express');
const ControllerData = require('../controllers/controllerData');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views', 'index1.html'))
})

router.post('/data', ControllerData.postData);
router.delete('/delete/:id',ControllerData.DeleteData)
router.get('/getdata',ControllerData.GetData)

module.exports = router;

