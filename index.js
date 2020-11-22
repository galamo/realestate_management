// Globals
const realEstates = []

// const formConfiguration = [ {  id:"image", class:"form-group" ,     }  ]

const DOM = {
    saveButton: document.getElementById("save_button"),
    tableBody : document.getElementById("table_content"),
    form: document.getElementById("form_inputs")
}


function init(){
    // DOM.saveButton.addEventListener("click",extractDataForm)
    
    drawImageInput()

}

function drawImageInput(){
    const div = document.createElement("DIV")
    div.classList.add("form-group")
    const label = document.createElement("LABEL")
    label.innerText = "Image URL"
    const input = document.createElement("INPUT")
    input.id = "image"
    input.type = "text";
    input.classList.add("form-control");
    input.placeholder = "generated image..."
    div.append(label,input)
    DOM.form.append(div)
}


function extractDataForm(){
    const address = document.getElementById("address").value;
    const imageURL = document.getElementById("image").value;
    realEstates.push({address,imageURL })
    draw(realEstates)
}

function clearData(){
    DOM.tableBody.innerHTML = "";
}
function draw(data){
    if(!Array.isArray(data)) return; // if data is not Array return & stop function
    clearData()
    const tableRows = data.map(realEstate=>{  return _getRow(realEstate)  })
    DOM.tableBody.append(...tableRows)
    function _getRow(realEstate){
         const tr = document.createElement("TR");
         const tdAddress = _getTD(realEstate.address)
         const tdImage = _getTD(realEstate.imageURL)
         tr.append(tdAddress,tdImage)
         return tr;

         function _getTD(data){     
                const td = document.createElement("TD")
                td.innerText = data;
                return td;
         }
    }
}


init();