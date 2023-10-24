import fetch from 'node-fetch';

//const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
//const apiUrl = 'https://api.apis.guru/v2/list.json';
const apiUrl = 'https://api.coinbase.com/v2/exchange-rates?currency=BTC';

// Eine Funktion zum Abrufen von Beitragsdaten von der API und sie auf der Konsole anzuzeigen.
async function getPosts() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log('Beitragsdaten:');
      console.log(data);
    } else {
      console.error('Fehler beim Abrufen der Daten: ', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Ein Fehler ist aufgetreten: ', error);
  }
}

getPosts();
