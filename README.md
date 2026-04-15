# AWS

# O QUE É AWS?

Plataforma de nuvem segura que oferece um amplo conjunto de produtos globais baseados na nuvem. A AWS oferece acesso sob demanda a recursos de
computação, armazenamento, rede, banco de dados e outros recursos de TI e ferramentas de gerenciamento.

<img width="1498" height="816" alt="Screenshot 2026-04-13 152840" src="https://github.com/user-attachments/assets/46e3ca07-ba95-4772-b8f7-89519809618f" />


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
