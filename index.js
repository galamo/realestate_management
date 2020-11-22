// Globals
const realEstates = []

const DOM = {
    saveButton: document.getElementById("save_button"),
    tableBody : document.getElementById("table_content")
}


function init(){
    DOM.saveButton.addEventListener("click",extractDataForm)


}
function extractDataForm(){
    const address = document.getElementById("address").value;
    const imageURL = document.getElementById("image").value;
    realEstates.push({address,imageURL })
    draw(realEstates)
}


function draw(data){
    if(!Array.isArray(data)) return; // if data is not Array return & stop function
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