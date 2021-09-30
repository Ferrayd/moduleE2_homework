let a = prompt()
a = +a;
if (isNaN(a)){
  console.log("Упс, кажется, вы ошиблись")
}
else if (typeof a == "number"){
  if (!(a % 2)){
    console.log("Четное")
  }
  else {
    console.log("Не четное")
  }
}