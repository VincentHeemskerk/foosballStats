let newPlayerform = document.getElementById('newplayerform');
newPlayerform.addEventListener('click', event => {
    event.preventDefault();
    let name = newplayername.value;
    console.log(name);
});