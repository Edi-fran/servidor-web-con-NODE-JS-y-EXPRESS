var arreglo_ingreso= []; 
function recoger()
{
    let dato1=document.getElementById('ingreso1').value;
    arreglo_ingreso.push(dato1);
    dato1==0;
    let dato2=document.getElementById('ingreso2').value;
    arreglo_ingreso.push(dato2);
    dato2==0;
    let dato3=document.getElementById('ingreso3').value;
    arreglo_ingreso.push(dato3);
    dato3==0;
    let dato4=document.getElementById('ingreso4').value;
    arreglo_ingreso.push(dato4);
    dato4==0;
    alert(arreglo_ingreso);
    if(arreglo_ingreso.length==0)
    {
        document.getElementById('Salida').innerHTML= "datos no guardados" ;
    }
    else
    {
        document.getElementById('Salida').innerHTML= "datos  guardados" ;
    }
    

  }

  function eliminar(){
    document.getElementById('ingreso1').value=" ";
    document.getElementById('ingreso2').value=" ";
    document.getElementById('ingreso3').value=" ";
    document.getElementById('ingreso4').value=" ";
    document.getElementById('Salida').value=" ";
  }