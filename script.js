function testResults(form) {
    let formData = new FormData(form);
    let obj = {};
    formData.forEach(function(value, key) {
        obj[key] = value;
    });
    var json = JSON.stringify(obj);
    alert(json);
    alert(JSON.stringify(Object.fromEntries(formData)));
}

let f = document.getElementById('form');
testResults(f);