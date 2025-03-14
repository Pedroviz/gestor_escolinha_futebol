Passo a Passo para Rodar o Projeto 'Gestor Escolinha de Futebol'
 1. CLONAR O REPOSITÓRIO
   Abra o terminal e rode:
   git clone https://github.com/Pedroviz/gestor_escolinha_futebol.git
   cd gestor_escolinha_futebol
 2. CONFIGURAR O BACKEND (Node.js)
   - Entrar na pasta do backend:
     cd backend
   - Instalar as dependências:
     npm install
   - Criar o arquivo .env com as variáveis de ambiente (se necessário):
     PORT=5000
     DATABASE_URL=mongodb://localhost:27017/escolinha
   - Rodar o backend:
     npm start
     (Ou, se estiver usando nodemon: npm run dev)
   - O backend estará rodando em http://localhost:5000
 3. CONFIGURAR O FRONTEND (React)
   - Voltar para a pasta principal e entrar no frontend:
     cd ../frontend/escolinha
   - Instalar as dependências:
     npm install
   - Rodar o frontend:
     npm start
   - O frontend estará acessível em http://localhost:3000
 4. CONFIGURAR O BANCO DE DADOS (Se necessário)
   - Instale e rode o banco de dados localmente.
   - Crie um banco chamado 'escolinha'.
   - Verifique a string de conexão no backend.
 DICAS IMPORTANTES
   - Se der erro no backend, verificar se a porta 5000 está livre.
   - Se der erro no frontend, deletar node_modules e reinstalar:
     rm -rf node_modules package-lock.json
     npm install
   - Para pegar atualizações do código:
     git pull origin main
   - Para contribuir, criar uma nova branch:
     git checkout -b minha-branch
