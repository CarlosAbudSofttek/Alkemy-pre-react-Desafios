var calculate = () =>{
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;
    for(var i = Number(from); i<=Number(to); i+=2){
        result = result ? `${result}, ${i}` : i;
    }
    document.getElementById("results").innerText = result;
}