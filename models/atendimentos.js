const moment = require('moment')
const conexao = require('./infrastructure/conection')

class Atendimento {
  adiciona(atendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    const dataIsValidate = moment(data).isSameOrAfter(dataCriacao)
    const clientIsValidate = atendimento.cliente.length >= 5
    const validacoes = [
      {
        nome: 'data',
        valido: dataIsValidate,
        mensagem: 'Data deve ser maior ou igual a data atual'
      },
      {
        nome: 'cliente',
        valido: clientIsValidate,
        mensagem: 'Cliente deve ser igual ou maior que 5 caracteres'
      }
    ]

    const erros = validacoes.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros) {
      res.status(400).json(erros)
    }else {
      const atendimentoDatado = {
        ...atendimento,
        dataCriacao,
        data
      }
      const sql = 'INSERT INTO atendimentos SET ?'
  
      conexao.query(sql, atendimentoDatado, (err, resultado) => {
        if(err) {
          res.status(400).json(err)
        }else {
          res.status(201).json(resultado)
        }
      })
    }
  }

  lista(res) {
    const sql = 'SELECT * FROM atendimentos'
    conexao.query(sql, (err, resultado) => {
      if(err) {
        res.status(400).json(err)
      }else {
        res.status(200).json(resultado)
      }
    })
  }

  findById(id, res) {
    const sql = `SELECT * FROM atendimentos WHERE id = ${id}`
    conexao.query(sql, (err, resultado) => {
      if(err) {
        res.status(400).json(err)
      }else {
        res.status(200).json(resultado)
      }
    }) 
  }

  altera(id, val, res) {
    if(val.data) {
      val.data = moment(val.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    }
    const sql = 'UPDATE atendimentos SET ? WHERE id = ?'
    conexao.query(sql, [val, id], (err, resultado) => {
      if(err) {
        res.status(400).json(err)
      }else {
        res.status(200).json(resultado)
      }
    })
  }

  deleta(id, res) {
    const sql = 'DELETE FROM atendimentos WHERE id = ?'
    conexao.query(sql, id, (err, resultado) => {
      if(err) {
        res.status(400).json(err)
      }else {
        res.status(200).json(resultado)
      }
    })
  }

}
module.exports = new Atendimento