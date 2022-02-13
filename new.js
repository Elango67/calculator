function update(value) {
    document.getElementById("num").value += value
}

function result() {
     var k = document.getElementById("num").value
    document.getElementById("num").value = eval(k);
}

function form_reset() {
    document.getElementById("num").value = '';
}