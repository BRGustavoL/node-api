const Atendimento = require('../models/atendimentos')
module.exports = (app) => {
  app.get('/atendimentos', (req, res) => {
    Atendimento.lista(res)
  })

  app.get('/atendimento/:id', (req, res) => {
    const id = parseInt(req.params.id)
    Atendimento.findById(id, res)
  })

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body
    Atendimento.adiciona(atendimento)
  })

  app.patch('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const val = req.body
    Atendimento.altera(id, val, res)
  })

  app.delete('/atendimento/:id', (req, res) => {
    const id = parseInt(req.params.id)
    Atendimento.deleta(id, res)
  })
}