# Usando a imagem base do Node.js 22 
FROM node:22

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando package.json e package-lock.json
COPY package*.json  ./

# Instalando dependências: vai instalar os módulos que o Node.js irá utilizar como Express e Axios
RUN npm install
 
# Copiando os arquivos da aplicação
COPY  .  .

# Expondo a porta que a API vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "index.js"]