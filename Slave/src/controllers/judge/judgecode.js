const { exec } = require("child_process");
const fs = require('fs').promises;


const runTestCases = () => {

    console.log("Done")
    
    // exec("g++ files/code.cpp && ./a.out", (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(`error: ${error.message}`);
    //         break;
    //     }
    //     if (stderr) {
    //         console.log(`stderr: ${stderr}`);
    //         break;
    //     }
        
    // });
}

const handle = async (req, res) => {

    const filepath = `./files/code.${req.body.lenguage}`

    try {
        await fs.writeFile(filepath, req.body.code);
    } catch (error) {
        res.status(500).send(error);
    }
       
    runTestCases()

    res.status(200).send("enviado, esperando respuesta")
}

module.exports=handle

