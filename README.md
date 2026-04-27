# AWS

# Conceito de "Computação em Nuvem"

Computação em nuvem é a entrega sob demanda de poder computacional, banco de dados, armazenamento, aplicativos e outros recursos de TI pela Internet com uma definição de preço conforme o uso. Com ela, a sua estrutura fundamental(infraestrutura) passa a ser usada como um software (o sistema em si) e não como hardware (componentes físicos). Por ser um software, conta com as vantagens s=em suas soluções mais flexibilidade, economia, torna recursos temporários e descartáveis. Diferente da TI tradicional, a AWS possui grupos de segurança, sistema de restrição de dados aos funcionários (IAM), utiliza um balanceador de rede, ao invés de roteadores, 
ipeline de rede e switches como os tradicionais usam, e no armazenamento de bancos de dados são utilizados servidores da própria Amazon. Além disso, quem usa esse tipo de computação só irá pagar somente pelo o que consumir, ao contrário do tradicional (hardware) que tem um alto custo, a velocidade e a agilidade é aumentada, e é possível ter um alcance global. 

# O QUE É AWS?

Plataforma de nuvem segura que oferece um amplo conjunto de produtos globais baseados na nuvem. A AWS oferece acesso sob demanda a recursos de
computação, armazenamento, rede, banco de dados e outros recursos de TI e ferramentas de gerenciamento.

![alt text](<Screenshot 2026-04-13 152840.png>)

# VANTAGENS

- Escalabilidade automática para lidar com mudanças de demanda
- Alta disponibilidade e confiabilidade global
- Pagamento por uso

# INFRAESTRUTURA GLOBAL

- Foi projetada e criada para entregar um ambiente de computação em nuvem flexível, confiável, dimensionável, e seguro com alta qualidade global em desempenho de rede. A infraestrutura global da AWS é a nuvem mais segura, confiável e abrangente, fornecendo diversas soluções de infraestrutura para executar suas aplicações em qualquer lugar. Com três zonas de disponibilidade (AZs) por região e data centers otimizados, a infraestrutura global da AWS maximiza a resiliência, o desempenho e a inovação. A AWS tem o conceito de uma região, que é um local físico em todo o mundo onde agrupamos datacenters. Cada região da AWS consiste no mínimo em três AZs isoladas e separadas fisicamente em uma área geográfica. Diferentemente de outros provedores de nuvem, que geralmente definem uma região como um único datacenter, o design de múltiplas AZs de cada região da AWS oferece vantagens para os clientes. Uma zona de disponibilidade (AZ) é um ou mais datacenters distintos com energia, rede e conectividade redundantes em uma região da AWS. As AZs proporcionam aos clientes a capacidade de operar aplicativos e bancos de dados de produção com alta disponibilidade, tolerância a falhas e escalabilidade em níveis superiores aos que um único datacenter pode oferecer.

- Saiba Mais

- https://aws.amazon.com/pt/about-aws/global-infrastructure/regions_az/

# ECONOMIA DA NUVEM

- Na computação, a cobrança é por hora por segundo apenas linux, dependendo da instância, e o armazenamento é cobrado por GB. Na Transferencia de Dados, a saída é agregada e cobrada, cobrado geralmente por GB, já a entrada não é. O Pagamento se dá apenas pelo o que usar. Para se ter uma estimativa financeira para ajudar a identificar custos diretos e indiretos de um sistema, se utiliza o Custo Total de Propriedade, podendo classificar como: custos de servidor, de armazenamento, de rede, custos de mão de obra.

- <img width="1474" height="523" alt="Screenshot 2026-04-13 152943" src="https://github.com/user-attachments/assets/b4d3f8c9-bddc-4ff8-bd95-b0b589bda5fe" />

# Maneiras de se interagir com a AWS 

- Console de Gerenciamento da AWS: o console fornece uma interface gráfica avançada para a maioria dos recursos oferecidos pela AWS. (Observação: às vezes os recursos novos ainda não têm todas as capacidades embutidasno console na data de lançamento).
 
- Interface da linha de comando da AWS (CLI da AWS):a CLI da AWS fornece um conjunto de utilitários que podem ser executados a partir de um script de comando no Linux, macOSou Microsoft Windows.

- Software DevelopmentKits (SDKs):a AWS fornece pacotes que permitem acessar a AWS em uma variedade de linguagens de programação populares. Isso facilita o uso da AWS em seus aplicativos existentes e permite a criação de aplicativos para implantar e monitorar sistemas complexos inteiramente por meio de código.

# Fundamentos da definição de preço

<img width="919" height="393" alt="Screenshot 2026-04-17 151705" src="https://github.com/user-attachments/assets/2f90db43-7884-482e-b722-1b92112bb3a9" />

<img width="927" height="448" alt="image" src="https://github.com/user-attachments/assets/f371f5d1-c4ab-4725-aa47-94b1301d52b9" />

<img width="923" height="512" alt="image" src="https://github.com/user-attachments/assets/56329c6e-22d8-4e7e-ab71-e5a3b5ee9846" />



# O QUE É O "IAM"?

- O "Identity and Acess Management" é um serviçp da AWS que permite definir usuários e os tipos de dados que eles podem ter acesso.
- Usuário do IAM: Pessoa ou aplicativoque se cadastrar e autenticar em uma conta da AWS;
- Grupo do IAM: Um conjuntom de usuários que recebem uma autorização idêntica;
- Política do IAM: O documento que define quais recursos podem ser acessados e o nível de acesso a cada recurso. Esse tipo de permissão pode ser para um usuário, um grupo ou à uma função. Com um "Allow", alguma dessas entidades estão permitidas acessar, já o "Deny" está bloqueando o acesso. Veja na página abaixo:

 <img width="1239" height="422" alt="Screenshot 2026-04-15 153440" src="https://github.com/user-attachments/assets/309a7daf-a7b4-430e-b5e2-64f5c4c28902" />
<img width="825" height="351" alt="Screenshot 2026-04-15 153732" src="https://github.com/user-attachments/assets/b6a6a9d4-4e51-4529-a641-0ea80c3947a4" />

- Função do IAM: Mecanismo útil para conceder um conjunto de permissões para fazer solicitacões de servico da AWS. A função fornece credenciais de segurança
temporárias;

- Princípio do Privilégio Mínimo: Conjunto mínimo de permissões necessárias para executar uma tarefa específica

# A Infraestrutura global da AWS

- REGIÕES DA AWS:
Uma Região AWS é uma área geográfica. A replicação de dados entre Regiões é controlada pelo usuário.  Uma Região normalmente consiste em duas ou mais Zonas de Disponibilidade. Para alcançar tolerância a falhas e estabilidade, as regiões são isoladas umas das outras

- ZONA DE DISPONIBILIDADES:
Cada Zona de Disponibilidade oferece a capacidade de operar aplicativos e bancos de dados mais altamente disponíveis, tolerantes a falhas e dimensionáveis do que seria possível em um único data center. Cada Zona de Disponibilidade pode incluir vários data centers (normalmente três) e, em dimensão integral, eles podem incluir centenas de milhares de servidores. Todas as Zonas de Disponibilidade são interconectadas com redes de alta largura de banda e baixa latência (determina a velocidade de resposta da conexão: quanto menor, melhor) por meio de fibra dedicada totalmente redundante que fornece alta vazão entre as Zonas de Disponibilidade;

- DATACENTERS DA AWS:
Os data centers da AWS são projetadospara segurança. Os data centers são onde os dadosresidem e o processamento dedados ocorre.  A Amazon opera data centers de última geração e altamente disponíveis. Embora sejam raras, podem ocorrer falhas que afetam a disponibilidade das instâncias no mesmo local. Se você hospedar todas as suas instâncias em um único local afetado por essa falha, nenhuma delas estará disponível.

- PONTOS DE PRESENÇA:
Consiste em locais de bordaeum número muito menor de caches de borda regionais. Usada com oAmazonCloudFront que é uma rede de entrega de conteúdo, usada para distribuir conteúdo aos usuários finais para reduzir a latência.

# Amazon EC2

- EC2 é um serviço de Infraestrutura como Serviso (IaaS) da AWS;
- Permite provisionar máquinas virtuais chamadas instâncias;
- Componentes Principais:
  - EC2 (Instância) - Máquina Virtual
  - EBS (Elastic Block Store) - Serviço de armazenamento em blocos de alta performance, como um pen-drive
  - ELB (Elastic Load Balancing) - Disco persistente conectado via rede, confirgurar o quanto de rede será utilizado em relação a demanda

- Configuração de EC2
  - Escolhas de provisionaento:
     - Sistema Operacional: Linux, Windows, MacOS;
     - Tamanho da instância: número de vCPUs e RAM;
     - Armazenamento: EBS, EFS, Instance Store(memória temporária)
     - Interface de rede, IP público ou privado
     - Segurança: grupos de segurança(firewall) e pares de chaves SSH
     - Scripts de Inicialização (EC2 User Data) - executam comandos no primeiro boot (instalação de pacotes, atualizações, configuração de aplicações)

- AMI (Imagem de máquina da Amazon)
 - É um modelo usado para criar uma instância do EC2 (que é uma máquina virtual, ou VM, executada na Nuvem AWS)
 - Contém um sistema operacional Windows ou Linux
 - Muitas vezes, ele também tem software pré-instalado, uma base pronta

## Otimização de custos do Amazon EC2

A Amazon oferece diferentes modelos de preço que você pode escolher para executar instâncias do EC2. 
- O faturamento por segundo só está disponível para instâncias sob demanda, instâncias reservadas e instâncias spot que executa mo Amazon Linux ou o Ubuntu.
- Instâncias sob demanda estão qualificadas para o nível gratuito da AWS (https://aws.amazon.com/free/). Elas têm o menor custo inicial e a maior flexibilidade. Não há compromissos antecipados nem contratos de longo prazo. Isso é ótimo para aplicações com cargas de trabalho breves, com picos ou imprevisíveis. 
- Os hosts dedicados são servidores físicos com a capacidadedas instâncias dedicadas para seu uso. Eles permitem que você use suas licenças de software existentes por soquete, por núcleo ou por licenças do software VM, como para Microsoft Windows ou Microsoft SQL Server. 
- Instâncias dedicadas são instâncias executadas em uma nuvem privada virtual (VPC) em hardware dedicadoa um único cliente. Elas são isoladas fisicamente no nível de hardware de host das instâncias pertencentes a outras contas da AWS. 
- A instância reservada permite que você reserve capacidade computacional por um período de 1 ou 3 anos com custos de execução por hora mais baixos. O preço de uso com desconto é fixo enquanto você é o proprietário da instância reservada. Se você espera uso consistente e pesado, eles podem fornecer economias substanciais em comparação com as instâncias sob demanda.
- As instâncias reservadas programadas permitem adquirir reservas de capacidade que se repetem diariamente, semanalmente ou mensalmente, com uma duração especificada, pelo período de um ano. Você paga pelo período de programação das instâncias, mesmos e não usá-las
- As instâncias spot permitem que você faça sugestões de preço em instâncias do EC2 nãou tilizadas, o que pode reduzir seus custos do significativamente. O preço por hora de uma instância spot varia de acordo com a oferta e a demanda. A instância spot é executada sempre que sua sugestão de preço excede o preço de mercado atual.

Para otimizar custos, você deve considerar quatro motivadores consistentes e potentes:
- Tamanho certo: escolha o equilíbrio certo dos tipos de instância. Observe quando os servidores podem ser dimensionados para baixo ou desativados e ainda atendem aos seus requisitos de desempenho.
- Aumento da elasticidade: projete suas implantações para reduzir a capacidade de servidor ociosa com implantações elásticas, como aquelas que usam auto scaling para lidar com picos de carga.
- Modelo de definição de preço ideal: reconheça as opções de definição de preço disponíveis. Analise seus padrões de uso para que você possa executar instâncias do EC2 com a combinação correta de opções de definição de preço.
- Otimizar opções de armazenamento: Analise os requisitos de armazenamento de suas implantações. Reduza a sobrecarga de armazenamento não utilizado quando possível e escolha opções de armazenamento mais econômicas se elas ainda conseguirem atender aos seus requisitos de desempenho de armazenamento.

## Serviços de contêiner

Os contêineres são um método de virtualização de sistema operacional que permite executar um aplicativo e suas dependências em processos com recursos isolados. Os contêineres permitem empacotar facilmente o código, as configurações e as dependências de um aplicativo em componentes básicos fáceis de usar que oferecem consistência ambiental, eficiência operacional, produtividade de desenvolvedores e controle de versões.

 Benefícios:
- Repetível
- Ambientes autônomos
- O software é executado da mesma forma em diferentes ambientes
- Laptop, teste, produção do desenvolvedor.
- Lançamento e interrupção ou encerramento mais rápido do que máquinas virtuais

### Docker
O Docker é uma plataforma de software que empacota software (como aplicativos) em contêineres.
O Docker é instalado em cada servidor que hospedará contêineres e fornece comandos simples que você pode usar para criar, iniciar ou interromper contêineres.

O Docker é melhor empregado como uma solução quando você deseja:
- Padronizar ambientes
- Reduzir conflitos entre pilhas de linguagem e versões
- Usar contêineres como serviço
- Executar microsserviços com implantações de código padronizadas
- Exigir portabilidade para processamento de dados

## Amazon Elastic Container Service (Amazon ECS)

O Amazon Elastic Container Service (Amazon ECS) é um serviço de gerenciamento de contêineres altamente escalável e de alto desempenho que dá suporte a contêineres do Docker.
O Amazon ECS permite que você execute facilmente aplicativos em um cluster gerenciado de instâncias do Amazon EC2.
Os recursos essenciais do Amazon ECS incluem a capacidade de:
- Executar até dezenas de milhares de contêineres do Docker em segundos
- Monitorar a implantação de contêineres
- Gerenciar o estado do cluster que executa os contêineres
- Programe contêineres usando um programador integrado ou um programador de terceiros (por exemplo, Apache Mesos ou Blox)

Para preparar o aplicativo para execução no Amazon ECS, você cria uma definição de tarefa que é um arquivo de texto que descreve um ou mais contêineres, até um máximo de dez, que formam o aplicativo. Pode ser considerada como um esquema de seu aplicativo. As definições de tarefa especificam parâmetros para o aplicativo, por exemplo, quais contêineres usar, quais portas devem ser abertas para o aplicativo e quais volumes de dados devem ser usados com os contêineres na tarefa.

## Amazon Elastic Kubernetes Service (Amazon EKS)

O Amazon Elastic Kubernetes Service (Amazon EKS) é um serviço gerenciado de Kubernetes que facilita a execução de Kubernetes na AWS, eliminando a necessidade de instalar, operar e manter o seu próprio plano de controle do Kubernetes. A conformidade do Amazon EKS com o Kubernetes é certificada. Portanto, aplicações existentes executadas na versão mais recente do Kubernetes são compatíveis com o Amazon EKS.

## Amazon Elastic Container Registry (Amazon ECR)

O Amazon Elastic Container Registry (Amazon ECR) é um registro de contêineres do Docker totalmente gerenciado que permite que desenvolvedores armazenem, gerenciem e implantem facilmente imagens de contêiner do Docker. Ele é integrado ao Amazon ECS, para que você possa armazenar, executar e gerenciar imagens de contêiner para aplicações executadas no Amazon ECS. Basta especificar o repositório do Amazon ECR na Definição de Tarefas que o Amazon ECS recuperará as imagens apropriadas para os aplicativos.

## AWS Lambda

<img width="797" height="332" alt="Screenshot 2026-04-27 181542" src="https://github.com/user-attachments/assets/85237faa-772e-4610-bc8d-d1d81dd20141" />

O AWS Lambda é um produto de computação sem servidor orientado a eventos. O Lambda permite executar código sem provisionar ou gerenciar servidores.
Você cria uma função Lambda, que é o recurso da AWS que contém o código que você carregou Em seguida, você define a função Lambda a ser acionada, seja de forma programada ou em resposta a um evento. Seu código só é executado quando é acionado.
Você paga apenas pelo tempo de computação consumido- não há cobrança quando o código não está em execução.

<img width="777" height="395" alt="Screenshot 2026-04-27 181630" src="https://github.com/user-attachments/assets/6ad91b27-2823-4c62-bf5e-2088621bb8e3" />

Uma fonte de evento é um serviço da AWS ou aplicativo criado por desenvolvedor que gera eventos que acionam a execução de uma função do AWS Lambda.

<img width="832" height="420" alt="Screenshot 2026-04-27 181918" src="https://github.com/user-attachments/assets/902e0996-3ca0-403a-8127-48b411f5b960" />
