# 1.1 Setup
Utilzei um programa csv_to_json.py para converter o contratos2024.csv em formato json. Depois substituir o idcontrato por _id
Para dar import utilizei os seguintes comandos:
>>> docker cp contratos2024.json mongoEW:/tmp
>>> docker exec -it mongoEW bash
>>> mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray
## Exercicio 1
Para executar o exercicio 1 temos de fazer:
>>> npm i
>>> npm i mongoose
>>> npm start

Exemplo postman:
- Get /contratos : http://localhost:16000/contratos
- Get /contratos/:id : http://localhost:16000/contratos/10424702
- GET /contratos?entidade=EEEE: http://localhost:16000/contratos?entidade=Freguesia de Candoso (São Martinho)
- GET /contratos?tipo=AAA: http://localhost:16000/contratos?tipo=Ajuste Direto Regime Geral
- GET /contratos/entidades:  http://localhost:16000/contratos/entidades
- GET /contratos/tipos:  http://localhost:16000/contratos/tipos
- Post /contratos: http://localhost:16000/contratos  Body: {
        "_id": "10424702",
        "nAnuncio": "",
        "tipoprocedimento": "Ajuste Direto Regime Geral",
        "objectoContrato": "Limpeza e manutenção de jardins, canteiros e pequenas podas\r\n",
        "dataPublicacao": "02/01/2024",
        "dataCelebracaoContrato": "02/01/2024",
        "precoContratual": "7500",
        "prazoExecucao": "364",
        "NIPC_entidade_comunicante": "510836160",
        "entidade_comunicante": "União das Freguesias de Conde e Gandarela",
        "fundamentacao": "Artigo 20.º, n.º 1, alínea d) do Código dos Contratos Públicos"
    }

- PUT /contratos: http://localhost:16000/contratos/10424702  Body: {
        "_id": "10424702",
        "nAnuncio": "",
        "tipoprocedimento": "tipooooo",
        "objectoContrato": "Limpeza e manutenção de jardins, canteiros e pequenas podas\r\n",
        "dataPublicacao": "02/01/2024",
        "dataCelebracaoContrato": "02/01/2024",
        "precoContratual": "7500",
        "prazoExecucao": "364",
        "NIPC_entidade_comunicante": "510836160",
        "entidade_comunicante": "União das Freguesias de Conde e Gandarela",
        "fundamentacao": "Artigo 20.º, n.º 1, alínea d) do Código dos Contratos Públicos"
    }
- Delete -> http://localhost:16000/contratos/10424702


## Exercicio 2
Para executar o ex2, temos de primeiro executar o ex1 com o npm start, que vai responder na porta 16000
Depois executar o ex2 com o comando npm start (este vai responder na porta 16001)

Exemplos:
- http://localhost:16001/entidades -> Página com a tabela com todas as entidades
- http://localhost:16001/10424331 -> Página do contrato com id 10424331

- http://localhost:16001/entidades/507853024 -> Devolve a entidade com o NIPC 507853024, onde tem uma tabela com os contratos que a entidade tem