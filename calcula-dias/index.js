function calculaDias() {
    var nome = document.getElementById("nome").value; 
    var ano = parseInt(document.getElementById("ano").value);
    var mes = parseInt(document.getElementById("mes").value);
    var dias = parseInt(document.getElementById("dias").value); 

    var idadeDias =  356 * ano + 30 * mes + dias; 
    
    var solucao = "<hr><p> Nome: " + nome + "</p>" + 
    "<p> Ano: " + ano + "</p>" + 
    "<p> Mes: " + mes + "</p>" + 
    "<p> Dias: " + dias + "</p>" + 
    "<p> Dias Vividos: " + idadeDias + "</p>";

    document.getElementById("resultado").innerHTML = solucao; 
}