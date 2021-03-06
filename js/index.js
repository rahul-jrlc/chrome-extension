//let myLeads = `["www.lead1.com"]`  //LOCAL STORAGE ACCEPTS AND STORES ONLY STRINGS

//myLeads = JSON.parse(myLeads)  //CONVERTS A STRING INTO AN OBJECT(ARRAY HERE)
//myLeads.push("www.pushedlead.com")

//myLeads = JSON.stringify(myLeads) //CONVERT LEADS ARRAY INTO STRING

//console.log(typeof myLeads)


let myLeads = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-button")
let ulElements = document.querySelector("#ul-element") //GRAB LIST FROM HTML DOC
const deleteButton = document.getElementById("delete-button")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads")) //GET LEADS FROM LOCAL STORAGE, CONVERTED BACK TO ARRAY
 //STORE LEADS IN NEW VAR
 //THIS IS ADDING NEW LEADS INTO LOCAL STORAGE, DISPLAYING THEM ON SCREEN AFTER SAVING

 const tabButton = document.getElementById("tab-button")

if (leadsFromLocalStorage) {  //CHECKS WHETHER LEADS_FROM_LOCAL_STORAGE IS TRUTHY I.E ANY LEADS EXISTING IN LOCAL STORAGE IN ARRAY
    myLeads = leadsFromLocalStorage
    render(myLeads)
 }

 tabButton.addEventListener("click", function() {        
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { //USE CHROME API TO GET CUURENT TAB IN CURRENT WINDOW
        myLeads.push(tabs[0].url) // PUSH TAB URL TO MYLEADS ARRAY
        localStorage.setItem("leads", JSON.stringify(myLeads)) // STORE IN LOCAL STORAGE
        render(myLeads) // RENDER FUNCTION RENDERS OUT CURRENT TAB URL AS AN LI ELEMENT

    })    
 })

 function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {  //LOG OUT DUMMY LEADS IN LEADS ARRAY ONTO CONSOLE
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
                <a href='${leads[i]}' target= '_blank'>${leads[i]}</a>
            </li>
            `  //TEMPLATE STRINGS- SIMILAR TO F-STRINGS IN PYTHON
}

    ulElements.innerHTML = listItems  //READS THE STRING, INNERHTML READS IT AND RENDERS AS UNORDERED LIST ITEMS BECAUSE OF THE LI TAGS


}


deleteButton.addEventListener("dblclick", function() { //ON DOUBLE CLICK,
    localStorage.clear() //DELETE BUTTON WILL CLEAR LOCAL STORAGE,
    myLeads = [] //EMPTY THE LEADS ARRAY,
    render(myLeads) //CLEAR THE LI ELEMENTS DISPLAYED ON THE WEBPAGE
})

//localStorage.setItem("myName", "Rahul") //ADDS THIS KEY VALUE PAIR TO LOCAL STORAGE
//let name = localStorage.getItem("myName") //GETS THE VALUE FROM LOCAL STORAGE
//console.log(name) //VALUE LOGGED ON CONSOLE
//localStorage.clear() //CLEARS LOCAL STORAGE

inputButton.addEventListener("click", function() { //NO NEED FOR LINKING A INPUT FUNCTION TO HTML INPUT BUTTON
    myLeads.push(inputEl.value)
    inputEl.value = ""  // CLEAR OUT INPUT FIELD AFTER SAVE INPUT BUTTON IS CLICKED
    localStorage.setItem("leads", JSON.stringify(myLeads))  //CONVERTS LEADS ARRAY BEING ADDED TO LOCAL STORAGE INTO STRING 
    render(myLeads)
    //console.log(localStorage.getItem("leads")) //LEADS ENTERED WILL GET STORED TO LOCAL STORAGE EVEN AFTER PAGE REFRESH.
}) 




