        function suma(){
            var n1= parseFloat (document.getElementById("n1").value); //parseInt unicamente para numeros enteros y parseFloat para numero reales
            var n2= parseFloat (document.getElementById("n2").value);
            document.getElementById("resultado").innerHTML= n1+n2;
        }

        function resta(){
            var n1= parseFloat (document.getElementById("n1").value);
            var n2= parseFloat (document.getElementById("n2").value);
            document.getElementById("resultado").innerHTML= n1-n2;
        }

        function division(){
            var n1= parseFloat (document.getElementById("n1").value);
            var n2= parseFloat (document.getElementById("n2").value);
            if (n2==0)[alert("Imposible dividir por 0")]
            document.getElementById("resultado").innerHTML= n1/n2;
        }

        function multiplicacion(){
            var n1= parseFloat (document.getElementById("n1").value);
            var n2= parseFloat (document.getElementById("n2").value);
            document.getElementById("resultado").innerHTML= n1*n2;
        }        
        