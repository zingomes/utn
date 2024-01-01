
var reader = new FileReader();
var meta;
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var id = this.id;
            switch (id) {
                case 'visits':
                    meta = 1;
                    break;
                case 'view':
                    meta = 2;
                    break;
                default:
                    meta = 0;
            }
        });
    }
});

function previewImage(event) {
    reader.onload = function(e) {
        var img = new Image();
        img.onload = function() {
            var width = this.width;
            var height = this.height;

            if (width !== 512 || height !== 512) {
                document.getElementById('msg_i').textContent = 'Erro: A imagem deve ter 500x500 pixels.';
                return;
            }

            var output = document.getElementById('preview');
            output.style.backgroundImage = 'url(' + reader.result + ')';
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}



