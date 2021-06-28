import 'survey-react/survey.css';


const json = {
    locale: "pt-br",
    showProgressBar: "bottom",
    title: 'PADRÕES DE FERRAMENTA AVALIATIVA DO CEO',
    pages: [

        {
            questions: [
                {
                    name: "pergunta 1",
                    type: "dropdown",
                    title: "Qual a sua formação no CEO?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        "Gerente",
                        "Cirurgião dentista que atua nas especialidades do CEO"
                    ]
                },
                {
                    type: "radiogroup",
                    name: "pergunta 2",
                    title: "Você tem formação em saúde coletiva/gestão pública?",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0,
                    visibleIf: "{pergunta 1}='Gerente'"
                },
                {
                    type: "checkbox",
                    name: "pergunta 3",
                    title: "Em qual(is) especialidade(s) você atua no CEO? ",
                    isRequired: false,
                    hasOther: true,
                    colCount: 1,
                    choices: [
                        "Cirurgia Oral",
                        "Endodontia",
                        "Pacientes com necessidades especiais",
                        "Periodontia",
                        "Estomatologia",
                    ],
                    visibleIf: "{pergunta 1}='Cirurgião dentista que atua nas especialidades do CEO'"
                },
                {
                    type: "radiogroup",
                    name: "pergunta4",
                    title: "Qual o seu sexo?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        "Masculino",
                        "Feminino",
                        "Prefere não informar"
                    ]

                },

                {
                    name: "pergunta 5",
                    type: "text",
                    inputType: "date",
                    title: "Idade",
                    isRequired: true,
                    autoComplete: "bdate"
                },
                {
                    type: "radiogroup",
                    name: "pergunta 6",
                    title: "Há um plano de carreira para profissionais do CEO?",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 7",
                    title: "O municicípio promoveu ações de educação permanente nos últimos meses?",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    name: "pergunta 8",
                    type: "dropdown",
                    title: "As ações de educação permanente contemplam as demandas e necessidades de equipe?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        "1- Contemplam muito",
                        "2- Contemplam",
                        "3- Contemplam razoavelmente",
                        "4- Contemplam pouco",
                        "5- Não contemplam"
                    ],
                    visibleIf: "{pergunta 7}='Sim'",
                },
                {
                    type: "radiogroup",
                    name: "pergunta 9",
                    title: "A equipe profissional utilizou o Telessaúde nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    name: "pergunta 10",
                    type: "dropdown",
                    title: "Qual o tipo de CEO?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        "1- Tipo do CEO I ",
                        "2- Tipo do CEO II",
                        "3- Tipo do CEO III",
                    ]
                },
                {
                    type: "radiogroup",
                    name: "pergunta 11",
                    title: "Além das especialidades mínimas, esse CEO oferta outras especialidades? ",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    name: "pergunta 12",
                    type: "dropdown",
                    title: "O CEO possui gerente?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        "1- Sim, profissional acumula a atividade clínica e de Gerente no CEO.",
                        "2- Sim, profissional atua exclusivamente como Gerente do CEO.",
                        "3- Não há Gerente",
                    ]
                },
                {
                    "type": "rating",
                    "name": "pergunta 13",
                    "title": "Como estão as condições físicas de trabalho: iluminação, ventilação (circulação de ar), conservação de pisos, paredes e teto, instalações elétricas, portas, janelas, vidros e extintor, de acordo com a regulamentação sanitária (instalações físicas, equipamentos e procedimentos) e ainda abastecimento de água, disposição dos resíduos líquidos e sólidos, etc.?",
                    "mininumRateDescription": "Muito ruim (não cumpre 4 ou +)",
                    "maximumRateDescription": "Muito bom (cumpre Todas)"
                },
                {
                    name: "pergunta 14",
                    type: "dropdown",
                    title: "O consultório odontológico passou por serviços de manutenção das instalações físicas e dos equipamentos odontológicos de forma regular e sistemática nos últimos 6 meses?",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        "1- Sim, apenas para instalações físicas.",
                        "2- Sim, apenas para equipamentos.",
                        "3- Ambos",
                        "4- Não",
                    ]
                },
                {
                    type: "radiogroup",
                    name: "pergunta 15",
                    title: "O CEO suspendeu algum atendimento por falta de insumos ou instrumentais nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 16",
                    title: "O CEO suspendeu algum atendimento por não ter equipamento(s) funcionando adequadamente nos últimos 6 meses?  ",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 17",
                    title: "Houve disponibilidade de Equipamentos de Proteção Individual (EPI) de forma regular e suficiente nos últimos 6 meses?  ",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 18",
                    title: "Houve computador em condições de uso para os dentistas nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 19",
                    title: "A Unidade forneceu acesso à internet nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 20",
                    title: "Existe prontuário eletrônico em uso nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        "Sim", "Não"
                    ],
                    colCount: 0
                },
                {
                    type: "radiogroup",
                    name: "pergunta 21",
                    title: "Existe prontuário eletrônico em uso nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                        "Não se aplica"
                    ],
                    colCount: 0,
                    visibleIf: "{pergunta 20}='Sim'",
                },
                {
                    name: "pergunta 22",
                    type: "dropdown",
                    title: "O acesso às especialidades mínimas (Cirurgia, Endodontia, Periodontia, Estomatologia e Atendimento a Pacientes com necessidades especiais) do CEO se deu por qual tipo de demanda nos últimos 6 meses? ",
                    isRequired: true,
                    colCount: 1,
                    choices: [
                        "1- Apenas Espontânea ",
                        "2- Apenas Referenciada ",
                        "3- Mista (Espontânea e Referenciada) ",
                    ]
                },
                {
                    type: "radiogroup",
                    name: "pergunta 23",
                    title: "A marcação da consulta inicial do usuário no CEO foi feita pela Unidade Básica de Saúde (diretamente com o CEO ou por central de regulação) nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 24",
                    title: "O CEO fez a gestão da lista de  espera de usuários nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 25",
                    title: "O CEO realizou ações para diminuir o absenteísmo dos usuários nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 26",
                    title: "A Equipe do CEO realizou matriciamento ou ações de apoio para as Equipes de Saúde Bucal da Atenção Primária na resolução de casos considerados complexos nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 27",
                    title: "O CEO recebeu o usuário referenciado da Unidade Básica de Saúde com documento de referência nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 28",
                    title: "Qual tipo de documento?",
                    isRequired: true,
                    choices: [
                        "Escrito",
                        "Eletrônico",
                        "Não se aplica"
                    ],
                    colCount: 1,
                    visibleIf: "{pergunta 27}='Sim'"
                },
                {
                    type: "radiogroup",
                    name: "pergunta 29",
                    title: "Existem protocolos clínicos pactuados que orientem o encaminhamento de pacientes da Atenção Primária aos CEO?",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 30",
                    title: "Foi realizada a contrarreferência para as Equipes de Saúde Bucal da Atenção Primária nos últimos 6 meses?  ",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 31",
                    title: "Qual tipo de documento?",
                    isRequired: true,
                    choices: [
                        "Escrito",
                        "Eletrônico",
                        "Não se aplica"
                    ],
                    colCount: 1,
                    visibleIf: "{pergunta 30}='Sim'"
                },
                {
                    type: "radiogroup",
                    name: "pergunta 32",
                    title: "A equipe do CEO entrou em contato com equipe hospitalar para ações conjuntas (troca de informações, apoio etc) nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 33",
                    title: "Houve garantia de referenciamento para atendimento hospitalar nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 34",
                    title: "A equipe do CEO realizou ações de planejamento nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 35",
                    title: "A equipe do CEO realizou ações de avaliação e/ou monitoramento das metas do cumprimento de indicadores nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 36",
                    title: "A equipe do CEO realizou reuniões nos últimos 6 meses? ",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 37",
                    title: "A equipe do CEO realizou autoavaliação do serviço nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    "type": "rating",
                    "name": "Satisfação",
                    "title": "Classifique a relevância deste estabelecimento de saúde e seus serviços na rede atenção em Saúde Bucal no SUS",
                    "mininumRateDescription": "Nenhuma relevância ",
                    "maximumRateDescription": "Muito relevante"
                },
                {
                    type: "radiogroup",
                    name: "pergunta 39",
                    title: "O CEO realizou ou teve mecanismo de avaliação de satisfação do usuário nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },
                {
                    type: "radiogroup",
                    name: "pergunta 40",
                    title: "O CEO disponibilizou canais de comunicação com os usuários de forma permanente nos últimos 6 meses?",
                    isRequired: true,
                    choices: [
                        "Sim",
                        "Não",
                    ],
                    colCount: 0,
                },

            ]
        },
    ]
};


// perguntas 1, 2, 3 podem ser implementadas de maneira
// melhor. Nao sei como colocar idade na pergunta 5.

export default json