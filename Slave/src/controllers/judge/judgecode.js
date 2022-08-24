const { spawn } = require("child_process");
const fs = require('fs').promises;


const runTestCases = (versionCPP, nameFile) => {

    const command = spawn( 'g++', ['-std='+versionCPP, nameFile, '-o', 'solution' ] )
    
    command.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    command.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    command.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    setTimeout( () => {
        if(isRun) {
            solution.kill();
            console.log("Time limit");
        }
    }, timeLimit )

    console.log(solution)
}

const handle = async (req, res) => {

    const filepath = `./files/code.${req.body.lenguage}`

    try {
        await fs.writeFile(filepath, req.body.code);
    } catch (error) {
        res.status(500).send(error);
    }
       
    runTestCases(' ');

    res.status(200).send("enviado, esperando respuesta")
}

module.exports=handle

