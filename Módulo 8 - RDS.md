# Amazon Relational Database Service (Amazon RDS).

O Amazon RDS é um serviço gerenciado que configura e opera um banco de dados relacional na nuvem.
Para resolver os desafios decorrentes da execução de um banco de dados relacional autônomo e não gerenciado, a AWS fornece um serviço que configura, opera e expande o banco de dados relacional sem nenhuma administração contínua. O Amazon RDS permite que você se concentre no seu aplicativo para proporcionar o desempenho, a alta disponibilidade, a segurança e a compatibilidade necessárias. Com o Amazon RDS, o foco principal passa para os dados e a otimização do aplicativo.

## Serviços Gerenciados

A AWS gerencia a instalação e a aplicação de patches no sistema operacional, a instalação e a aplicação de patches no software de banco de dados, os backups automáticos e a alta disponibilidade. A AWS também escala recursos, gerencia energia e servidores e executa manutenção. A transferência dessas operações para o serviço gerenciado do Amazon RDS reduz a carga de trabalho operacional e os custos associados ao banco de dados relacional. Agora, vamos examinar uma breve visão geral do serviço e alguns possíveis casos de uso.

## Instâncias de banco de dados do Amazon RDS

A base do Amazon RDS é a instância de banco de dados. Uma instância de banco de dados é um ambiente de banco de dados isolado que pode conter vários bancos de dados criados pelo usuário. Ele pode ser acessado usando as mesmas ferramentas e aplicativos que você usa com uma instância de banco de dados autônoma. As instâncias de banco de dados e o armazenamento diferem em características de performance e preço, permitindo que você adapte o desempenho e o custo às suas necessidades. Quando você opta por criar uma instância de banco de dados, precisa primeiro especificar o mecanismo de banco de dados que deve ser executado.

## Quando usar o Amazon RDS?

Use o Amazon RDS quando seu aplicativo exigir: 
- Transações ou consultas complexas
- Uma taxa de consulta ou gravação média a alta -Até 30.000 IOPS (15.000 leituras+15.000 gravações)
- Não mais do que um único nó de operador ou fragmento
- Alta durabilidade

Não use o Amazon RDS quando seu aplicativo exigir:
- Taxas massivas de leitura/gravação (por exemplo, 150.000 gravações por segundo)
- Fragmentação devido a altas demandas de throughput ou de volume de dados 
- Solicitações e consultas GET ou PUT simples que um banco de dados NoSQL pode processar
- Ou personalização do sistema de gerenciamento de banco de dados relacional (RDBMS)

Para circunstâncias em que você não deve usar o Amazon RDS, considere usar uma solução de banco de dados NoSQL (como o DynamoDB) ou executar seu mecanismo de banco de dados relacional em instâncias do Amazon EC2 em vez do Amazon RDS (que fornecerá mais opções para personalizar o banco de dados).


