const form = document.getElementById('my-form');
const usersList = document.getElementById('users');
const taskdoneList = document.getElementById('taskdone');

form.addEventListener('submit', onsubmit)



const crudcrudlink = "http://localhost:4000";


async function GetData() {
    try {
        let getdata = await axios.get(`${crudcrudlink}/getdata`)
        getdata.data.forEach(element => {
            //   console.log(element)  
            Display(element)
        });
    } catch (err) {
        console.log(err);
    }
}
GetData();


async function GetTaskDonData() {
    try {
        let getdata = await axios.get(`${crudcrudlink}/getdatataskdon`)
        getdata.data.forEach(element => {
            //   console.log(element)  
            DisplayForTaskDon(element)
        });
    } catch (err) {
        console.log(err);
    }
}
GetTaskDonData();




async function onsubmit(event) {
    try {
        event.preventDefault();
        const Name = document.getElementById('name');
        const Descript = document.getElementById('desc');

        let obj = {
            Name: Name.value,
            Descript: Descript.value
        }
        //  console.log(obj);
        let dataPst = await axios.post(`${crudcrudlink}/data`, obj)
        Display(dataPst.data);
        document.getElementById('name').value = "";
        document.getElementById('desc').value = "";

    } catch (Err) {
        console.log(Err)
    }

}







function Display(Obj) {
    // console.log(Obj)
    const li = document.createElement('li');
    const Deletbtn = document.createElement('button');
    Deletbtn.id = 'x';
    Deletbtn.textContent = "X";
    const Edditbtn = document.createElement('button');
    Edditbtn.id = "eddit";
    Edditbtn.textContent = "Eddit";
    const taskDon = document.createElement('button');
    taskDon.id = "task";
    taskDon.textContent = "Done";

    li.innerHTML = `Name: ${Obj.Name}, description: ${Obj.Descript}`;


    Deletbtn.onclick = async (eve) => {
        try {
            // let UserId = Obj.id;
            await axios.delete(`http://localhost:4000/delete/${Obj.id}`);
            usersList.removeChild(li)
        } catch (err) {
            console.log(err);
        }
    }




    Edditbtn.onclick = async (eve) => {
        try {
            await axios.delete(`http://localhost:4000/delete/${Obj.id}`)
            document.getElementById('name').value = Obj.Name;
            document.getElementById('desc').value = Obj.Descript;
            usersList.removeChild(li)
        } catch (err) {
            console.log(err)
        }

    }





    taskDon.onclick = async (eve) => {
        try {
            eve.preventDefault();
            usersList.removeChild(li);
            let TskDonData = await axios.delete(`http://localhost:4000/delete/${Obj.id}`)
            //   console.log(TskDonData.data);

            let objforStore = {
                Name: TskDonData.data.Name,
                Descript: TskDonData.data.Descript
            }

            let DondataPst = await axios.post(`${crudcrudlink}/taskDonData`, objforStore)
            // console.log(DondataPst.data);
            DisplayForTaskDon(DondataPst.data)
        } catch (err) {
            console.log(err);
        }
    };




    li.appendChild(taskDon)
    li.appendChild(Edditbtn);
    li.appendChild(Deletbtn);
    usersList.appendChild(li);
}






function DisplayForTaskDon(Obj2) {
    // let data = JSON.parse(element)
    const li = document.createElement('li');
    const Deletbtn = document.createElement('button');
    Deletbtn.id = 'x';
    Deletbtn.textContent = "X";
    li.innerHTML = `Name: ${Obj2.Name}, description: ${Obj2.Descript}`;

    Deletbtn.onclick = async (eve) => {
        try {
            // let UserId = Obj.id;
            await axios.delete(`http://localhost:4000/deletedTaskDondata/${Obj2.id}`);
            taskdoneList.removeChild(li)
        } catch (err) {
            console.log(err);
        }
    }


    li.appendChild(Deletbtn);
    taskdoneList.appendChild(li);
}





