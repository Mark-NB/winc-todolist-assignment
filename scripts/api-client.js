const apiAdress = 'http://localhost:3000/';

const getData = async (itemId) => {
    try {
        response = await fetch(`${apiAdress}${itemId}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        });
        jsonData = response.json();
        return jsonData;
    } catch (err) {
        console.log(`Something went wrong with loading the data : ${err}`);
    }
};

const postItem = async (item) => {
    try {
        response = await fetch(`${apiAdress}`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(item)
        });
        jsonData = response.json();
        return jsonData;
    } catch (err) {
        console.log(`Something went wrong with posting the item : ${err}`);
    }
};

const deleteItem = async (itemId) => {
    try {
        response = await fetch(`${apiAdress}${itemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json"
            }
        });
    } catch (err) {
        console.log(`Something went wrong with deleting the item : ${err}`);
    }
};

const modifyItem = async (itemId, item) => {
    try {
        response = await fetch(`${apiAdress}${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(item)
        });
        jsonData = response.json();
        return jsonData;
    } catch (err) {
        console.log(`Something went wrong with updating the item : ${err}`);
    }
};
