const customExpress = require('./config/customExpress')
const conexao = require('./infrastructure/conection')
const app = customExpress()
conexao.connect( (err) => {
  if (err) {
    console.log('Não foi possível conectar no BD');
  }else {
    console.log('BD conectado!');
  }
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})