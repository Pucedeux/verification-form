document.getElementById('verificationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const name = document.getElementById('name').value;

    fetch('https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbxoZhZWcsSywCpw7iVsNcFtl9ayXe7TzAya2RsWPqHcY6h1JZjj5TfVS44x6p7_sL82/exec/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber, name })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Informations vérifiées avec succès !');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
