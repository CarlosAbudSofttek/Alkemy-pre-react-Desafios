var d02_calculate = () =>{
    let qty = Number(document.getElementById("d02_quantity").value);
    let result = [];
    result[0] = 0;
    for(var i = 1; i<qty; i++){
        result.push(result.length > 1 ? result[i-2] + result[i-1] : 1);
    }
    document.getElementById("d02_results").innerText = result.join(' ');
}