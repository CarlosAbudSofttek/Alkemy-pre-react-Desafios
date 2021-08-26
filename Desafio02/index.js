var calculate = () => {
    const qty = Number(document.getElementById("quantity").value);
    let result = Array.from({ length: qty }).reduce(
        (pre, _, idx) => pre.concat(idx > 1 ? pre[idx - 1] + pre[idx - 2] : idx), []);
    
    document.getElementById("results").innerText = result.join(' ');
}
