# Ultima imagem do node 4.6.0 (argon)
FROM node:argon

# Cria diretorio da aplicacao nodejs da Involves DevOps Challenge
RUN mkdir -p /tmp/guikolt-involves-devops-challenge
WORKDIR /tmp/guikolt-involves-devops-challenge

# Instalando dependencias via npm
COPY package.json /tmp/guikolt-involves-devops-challenge
RUN npm install

# Copiando app nodejs
COPY . /tmp/guikolt-involves-devops-challenge

# Inicia a aplicacao
CMD [ "npm", "run", "dev" ]
