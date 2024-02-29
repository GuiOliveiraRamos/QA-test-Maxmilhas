# QA-test-Maxmilhas

Este projeto contém duas automações que foram solicitadas no teste tecnico de QA da maxmilhas e ao final a documentação do teste funcional

# Instalação e configuração

1. Clone o repositorio: git clone URL_DO_REPOSITORIO

2. Instale as dependencias: npm install 

# Instruções para execução dos testes

Dentro da pasta src e execute os arquivos de teste:
node automation.js
node accommodation_automation.js

Certifique-se de alterar os dados de login e senha com suas informações

# Troubleshooting

### Erro na tentativa de login repetidas vezes

Durante a execução do script de login, após repetidas vezes o seu login aparentemente é bloqueado, foram testadas em duas redes e as duas após 
um tempo param de aceitar o login e retornam erro 500-Internal server error, provavelmente o IP é bloqueado por conta do sistema identificar como uma 
automação robótica.

**Soluções indicadas**
1. Aguardar um intervalo de tempo entre uma execução e outra
2. Uso de uma VPN para evitar o bloqueio
3. Diminuir o tempo de execução do script


# Teste funcional

### Critérios de aceitação para compras via PIX

1. O Usuário deve possuir uma conta cadastrada e estar logada para efetuar a reserva
2. Ao clicar em Hotéis na pagina principal da MaxMilhas(https://www.maxmilhas.com.br), o usuário deve conseguir preencher os campos "Destino", "Checkin", "Checkout", "Hóspedes" e clicar em Buscar.
3. Após a busca, deve ser mostrado ao usuário uma lista de hotéis de acordo com os campos preenchidos e diversos filtros na parte esquerda da tela, para selecionar um hotel basta clicar em "Ver oferta".
4. Após carregar a tela, ao rolar a barra para baixo será mostrado todas as opções de quarto disponíveis, o usuário deve selecionar uma delas e selecionar a opção "Reservar agora" do lado direito da tela.
5. Na tela de Pagamento, o usuário deve preencher o nome dos hóspedes, selecionar o método PIX, ler e confirmar os termos da reserva e clicar em "Confirmar reserva"(Caso o usuário possua um cupom, basta digita-lo no campo aproriado do lado direito da tela "inserir código do cupom", clicar em aplicar, aguardar ser validado e selecionar "Confirmar reserva")

### Testes essenciais

1. Verificar o fluxo de cadastro e login, validando os valores.
2. Verificar o preenchimento dos campos na aba hotéis, validando o preenchimento de todos antes da busca poder ser realizada.
3. Verificar o funcionamento dos filtros na Pagina de hotéis.
4. Verificar se os hóteis apresentados são selecionáveis.
5. Verificar se a opção PIX aparece corretamente na pagina de pagamento e se é uma opção selecionável para o usuário.