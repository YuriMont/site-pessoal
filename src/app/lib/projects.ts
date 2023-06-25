interface ProjectsParams {
  name: string
  image: string
  resume: string
  link: string
}

const myProjects: ProjectsParams[] = [
  {
    name: 'Cápsula do tempo',
    image:
      'https://lh3.googleusercontent.com/pw/AJFCJaXC_P4HGggWKTef6a541k4squ8u5nEPI40-vkYF30zGFBTEykWrihE57nxDqxg6iYMMkSGESRlPAyPXrTUBWCyETF5uZMThdGA1T-sqQVkOX5I1eT8uGWnx9j__QH1qN8QHxG5nkcu9khSXTbsqCnP3QLCpN1al-PqLL7FScK1klQE2CmVtbkLr_pAND9MWV60ziBwwR-y1WCGd2JGU1QUOygQCjUrCYNBrt-8bCkSVhfCSgfQ91EQPeTB3Me6HiyUMMebAnNdbCVnhTsyU4vWztQS8QBdo_PqW87EbIizop0TVFAEfrvhVNl_sGm5bQ1ActShS2dMiGxEMfZ4lAQgyAuq9osXDP7IWY8ab3MN9zIHOQrYLee7mtj7r6AJ6_s84L7-A5qzlRD2a-DthcMegC31zhnHx5qzbYf4kRdRNcauy0QN6wQlFlv6q_KLWQV3YKkoJtrKhrIAKeVC8etxAdjXHeLEaOdx6O6cyF28AIuZNPDyv7FsVg2e858Bg4I9g0dE5HNQmzGsyjk0Gn2yoDmtZzNMnaqRlCmJcv_IM-KL_mLafiSQ8Y7GZV4d1LJv3_vdtCImQ2AZauOQ0jwMVJBtYgAAUlgZLJNGvlFt8dJ6nzK_JlpTTBowHYxYVAYt58ZBUQMjq5JVp3Jpt1j4-IuK8hV181_LE1_8gqppBZg8pPikx2IUpVLl3qfAip7bnt8FghZ8Viq8H-HKM2bdGPa-BmaVIOtsbYbKYwOePSDwpsMTiJ-Vf8x-_Vk32CMBjxzKmjcHh97azd31q5bffZxGmgncg3awUdAsbrnh1vJEbEaFMF3wk3SgsEbfTZC67yr9g8W9Q7P8yRV7Mfeq2sq47Mu9Mc-wLD_Aj9SGGkiFvRjhIq4DY4djxSHmo1lqSYbiimivgA_cB9SxmItDTbOWcCkHQKZVB5-3VANi7rSmi8AjjQm6nH0S5DMVQqG3t1B32kPx-zi8W-_Jd_l9E9yes-1mNFhJp6O65YAIttOmNJvb4c4g-2ySSJC8I39gd7zIJisbAsd0wYHOj074vIFwCeuT_XbD6Ng=w1075-h672-s-no',
    resume:
      'A Cápsula do Tempo é um projeto pessoal multiplataforma desenvolvido com TypeScript, NodeJS, ReactJS, NextJS, React Native e Expo. A plataforma permite aos usuários fazer login usando sua conta do GitHub e carregar fotos e vídeos de até 5 MB, adicionando um texto intuitivo para cada um deles. As memórias são organizadas cronologicamente e armazenadas em um banco de dados SQL com o auxílio do ORM Prisma.',
    link: 'https://github.com/YuriMont/Spacetime',
  },
  {
    name: 'Plataforma de gestão de hábitos',
    image:
      'https://lh3.googleusercontent.com/pw/AJFCJaWf90m28Nbw39B4tOExcg5p4V2SkEoKuLaw_N20GxDkmK5nWn7c1bqSwo30nFfzvBGDXfrE-bgUn6EAB_Gn7irOdfeLUXJ33ZLwPcBbk4pPlkHFjQLgvflI5fmnZ9qHPfSYQ401Kyfx1KW2KunWshdAlH0toXg8ebqJXCdIlICndAfBfxSi1ypXJbgtBclDVOoaqbGjDtOLpX7Yz28d65U-sxlFg21XJywXJoE8YSKxlp4epcZ36nD8DykoIQrZnM5jrlLpGGUYNMMFnJDIc72kRYMZ2v-d4JOYYixSpzr2uSgVnt1eOiU0tp6v7sLROK9MGW3xKzueEj9Btig32OPOvFQLA_TOvTqrKhEhYXR_vYLPLHiL8ZCrtMlbbyNQTMWyN1pxXiFyTwSqeV-eMPMg_bm275x4z1LOmMq19IjdpLk7SbYUzVfOjMOXA6wh61D3ZRo_xTl6oPNwSqhmLRi5LH9NDTRxNINIhxvJH56S6qlHe3IYr3LaUBfEpfRhxClbDhBnl5CXGnUZR4eY_bjY0VxY2tjDTSl9vMFipVnavhuAtYebtfn_qndxEZUUoCrJ_Q0fu7Y0Dxh7G1HgCKiMG3OIEUObLwuqedO5pP2J3SDcW0cvIOJVoX7WLE2zD5rY74lhaJaHgvlCWTmpo8pe091_Ch0aF28SRmITHavfiyV5dxpsPzKX3XoUNedHkkhe4-SkVtfT7F7_Q2NpWd8aVvoNqGYmRY8hQIw5bnDeW89ru61Ak-Y_LOXdEfOX9QnwqZmAlNxNb_miryamKSfVGjAlmAtQDh0vzVXEGOrQRwWQkyJktKAJ7aNpfFfa8U30JkIJgn1BH862JYKQbgATWGBmHnxNR3J9Ox3vK4FvrrJR-2SoJ0Fka_cuZUBtpO4CWLQdcjXfnyBoWEW-klw-iTSUMya1fLAW5hsiY3GWu9fOCuwKwyN50gdx33Sd6kRqW98qcByDplHKy0-nQRN0CWNaqikEC0I1PvaVtUEnXKIMXICmnhOa__V8I4Lu6ljggLSjoMLMi8kWuhN_KGxRaue0rOGYxc_87w=w1075-h672-s-no',
    resume:
      'A plataforma de Gestão de Hábitos é um projeto pessoal que utiliza Node.js como tecnologia de backend, React.js para frontend e React Native para desenvolvimento mobile. O aplicativo oferece um calendário interativo que exibe os hábitos diários com cores diferentes para indicar a conclusão de cada um. É possível criar e editar hábitos diariamente, marcando-os como concluídos.',
    link: 'https://github.com/YuriMont/habits-platform',
  },
  {
    name: 'Sistema de autenticação usando Spring Security',
    image:
      'https://lh3.googleusercontent.com/pw/AJFCJaWij7RgVAhy_cdxqlUGbt34YbksyJWR6XSnFatgFtQOn-PyZdQWKNFXFFp5WJ09RVMo-ZoDq9J7WUEfv081IIcwC7xMjaGdPg8c4NI9_nsUq7e3kBe2adOXAFJgiu1nN1hgbBLtbTvdITrINDC0IZVpE3qY5ESnOnQP2lSFRQbarWPbl9eCy4SUIRF9ncf5urYdjs4uMSVouNhMbh9ExiQbOXyiUwebRYikgDUPlTvZgeRzAZ23vYHLdrNGhV3XBqC4WmIy4PcjnkDtvK_-p6XOOw4Rm-pDNZC30wUnu3eWjnEMXSCeAUwQdWCPkm05dVaGlBWP9Ywn90F1-_o0TJjv7GlsjV-bmUlUBrjNdIi9_amV0EIPsSdM4moPvDjQ0OLEWtzGPlEvN0KR5qpGV6WDUS5BHklfFxHbC7wIPToF8CXMPDlsNy5KYfzNzbelwYzyNDFJCLeto175AeC7mN2rfcW1njD7molN_ioIYxSj6a6Wz0wAQJuB-NhcxR45LwRVT7Xkhoms0B0NvYh5tgrrSxUZH7giArFiy4y43Efv-gAz2yYS5PdXxFC7ExYg5r6vKgyOWt1sDkk08i4eptguQ64JUPM_8A4QlvnZZfry8s0tDiCQlMuNX1tvIr_o9a6PBhp3lgeV0ndwQbcJ6mECiXgOJw8r5DrOIITJjlKH0Bsok_rCZL5xU1L_obABZGRIr-hEys5JTtf3el6VVLSs5TsGCVKGf1f90RHlfnKX3TOUxTa6KJ87CC849hAsc8BKtt237KC237m2dZ10LxgggNEDK9IEarzrBlSyxg_zmlSSnjZ5KL4N8it3M0ePcuWUiy10qP62EU_VYFNeyygF86He-elFZEB8Z8q1ZoqFrMkxt4by-1s8uqwjylG7Fe0g7_GElcZEdhWRRtwWfevTHy28-IscCvCkljI8_TaeqCsAJKM6NnGa-LA4T3exCmZ61p1yuNIqBMfrmbG4yN-Wiirk5BneuNjGb9VOMVgRN-BVni8ee78UNM0Af9RkMOS8qvJl2G1W9dBiemAvxsvdQa1DSQNO_74Eeg=w640-h360-s-no',
    resume:
      'Este projeto é um projeto pessoal, um serviço de autenticação que permite o cadastro, login e acesso a informações de usuários. Ele utiliza o Spring Boot com o banco de dados PostgreSQL. A autenticação é feita por meio de tokens JWT. As principais funções deste sistema são: cadastro de novos usuários, autenticação de usuários existentes e exibir informações de todos os usuários cadastrados. O serviço armazena as senhas criptografadas e o token JWT é usado para acessar os endpoints protegidos.',
    link: 'https://github.com/YuriMont/autenticao-springboot ',
  },
  {
    name: 'Plataforma de eventos',
    image:
      'https://lh3.googleusercontent.com/pw/AJFCJaXD9xoOcc84i1gJHJ4rJPotG4iNRfCKX9UQcl4DdDXvDXoJVyDZ3oPkUKGIm8vg8ddg9w_MmZjZTcy7JG39EpnI8HXWLoJoqaSvAEYfdpfiUMKjJWj28UXM1nJfikImEwBMVuwGUks_N20bVDoIlRU43RCtiTYqWrLcF4jUTxhWhprRhFEswJV4RniR5PsGamkWWIdk-aKtGcyXZZ9EETXKWCyjaIhCDA8nTNoN1NJLxdp3YT6ZMmzz-JHW0lKTf3W47parukIccT_EPL5rIFOMCorr9w07kO7ZI1EclDwMXgLDRkZ5Hi3NCZFhUBMtI8kD052d1-MqfLx0Lwdj0za7-M0uQ_uIP8qKxhf3JReux1AGeHLGtaDR4FmDdTF09vi8FcAvuXTvPAz3nBq40hviEln1TSAr5O7yqD0vMYyd93ugdfHD20sIljsFHvJWxoOzJqfVITUUG1J0ffN6_IPjAG4O8Zj0-dI_p4sYJAe3EzhFnySO9nikQyY32SY6cmV0lkW-ssdyEdPzrk8LcZUhhitV9IebMhMX3mkJ3bs3cY7Y2_D_qBqQsAiu-Ph37nYUCuvIFrgQ-VXrRbgXOzWhJIOINZWy3eLLXQ_mYsBrN7HTa9RlZqyWL88AXJz-wY2WhycFexJmkho-dJZ8_JdTGTZDln6klXrfmOrzoLWpIVgEajAX0GwGlsjXA9XQA4vss38sVTatsrZhiUyizpYkpWyHhL1J6LH1eJ3E1JbwNjCTOXGsWzxkzH6G70j3W5z1mT8Ruh7kZtF8Xk5yLPz-UF4DDQh1U6QxZidQp5va0xdRB2hk7_YpUsxlpQbGslY2w5esKN0pOiTyBRoShJzgGzdlFoNs0quK7g_UjukJ7lbTrBp9DLzhYPTkItEzZCCqxKw4uw--B06pIjKhYgPMGy1EOe7HYDjbfiLd6hr9cMKyKwzgtwVsVG_zQqw8o8ph4oEJTWxW-RdM_A5VcoFEIj7keD6D6PjkmtabwJSgGiX8aKS1JPoH4JTqQhfhGpA95w0frOTVzFY1arJF2BI3ZHj7dXf0FdOodw=w1284-h667-s-no',
    resume:
      'Este projeto é um projeto pessoal, uma plataforma de eventos online desenvolvida com ReactJS no frontend e utiliza um banco de dados não relacional GraphQL. As principais funcionalidades incluem cadastro de usuários, direcionamento para a plataforma, acesso a aulas de JavaScript presentes no banco de dados, links para comunidades no Discord e possibilidade de acessar e baixar materiais e wallpapers.',
    link: 'http://plataforma-de-evento.vercel.app/',
  },
  {
    name: 'Serviço de notificações',
    image:
      'https://lh3.googleusercontent.com/pw/AJFCJaUxIOqGn1iVjHVKPdxK5oJ3W24BGYjYT2Jqdyppyr0quZZx0gMlipABTGvLQxpG1bphq86NUo0_JgoYe0q0P7NE64DcxTAEt2xYApqhfCyFpfFuGy7xDHw5l59deHWAitrGT9N8hAJlbvTKAOZXmvFMNdTb2MZKoSTWXEOhCdKlBiZowNpjdTz6fEeCs8RSfjZCeO4XBKFyiTRYYX6m7nO0jzFCocM7WtaoH1sUNqwokary8Bmv9vQIV2ZhaLCZyDL_29XWRJt0rJzPBZ98oj0vgCuplf6feftrAZQ566tYBJL-6j7O6DZR6mklA-9AFg7LDZQp-bDEwmo7bWHzjJfrpuk-O_a0SHrxB3DKcfRF_kgY_jFiV-FcVBbhhqAA5yoz0w_f5nLfj6FU7Cmi9iIo18rrTjppKDEusqWWnXIhAPnq_vmg2V6--NoO1ot1sCeBoHu0JLrq1nFo6FHLlbZxJxQQdEqeUxswmekC_WB4YWpFI1dNa3P8zx3wPoLTlRoebZXk9NdkA_Iieo80-TIQe2elW84n0ZS6pilPm8MrJHmSrqF1ip-QB3--S3kvYhRHmWY4NwDelFkdw1z9jine_89KjrPSsADRVlVI8kcrdfIR5--SyLHSdGxlIJbfNa5MOq4EGSr0R40u0yOGgVqTwFLEx-7CH61dZJBUkA6CISTawPIicSVscDOE6oEIfmF9bOTCQv_8SVIHJB7-I2lj1D_FIbYSm9a2LEXTFeWOrJgy2WWrTJtQh5zfRE2C-jxlx6JSUZoBtzje_cfMV2c04N3KHE5vimp6SAc7n6huYHfeg_Fx4qft3HiIEG0FMssJJQrWUWUtVgLopzJNXZnWF711q9wjecE5I0X34RxzVxJEHBMiBun5dojz6jjgqJ2eAIsKG4wUdvOLReAeK4PxC5ZIMaad4vE-AN8oVuEZ4viRWVJJDxlzz8vuYUwrWxrsyMu-CzcrM6EBzHYX05ALtmNtMNvzK7cyAB0MoVGvZnS89ADYuLEHvNs7EkkSmUTs2SeVuTFsremPLo8R82nsvtFBj0bop43HPA=w1195-h672-s-no',
    resume:
      'Este projeto é um pessoal, um serviço de notificações desenvolvido com NestJS, Prisma e Jest. As principais funcionalidades incluem a criação, remoção e edição de notificações, além da marcação de notificações como visualizadas e a visualização de notificações não visualizadas, bem como o teste de todas as funcionalidades',
    link: 'https://github.com/YuriMont/notifications-service',
  },
  {
    name: 'Sistema de login e autenticação com NodeJS',
    image:
      'https://lh3.googleusercontent.com/pw/AJFCJaW-RtIdKjfU6G35NPUSSGlz0dg475ajWBUxvM_q457e1aQRjc8QHFk8JbJGwCpJ-oxw7SBkkQN9xOiEr786VdBAcR_weKiIx6X6GB9UcOsBkpk98-TL29SxuNtJZ1wWvVXrW7QfwDMdPOJFokRAvRcJKeNq_bcuIfvSASV6wEjWQBhg1v4GLrIzHLVI9lEHd7ee_WuBHE4_1qk_9X91SO5NDWsRWCiBdvm0JYvV4PIvKiEA6cKSX9qKf3kQj6bM8aRZfXyHdI0vnzVvavcwJaFih-gv_nXFU9CeZjVRllB3v9jbBwAy1r_SwX9P_RWFoK69U_yP3nxCNCOD2fYU3JcS04-sGAhQkxPOFAX-eZuvIQsIFEnP21GE8zaHmqz35tMaFv8Xx3kFmRCxsZQpAgaeAoNyVRj7UG50zlmWKy2cODqAGDEstpm_NxI8CgHfZFAelYvd-ILMZssUp3gYJyw8bUIEwHEwXqnua2-Mt9aYae5I_1R81_rNEYiA5zIjqIY05YRasov4XYb4GDDrFj12wLykEI3mhQ7PvOOkDJPiK4VH7OrsxChz3FEa8AnHX9irR3uO36gH1_NdoXWENXh2UGurk_LJ2U20kLhcLReTjSwRvF0PklUTpKsF0PfXZbGUADk6ye8CSxw9kIdLaHRz3vnbc-n19vJrcv_ZfLGLAMcnY6XjAYBQAvfIWXH776S14fiw1GHmpZwX-YjzWMJM3tt6iX1sgqHrdUKQUouOIHo0V7A8PWl8Y1OLmNGp7FWNH257GpIQVGpQ7AxueyZcbaioyS0p2b4JqRB_e6l06bQyVyntFXbBZZFiMQYyuD6fpoTd5mGdfYgFTPND5uY-bB8ZeYHaB82hyfmi0XTAawRXhj5lnCnVhswBhBMCv3vs5XFWL_k6SYcuCkg0tSrCi_Bh_w6DLmGt3KQiSicHLANr1O2z-f9DTdhiAZDF1qQkBV77I840xIGj_yos5eGqxM9lVPYnTiEiJwXICBv1v4tZPF9wT7paHOJBbVY9s7Hu-E8FJSe_hWobHJ9GtG1sGo2zwxGzgnxErw=w1195-h672-s-no',
    resume:
      'Este projeto pessoal, um sistema de login e autenticação desenvolvido com NodeJS e Express. Ele permite a criação de novos usuários, criptografa as senhas, armazena os dados em um banco de dados MongoDB e gera tokens de autenticação com validade de 4 horas. Os usuários podem fazer login e acessar suas informações.',
    link: 'https://github.com/YuriMont/authentication_API',
  },
  {
    name: 'Avaliação Desenvolvedor Back-end Attornatus',
    image:
      'https://lh3.googleusercontent.com/pw/AJFCJaWmpZFqM_fgcoX1lMqgKhGZfBxS853oou_XNYOr7bygHFWtmSy2AXYFjzoSukeCpLkaUu9NRk3QyuiSUg5b6qpkx2G-UejVA3ma_gsQw_xNH5bYYa-G8YmWOIzo9iWcCaQSujSgSEqEwbSazhqHS-GHh1_MKzbdKmKoNJ1DPB7T-HiVW-sak7GB1n4RYAwcGbrhGIKMqw_zOQiUxcBRhXLUPIAURWlukRa343grS0l69Yju9hePYGTNXZeAgIf3bdHscsa6QBmKXi3Rct0OJq8uT9k6o6r5vCFPxyEXCHV5nWZqCzztZLkNAYQ5tNYBex27XDSL3THJgasWSDqOHrg9ILXn0hyZAYK9O-N5WjJ2vu4puBhOEK4FybZ1q1Oux2yuN50UmVlKv4i5PRWnFXSvLwBxWj1ts5rHGFuEKKRE656seZLwHoRUP7PV5upIfNaWtvF7d2RjLwW-1cjhp7YnCedl8hWD8qVdLfaC-Q3aAayqqZXOagjfmS2Z6lXizd8n0_UJB_Ui-adjwv8rvFHxyqsseYlzpHuzZLUmetjcTXPXOWnGvlqpRByqXxHKpqyH3FxeGkNWGJ8w4nFG4DQPCx_rEBFqkEgAOHZV_4dtmkUI51Lsh4ThaZjqZxUF9J3TyFTdCANEbnk7Ljpgo4qu1BCQoStl2lj4m_yBIlDktGH5JHDESP-fMAlqXF41nwErsbEVbls3kGSpPeDg_1a3bx4FU8uweg-IHELKP_j4S7UY-sPe13RIUT0OWEDuTNSl0BB7To7UXsp8sjrNtmkuZA3dKGIazO_DuX_IMY6I1FxVkCMgc1Cw8gZAkna9UCZtfRz6ZmNzNQC51cIQy9Z3Uyv5LNETsVwNZ7eoINw_OAvKDVi0U2acXp2armEgiKK5M9cufz6i5c55plUGjOrW9XQje_sjXVipELBouwmTHgySalmJ-7vhe4f5dqyFgQM4x7dm0LznXnV1vsLdy5NUr9lzFU-x8Sj0XZhR2K7gIYfnXPRHkaqhE0hLxmJ-bP8ORoSCek1SOryhc28caQM6P5bLVsBcIEGVWw=w1195-h672-s-no',
    resume:
      'Este projeto é uma API para gerenciar Pessoas com as seguintes funcionalidades: criar, editar, consultar e listar pessoas; criar endereço para uma pessoa; listar endereços da pessoa; e informar qual endereço é o principal. Os campos da entidade Pessoa serão: Nome, Data de nascimento e Endereço (com os campos: Logradouro, CEP, Número e Cidade). Todas as respostas da API são em formato JSON, além de um serviço de banco de dados H2.',
    link: 'https://github.com/YuriMont/projeto_pessoa',
  },
]

export default myProjects
