const usermodel = require('../models/creatData');
const TaskdonData = require('../models/taskdondata');
exports.postData = async (req, res, next) => {
    try {
        const Name = req.body.Name;
        const Descript = req.body.Descript;

        let Postdata = await usermodel.create({
            Name: Name,
            Descript: Descript
        })
        res.status(201).json(Postdata)
    } catch (err) {
        res.status(500).json({
            Error: err
        })
    }
}


exports.PostTaskdoneData = async(req, res, next) => {
    try {
        const Name = req.body.Name;
        const Descript = req.body.Descript;

        let PostdataDon = await TaskdonData.create({
            Name: Name,
            Descript: Descript
        })
        res.status(201).json(PostdataDon)
    } catch (err) {
        res.status(500).json({
            Error: err
        })
    }
}




exports.DeleteData = async (req, res, next) => {
    try {
        prodId = req.params.id;
        let deletedata = await usermodel.findByPk(prodId)
        usermodel.destroy({ where: { id: prodId } })
        res.status(201).json(deletedata);
    } catch (err) {
        res.status(500).json({
            Error: err
        })
    }
}


exports.DeleteTaskDonData = async (req, res, next) => {
    try {
        prodId = req.params.id;
        let deletedatataskDon = await TaskdonData.findByPk(prodId)
        TaskdonData.destroy({ where: { id: prodId } })
        res.status(201).json(deletedatataskDon);
    } catch (err) {
        res.status(500).json({
            Error: err
        })
    }
}


exports.GetTaskDonData = async (req, res, next) => {
    try {
        let gettaskdondata = await TaskdonData.findAll();
        res.status(201).json(gettaskdondata);
    } catch (err) {
        res.status(500).json({
            Error: err
        })
    }
}




exports.GetData = async (req, res, next) => {
    try {
        let getdata = await usermodel.findAll();
        res.status(201).json(getdata)
    } catch (err) {
        res.status(500).json({
            Error: err
        })
    }
}
