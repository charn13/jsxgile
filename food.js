let fooditems =[
   
    {id:1, name:"fistfood", image:"https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600"},
   
    {id:1, name:"tfood", image:"https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:1, name:"fstfood", image:"https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:1, name:"fisod", image:"https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:1, name:"fisod", image:"https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:1, name:"fistfd", image:"https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600"}
   

];





let prow = document.getElementById("abc")
  console.log(prow ,'check put div');

fooditems.map((e)=>{

    let creatdiv = document.createElement('div')
    creatdiv.setAttribute('class','col-md-4 ',)
   
   
    let createImg = document.createElement('img')
    createImg.setAttribute('src', `${e.image}`);
    createImg.setAttribute('class', 'img-fluid w-75 h-5  imageb');
  
   
    
    creatdiv.appendChild(createImg)
    prow.appendChild(creatdiv)
    
    
    
    
    
   

  // let creatdiv = document.createElement("div")
    // creatdiv.setAttribute("class","row")
    //   console.log(creatdiv,'check div');         
  
    //   let col = document.createElement("div")
    //   creatdiv.setAttribute("class","col-md-4")

      
    // let creatimg = document.createElement("img")
    // creatimg.setAttribute("class","")
    // col.innerHTML= `${e.image}`
    
    // let creath1 = document.createElement("h1")
    // creath1.setAttribute("class","")
    // creath1.innerHTML= `${e.name}`
     
   
    // item.appendChild(creatdiv)
   
    // creatdiv.appendChild(col)
})

















