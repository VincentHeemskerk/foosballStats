// variables
let newPlayerform = document.getElementById('newplayerform__submit');
let newGameForm = document.getElementById('newgameform');
let player1 = document.getElementById('player1select');
let player2 = document.getElementById('player2select');
let player1score = document.getElementById('player1score');
let player2score = document.getElementById('player2score');

// classes
class Player {
    constructor(name) {
        this.name = name;
    }
}

class Game {
    constructor(player1, player2, result1, result2) {
        this.player1 = player1;
        this.player2 = player2;
        this.result1 = result1;
        this.result2 = result2;
    }
}

// functions

// fill all relevant boxes
const fillAll = (data) => {
    fillSelect(player1, data);
    fillSelect(player2, data);
}

// fill select boxes
const fillSelect = (element, data) => {
    for(player in data) {
        let opt = document.createElement("option");
        opt.value = player;
        opt.innerHTML = player;
        element.appendChild(opt);
    } 
}

// save json file
const saveJSON = (content, filename = '../foosball.txt', contentType = 'text/plain') => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(content, null, 2)], {type: contentType}));
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

// load json file
const loadJSON = (filename = '_foosball.txt', url = '') => {
    let request = new XMLHttpRequest();
    // console.log(url + filename);
    request.open('GET', filename, true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        console.log('succes!');
        let data = JSON.parse(request.responseText);
        console.log(data);
        fillAll(data);

        return data;
    } else {
        // We reached our target server, but it returned an error
        console.log('reached server, but still an error');
    }
};
request.onerror = function() {
    // There was a connection error of some sort
    console.log('connection error');
    };
    request.send();
};


async function getJSON() {
    let data = await loadJSON();
    console.log(data);
    return data;
}
// event handlers
newPlayerform.addEventListener('click', event => {
    event.preventDefault();
    const newPlayer = new Player(newplayername.value);
    saveJSON(newPlayer);
});

newGameForm.addEventListener('click', event => {
    event.preventDefault();
});

// initial setup
(function(){
    getJSON();
})();