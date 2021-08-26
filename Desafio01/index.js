var calculate = () => {
    let from = Number(document.getElementById("from").value);
    from += from % 2;//Ajusta al par inmediato superior
    let to = Number(document.getElementById("to").value);
    //Las posiciones del Array son la mitad + 1, ya que los bordes son inclusivos
    let result = Array.from({ length: (to - from) / 2 + 1 }, (_, i) => from + (i * 2));
    document.getElementById("results").innerText = result.join(', ');
}