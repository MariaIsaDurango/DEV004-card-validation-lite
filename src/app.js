function validate () {
    //valor del input
     const crediCard = document.getElementById("crediCard").value;
 // identifica valor ingresado en input sea caracter numerico
  if (isNaN (crediCard)) {
     alert ("ingresar solo datos numericos");
 } else {
     alert("validando datos ingresados");
     //pedir que entre a mi algoritmo
     isValid (crediCard)
   }
 }
   

 // Algoritmo
  
 function isValid (crediCard) {
    console.log(crediCard)
    let separado = crediCard.split("")
    console.log(separado)
    let reversa = separado.reverse()
    console.log(reversa)
    let suma = 0
    // dobla cada dos digito
        for (let i = 1; i < reversa.length; i += 2) {
            let dobla = Number(reversa[i]) * 2;
            //reversa[i] = dobla;
            if (dobla > 9) {
           //console.log(dobla)
                let sumadosdigitos = dobla - 9
                suma = suma + sumadosdigitos
            }
            else {
                suma = suma + dobla
            }
        }
       console.log(suma)
       console.log(reversa)
       for ( let index =  0; index < reversa.length; index += 2) {
        //sumar impares 
        if (suma %10 == 0  )
        suma = suma + reversa[index]

         }
       console.log = (suma)
 
     }



         // llamo mi numero y lo convierto de string a entero con parseInt
    /* let numero = parseInt(prompt("crediCard")); {
        console.log
        // aqui condiciono numero  si es mayo o igual a 9
        if (numero >= 9) {
        // se pasa de nuevo numero a string
            numero = numero.toString()
        // aqui creo el array con split    
            .split('')
        //pasar nuevamente a entero    
            .map(x => parseInt(x))
        // realiza la suma    
            .reduce((x,y) => x + y);

     }    
     */   
      
     //}

    

   
 

 //for (let i=0; i<9; i++) {
   // console.log(i);
   //} 
       
    // tip:bucle for
    //intenta recorrer crediCard
    // 367734136876842
    // 3
    // 6
    // 7
    // 7

//if(nums[0]==9 || nums[nums.length-1] == 9)
			//return true;
		//else
			//return false;
	//}

 
 
 
 