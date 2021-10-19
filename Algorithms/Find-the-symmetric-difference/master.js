function sym(...args) {
  let arr=[...args]
//primero filtro los numeros repetidos
  for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].filter(function(value,index){
      return arr[i].indexOf(value)==index
    })
  }

//busco la diferencia
    let acc =arr[0].concat(arr[1]).filter(value=>!arr[0].includes(value) || !arr[1].includes(value))
  

  return acc
  }
  
  console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7]));