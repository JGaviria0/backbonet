const { Router } = require('express')

const router = Router();

router.get('/', (req, res) => {
    res.send("Hola mundo");
});

router.get('/code', (req, res) => {
    res.render('problem/sumitCode');
});

router.post('/code', async (req,res) => {

    const code = req.body.code;
    const ipnode = 'localhost'

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

router.get('/subscription', async (req,res) => {
  const ip =  req.connection.remoteAddress.substring(7);
  nodes.push(ip);
  res.send("Subscription succesfully.");
});

router.get('/newproblem', (req, res) => {
  res.render('problem/newProblem')
});

router.post('/newproblem', async (req,res) => {

    const code = req.body;
    const ipnode = 'localhost'

    console.log(code)
    res.redirect('/')

});

module.exports = router;