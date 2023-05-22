
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const app = express();

const sequelize = require('./util/database');

const UserData = require('./models/creatData');
const TaskdonData = require('./models/taskdondata');

const RoterProduct = require('./routes/route');
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())

// TaskdonData.belongsTo(UserData);

app.use(RoterProduct);


sequelize
// .sync({ force: true })
.sync()
.then(result =>{
    console.log('Posted Data')
    // console.log(result);
    app.listen(4000);
})
.catch(err => console.log(err))

