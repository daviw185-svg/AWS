# Conceitos Básicos de Rede

## Rede de Computadores

- Quando duas máquinas conectadas juntas se comunicam.
- Essa rede pode ser particionada logicamnete em sub-redes.
- Precisa de um dispositivo. como um roteador ou um switch, permitindo a conexão das máquinas

### IP

- Cada máquina na rede tem um endereço exclusivo de Internet Protocol(IP) atribuído.
- Isso permite identificar a máquina de forma exclusiva.
- São separados em 4 decimais por pontos (0.0.0.0), representando um máximo de 8 bits quando convertidos em binário, podendo cada número ser um número de 0 a 255, como no exemplo abaixo:

<img width="472" height="137" alt="Screenshot 2026-04-29 153236" src="https://github.com/user-attachments/assets/ea4df1b5-8597-43cc-a0d9-d36baaaf5e4c" />

- Um endereço IP de 32 bits é chamado de endereço IPv4
- Um endereço IP de 128 bits é chamado de endereço IPv6, composto por 8 grupos de 4 letras e números separados por dois pontos

- O CIDR(Classless Inter-Domain Routing/Roteamento sem classe entre domínios) é uma maneira de expressar um grupo de endereços IP consecutivos entre si

- <img width="572" height="214" alt="Screenshot 2026-04-29 154042" src="https://github.com/user-attachments/assets/2bb39eb0-cf40-416d-9e52-f78ebcf519bd" />

- O último número informa quantos bits do prefixo de roteamento devem ser estáveis e alocados para o identificador de rede
- No exemplo, o endereço CIDR é 192.0.2.0/24, e o último número (24) mostra que os primeiros 24 bits devem ser corrigidos. Os últimos 8 bits são flexíveis, o que significa que 256 endereços IP estão disponíveis para a rede (192.0.2.0 até 192.0.2.255)

## Modelo Open Systems Interconnection (OSI - Interconexão de sistemas abertos)
- O modelo OSI pode ser usado para entender como a comunicação ocorre na nuvem e nas redes básicas:
  
<img width="823" height="415" alt="Screenshot 2026-04-29 155111" src="https://github.com/user-attachments/assets/d37c9230-f5f8-4b39-8573-446a77f5ccb7" />

# Amazon VPC (Virtual Private Cloud)

- Permite provisionar uma seção isolada logicamente da Nuvem AWS onde você pode executar recursos da AWS em uma rede virtual que você mesmo define
- Fornece controle sobre seus recursos de rede virtual, incluindo:
Seleção do intervalo de endereços IP;
Criação de sub-redes;
Configuração de tabelas de rotas e gateways de rede;
- Configuração de rede personalizável para a VPC
- Permite usar várias camadas de segurança

## Endereçamento IP 
- Ao criar uma VPC, você a atribui a um bloco CIDR IPv4 (intervalo de endereços IPv4 privados).
- você não pode alterar o intervalo de endereços depois de criar a VPC.
- O maior tamanho de bloco CIDR IPv4 é/16.
- O menor tamanho do bloco CIDR IPv4 é/28.
- O IPv6 também é compatível (com um limite de tamanho de bloco diferente).
- Os blocos CIDR de sub-redes não poderm se sobrepor.