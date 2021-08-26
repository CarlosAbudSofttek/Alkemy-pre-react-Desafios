var d01_calculate = () =>{
    let from = document.getElementById("d01_from").value;
    let to = document.getElementById("d01_to").value;
    let result;
    for(var i = Number(from); i<=Number(to); i+=2){
        result = result ? `${result}, ${i}` : i;
    }
    document.getElementById("d01_results").innerText = result;
}