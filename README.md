# Exemplo Devops

 Este repositório tem como objetivo disponibilizar um simples app em NodeJs que interage com uma instância do mongoDB. Além disso usaremos docker, Ansible e Jenkins.

### Requisitos

- Utilizar docker 1.12
- Esse projeto espera que você esteja utilizando o Docker na sua própria máquina.
- Você deve ter ssh-server rodando na sua máquina e devida permissão para o usuário no grupo docker.
- Conexão com a internet para efetuar download dos containers e github.


### Rodando container Jenkins e Ansible.

- docker run -p 8080:8080 -v /tmp:/tmp -it robertvilvert/godfather:1.0 /bin/bash 

##### No primeiro acesso ao container:
- Será solicitado ip da sua máquina.
- Será solicitado um usuário da sua máquina. (Garanta que o usuário informado pertença ao grupo docker).
- Será solicitado a senha do usuário cadastrado na fase anterior.

### Acessando o Jenkins

Em seu navegador de preferência, acesse: http://127.0.0.1:8080

### Jobs do Jenkins
No Jenkins temos três Jobs:
- 1-mongodb
- 2-application
- 3-nginx
### Usabilidade
 - Execute os Jobs em ordem de 1 para 3, pois a aplicação depende do MongoDB, assim como Upstream do NginX depende de acesso ao docker service application
 - Os Jobs são parametrizados e permitem alterar portas de acesso e porta do MongoDB;

Sinta-se livre para alterar os jobs de acordo com sua necessidade! 
 

