// Globals
let realEstates = []

// const formConfiguration = [ {  id:"image", class:"form-group" ,     }  ]

const DOM = {
    saveButton: document.getElementById("save_button"),
    tableBody : document.getElementById("table_content"),
    form: document.getElementById("form_inputs")
}


function init(){
    // DOM.saveButton.addEventListener("click",extractDataForm)
    
    drawInput("Image URL", "image", "Insert Image")
    drawInput("Address", "address", "Insert address")
    drawInput("City", "city", "Insert city")
    drawButton("Save", "save_button", "btn btn-primary", extractDataForm)
    drawButton("Clear Table", "clear_button", "btn btn-danger", clearData)
}

function drawButton(labelText , id, className,fn){
    const button = document.createElement("BUTTON")
    button.innerText = labelText
    button.id = id
    button.className = className
    button.type = "button"
    button.addEventListener("click",fn)
    DOM.form.append(button)
}

function drawInput(labelText , id, placeHolder){
    const div = document.createElement("DIV")
    div.classList.add("form-group")
    const label = document.createElement("LABEL")
    label.innerText = labelText
    const input = document.createElement("INPUT")
    input.id = id
    input.type = "text";
    input.classList.add("form-control");
    input.placeholder = placeHolder
    div.append(label,input)
    DOM.form.append(div)
}

function clearData(){
    clearHTML();
    realEstates = [];
}
function extractDataForm(){
    const address = document.getElementById("address").value;
    const imageURL = document.getElementById("image").value;
    realEstates.push({address,imageURL })
    draw(realEstates)
}

function clearHTML(){
    DOM.tableBody.innerHTML = "";
}
function draw(data){
    if(!Array.isArray(data)) return; // if data is not Array return & stop function
    clearHTML()
    const tableRows = data.map(realEstate=>{  return _getRow(realEstate)  })
    DOM.tableBody.append(...tableRows)
    function _getRow(realEstate){
         const tr = document.createElement("TR");
         const tdAddress = _getTD(realEstate.address)
         const tdImage = _getTD(realEstate.imageURL)
        
         const tdButton = _getTD()
         tdButton.append(_getDeleteButton())

         tr.append(tdAddress,tdImage,tdButton)
         return tr;
         
         function _getDeleteButton(){
            const button = document.createElement("BUTTON")
            button.innerText = "X"
            button.id = realEstate.address
            button.className = "btn btn-danger"
            button.type = "button"
            button.addEventListener("click",()=>{
                removeItemFromData(realEstate.address)
            })
            return button
         }
         function _getTD(data = ""){     
                const td = document.createElement("TD")
                td.innerText = data;
                return td;
         }
    }
}


function removeItemFromData(idToRemove){
    // const index = realEstates.findIndex(item=> item.address === idToRemove)
    // if(index === -1) return;
    // realEstates.splice(index,1)
    realEstates = realEstates.filter(item=> item.address !== idToRemove)
    draw(realEstates)
}

init();