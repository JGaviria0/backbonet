const axios  = require('axios');

const thenode = async ( nodes ) => {

    while( nodes ) {
        const node = nodes.shift();
        const result = await axios.get( `http://${node}:4000/areyouthere`, { timeout: 4})
        if (result.status == 200) {
            return node; 
        }
    }

    return 0; 
}

module.exports={thenode};