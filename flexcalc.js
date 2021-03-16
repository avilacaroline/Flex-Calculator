var ethanol, gasoline; 

function calc() {
    ethanol = parseFloat(frmFlex.txtEthanol.value.replace(",","."));
    gasoline = parseFloat(frmFlex.txtGasoline.value.replace(",","."));

    if (ethanol < 0.7 * gasoline){
        document.getElementById("status").src='assets/etanol.png';
    } else{
        document.getElementById("status").src='assets/gasolina.png';
    }
}


function resetar() {
    document.getElementById("status").src='assets/neutro.png';
}