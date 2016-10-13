# Involves DevOps Challenge

### O que foi coberto nesse fork:

  - Adicionar um botão para limpar a tela.
  - Adicionar um botão, que quando pressionado, substitui uma citação que tenha `Windows` por `Linux is better`.
  - A porta em que a aplicação roda deverá ser configurável de forma fácil e sem estar hardcoded.
  - A url do MongoDB deverá ser configurável de forma fácil e sem estar hardcoded.
  - Automação dos passos até aqui.

### O que não foi coberto nesse fork:

  - Monitoramento
  - Integração Contínua
  - Entrega Contínua

### Tecnologias utilizadas:

  - Docker
  - Ansible
  - Github
  - Nginx
  
### Planejamento

Comecei elaborando os containers docker e o ansible playbook para os mesmos, pois é algo que eu já tenho experiência e conhecimento.
Inicialmente, eu iria rodar uma instância do mongodb via docker também, mas como não estava claro a necessidade disso, achei mais eficaz utilizar um banco mongodb free da mlab, onde eu ganharia tempo para poder pesquisar o que eu não sabia...

Como infelizmente nunca tive a oportunidade de trabalhar com uma equipe com a cultura de DevOps, meu planejamento baseou-se em: pesquisa, pesquisa, pesquisa e mais pesquisa...

Em todas empresas que trabalhei, nunca houveram processos envolvendo integração e entrega contínua, embora sempre tivesse interesse em aprender, mas nunca onde aplicar e testar...

### Usage

É necessário `root` para utilizar o playbook do ansible e localhost no arquivo de hosts do ansible.
A utilização é simples: basta baixar o playbook do ansible, passar as configurações via extra-vars (ansible-playbook -e) e voilá.

Variáveis: 

* `mongodb_host`: host/url do banco mongodb
* `app_listen`: porta que a aplicação nodejs escutará/rodará
* `docker_listen`: porta que o container do nodejs escutará/rodará
* `nginx_port`: porta do nginx proxy reverso

Exemplo:

```sh
wget https://raw.githubusercontent.com/guikolt/devops-challenge.sh/master/ansible/playbooks/involves.yml -O /tmp/involves.yml
```
```
$# ansible-playbook -e mongodb_host="involves:challenge@ds027896.mlab.com:27896/guikolt-involves" -e app_listen="3000" -e docker_listen="3000" -e nginx_port="8080" /tmp/involves.yml -u root -k
```

Assim, poderemos acessar a aplicação nodejs em http://127.0.0.1:3000 ou através do nginx proxy reverso em http://127.0.0.1:8080.

# Fim!



