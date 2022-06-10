let myLeads = ["www.lead1.com", "www.lead2.com", "www.lead3.com"]
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-button")
let ulElements = document.querySelector("#ul-element") //GRAB LIST FROM HTML DOC

inputButton.addEventListener("click", function() { //NO NEED FOR LINKING A INPUT FUNCTION TO HTML INPUT BUTTON
    myLeads.push(inputEl.value)
    console.log(myLeads)
}) 

for (let i = 0; i < myLeads.length; i++) {  //LOG OUT DUMMY LEADS IN LEADS ARRAY ONTO CONSOLE
    // ulElements.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set text content using innerHTML
    // appending to unordered list
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulElements.append(li)
}