let data = new promice((resolve, reject)=>{
   fetch("https://fakestoreapi.com/products")
       .then((res) => res.json())
       .then((json) => resolve(json))
       .catch((err)=> reject(err));
   

});

data.then(res => console.log(res))
.catch(err => console.log(err))


        
