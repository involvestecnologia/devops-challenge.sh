> # Involves Devops challenge
>
> Este repositório tem como objetivo disponibilizar um simples app em NodeJs que interage com uma instância do mongoDB.

### Planning:

A infraestrutura foi projetada em cima de containers providos pelo [AZK](http://www.azk.io/) e gerenciado pelo [Docker](https://www.docker.com/).

- AZK é uma opção ao Docker-Compose, tem como objetivo configurar imagens para gerar containers ao Docker.

O proxy reverse está do host para o container na porta 8080.

- Através do $NGINX_CONF/sites-enable/devops-challangesh

Configurações acessiveis através do Azkfile.js

- Azkfile.js é opção ao docker-compose.yml.

Aplicação alterada conforme solicitado através de variáveis ambiente.

- Environment para HTTP_PORT(PORT) e MONGODB_URI(MONGODB_URI).

## Usage
Necessary in host:

1. Download docker --version >= 1.11.2
2. Download azk --version >= 0.19.0
3. Download Nginx --version >= 1.10.0
4. Download Git --version >= version 2.7.4

Start application:

1. <code>git clone git@github.com:renanberto/devops-challenge.sh.git && cd devops-challenge.sh</code>
2. <code>azk start -R mongodb -vv</code>
3. <code>azk start -R devops-challengesh -vv</code>
4. <code>sudo mv nginx_conf/devops-challengesh /etc/nginx/sites-available/ && sudo ln -s /etc/nginx/sites-available/devops-challengesh /etc/nginx/sites-enabled/ && sudo service nginx restart</code>
5. <code>access http://devops-challengesh.dev.azk.io:3000 to application and http://mongodb.dev.azk.io:28017/ to mongodb.</code>


[![Run project](https://s3-sa-east-1.amazonaws.com/assets.azk.io/run-project.png)](http://run.azk.io/start/?repo=renanberto/devops-challenge.sh&ref=azkfile)
