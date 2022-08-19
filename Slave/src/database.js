const mongoose = require('mongoose');

const { IPMONGO } = process.env;

( async () => {
    try { 
        const db = await mongoose.connect(`mongodb://${IPMONGO}/backbonet`);
        console.log("DB connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();