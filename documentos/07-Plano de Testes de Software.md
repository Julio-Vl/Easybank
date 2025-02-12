# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]
# Plano de Testes de Software

## Caso de Teste: **CT-01 - Cadastro de Usuário**

| **Campo**                              | **Descrição**                                                                |
|:--------------------------------------|:-----------------------------------------------------------------------------|
| **Requisitos Associados**             | RF-01 - Cadastro de novo usuário                                              |
| **Objetivo do Teste**                 | Verificar se o sistema permite o cadastro de um novo usuário com sucesso.     |
| **Passos**                             | 1. Acessar a página de cadastro.<br>2. Preencher os campos obrigatórios (nome, e-mail, senha, etc.).<br>3. Submeter o formulário de cadastro. |
| **Critérios de êxito**                | Cadastro realizado com sucesso, sem erros ou falhas no processo. O usuário deve ser redirecionado para a página inicial ou página de confirmação. |
| **Responsável pela elaboração do caso de Teste** | David Ferreira e Silva |

---

## Caso de Teste: **CT-02 - Login de Usuário**

| **Campo**                              | **Descrição**                                                                |
|:--------------------------------------|:-----------------------------------------------------------------------------|
| **Requisitos Associados**             | RF-02 - Login de usuário                                                      |
| **Objetivo do Teste**                 | Testar a funcionalidade de login do usuário e a consistência do redirecionamento em diferentes navegadores. |
| **Passos**                             | 1. Acessar a página de login.<br>2. Informar o e-mail e senha previamente cadastrados.<br>3. Submeter as credenciais e verificar o redirecionamento para a página correta. |
| **Critérios de êxito**                | Login realizado com sucesso, com redirecionamento adequado para a página inicial ou dashboard. O login deve funcionar corretamente em diferentes navegadores. |
| **Responsável pela elaboração do caso de Teste** | David Ferreira e Silva |

---

## Caso de Teste: **CT-03 - Transferência de Valores**

| **Campo**                              | **Descrição**                                                                |
|:--------------------------------------|:-----------------------------------------------------------------------------|
| **Requisitos Associados**             | RF-03 - Transferência de valores entre contas                                |
| **Objetivo do Teste**                 | Verificar se o sistema realiza a transferência de valores corretamente entre contas de usuários. |
| **Passos**                             | 1. Acessar a funcionalidade de transferência.<br>2. Inserir os dados de destino (número da conta, valor, etc.).<br>3. Confirmar a transferência e verificar a conclusão do processo. |
| **Critérios de êxito**                | Transferência concluída com sucesso e valores atualizados nas contas de origem e destino. O sistema deve exibir uma mensagem de confirmação. |
| **Responsável pela elaboração do caso de Teste** | David Ferreira e Silva |

 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
