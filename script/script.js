 function calcular(){
    // puxar os valores dos coeficientes

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    // é essencial que o valor de a seja maior ou menor que zero, porém não seja = 0. Portanto:

    if (a == 0){
        alert("O valor de a = 0, não é uma equação do 2º grau!");
    }

    // calcular primeiramente o delta da equação

    let r1 = document.getElementById("r1");
    letr2 = document.getElementById("r2");
    let informacaoDaEq = document.getElementById("informacaoDaEq");

    r1.innerHTML = "";
    r2.innerHTML = "";
    informacaoDaEq.innerHTML = "";

    let delta = Math.pow(parseFloat(b), 2) - 4 * parseFloat(a) * parseFloat(c);

    if (delta < 0){
        alert("Esta equação não tem soluções reais! Delta menor que 0");
    }

    else if (delta == 0){

        let x1 = (-(b) + Math.sqrt(delta)) / (2 * a);
        let x2 = (-(b) - Math.sqrt(delta)) / (2 * a);

        informacaoDaEq.innerHTML = "Delta = 0 --> x1 = x2";
        r1.innerHTML = "X1 = " + x1.toFixed(4);
        r2.innerHTML = "X2 = " + x2.toFixed(4);

    }

    else if (delta > 0){

        let x1 = (-(b) + Math.sqrt(delta)) / (2 * a);
        let x2 = (-(b) - Math.sqrt(delta)) / (2 * a);

        informacaoDaEq.innerHTML = "Delta > 0 --> x1 diferente de x2";
        r1.innerHTML = "X1 = " + x1.toFixed(4);
        r2.innerHTML = "X2 = " + x2.toFixed(4);

    }
 }