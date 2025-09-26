//edit status
const getFormeditstatus = document.querySelector("[form_Editstatus]");
if(getFormeditstatus){
    const data_path = getFormeditstatus.getAttribute("data_path");
    const btnStatus = document.querySelectorAll("[btn_status]");
    btnStatus.forEach((button)=>{   
        button.addEventListener("click",()=>{
        const getId = button.getAttribute("getId");
        const getStatus = button.getAttribute("getStatus");
        const changeStatus = getStatus == "active" ? "inactive" : "active"
        getFormeditstatus.action = `${data_path}/${changeStatus}/${getId}?_method=PATCH`
        getFormeditstatus.submit();
    })
    })
}
//end edit status
//changemulti
const getFormchangemulti = document.querySelector("[changemulti]");
const getTableproduct = document.querySelector("[tableproduct]");
if(getTableproduct){
    const getcheckboxall = getTableproduct.querySelector("[checkboxall]");
    const checkbox = getTableproduct.querySelectorAll("[checkbox]");
    getcheckboxall.addEventListener("change",()=>{
         checkbox.forEach((item)=>{
            item.checked = getcheckboxall.checked;
         })
    })
    checkbox.forEach((item)=>{
        item.addEventListener("click",()=>{
            const getchecked = getTableproduct.querySelectorAll("[checkbox]:checked").length;
            if(getchecked == checkbox.length) getcheckboxall.checked = true;
            else getcheckboxall.checked = false;
    })
    })
    const getInputchangemulti = getFormchangemulti.querySelector("[getids]");
    getFormchangemulti.addEventListener("submit",(e)=>{
        e.preventDefault();
        const getchecked =  getTableproduct.querySelectorAll("[checkbox]:checked");
       
      const a = [...getchecked].map((item)=>{
           return  item.getAttribute("getIdcbox");
        }).join(",");
        getInputchangemulti.setAttribute("value",a);
        getFormchangemulti.submit(); 
    })
} 
//end changemulti
//deleteone
const getFormdeleteone = document.querySelector("[form_deleteone]");

if(getFormdeleteone){
    const data_path = getFormdeleteone.getAttribute("data_path");
    const getBtn_deleteone = document.querySelectorAll("[btn_one]");
    getBtn_deleteone.forEach((btn)=>{
      btn.addEventListener("click",()=>{
        const getid = btn.getAttribute("id_item");
        getFormdeleteone.action = `${data_path}/${getid}?_method=DELETE`;
        getFormdeleteone.submit();
      })
    })
}
//enđelêtone
//create product image priview
const box_images = document.querySelector("[box-images]");
const imagesinput = document.querySelector("#imagesinput");

if(imagesinput){
    const imgpriview = box_images.querySelector("[img-priview]");
    const huyBtnimg = box_images.querySelector("[huyBtn-img]");

    imagesinput.addEventListener("change",(e)=>{
        if(!imagesinput.value)
    box_images.classList.add("hidden");
    else box_images.classList.remove("hidden");
    if(e.target.files[0])
        imgpriview.src = URL.createObjectURL(e.target.files[0]);
       console.log(imagesinput.value);

    }
  
  )
  huyBtnimg.addEventListener("click",()=>{
    imagesinput.value = "";
    imgpriview.src = "";
    box_images.classList.add("hidden");
  })   
}

//end create product image priview

