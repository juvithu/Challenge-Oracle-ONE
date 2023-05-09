const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btmEncriptar() {

    const textoEncriptar = encriptar(textArea.value);
    mensagem.value = textoEncriptar;
    textArea.value = "";
}   

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}   


function btmDesencriptar() {

    const textoDesencriptar = desencriptar(textArea.value);
    mensagem.value = textoDesencriptar;
    textArea.value = "";
}   

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptar
}   