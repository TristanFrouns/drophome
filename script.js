const form = document.getElementById('form');
console.log(form);
const pays = document.getElementById('pays');
console.log(pays);
const start = document.getElementById('start');
console.log(start);
const end = document.getElementById('end');
console.log(end);


form.addEventListener('submit',function(e) {
    e.preventDefault();
    console.log('formulaire validé');
    const choix = {
        pays : pays.value,
        start : start.value,
        end : end.value
    };
    console.log(choix,"choix");
    const choixString = JSON.stringify(choix);
    console.log(choixString)
    localStorage.setItem('details',choixString);
});



function displaydetails(){
    const choixObjet = JSON.parse(localStorage.getItem('details'));
    console.log(choixObjet,'choix objet');
};

displaydetails();



