class Tables {
  init(conexao) {
    this.conexao = conexao
    this.criarAtendimento()
  }
  criarAtendimento() {
    const sql = 'CREATE TABLE IF NOT EXISTS ATENDIMENTOS (id INT NOT NULL AUTO_INCREMENT, cliente VARCHAR(50) NOT NULL, pet VARCHAR(20), servico VARCHAR(20) NOT NULL, status VARCHAR(20) NOT NULL, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL observacoes TEXT, PRIMARY KEY(id))'

    this.conexao.query(sql, (err) => {
      if(err) {
        console.log('Não foi possível criar a tabela')
      }else {
        console.log('Tabela atendimentos criada com sucesso');
        
      }
    })
  }

}

module.exports = new Tables