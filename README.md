# Involves Devops challenge

# Considerações Iniciais

Bom, Primeiramente gostaria de agradecer a oportunidade de fazer este desafio e também a oportunidade de mostrar meu trabalho.  

# Desafio

### Requisitos 

- Docker 
- docker-compose

Foram feitas as cinco tarefas que estavam previstas neste desafio. 

O projeto está atualmente dividido em três diretórios sendo eles: webserver, mongo_seed e o cadvisor.

- webserver contém o código fonte do webapp utilizando nodejs com um Dockerfile para iniciar este webapp.
- mongo_seed contém informações de configuração do banco de dados mongodb.
- cadvisor já este diretório contém um docker-compose para subir o cadvisor para monitoramento dos contêineres.

No diretório raiz do projeto foi criado um docker-compose que inicia o servidor web e um mongodb.

## Build and Running projeto:

`docker-compose up --build`

Pronto nosso projeto está rodando na porta `127.0.0.1:3000` 

### Monitoramento Cadvisor

Foi criado este diretório para rodar o Cadvisor que sua função é monitorar os contêineres.

`cd cadvisor` 

`docker-compose up --build`

Pronto nosso monitoramento de contêineres já está rodando: `127.0.0.1:8080`

## Planejamento para colocar em produção 

Primeiramente iria desenvolver umas playbooks utilizando ansible para criar e provisionar um parque de máquinas.

- Criar três máquinas e provisionar para criar um cluster de docker com o `Docker Swarm` 
- Criar uma máquina que seria instalado e configurado o Jenkins para fazer o build e deploy da aplicação no cluster de docker.
- Para o monitoramento dos contêineres será utilizados as ferramentas  Elasticsearch and cAdvisor.

Muito obrigado 

Leandro Amaral
