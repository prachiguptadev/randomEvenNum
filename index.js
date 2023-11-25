
function evenNumber(){
  let rn = Math.floor(Math.random() * 100);
  if(rn%2 === 0){
    return rn;
  }else{
    return rn + 1;
  }
}
console.log(evenNumber())