const { Router } = require('express')
const { thenode } = require('../controllers/chooseNode')
const router = Router();

const nodes = [];


router.get('/', (req, res) => {
    res.send("Hola mundo");
});

router.get('/code', (req, res) => {
    res.render('problem/sumitCode');
});

router.post('/code', async (req,res) => {

    const code = req.body.code;
    

    axios({
        method: 'post',
        url: `http://${ipnode}:4000/runcode`,
        data: {
            code: code,
            language: "cpp"
        }
    });

    res.redirect('/');

});

// router.get('/subscription', async (req,res) => {
//   const ip =  req.connection.remoteAddress.substring(7);
//   nodes.push(ip);
//   res.send("Subscription succesfully.");
// });

router.get('/newproblem', (req, res) => {
  res.render('problem/newProblem')
});

router.get('/newnode', (req, res) => {
  const ip =  req.connection.remoteAddress.substring(7);

  if (!nodes.includes(ip)){
    nodes.push(ip);
    console.log(nodes);
  }
  
  res.status(200).send("Get it!");
});

router.get('/test', async (req, res) => {
    const nodetouse = await thenode( nodes );
    console.log('el nodo es ', nodetouse);
    res.status(200).send('gg');
});

router.post('/newproblem', async (req,res) => {

    const code = req.body;
    const ipnode = 'localhost'

    console.log(code)
    res.redirect('/')

});

module.exports = router;