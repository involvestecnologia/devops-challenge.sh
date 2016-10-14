# Involves Devops challenge

 Este PR tem como objetivo disponibilizar um simples app em NodeJs que interage com uma instancia do mongoDB.

### A aplicação

- Botão Delete que limpa todos os dados da base de dados

- Botão Update que faz o replace dos registros armazenados no mongodb, substituindo Windows por Linux is better

- Flexibilização da da porta e url não deu tempo de implementar mas estava pensando em fazer por parametro ao rodar npm -porta=1234 -url-mongo="mongodb..." run dev

### O ambiente

- Arquivo Dockerfiles disponivel em https://github.com/tirula/dockerfile-devops.git com maiores info no README.md do repositorio.

- Tambem por falta de tempo e alguns empecilhos no caminho nao consegui terminar 100% a montagem do ambiente. Docker configurado com nodejs, mongodb, git e npm.

- Tive alguns problemas em construir o ambiente com o docker-engine entao resolvi deixar de fora o jenkins.

Desfaio bastante interessante mas faltou um pouco de organizacão da minha parte e tempo para conclui-lo por inteiro.

Muito obrigado pela oportunidade.
