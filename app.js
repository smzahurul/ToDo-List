var slNo = document.getElementById("slnumber");
var stName = document.getElementById("name");
var roll = document.getElementById("roll");
var dept = document.getElementById("dept");
var cgpa = document.getElementById("cgpa");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(pera) {
    pera.preventDefault();

    if (stName.value === "") {
        alert("Please Your Name")
    } else if (roll.value === "") {
        alert("Please Your Roll")
    } else if (dept.value === "") {
        alert("Please Your Dept")
    } else if (cgpa.value === "") {
        alert("Please Your Cgpa")
    } else if (slNo.value === "") {
        alert("Please Your SlNo")
    } else {
        var tbody = document.getElementById("tbody");
        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.innerText = slNo.value;
        tr.appendChild(td);
        tbody.appendChild(tr);
        document.getElementById('slnumber').value = "";


        //Student Add Start----
        var td = document.createElement("td");
        td.innerText = stName.value;
        tr.appendChild(td);
        tbody.appendChild(tr);
        document.getElementById('name').value = "";
        //Student Add End----

        // Roll No Add Start----
        var td = document.createElement("td");
        td.innerText = roll.value;
        tr.appendChild(td);
        tbody.appendChild(tr);
        document.getElementById('roll').value = "";
        // Roll No add End----

        // Department add Start----
        var td = document.createElement("td");
        td.innerText = dept.value;
        tr.appendChild(td);
        tbody.appendChild(tr);
        document.getElementById('dept').value = "";
        // Department add End----

        // Cgpa Add Start----
        var td = document.createElement("td");
        td.innerText = cgpa.value;
        tr.appendChild(td);
        tbody.appendChild(tr);
        document.getElementById('cgpa').value = "";
        // Cgpa Add End----
    }
})