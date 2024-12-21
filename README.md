# caixa-autoatendimento

![image](https://github.com/user-attachments/assets/8bb53851-d6ed-4c9a-963d-feaefda456fd)

![image](https://github.com/user-attachments/assets/c8a43a4f-0226-4891-8c85-1f18784cbd71)

![image](https://github.com/user-attachments/assets/c2a98242-0244-442f-9ff3-5ec7f786ffa1)

Documentação do Projeto: Caixa de Autoatendimento
1. Introdução
Este projeto consiste em um sistema de caixa de autoatendimento para supermercados. A aplicação foi desenvolvida utilizando React para o frontend, Node.js como backend e SQL Server para o banco de dados. O objetivo principal é simular o funcionamento de um sistema real de autoatendimento, permitindo interações como pagamento, registro de produtos e consultas de dados.
2. Funcionalidades
- Exibição de produtos no carrinho de compras, com nome, preço, quantidade e detalhes.
- Botão de pagamento que oferece opções de PIX, cartão de crédito ou débito.
- Funcionalidade para produtos grandes, que alerta sobre a necessidade de assistência de um funcionário.
- Integração com produtos hortifruti, solicitando que o cliente pese os itens na balança central.
- Inserção manual do código de barras por meio de um teclado numérico exibido na tela.
- Conexão com um banco de dados SQL Server para armazenar informações de produtos.
3. Estrutura do Projeto
O projeto está organizado da seguinte forma:
src/
├── components/
│   ├── Footer.js
│   ├── Header.js
│   ├── ShoppingCart.js
│   ├── Sidebar.js
│   └── Modal.js
├── styles/
├── App.css
├── App.js
├── index.js
├── package.json
└── README.md
4. Como Executar
Para executar o projeto, siga os passos abaixo:
1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
2. Clone o repositório do projeto para sua máquina local usando o comando:
   git clone https://github.com/Henriquepr15/caixa-autoatendimento.git
3. Navegue até o diretório do projeto:
   cd caixa-autoatendimento
4. Instale as dependências necessárias:
   npm install
5. Inicie o servidor de desenvolvimento:
   npm start
6. O aplicativo será aberto automaticamente no navegador em http://localhost:3000.
5. Configuração do Banco de Dados
O banco de dados utilizado é o SQL Server. Certifique-se de configurar o banco de dados com os seguintes passos:
1. Crie a tabela de produtos:
   CREATE TABLE Produtos (
       id INT PRIMARY KEY,
       nome NVARCHAR(100),
       preco DECIMAL(10, 2),
       quantidade INT,
       detalhes NVARCHAR(255)
   );
2. Insira os dados de exemplo:
   INSERT INTO Produtos (id, nome, preco, quantidade, detalhes)
   VALUES (1, 'Leite', 5.50, 10, '1L'),
          (2, 'Pão', 1.50, 20, 'Pacote com 6 unidades'),
          (3, 'Coca-Cola', 6.99, 15, '350ml');
6. Melhorias Futuras
- Implementar autenticação para diferentes usuários (clientes e administradores).
- Melhorar a responsividade do layout para diferentes tamanhos de tela.
- Adicionar suporte a múltiplos idiomas.
- Implementar testes automatizados para garantir a qualidade do código.
- Melhorar a integração com dispositivos físicos, como leitores de código de barras e balanças.
7. Conclusão
O projeto 'Caixa de Autoatendimento' é uma solução inovadora para melhorar a experiência de compra em supermercados. Ele utiliza tecnologias modernas para fornecer um sistema eficiente e escalável. Com as melhorias futuras, ele pode ser ainda mais robusto e funcional.
