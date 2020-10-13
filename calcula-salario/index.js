function calculaSalario() {
    var nome = document.getElementById("nome").value; 
    var idade = document.getElementById("idade").value; 
    var cargo = document.getElementById("cargo").value; 
    var salario = parseFloat(document.getElementById("salario").value); 

    var reajuste = 0.38 * salario; 
    var gratificacao = 0.20 *salario; 
    var salarioBruto = salario + reajuste + gratificacao;
    var salarioLiquido = salarioBruto - (0.15 * salarioBruto)

    var solucao = "<hr><p> Nome: " + nome + "</p>" + 
                "<p> Idade: " + idade + "</p>" + 
                "<p> Cargo: " + cargo + "</p>" + 
                "<p> Salário: " + salario + "</p>" + 
                "<p> Salário Bruto: " + salarioBruto + "</p>" + 
                "<p> Salário Liquido: " + salarioLiquido + "</p>";

    document.getElementById("resultado").innerHTML = solucao; 
}