# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2" Usuários comuns</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários comuns que realizam transações bancárias diárias.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Facilidade de uso, segurança nas transações, suporte para consultas e transferências.</td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2">Pessoas Idosas</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Clientes mais idosos que podem ter pouca familiaridade com tecnologia.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Interface simplificada, tutoriais claros, suporte acessível.</td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2">Usuários PCD </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas com deficiências que precisam de interfaces adaptadas</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Acessibilidade (mouse, leitor de tela, alto contraste), navegação simplificada.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Deficiêncte visual | acessar o aplicativo do banco usando um leitor de tela | Para que eu possa realizar transações bancárias de forma independente e segura |
| Pai/Mãe                | Gostaria que meu filho pudesse entender os conceitos financeiros e tipos de serviços antes de usa-los na prática | para evitar que meu filhe encontre resultados inesperados no começo da sua vida financeira ativa |
| pessoa idosa | um aplicativo com botões grandes e intuitivos |  para realizar operações bancárias sem dificuldade e com segurança |
| pessoa com deficiência cognitiva | que o aplicativo do banco tenha uma navegação simplificada e tutoriais visuais | para que eu possa entender e realizar transações bancárias sem confusão |
| Daltônico| que as cores usadas no aplicativo do banco sejam adequadas para quem tem dificuldade em distinguir cores | consiga navegar e realizar operações sem me confundir com os elementos da interface |

## Requisitos do Projeto


### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  Implementar suporte a tecnologias assistivas (leitores de tela, navegação por mouse). | Alta| 
| RF-02 | O sistema deve funcionar com leitores de tela para ajudar pessoas com deficiência visual a usar o aplicativo. | Alta   |
| RF-03 | ter uma interface simples e clara para que qualquer pessoa possa usá-lo, incluindo idosos e pessoas com dificuldades cognitivas.  | Alta |
| RF-04 |  O sistema deve permitir que os usuários aumentem o tamanho do texto e alterem as cores para facilitar a leitura. | Média |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RF-01 |  A interface deve ser responsiva   | Alta  | 
| RF-02 |  O sistema deve responder rapidamente às ações do usuário, evitando longos tempos de carregamento e garantindo uma experiência fluida. | Médio |
| RF-03 |  O sistema deve ter funcionalidades de acessibilidades que sejam consumidas via API. | Média  |
| RF-04 |  A interface deve ser intuitiva e fácil de navegar, com um design clean e organizado. A linguagem utilizada deve ser clara e simples, evitando termos técnicos que possam confundir o usuário  | Alta |

**Prioridade: Alta / Média / Baixa. 

