document.getElementById('verificationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const name = document.getElementById('name').value;

    // Envoyer les données à un serveur ou les stocker localement
    console.log('Numéro de téléphone:', phoneNumber);
    console.log('Nom:', name);

    // Exemple de stockage local (localStorage)
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push({ phoneNumber, name });
    localStorage.setItem('contacts', JSON.stringify(contacts));

    alert('Informations vérifiées avec succès !');
});