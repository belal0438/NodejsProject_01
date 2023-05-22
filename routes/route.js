
const path = require('path');
const express = require('express');
const ControllerData = require('../controllers/controllerData');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views', 'index1.html'))
})

router.post('/data', ControllerData.postData);
router.post('/taskDonData',ControllerData.PostTaskdoneData);
router.delete('/delete/:id',ControllerData.DeleteData)
router.delete('/deletedTaskDondata/:id',ControllerData.DeleteTaskDonData)
router.get('/getdatataskdon',ControllerData.GetTaskDonData)
router.get('/getdata',ControllerData.GetData)

module.exports = router;

