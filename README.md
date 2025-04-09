# Barberia - Apresentação do Site

Este site foi desenvolvido para fornecer informações sobre uma barbearia, incluindo seus serviços, preços, horários e formas de contato. Seu design moderno e sua estrutura organizada permitem que os clientes encontrem rapidamente o que procuram.

## Objetivo do Site

O site tem como finalidade:
- Apresentar os serviços da barbearia.
- Informar sobre preços e horários de atendimento.
- Facilitar o agendamento de consultas.
- Fornecer dados de contato e localização.

## Estrutura do Site

O site possui as seguintes seções:
1. **Início**: Introdução à barbearia e sua identidade.
2. **Serviços**: Descrição dos serviços oferecidos, como cortes de cabelo, barba e luzes.
3. **Preços**: Tabela com os valores de cada serviço.
4. **Equipe**: Apresentação dos profissionais da barbearia.
5. **Reserva**: Formulário para agendar consultas online.
6. **Contato**: Informações de localização e meios de comunicação.
7. **Login**: Página de acesso para usuários registrados.

## Página de Login

A página de login permite que usuários registrados ingressem no sistema com suas credenciais. Sua estrutura inclui:
- Um **formulário de autenticação** onde o usuário insere seu nome de usuário e senha.
- Um **sistema de validação** que compara os dados inseridos com um banco de dados interno.
- **Redirecionamento automático**, onde usuários autenticados são levados à página principal.

### Como Funciona?
1. O usuário insere seu **nome de usuário** e **senha** no formulário.
2. O sistema verifica se a conta existe no banco de dados.
3. Se os dados estiverem corretos, o usuário é redirecionado para a página principal.
4. Caso contrário, uma **mensagem de erro** será exibida informando credenciais inválidas.

## Funcionamento do Código JavaScript

O site conta com um sistema básico de autenticação na página de **Login**, que verifica as credenciais dos usuários utilizando um pequeno **banco de dados simulado** em JavaScript.

###  Autenticação de Usuário
O código utiliza um **array de objetos** chamado `database`, onde são armazenados nomes de usuários e senhas predefinidas:

```js
const database = [
    { usuario: "andres", password: "12345" },
    { usuario: "maria", password: "password1" },
    { usuario: "admin", password: "admin123" }
];

Processo de validação

Captura de dados: O nome de usuário e a senha inseridos no formulário são obtidos.

Busca no banco de dados: A função .find() percorre o array database para verificar se há uma correspondência.

Verificação de credenciais: Se usuarioEncontrado tiver um valor, significa que as credenciais estão corretas e o usuário será redirecionado para index.html.

Tratamento de erros: Se não for encontrado um usuário válido, uma mensagem de alerta será exibida para informar o erro.

## Tecnologias Utilizadas

Este site foi desenvolvido com:
- **HTML** para a estrutura.
- **CSS** para o design visual.
- **JavaScript** para a funcionalidade do login.
- **Imagens e recursos gráficos** para a apresentação.