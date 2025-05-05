let ctof = document.getElementById('celsius_faranhite');
let ftoc = document.getElementById('faranhite_celsius');


document.getElementById('btn').onclick = function(){
  if(ctof.checked){
    input = document.getElementById('num').value;
    document.getElementById('out').textContent = `${Number((input) * 9/5) + 32} Fahrenheit`;
  }
  else if(ftoc.checked) {
    input = document.getElementById('num').value;
    document.getElementById('out').textContent = `${Number((input) - 32) * 5/9} Celsius` ;
  }

}
