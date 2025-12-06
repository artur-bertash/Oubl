export default async function ankiConnectInvoke(action, version, params={}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('error', () => reject('failed to connect to AnkiConnect'));
        xhr.addEventListener('load', () => {
            try {
                const response = JSON.parse(xhr.responseText);
                if (response.error) {
                    throw response.error;
                } else {
                    if (response.hasOwnProperty('result')) {
                        resolve(response.result);
                    } else {
                        reject('failed to get results from AnkiConnect');
                    }
                }
            } catch (e) {
                reject(e);
            }
        });

        xhr.open('POST', 'http://127.0.0.1:8765');
        xhr.send(JSON.stringify({action, version, params}));
    });
}

try {
    const result = await ankiConnectInvoke('deckNames', 5);
    console.log(`got list of decks: ${result}`);
} catch (e) {
    console.log(`error getting decks: ${e}`);
}