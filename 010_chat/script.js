function getMessages() {
    fetch('https://test.sunbeng.eu/api/messages')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Error getting messages');
            }
        })
        .then(function (messages) {
            const ol = document.querySelector('#messages');
            ol.textContent = ''; // Entleert Liste wg setInterval - unten

            for (const message of messages) {
                const li = document.createElement('li');

                const span1 = document.createElement('span'); // zum stylen
                span1.textContent = message.timestamp;
                span1.classList.add('timestamp');

                const span2 = document.createElement('span');
                span2.textContent = `${message.name}`;
                span2.classList.add('user');

                const span3 = document.createElement('span');
                span3.textContent = message.text;
                // span3.classList.add('text');

                // li.textContent = `${message.name}: ${message.text}`;


                li.appendChild(span1);
                li.appendChild(span2);
                li.appendChild(span3);

                ol.appendChild(li);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

}

//getMessages();
setInterval(getMessages, 500); // Ruf die Funktion getMessages alle 500ms auf (aktualisiert)


function onSendClick(event) {
    const message = {
        name: document.querySelector('#input_name').value,
        text: document.querySelector('#input_text').value,
    };

    // Um ein JSON an den Server zu schicken:
    // 1. method: 'POST'
    // 2. Content-Type Header
    // 3. JSON.stringify

    fetch('https://test.sunbeng.eu/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
        .then(function (response) {
            if (response.ok) {
                document.querySelector('#input_text').value = '';
                getMessages();
            }
            else {
                throw new Error('Error posting message');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}


document.querySelector('#button_send').addEventListener('click', onSendClick);