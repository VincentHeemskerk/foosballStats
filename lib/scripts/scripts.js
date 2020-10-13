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

// initial setup
(function() {
    getJSON();
})();