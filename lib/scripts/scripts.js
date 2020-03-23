import * as gameController from './controllers/gameController';
import * as playerController from './controllers/playerController';
import { elements } from './base';

// functions

const clearLists = () => {
        clearList(player1);
        clearList(player2);
    }
    // clear current list
const clearList = (element) => {
    element.options.length = 0;
}

// fill all relevant boxes
const fillAll = (data) => {
    fillSelect(player1, data);
    fillSelect(player2, data);
}

// fill select boxes
const fillSelect = (element, data) => {
    let opt = document.createElement("option");
    opt.value = 'choose player';
    opt.innerHTML = 'choose player';
    element.appendChild(opt);
    for (player in data) {
        let opt = document.createElement("option");
        opt.value = player;
        opt.innerHTML = player;
        element.appendChild(opt);
    }
};

// remove name from player list
const updatePlayerList = (element, data, name) => {
    // fill list with all namnes
    clearList(element);
    fillSelect(element, data);

    let names = [];
    for (let i = 0; i < element.length; i++) {
        names[i] = element[i].value;
    }
    // remove 'choose player'
    names.shift();
    // search for given name and remove it
    for (let i = 0; i < names.length; i++) {
        if (names[i] == name) {
            console.log("we got a match");
            console.log(names[i]);
            names.splice(names.indexOf(names[i]), 1);
        }
    }
    console.log("after everything");
    console.log(names);

    // fill selectbox with remaining names
    clearList(element);

    let opt = document.createElement("option");
    opt.value = 'none';
    opt.innerHTML = 'choose player';
    element.appendChild(opt);
    for (let i = 0; i < names.length; i++) {
        let opt = document.createElement("option");
        opt.value = names[i];
        opt.innerHTML = names[i];
        element.appendChild(opt);
    }
};

// save json file
const saveJSON = (content, filename = '../foosball.txt', contentType = 'text/plain') => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(content, null, 2)], { type: contentType }));
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
            // console.log(data);
            // clearLists();
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
    // console.log(data);
    return data;
}
// event handlers
newPlayerformSubmit.addEventListener('click', event => {
    console.log('submitbutton clicked');
    event.preventDefault();
    const newPlayer = new Player(newplayername.value);
    saveJSON(newPlayer);
});

newPlayerform.addEventListener('click', event => {
    console.log("something clicked");

});

newGameForm.addEventListener('click', event => {
    event.preventDefault();
    let element = event.target.closest(".playerselect");
    let data = loadJSON();
    console.log(element);
    if (element.name === 'player1') {
        // change list in item 2
        console.log("clicked on:");
        console.log(element.value);
        updatePlayerList(player2, data, element.value);
    } else {
        // change list in item 1
    }

    // TODO: write 1 function for previous if else
});

// initial setup
(function() {
    getJSON();
})();