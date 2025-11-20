import { Project } from "../models/project";

export const medSeniorApi: Project = new Project(
  "Med Senior API",
  "assets/images/projects/med_senior_api/med_senior_api.png",
  false,
  [
    { image: 'assets/icons/typescript.svg', name: "Typescript" },
    { image: 'assets/icons/nestjs.svg', name: "NestJs" },
    { image: 'assets/icons/prisma.svg', name: "Prisma" },
    { image: 'assets/icons/mongo.svg', name: "Mongo" },
    { image: 'assets/icons/docker.svg', name: "Docker" },
  ],
  [
    "assets/images/projects/med_senior_api/med_senior_api.png"
  ],
  `
    <h7>MedSenior API — Backend para Plataforma de Apoio a Idosos e Cuidadores</h7>
    <br>
    <br>
    <p>O MedSenior API é a espinha dorsal do projeto acadêmico MedSenior, desenvolvido para fornecer suporte backend à plataforma que auxilia idosos e seus cuidadores no controle de medicamentos, acompanhamento de saúde e organização de consultas médicas.</p>

    <p>Construído utilizando NestJS e TypeScript, o MedSenior API oferece uma arquitetura modular, escalável e de fácil manutenção. A escolha do NestJS permite a implementação de boas práticas de desenvolvimento, como injeção de dependências, controle de rotas e middleware, garantindo um código limpo e organizado.</p>  
    <p>O banco de dados MongoDB foi selecionado para armazenar informações relacionadas a usuários, medicamentos, horários de medicação, desconfortos e consultas médicas. A flexibilidade do MongoDB é ideal para lidar com os dados variados e dinâmicos do sistema.</p>

    <p>Entre as principais funcionalidades implementadas na API estão:</p>
    <p>Endpoints RESTful para CRUD de medicamentos, horários de medicação, desconfortos e consultas médicas;</p>
    <p>Autenticação e autorização de usuários, garantindo a segurança dos dados;</p>
    <p>Validação de dados de entrada para assegurar a integridade das informações;</p>
    <p>Documentação da API utilizando Swagger, facilitando o entendimento e uso pelos desenvolvedores frontend.</p>

    <p>O MedSenior API é uma peça fundamental para o funcionamento da plataforma MedSenior, proporcionando uma base sólida e confiável para o desenvolvimento das aplicações web e mobile que compõem o ecossistema de apoio a idosos e cuidadores.</p>
  `,
  "https://github.com/Rezende-Fabio/med-senior-api",
  ""
);

export const medSeniorWeb: Project = new Project(
  "Med Senior Web",
  "assets/images/projects/med_senior_web/med_senior_web.png",
  false,
  [
    { image: 'assets/icons/typescript.svg', name: "Typescript" },
    { image: 'assets/icons/vue.svg', name: "Vue" },
    { image: 'assets/icons/css.svg', name: "Css" },
    { image: 'assets/icons/docker.svg', name: "Docker" },
  ],
  [
    "assets/images/projects/med_senior_web/med_senior_web.png",
    "assets/images/projects/med_senior_web/image_1.png",
    "assets/images/projects/med_senior_web/image_2.png",
    "assets/images/projects/med_senior_web/image_3.png",
    "assets/images/projects/med_senior_web/image_4.png"
  ],
  `
  <h7>MedSenior Web — Plataforma de Apoio a Idosos e Cuidadores</h7>
  <br>
  <br>

  <p>O MedSenior é um projeto desenvolvido para a faculdade com o objetivo de auxiliar idosos e seus cuidadores no controle de medicamentos, acompanhamento de saúde e organização de consultas médicas.
  A versão Web do sistema oferece um conjunto de ferramentas para gerenciamento e monitoramento do idoso.</p>

  <p>Entre as funcionalidades implementadas no sistema web estão:</p>

  <p>CRUD de medicamentos, permitindo cadastrar, editar, visualizar e excluir remédios utilizados pelo idoso;</p>

  <p>Agendamento de horários de medicação, garantindo controle dos períodos corretos para cada medicamento;</p>

  <p>Registro de desconfortos, possibilitando ao cuidador incluir sintomas ou situações específicas para acompanhamento posterior;</p>

  <p>Formulário de consultas médicas, com informações completas do idoso, histórico de desconfortos e detalhes que auxiliam na avaliação médica;</p>

  <p>Monitoramento por botão de emergência, permitindo que cuidadores sejam notificados imediatamente quando o idoso acionar o alerta no aplicativo mobile.</p>

  <p>A plataforma foi desenvolvida com foco em usabilidade, organização e apoio real ao cuidador, servindo como o painel principal para centralizar informações de saúde e facilitar tomadas de decisão rápidas e seguras.</p>
  `,
  "https://github.com/Rezende-Fabio/med-senior-front",
  ""
);

export const medSeniorMobile: Project = new Project(
  "Med Senior Mobile",
  "assets/images/projects/med_senior_mobile/med_senior_mobile.png",
  true,
  [
    { image: 'assets/icons/flutter.svg', name: "Flutter" },
  ],
  [
    "assets/images/projects/med_senior_mobile/med_senior_mobile.png",
    "assets/images/projects/med_senior_mobile/image_1.png",
    "assets/images/projects/med_senior_mobile/image_2.png",
    "assets/images/projects/med_senior_mobile/image_3.png",
    "assets/images/projects/med_senior_mobile/image_4.png",
    "assets/images/projects/med_senior_mobile/image_5.png",
  ],
  `
  <h7>MedSenior Mobile — Aplicativo de Apoio para Idosos</h7>
  <br>
  <br>

  <p>O MedSenior Mobile é parte do projeto acadêmico MedSenior, desenvolvido com o objetivo de auxiliar idosos no controle de medicamentos, acompanhamento de saúde e preparação para consultas médicas.
  O aplicativo foi projetado para ser simples, acessível e fácil de usar, atendendo às necessidades do público idoso de forma prática e segura.</p>

  <p>Entre as funcionalidades principais do aplicativo mobile estão:</p>

  <p>CRUD de medicamentos, permitindo que o idoso visualize, adicione, edite e exclua seus remédios;</p>

  <p>Agendamento de horários de medicação, exibindo lembretes claros para ajudar o idoso a tomar os medicamentos nos horários corretos;</p>

  <p>Obrigatoriedade de localização ativa, permitindo que cuidadores, acompanhem a posição do idoso em situações de emergência ou risco;</p>

  <p>Integração com o ecossistema MedSenior, garantindo comunicação com o sistema web e possibilitando o monitoramento pelo cuidador.</p>

  <p>O aplicativo foi pensado para oferecer autonomia ao idoso, ao mesmo tempo em que cria uma camada adicional de segurança para familiares e cuidadores.</p>
  `,
  "https://github.com/Rezende-Fabio/med-senior-mobile",
  ""
);

export const fruitMarketMobile: Project = new Project(
  "Fruit Market Mobile",
  "assets/images/projects/fruit_market/fruit_market.png",
  true,
  [
    { image: 'assets/icons/flutter.svg', name: "Flutter" },
  ],
  [
    "assets/images/projects/fruit_market/fruit_market.png",
    "assets/images/projects/fruit_market/image_1.png",
    "assets/images/projects/fruit_market/image_2.png",
    "assets/images/projects/fruit_market/image_3.png",
    "assets/images/projects/fruit_market/image_4.png",
  ],
  `
  <p>
    O Fruit Market Mobile é um projeto desenvolvido para a faculdade, no qual o objetivo era replicar o front-end de uma aplicação utilizando Flutter, seguindo um template disponibilizado pelo professor.
  </p>
  <p>
    O trabalho teve como foco o domínio dos conceitos de interface, organização de widgets, navegação entre telas e aplicação das boas práticas de UI/UX dentro do ecossistema Flutter.
  </p>
  `,
  "https://github.com/Rezende-Fabio/fruit-market",
  ""
);

export const snackSpot: Project = new Project(
  "Snack Spot",
  "assets/images/projects/snack_spot/snack_spot.png",
  false,
  [
    { image: 'assets/icons/csharp.svg', name: "CSharp" },
    { image: 'assets/icons/net_framework.svg', name: "Net Framework" },
    { image: 'assets/icons/html.svg', name: "Html" },
    { image: 'assets/icons/css.svg', name: "Css" },
    { image: 'assets/icons/bootstrap.svg', name: "Bootstrap" },
    { image: 'assets/icons/postgres.svg', name: "Postgres" },
    { image: 'assets/icons/docker.svg', name: "Docker" },
  ],
  [
    "assets/images/projects/snack_spot/snack_spot.png",
    "assets/images/projects/snack_spot/image_1.png",
    "assets/images/projects/snack_spot/image_2.png",
    "assets/images/projects/snack_spot/image_3.png",
    "assets/images/projects/snack_spot/image_4.png",
  ],
  `
  <p>
    O Snack Spot é um sistema completo de delivery de lanches, desenvolvido para gerenciar pedidos de forma prática e eficiente.
  </p>
  <p>
    No backend, o sistema foi construído em C# utilizando o .NET Framework, garantindo robustez, organização e boa manutenção da lógica de negócio.
    O frontend foi desenvolvido com HTML, CSS e Bootstrap, oferecendo uma interface responsiva, intuitiva e agradável para diferentes dispositivos.
  </p>
  <p>
    O banco de dados utiliza PostgreSQL, totalmente conteinerizado com Docker, o que proporciona portabilidade, facilidade de configuração e consistência entre ambientes de desenvolvimento e produção.
  </p>
  <p>
    Em conjunto, essas tecnologias formam um sistema ágil, escalável e ideal para demonstrar boas práticas de desenvolvimento full stack.
  </p>`,
  "https://github.com/Rezende-Fabio/snack-spot",
  ""
);

export const scanawe: Project = new Project(
  "Scanawe",
  "assets/images/projects/scanawe/scanawe.png",
  false,
  [
    { image: 'assets/icons/python.svg', name: "Python" },
    { image: 'assets/icons/flask.svg', name: "Flask" },
    { image: 'assets/icons/html.svg', name: "Html" },
    { image: 'assets/icons/css.svg', name: "Css" },
    { image: 'assets/icons/bootstrap.svg', name: "Bootstrap" },
    { image: 'assets/icons/sqlite.svg', name: "SQLite" },
  ],
  [
    "assets/images/projects/scanawe/scanawe.png",
    "assets/images/projects/scanawe/image_1.png",
    "assets/images/projects/scanawe/image_2.png",
    "assets/images/projects/scanawe/image_3.png",
    "assets/images/projects/scanawe/image_4.png",
    "assets/images/projects/scanawe/image_5.png",
    "assets/images/projects/scanawe/image_6.png",
  ],
  `
  <h7>Scanawe — Sistema para Identificação de Possíveis Casos de Assédio Moral no Ambiente de Trabalho</h7>
  <br>
  <br>
  <p>
    O Scanawe é um projeto desenvolvido para apresentação do TCC, com o objetivo de identificar possíveis casos de assédio moral no ambiente de trabalho por meio de questionários cientificamente validados.
    O sistema permite cadastrar empresas, setores e funcionários, estruturando todo o ambiente organizacional antes da aplicação dos questionários.
  </p>
  <p>
    Para garantir o sigilo dos colaboradores, cada funcionário recebe um token de acesso único, que está vinculado apenas ao seu setor, sem qualquer associação direta com sua identidade. Dessa forma, as respostas permanecem anônimas e protegidas.
  </p>
  <p>
    Após o preenchimento do questionário pelos funcionários, o gestor autorizado pela empresa pode gerar relatórios analíticos, baseados em métodos estatísticos validados previamente por psicólogos especializados. Esses relatórios destacam setores que apresentam sinais de risco, auxiliando a empresa a identificar áreas que podem demandar atenção, acompanhamento ou intervenções de prevenção.
  </p>

  <strong>O projeto foi avaliado em um ambiente simulado em sala de aula.</strong>
  `,
  "",
  ""
);

export const myFinanceManagerWeb: Project = new Project(
  "My FInance Manager Web",
  "assets/images/projects/my_finance_manager_web/my_finance_manager_web.png",
  false,
  [
    { image: 'assets/icons/angular.svg', name: "Angular" },
    { image: 'assets/icons/html.svg', name: "Html" },
    { image: 'assets/icons/css.svg', name: "Css" },
    { image: 'assets/icons/bootstrap.svg', name: "Bootstrap" },
  ],
  [
    "assets/images/projects/my_finance_manager_web/my_finance_manager_web.png",
  ],
  "Projeto em Desenvolvimento.",
  "https://github.com/Rezende-Fabio/mycar-mobile",
  ""
);

export const myFinanceManagerApi: Project = new Project(
  "My Finance Manager API",
  "assets/images/projects/my_finance_manager_api/my_finance_manager_api.png",
  false,
  [
    { image: 'assets/icons/csharp.svg', name: "CSharp" },
    { image: 'assets/icons/net_framework.svg', name: "Net Framework" },
    { image: 'assets/icons/postgres.svg', name: "Postgres" },
  ],
  [
    "assets/images/projects/my_finance_manager_api/my_finance_manager_api.png",
  ],
  "Projeto em Desenvolvimento.",
  "",
  ""
);

export const myCarMobile: Project = new Project(
  "My Car Mobile",
  "assets/images/projects/my_car_mobile/my_car_mobile.jpg",
  true,
  [
    { image: 'assets/icons/flutter.svg', name: "Flutter" },
  ],
  [
    "assets/images/projects/my_car_mobile/my_car_mobile.jpg",
  ],
  "Projeto em Desenvolvimento.",
  "",
  ""
);