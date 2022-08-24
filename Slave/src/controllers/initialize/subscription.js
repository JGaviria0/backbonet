const axios = require('axios');

const { MASTERNODE } = process.env; 

( async () => {
    const result = await axios.get(`http://${MASTERNODE}:3000/newnode`);
    if (result.status == 200) {
        console.log ('Succes subscription');
    } else {
        console.log ('Failed subscription, it does not conected');
    }
    
})();