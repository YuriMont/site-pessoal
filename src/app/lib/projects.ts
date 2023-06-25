interface ProjectsParams {
  name: string
  image: string
  resume: string
  link: string
}

const myProjects: ProjectsParams[] = [
  {
    name: 'Cápsula do tempo',
    image: 'https://i.imgur.com/lEjFQhA.png',
    resume:
      'A Cápsula do Tempo é um projeto pessoal multiplataforma desenvolvido com TypeScript, NodeJS, ReactJS, NextJS, React Native e Expo. A plataforma permite aos usuários fazer login usando sua conta do GitHub e carregar fotos e vídeos de até 5 MB, adicionando um texto intuitivo para cada um deles. As memórias são organizadas cronologicamente e armazenadas em um banco de dados SQL com o auxílio do ORM Prisma.',
    link: 'https://github.com/YuriMont/Spacetime',
  },
  {
    name: 'Plataforma de gestão de hábitos',
    image: 'https://i.imgur.com/yikXYeS.png',
    resume:
      'A plataforma de Gestão de Hábitos é um projeto pessoal que utiliza Node.js como tecnologia de backend, React.js para frontend e React Native para desenvolvimento mobile. O aplicativo oferece um calendário interativo que exibe os hábitos diários com cores diferentes para indicar a conclusão de cada um. É possível criar e editar hábitos diariamente, marcando-os como concluídos.',
    link: 'https://github.com/YuriMont/habits-platform',
  },
  {
    name: 'Sistema de autenticação usando Spring Security',
    image: 'https://i.imgur.com/lPlDBWO.png',
    resume:
      'Este projeto é um projeto pessoal, um serviço de autenticação que permite o cadastro, login e acesso a informações de usuários. Ele utiliza o Spring Boot com o banco de dados PostgreSQL. A autenticação é feita por meio de tokens JWT. As principais funções deste sistema são: cadastro de novos usuários, autenticação de usuários existentes e exibir informações de todos os usuários cadastrados. O serviço armazena as senhas criptografadas e o token JWT é usado para acessar os endpoints protegidos.',
    link: 'https://github.com/YuriMont/autenticao-springboot ',
  },
  {
    name: 'Plataforma de eventos',
    image: 'https://i.imgur.com/87PX43N.png',
    resume:
      'Este projeto é um projeto pessoal, uma plataforma de eventos online desenvolvida com ReactJS no frontend e utiliza um banco de dados não relacional GraphQL. As principais funcionalidades incluem cadastro de usuários, direcionamento para a plataforma, acesso a aulas de JavaScript presentes no banco de dados, links para comunidades no Discord e possibilidade de acessar e baixar materiais e wallpapers.',
    link: 'http://plataforma-de-evento.vercel.app/',
  },
  {
    name: 'Serviço de notificações',
    image: 'https://i.imgur.com/GVwpcpX.png',
    resume:
      'Este projeto é um pessoal, um serviço de notificações desenvolvido com NestJS, Prisma e Jest. As principais funcionalidades incluem a criação, remoção e edição de notificações, além da marcação de notificações como visualizadas e a visualização de notificações não visualizadas, bem como o teste de todas as funcionalidades',
    link: 'https://github.com/YuriMont/notifications-service',
  },
  {
    name: 'Sistema de login e autenticação com NodeJS',
    image: 'https://i.imgur.com/MiS2qOM.png',
    resume:
      'Este projeto pessoal, um sistema de login e autenticação desenvolvido com NodeJS e Express. Ele permite a criação de novos usuários, criptografa as senhas, armazena os dados em um banco de dados MongoDB e gera tokens de autenticação com validade de 4 horas. Os usuários podem fazer login e acessar suas informações.',
    link: 'https://github.com/YuriMont/authentication_API',
  },
  {
    name: 'Avaliação Desenvolvedor Back-end Attornatus',
    image: 'https://i.imgur.com/MDMH21x.png',
    resume:
      'Este projeto é uma API para gerenciar Pessoas com as seguintes funcionalidades: criar, editar, consultar e listar pessoas; criar endereço para uma pessoa; listar endereços da pessoa; e informar qual endereço é o principal. Os campos da entidade Pessoa serão: Nome, Data de nascimento e Endereço (com os campos: Logradouro, CEP, Número e Cidade). Todas as respostas da API são em formato JSON, além de um serviço de banco de dados H2.',
    link: 'https://github.com/YuriMont/projeto_pessoa',
  },
]

export default myProjects
