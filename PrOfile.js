
function loadFile(event) {
    var image = document.getElementById('profile-pic');
    image.src = URL.createObjectURL(event.target.files[0]);
} 
