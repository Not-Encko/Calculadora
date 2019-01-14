
//Al pulasar un numero se pone en panatalla
function insert(num){
  document.form.textview.value = document.form.textview.value+num;
}


//Igual =
function equal(){
  var exp = document.form.textview.value;
  if(exp){
    document.form.textview.value = eval(exp)
  }
}


//Borrar Todo
function clean(){
  document.form.textview.value = "";
}


//Borrar 1
function back(){
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length-1);
}
