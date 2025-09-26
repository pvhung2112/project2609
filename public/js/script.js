//fillerbtn
const btn_fillerstatus = document.querySelectorAll("[btn_fillerstatus]");
if(btn_fillerstatus){
    const url = new URL(window.location.href);
    btn_fillerstatus.forEach((button)=>{
       button.addEventListener("click",()=>{
        const getStatus = button.getAttribute("status")
        if(getStatus)
        url.searchParams.set("status",getStatus)
        else
        url.searchParams.delete("status")
        window.location.href = url.href;
    })
    })
}
//end fillerbtn
//inputsearch
const getForminputsearch = document.querySelector("[inputsearch]");
if(getForminputsearch){
  const url = new URL(window.location.href);
  getForminputsearch.addEventListener("submit",(e)=>{
    e.preventDefault();
    const keyword = e.target[0].value;
    if(keyword)
   url.searchParams.set("keyword",keyword);
  else url.searchParams.delete("keyword")
   window.location.href = url.href;
  })
}
//end inputsearch
//pagination
const getBtn_pagination = document.querySelectorAll("[pagination_btn]");
console.log(getBtn_pagination);
if(getBtn_pagination){
  getBtn_pagination.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      const url = new URL(window.location.href);
      const getidpagin = btn.getAttribute("idpagin");
      const idpage = parseInt(getidpagin);
      if(idpage > 1){
          url.searchParams.set("page",getidpagin);
      }
      else {
         url.searchParams.delete("page");
      }
      window.location.href = url.href;
    })
  })
}
//end pagination
//showalert
const showalert = document.querySelector("[showalert]");
if(showalert){
  const timeout = parseInt(showalert.getAttribute("data-time"));
setTimeout(()=>{
 showalert.classList.add("hidden");
},timeout)
}

//end showalert
