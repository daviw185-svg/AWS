# Amazon Simple Storage Service (Amazon S3)

- O Amazon S3 é um armazenamento de objetos criado para armazenar e recuperar qualquer quantidade de dados de qualquer local: sites e aplicativos móveis, aplicativos corporativos e dados de sensores ou dispositivos da Internet das Coisas (IoT).

## Buckets
- O Amazon S3 armazena dados como objetos dentro de recursos denominados buckets. 
- É possível armazenar praticamente quantos objetos você quiser, bem como gravar, ler e excluir objetos em seu bucket. Os nomes de bucket são universais e devem ser únicos entre todos os nomes de buckets existentes no Amazon S3. Os objetos podem ter até 5 TB de tamanho.
- Os dados armazenados no Amazon S3 não estão associados a nenhum servidor específico, e você não precisa gerenciar nenhuma infraestrutura por conta própria. Você pode colocar quantos objetos quiser no Amazon S3.

- Os objetos podem ser praticamente qualquer arquivo de dados, como imagens, vídeos ou logs de servidor. Como o Amazon S3 oferece suporte a objetos de até vários terabytes, você pode até mesmo armazenar snapshots de banco de dados como objetos.

Você pode acessar o Amazon S3 por meio do Console de Gerenciamento da AWS baseado na web de forma programática por meio da API e dos SDKs, ou com soluções de terceiros, que usam a API ou os SDKs.

## Classes da S3:

O Amazon S3 oferece uma variedade de classes de armazenamento no nível do objeto projetadas para diferentes casos de uso. Essas classes incluem:
 
- Amazon S3 Standard: o Amazon S3 Standard é adequado para uma grande variedade de casos de uso, como aplicações na nuvem, sites dinâmicos, distribuição de conteúdo, aplicativos móveis e de jogos e dados analíticos de big data.
- AmazonS3 Intelligent-Tiering: a classe de armazenamento Amazon S3 Intelligent-Tiering foi projetada para otimizar os custos, movendo automaticamente osd ados para o nível de acesso mais econômico, sem impacto no desempenho, nem despesas operacionais gerais.
- AmazonS3 Standard-Infrequent Access (AmazonS3 Standard-IA): a classe de armazenamento Amazon S3 Standard-IA é usada para dados acessados com menos frequência, mas que exigem acesso rápido quando necessários.
- O Amazon S3 One Zone-IA:  é ideal para clientes que querem uma opção de menor custo para dados acessados com pouca frequência, mas não precisam da disponibilidade e da resiliência do Amazon S3 Standard ou do Amazon S3 Standard-IA. É uma ótima opção para armazenar cópias de backup secundárias de dados locais ou que possam ser recriados com facilidade. Também é possível usar essa opção comoum armazenamento barato para dados replicados de outra Região da AWS usando o replicador entre Regiões do Amazon S3.
- AmazonS3 Glacier: o Amazon S3 Glacier é uma classe de armazenamento segura, durável e de baixo custo para arquivamento de dados. Você pode confiar em armazenar qualquer volume de dados a um custo competitivo ou inferior ao de soluções on-premises. Para manter os custos baixos, mas com condições de suprir necessidades variáveis, o Amazon S3 Glacier disponibiliza três opções de recuperação, que podem levar de alguns minutos a várias horas.
- AmazonS3 Glacier Deep Archive: o Amazon S3 Glacier Deep Archive é a classe de armazenamento de menor custo do Amazon S3. Ele comporta retenção de longo prazo e preservação digital para dados que podem ser acessados uma ou duas vezes por ano. Essa classe é projetada para clientes que mantêm conjuntos de dados por 7 a 10 anos ou mais para cumprir requisitos de conformidade normativa, especialmente em setores altamente regulamentados como serviços financeiros, saúde e setores públicos.
