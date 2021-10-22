function sym(...args) {
  let arr=[...args]
//primero filtro los numeros repetidos
  for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].filter(function(value,index){
      return arr[i].indexOf(value)==index
    })
  }

 //busco la diferencia
  return arr.reduce((acc,item)=> acc.concat(item).filter(value=> !acc.includes(value) || !item.includes(value)),[])

  }
  
  console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7]));
