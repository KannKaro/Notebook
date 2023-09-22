
var FontStyle = function (font) {
    document.getElementById('Container').style.fontFamily = font.value; //zamiana rodzaju czcionki
}
var FontSize = function (font) {
    document.getElementById('Container').style.fontSize = font.value; //zmiana wielkosci czcionki
}

const saveFile = async () => {
    try {
        var mystring = document.getElementById('Container').value
        var myblob = new Blob([mystring], {
            type: 'text/plain'
        });
        const handle = await window.showSaveFilePicker({
            types: [{
                accept: {
                    // Omitted
                },
            }],
        });
        const writable = await handle.createWritable();
        await writable.write(myblob);
        await writable.close();
        return handle;
    } catch (err) {
        console.error(err.name, err.message);
    }
};

let input = document.querySelector('input')

let container = document.querySelector('textarea')

input.addEventListener('change', () => {
    let files = input.files;
 
    if (files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;
 
        const lines = file.split(/\r\n|\n/);
        container.value = lines.join('\n');
 
    };
    
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file);
});