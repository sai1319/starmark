 fetch('https://fakestoreapi.com/products').then((data)=>{
     return data.json();

 }).then((completedata)=>{
     let data1 ="";
     completedata.map((values)=>{
         data1+=`<div class="card">
         <h1 class="title">${values.title}</h1>
         <img class="image"  src="${values.image}">
         <p >${values.description}</p>
         <p class="category">${values.category}</p>
         <p class="price">${values.price}</p>
         </div>`;
       
     })
     document.getElementById("cards").innerHTML=data1;

 }).catch((err)=>{
     console.log(err);
 })