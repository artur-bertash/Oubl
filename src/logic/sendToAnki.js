
let requestCounter = 0;

export default async function ankiConnectInvoke(action, version, params = {}) {
    return new Promise((resolve, reject) => {
        const requestId = `anki-request-${Date.now()}-${requestCounter++}`;


        const responseHandler = (event) => {
            if (event.detail.requestId === requestId) {
                window.removeEventListener('oubl-anki-response', responseHandler);

                if (event.detail.success) {
                    resolve(event.detail.result);
                } else {
                    reject(event.detail.error || 'Failed to communicate with AnkiConnect');
                }
            }
        };


        window.addEventListener('oubl-anki-response', responseHandler);


        window.dispatchEvent(new CustomEvent('oubl-anki-request', {
            detail: {
                requestId,
                action,
                version,
                params
            }
        }));


        setTimeout(() => {
            window.removeEventListener('oubl-anki-response', responseHandler);
            reject('Timeod out after 30s')
        }, 30000);
    });
}


