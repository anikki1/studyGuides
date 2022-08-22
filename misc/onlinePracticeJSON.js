const fs = require('fs');

// create a JSON object
const user = {
    "id": 1,
    "name": "John Doe",
    "age": 22
};

// convert JSON object to string
// const data = JSON.stringify(user);

// pretty-print JSON object to string
const data = JSON.stringify(user, null, 4);

// write JSON string to a file
fs.writeFile('user.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});



try {
    fs.writeFileSync('user.json', data);
    console.log("JSON data is saved.");
} catch (error) {
    console.error(err);
}


// read JSON object from file
fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    // parse JSON object
    const user = JSON.parse(data.toString());

    // print JSON object
    console.log(user);
});