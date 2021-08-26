var capitalize = () => {
    let txt = document.getElementById("capText");
    let arrTxt = txt.value.split(' ').map(w => (w && w[0].toUpperCase() + w.slice(1)) || "");
    txt.value = arrTxt.join(' ');
}