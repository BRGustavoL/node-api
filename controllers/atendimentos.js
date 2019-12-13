module.exports = (app) => {
  app.get('/atendimentos', (req, res) => {
    res.send('atendimentos get')
  })

  app.post('/atendimentos', (req, res) => {
    console.log(req.body);
    res.send('atendimentos post')
  })
}