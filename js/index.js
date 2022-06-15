let myLeads = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-button")
let ulElements = document.querySelector("#ul-element") //GRAB LIST FROM HTML DOC

//localStorage.setItem("myName", "Rahul") //ADDS THIS KEY VALUE PAIR TO LOCAL STORAGE
let name = localStorage.getItem("myName") //GETS THE VALUE FROM LOCAL STORAGE
console.log(name) //VALUE LOGGED ON CONSOLE
localStorage.clear() //CLEARS LOCAL STORAGE

inputButton.addEventListener("click", function() { //NO NEED FOR LINKING A INPUT FUNCTION TO HTML INPUT BUTTON
    myLeads.push(inputEl.value)
    inputEl.value = ""  // CLEAR OUT INPUT FIELD AFTER SAVE INPUT BUTTON IS CLICKED
    renderLeads()
}) 

function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {  //LOG OUT DUMMY LEADS IN LEADS ARRAY ONTO CONSOLE
    // ulElements.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set text content using innerHTML
    // appending to unordered list
    // const li = document.createElement("li")
    // li.textContent += myLeads[i]
    // ulElements.append(li)
     //   listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>" //CREATES ONE LONG STRING THAT HAS <LI>LEADS</LI> ...
       listItems += `
            <li>
                <a href='${myLeads[i]}' target= '_blank'>${myLeads[i]}</a>
            </li>
            `  //TEMPLATE STRINGS- SIMILAR TO F-STRINGS IN PYTHON
}

    ulElements.innerHTML = listItems  //READS THE STRING, INNERHTML READS IT AND RENDERS AS UNORDERED LIST ITEMS BECAUSE OF THE LI TAGS


}



