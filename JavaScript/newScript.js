function displayDetails(){
    const name = document.getElementById("name").value;
    const website = document.getElementById("website").value;
    const imagelink = document.getElementById("imagelink").value;

    //GENDER
    const rd1 = document.getElementById("rd1");
    const rd2 = document.getElementById("rd2");
    if(rd1.checked==true)
        var gender = rd1.value;
    else if(rd2.checked==true)
        var gender = rd2.value;
    
    // EMAIL VALIDATION AND INPUT
    const text = document.getElementById("Email").value;
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regx.test(text))
        {
            var Email = document.getElementById("Email").value;
        }
        else{
            alert("Invalid Email")
            return;
        }

    //SKILLS
    var str = ""
    var skill = document.getElementsByClassName("skill");
    for(i = 0;i<3;i++)
    {
        if(skill[i].checked==true)
            str += skill[i].value + ",";
    }

    //ADDING ROW
    const table = document.getElementById("table");
    table.innerHTML += `
    <tr>
        <td>
        <div style="font-weight: bolder;">${name}</div>
        ${gender}<br>
        ${Email}<br>
        <a href="${website}">${website}</a><br>
        ${str}
        </td>
    <td>
    <img src="${imagelink}" class="img-thumbnail" alt="Student Image" style="width:100px; height:100px;">
    </td>
    </tr>`

    //form validation
    if(!name||!website||!imagelink||!gender)
    alert("Enter All Details");
    return;
}
function clearDetails()
{
    var field = document.getElementsByTagName("input")
    for(i = 0;i<field.length;i++)
    field[i].value = " ";

    var ele = document.getElementsByName("gridRadios");
    for(i = 0;i<ele.length;i++)
        ele[i].checked = false;

    var skill = document.getElementsByClassName("skill");
    for(i = 0;i<skill.length;i++)
        skill[i].checked = false;
}