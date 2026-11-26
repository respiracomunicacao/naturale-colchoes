export type Eko7CategorySlug =
  | 'acessorio'
  | 'box-e-cama'
  | 'cabeceira'
  | 'cadeira-e-poltrona'
  | 'calcados'
  | 'colchao'
  | 'colchonete'
  | 'linha-fitness'
  | 'linha-intima'
  | 'linha-pet'
  | 'linha-textil'
  | 'puff'
  | 'tapete'
  | 'travesseiro';

export interface Eko7Category {
  slug: Eko7CategorySlug;
  label: string;
  featuredImage: string;
  icon:
    | 'bed'
    | 'box'
    | 'headboard'
    | 'pillow'
    | 'chair'
    | 'sparkles'
    | 'shirt'
    | 'mat'
    | 'circle'
    | 'paw'
    | 'footprints'
    | 'activity'
    | 'heart'
    | 'grid';
}

export interface Eko7Product {
  id: string;
  name: string;
  category: Eko7CategorySlug;
  categoryLabel: string;
  image: string;
  description: string;
  highlights: string[];
  sizes?: string[];
}

export const EKO7_CATEGORIES: Eko7Category[] = [
  { slug: 'acessorio', label: 'Acessório', featuredImage: './images/eko7/slim-hug.png', icon: 'sparkles' },
  { slug: 'box-e-cama', label: 'Box e Cama', featuredImage: './images/eko7/cama-grecia.jpg', icon: 'box' },
  { slug: 'cabeceira', label: 'Cabeceira', featuredImage: './images/eko7/cabeceira-olimpia.jpg', icon: 'headboard' },
  { slug: 'cadeira-e-poltrona', label: 'Cadeira e Poltrona', featuredImage: './images/eko7/poltrona-eko7.jpg', icon: 'chair' },
  { slug: 'calcados', label: 'Calçados', featuredImage: './images/eko7/chinelo-nuvem.jpg', icon: 'footprints' },
  { slug: 'colchao', label: 'Colchão', featuredImage: './images/eko7/colchao-vienna.png', icon: 'bed' },
  { slug: 'colchonete', label: 'Colchonete', featuredImage: './images/eko7/colchonete-nomade.jpg', icon: 'mat' },
  { slug: 'linha-fitness', label: 'Linha Fitness', featuredImage: './images/eko7/top-fitness-nadador.jpg', icon: 'activity' },
  { slug: 'linha-intima', label: 'Linha Íntima', featuredImage: './images/eko7/sutia.jpg', icon: 'heart' },
  { slug: 'linha-pet', label: 'Linha Pet', featuredImage: './images/eko7/dreams-pet-slim.jpg', icon: 'paw' },
  { slug: 'linha-textil', label: 'Linha Têxtil', featuredImage: './images/eko7/edredom-percal-300.jpg', icon: 'shirt' },
  { slug: 'puff', label: 'Puff', featuredImage: './images/eko7/puff-eko7.jpg', icon: 'circle' },
  { slug: 'tapete', label: 'Tapete', featuredImage: './images/eko7/manta-quantica.jpg', icon: 'grid' },
  { slug: 'travesseiro', label: 'Travesseiro', featuredImage: './images/eko7/travesseiro-viscoelastico.png', icon: 'pillow' },
];

const MATTRESS_SIZES = [
  'Solteiro (0,88 x 1,88m)',
  'Solteirão (1,19 x 1,88m)',
  'Casal Padrão (1,38 x 1,88m)',
  'Queen (1,58 x 1,98m)',
  'King (1,93 x 2,03m)',
];

export const EKO7_PRODUCTS: Eko7Product[] = [
  // ==========================================
  // 1. COLCHÃO (15 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'colchao-vienna',
    name: 'Colchão Vienna',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-vienna.png',
    description:
      'Estrutura de 20 cm de altura com duas camadas de espuma para suporte e adaptação, revestimento superior em malha, lateral em linho bege e tecnologia quântica.',
    highlights: ['Altura de 20 cm', 'Duas camadas de espuma', 'Revestimento em malha e linho bege', 'Sistema de tecnologia quântica'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'colchao-serie-ouro-premium-pillow',
    name: 'Colchão Série Ouro Premium Pillow',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-serie-ouro-premium-pillow.jpg',
    description:
      'Tecnologias modernas de conforto e ergonomia com pillow top e revestimento em tecido Bouclé texturizado, felpudo e de toque agradável.',
    highlights: ['Linha Série Ouro com Pillow Top', 'Revestimento nobre em tecido Bouclé', 'Densidade progressiva Eko\'7', 'Tecnologias terapêuticas integradas'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'manta-quantica',
    name: 'Manta Quântica',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/manta-quantica.jpg',
    description:
      'Sobrecolchão terapêutico flexível com energia quântica, campo magnético e infravermelho longo, que transforma qualquer cama em uma estação de descanso bioativo.',
    highlights: ['Portátil e adaptável a qualquer colchão', 'Energia eletromagnética pulsátil e quântica', 'Estimula a microcirculação celular', 'Revestimento antialérgico'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'flexibed-roma',
    name: 'Conjunto Cama Articulada FlexiBed Roma',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/flexibed-roma.jpg',
    description:
      'Cama motorizada articulada com controle sem fio, múltiplos pontos de articulação para cabeça e pernas, proporcionando relaxamento muscular e alívio do refluxo.',
    highlights: ['Articulação motorizada independente', 'Controle remoto sem fio', 'Posição Gravidade Zero', 'Melhora a circulação e alivia refluxo'],
  },
  {
    id: 'flexibed-gran-jaguar',
    name: 'Conjunto Cama Articulada FlexiBed Gran Jaguar',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/flexibed-gran-jaguar.jpg',
    description:
      'Sofisticação máxima em cama articulada com motores de alto torque e baixíssimo ruído, revestimento premium e integração completa de terapias.',
    highlights: ['Motores ultra silenciosos', 'Pillow top articulável integrado', 'Terapias quânticas e vibromassagem', 'Design imponente e acabamento luxuoso'],
  },
  {
    id: 'colchao-unico',
    name: 'Colchão Único',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-unico.jpg',
    description:
      'Design inovador e conforto personalizado com densidade progressiva inteligente que se molda aos contornos corporais, aliviando pontos de tensão.',
    highlights: ['Estrutura com perfilado vulcanizado', 'Pastilhas de magnetos e infravermelho', 'Tecido respirável hipoalergênico', 'Excelente sustentação da coluna'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'colchao-serie-ouro-premium',
    name: 'Colchão Série Ouro Premium',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-serie-ouro-premium.jpg',
    description:
      'O consagrado clássico da Eko\'7 combinando suporte ortopédico de alta durabilidade, perfilado terapêutico e campo bioenergético ativo.',
    highlights: ['Linha Série Ouro consagrada', 'Alinhamento postural perfeito', 'Pastilhas de photon e neodímio', 'Tecido nobre de toque aveludado'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'colchao-pangeia',
    name: 'Colchão Pangeia',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-pangeia.jpg',
    description:
      'Inspirado na união dos elementos da natureza, oferece equilíbrio entre firmeza ortopédica e acolhimento com tecidos ecológicos respiráveis.',
    highlights: ['Equilíbrio entre firmeza e maciez', 'Ventilação contínua interna', 'Terapias magnética e infravermelha', 'Tratamento antimicrobiano de fábrica'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'colchao-news',
    name: 'Colchão News',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-news.jpg',
    description:
      'Conceito jovem e dinâmico com tecnologia de ponta para quem busca revigorar as energias corporais durante as noites de sono.',
    highlights: ['Design contemporâneo', 'Espuma de alta resiliência', 'Camadas anatômicas de relaxamento', 'Garantia de fábrica estendida'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'colchao-seven',
    name: 'Colchão Seven',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-seven.jpg',
    description:
      'Sete zonas diferenciadas de sustentação para apoiar precisamente cabeça, ombros, lombar, quadril, coxas, pernas e pés.',
    highlights: ['7 Zonas ergonômicas de conforto', 'Alívio preciso da pressão lombar', 'Espumas ecológicas certificadas', 'Campo magnético terapêutico'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'colchao-lunar',
    name: 'Colchão Lunar',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-lunar.jpg',
    description:
      'Desenvolvido para proporcionar noites serenas e reparadoras, integrando perfilado especial com massagem tipo do-in e frescor constante.',
    highlights: ['Perfilado massageador do-in', 'Conforto térmico aprimorado', 'Estrutura ortopédica indeformável', 'Acabamento em malha suave'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'colchao-baby',
    name: 'Colchão Baby',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-baby.jpg',
    description:
      'Projetado com densidade milimetricamente calibrada para a coluna em desenvolvimento dos bebês e crianças, com revestimento impermeável e seguro.',
    highlights: ['Calibrado para coluna infantil', 'Revestimento impermeável e lavável', '100% Livre de químicos agressivos', 'Proteção antialérgica total'],
    sizes: ['Berço Americano (0,70 x 1,30m)', 'Mini Cama (0,70 x 1,50m)'],
  },
  {
    id: 'colchao-diamante',
    name: 'Colchão Diamante',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-diamante.jpg',
    description:
      'Modelo topo de linha da Eko\'7 que combina alta performance ortopédica, conforto extremo e as mais avançadas tecnologias do sono.',
    highlights: ['Modelo topo de linha Eko\'7', 'Alta performance ortopédica', 'Densidade progressiva e perfilado', 'Magnetoterapia, infravermelho e massagem'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'colchao-renova',
    name: 'Colchão Renova',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/colchao-renova.png',
    description:
      'Focado na renovação celular e alívio do estresse diário através da indução de ondas bioenergéticas relaxantes durante as fases do sono.',
    highlights: ['Tecnologia de indução de relaxamento', 'Perfilado terapêutico respirável', 'Densidade progressiva inteligente', 'Tecido em malha nobre'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'flexibed-lisboa',
    name: 'Conjunto Cama Articulada FlexiBed Lisboa',
    category: 'colchao',
    categoryLabel: 'Colchão',
    image: './images/eko7/flexibed-lisboa.jpg',
    description:
      'Cama articulada de design europeu com estrutura robusta, silenciosa e controle sem fio para posicionamento ideal do corpo ao dormir ou ler.',
    highlights: ['Design europeu contemporâneo', 'Articulações independentes sem ruídos', 'Controle intuitivo sem fio', 'Melhora circulação das pernas'],
  },

  // ==========================================
  // 2. BOX E CAMA (10 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'cama-grecia',
    name: 'Cama Grécia',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/cama-grecia.jpg',
    description:
      'Design clássico e imponente com estrutura robusta em madeira de reflorestamento imunizada e estofamento refinado.',
    highlights: ['Estrutura em madeira tratada', 'Pés de madeira nobre maciça', 'Estofamento artesanal', 'Design atemporal'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'conjuntos-bicama',
    name: 'Conjuntos Bicama Eko\'7',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/conjuntos-bicama.jpg',
    description:
      'Praticidade e versatilidade com cama auxiliar embutida de fácil deslizamento, perfeita para otimizar espaço em quartos de hóspedes.',
    highlights: ['Cama auxiliar de fácil abertura', 'Rodízios de alta resistência', 'Aproveitamento inteligente de espaço', 'Madeira tratada e acabamento estofado'],
    sizes: ['Solteiro (0,88 x 1,88m)'],
  },
  {
    id: 'cama-roma',
    name: 'Cama Roma',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/cama-roma.jpg',
    description:
      'Elegância minimalista com bordas ligeiramente recuadas, conferindo leveza visual ao ambiente sem abrir mão da robustez.',
    highlights: ['Perfil elegante e minimalista', 'Bordas chanfradas e estofadas', 'Fácil de limpar', 'Excelente sustentação'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'cama-lisboa',
    name: 'Cama Lisboa',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/cama-lisboa.jpg',
    description:
      'Linhas refinadas com acabamento em tecidos nobres e estrutura sólida projetada para sustentar os colchões terapêuticos com estabilidade total.',
    highlights: ['Acabamento estofado refinado', 'Estrutura reforçada de longa durabilidade', 'Sem ruídos ou rangidos', 'Disponível em várias cores'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'cama-gran-jaguar',
    name: 'Cama Gran Jaguar',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/cama-gran-jaguar.jpg',
    description:
      'Presença marcante e acabamento de alto padrão de marcenaria com estofamento primoroso para suítes de luxo.',
    highlights: ['Padrão de luxo para suítes', 'Estofamento volumoso e confortável', 'Pés de sustentação reforçados', 'Encaixe sob medida'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'box-slim',
    name: 'Box Slim',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/box-slim.jpg',
    description:
      'Base de perfil rebaixado e moderno que deixa o colchão em evidência, mantendo a firmeza necessária para o alinhamento da coluna.',
    highlights: ['Perfil rebaixado slim', 'Design moderno e discreto', 'Estrutura firme e ventilada', 'Cantoneiras de acabamento'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'box-classico',
    name: 'Box Clássico',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/box-classico.jpg',
    description:
      'Base sólida e silenciosa com cantoneiras de proteção e acabamento em tecidos coordenados com a linha de colchões.',
    highlights: ['Base firme que protege o colchão', 'Pés rosqueáveis com sapatas niveladoras', 'Cantoneiras de proteção plástica', 'Diversas opções de cores de tecido'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'box-bau-moderno',
    name: 'Box Baú Moderno',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/box-bau-moderno.jpg',
    description:
      'Abertura assistida por pistões a gás com amplo espaço interno para armazenamento de roupas de cama, travesseiros e malas.',
    highlights: ['Pistões a gás de abertura suave', 'Amplo compartimento interno livre', 'Estrutura bipartida nos tamanhos casal', 'Revestimento resistente'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'box-bau-madeira',
    name: 'Box Baú Madeira',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/box-bau-madeira.jpg',
    description:
      'Construção reforçada em madeira selecionada com fundo reforçado para suportar cargas pesadas de armazenamento sem ceder.',
    highlights: ['Madeira tratada com garantia', 'Fundo de alta resistência', 'Articulação mecânica duradoura', 'Praticidade de organização'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'bau-de-peseira',
    name: 'Baú de Peseira',
    category: 'box-e-cama',
    categoryLabel: 'Box e Cama',
    image: './images/eko7/bau-de-peseira.jpg',
    description:
      'Móvel complementar posicionado aos pés da cama que serve como assento e como baú espaçoso para guardar mantas e cobertores.',
    highlights: ['Assento estofado confortável', 'Espaço interno generoso', 'Design harmonizado com a cabeceira e box', 'Pés em madeira maciça'],
  },

  // ==========================================
  // 3. CABECEIRA (4 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'cabeceira-olimpia',
    name: 'Cabeceira Modular Olímpia',
    category: 'cabeceira',
    categoryLabel: 'Cabeceira',
    image: './images/eko7/cabeceira-olimpia.jpg',
    description:
      'Módulos verticais imponentes com preenchimento em espuma Eko\'7 de alto toque e fixação segura na parede ou no box.',
    highlights: ['Placas estofadas verticais', 'Espuma confortável para apoio de leitura', 'Fixação versátil parede ou frame box', 'Tecidos selecionados de alta gramatura'],
    sizes: ['Casal (1,40m)', 'Queen (1,60m)', 'King (1,95m)', 'Sob Medida'],
  },
  {
    id: 'cabeceira-roma',
    name: 'Cabeceira Roma',
    category: 'cabeceira',
    categoryLabel: 'Cabeceira',
    image: './images/eko7/cabeceira-roma.jpg',
    description:
      'Linhas retas e desenho minimalista que se harmoniza perfeitamente com projetos de arquitetura de interiores modernos.',
    highlights: ['Perfil slim contemporâneo', 'Fácil manutenção e limpeza', 'Excelente para quartos compactos ou amplos', 'Diversidade de texturas'],
    sizes: ['Solteiro (0,90m)', 'Casal (1,40m)', 'Queen (1,60m)', 'King (1,95m)'],
  },
  {
    id: 'cabeceira-cincinnati',
    name: 'Cabeceira Cincinnati',
    category: 'cabeceira',
    categoryLabel: 'Cabeceira',
    image: './images/eko7/cabeceira-cincinnati.jpg',
    description:
      'Desenho geométrico elegante com costuras pespontadas que transmitem aconchego e modernidade para o dormitório.',
    highlights: ['Pesponto geométrico refinado', 'Espuma resiliente de alto suporte', 'Estrutura em madeira naval', 'Fácil instalação'],
    sizes: ['Casal (1,40m)', 'Queen (1,60m)', 'King (1,95m)'],
  },
  {
    id: 'cabeceira-rio',
    name: 'Cabeceira Rio',
    category: 'cabeceira',
    categoryLabel: 'Cabeceira',
    image: './images/eko7/cabeceira-rio.jpg',
    description:
      'Inspiração orgânica e fluida com curvas suaves e acolchoamento generoso para apoiar as costas com total conforto.',
    highlights: ['Design orgânico acolhedor', 'Acolchoamento espesso', 'Tecido aveludado ou linho', 'Acabamento artesanal'],
    sizes: ['Casal (1,40m)', 'Queen (1,60m)', 'King (1,95m)'],
  },

  // ==========================================
  // 4. CADEIRA E POLTRONA (4 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'poltrona-eko7',
    name: 'Poltrona Eko\'7 Reclinável',
    category: 'cadeira-e-poltrona',
    categoryLabel: 'Cadeira e Poltrona',
    image: './images/eko7/poltrona-eko7.jpg',
    description:
      'Poltrona reclinável ergonômica equipada com magnetos, infravermelho longo e sistema de vibromassagem multizona para relaxamento total.',
    highlights: ['Reclinação em múltiplos estágios', 'Massagem vibratória programável', 'Magnetoterapia e photonterapia na coluna', 'Apoio de pernas retrátil e macio'],
  },
  {
    id: 'cadeira-diretor',
    name: 'Cadeira Diretor Eko\'7',
    category: 'cadeira-e-poltrona',
    categoryLabel: 'Cadeira e Poltrona',
    image: './images/eko7/cadeira-diretor.png',
    description:
      'Cadeira executiva com estofamento de densidade inteligente Eko\'7 e apoio postural que alivia a pressão na coluna lombar durante o expediente.',
    highlights: ['Mecanismo de regulagem de altura e inclinação', 'Espuma anatômica que não deforma', 'Base giratória em aço cromado', 'Tecido respirável e durável'],
  },
  {
    id: 'cadeira-presidente',
    name: 'Cadeira Presidente Eko\'7',
    category: 'cadeira-e-poltrona',
    categoryLabel: 'Cadeira e Poltrona',
    image: './images/eko7/cadeira-presidente.png',
    description:
      'O ápice em ergonomia executiva com encosto alto, apoio de cabeça integrado, pastilhas bioenergéticas e mecanismo relax sincronizado.',
    highlights: ['Encosto alto com apoio cervical', 'Tecnologias magnética e photon integradas', 'Braços acolchoados com regulagem', 'Máximo conforto para longas jornadas'],
  },
  {
    id: 'cadeira-secretaria',
    name: 'Cadeira Secretária Ergonômica',
    category: 'cadeira-e-poltrona',
    categoryLabel: 'Cadeira e Poltrona',
    image: './images/eko7/cadeira-secretaria.jpg',
    description:
      'Compacta e ergonômica com regulagem pneumática de altura, proporcionando suporte anatômico ideal para estações de trabalho dinâmicas.',
    highlights: ['Compacta e ágil', 'Ajuste de altura milimétrico', 'Rodízios macios anti-risco', 'Espuma injetada de alta densidade'],
  },

  // ==========================================
  // 5. CALÇADOS (4 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'chinelo-nuvem',
    name: 'Chinelo Nuvem',
    category: 'calcados',
    categoryLabel: 'Calçados',
    image: './images/eko7/chinelo-nuvem.jpg',
    description:
      'Sensação de caminhar sobre nuvens com alívio imediato da pressão nos calcanhares e articulações, formato anatômico e pastilhas de magnetos e infravermelho longo.',
    highlights: ['Amortecimento ultra macio', 'Design anatômico ergonômico', 'Pastilhas de magnetos e infravermelho', 'Alívio para esporão de calcâneo e fascite'],
  },
  {
    id: 'tenis-fn1',
    name: 'Tênis FN1',
    category: 'calcados',
    categoryLabel: 'Calçados',
    image: './images/eko7/tenis-fn1.jpg',
    description:
      'Tênis esportivo e casual com palmilha terapêutica ortopédica Eko\'7, cabedal respirável em tecido knit e solado com absorção de impacto superior.',
    highlights: ['Palmilha terapêutica interna', 'Cabedal em tecido knit flexível e respirável', 'Solado antiderrapante com alta absorção', 'Ideal para caminhadas e dia a dia'],
  },
  {
    id: 'chinelo-masculino',
    name: 'Chinelo Masculino',
    category: 'calcados',
    categoryLabel: 'Calçados',
    image: './images/eko7/chinelo-masculino.jpg',
    description:
      'Sandália de dedo masculina com solado anatômico resistente, tiras largas confortáveis e pinos massageadores com pastilhas bioenergéticas.',
    highlights: ['Pinos massageadores de reflexologia', 'Resistente à água e de fácil lavagem', 'Ímãs e infravermelho distribuídos nos pontos reflexos', 'Conforto e descanso para os pés'],
  },
  {
    id: 'chinelo-feminino',
    name: 'Chinelo Feminino',
    category: 'calcados',
    categoryLabel: 'Calçados',
    image: './images/eko7/chinelo-feminino.jpg',
    description:
      'Chinelo feminino ortopédico com cores elegantes, relevo especial para ativação da circulação plantar e tecnologias terapêuticas integradas.',
    highlights: ['Design feminino delicado e ergonômico', 'Estimula a microcirculação sanguínea nos pés', 'Camada de amortecimento suave', 'Auxilia no alívio de pernas pesadas e cansaço'],
  },

  // ==========================================
  // 6. COLCHONETE (2 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'colchonete-nomade',
    name: 'Colchonete Nômade',
    category: 'colchonete',
    categoryLabel: 'Colchonete',
    image: './images/eko7/colchonete-nomade.jpg',
    description:
      'Colchonete enrolável e portátil para viagens, camping ou descanso em qualquer lugar. Núcleo em espuma D28 com perfilado e tecnologias bioativas.',
    highlights: ['Fácil de enrolar e transportar com alça', 'Espuma D28 e perfilado vulcanizado', 'Magnetos e infravermelho longo', 'Tecido resistente e lavável'],
  },
  {
    id: 'colchonete-equilibrium',
    name: 'Colchonete Equilibrium',
    category: 'colchonete',
    categoryLabel: 'Colchonete',
    image: './images/eko7/colchonete-equilibrium.jpg',
    description:
      'Ideal para sessões de alongamento, yoga, pilates e meditação, proporcionando a firmeza necessária para postura estável e conforto das articulações.',
    highlights: ['Espuma aglomerada de alta densidade', 'Espessura de 3 cm com firmeza calibrada', 'Revestimento higiênico de fácil limpeza', 'Suporte firme para práticas corporais'],
  },

  // ==========================================
  // 7. LINHA FITNESS (12 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'top-fitness-nadador',
    name: 'Top Fitness Nadador',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/top-fitness-nadador.jpg',
    description:
      'Top esportivo com recorte nadador nas costas para liberdade de movimentos, sustentação anatômica e tecido com fio inteligente de infravermelho longo.',
    highlights: ['Recorte nadador anatômico', 'Alta sustentação com compressão suave', 'Tecnologia com minerais bioativos', 'Respirabilidade e secagem rápida'],
  },
  {
    id: 'bermuda-masculina',
    name: 'Bermuda Masculina Fitness',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/bermuda-masculina.jpg',
    description:
      'Bermuda para treino e corrida masculina com tecido elástico de alta performance, auxiliando na redução da fadiga muscular e melhorando a microcirculação.',
    highlights: ['Compressão gradual que reduz a vibração muscular', 'Cós anatômico reforçado', 'Bolsos estratégicos funcionais', 'Tecido térmico respirável'],
  },
  {
    id: 'top-fitness-tradicional',
    name: 'Top Fitness Tradicional',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/top-fitness-tradicional.jpg',
    description:
      'Modelo tradicional com alças largas que distribuem a pressão nos ombros com total segurança para treinos de qualquer intensidade.',
    highlights: ['Alças largas anti-pressão', 'Bojo removível', 'Termorregulação corporal', 'Toque suave que não causa atrito'],
  },
  {
    id: 'legging-feminina-lisa',
    name: 'Legging Feminina Lisa',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/legging-feminina-lisa.jpg',
    description:
      'Legging de cintura alta com toque acetinado, efeito modelador e fio bioativo que estimula a síntese de colágeno e reduz a celulite durante o uso contínuo.',
    highlights: ['Cós alto duplo anatômico', 'Zero transparência garantida', 'Tecnologia de infravermelho no fio têxtil', 'Auxilia na recuperação muscular pós-treino'],
  },
  {
    id: 'blusa-manga-longa',
    name: 'Blusa Manga Longa Fitness',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/blusa-manga-longa.jpg',
    description:
      'Proteção térmica leve e tecnologia infravermelha para treinos em dias amenos ou para uso pós-exercício, promovendo conforto contínuo.',
    highlights: ['Proteção térmica com respirabilidade', 'Toque macio de segunda pele', 'Costuras planas anti-atrito', 'Promove bem-estar e alívio de tensões'],
  },
  {
    id: 'blusa-unissex-34',
    name: 'Blusa Unissex 3/4',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/blusa-unissex-34.jpg',
    description:
      'Modelagem versátil unissex com manga 3/4, perfeita para práticas esportivas leves, caminhadas e uso casual diário.',
    highlights: ['Modelagem unissex confortável', 'Comprimento de manga 3/4 versátil', 'Tecido inteligente antibacteriano', 'Disponível em diversas cores'],
  },
  {
    id: 'legging-feminina',
    name: 'Legging Feminina Detalhe',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/legging-feminina.jpg',
    description:
      'Calça legging de alta compressão com recortes que valorizam as curvas do corpo com elegância e apoio muscular reforçado.',
    highlights: ['Recortes estratégicos modeladores', 'Elasticidade multidirecional', 'Estimula a microcirculação periférica', 'Excelente retenção de formato'],
  },
  {
    id: 'macacao-manga-curta',
    name: 'Macacão Fitness Manga Curta',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/macacao-manga-curta.jpg',
    description:
      'Peça única prática e elegante para treinos completos, com modelagem ajustada que oferece segurança e liberdade absoluta de movimentos.',
    highlights: ['Peça única moderna e sem ajustes incômodos', 'Tecido de alta gramatura com elasticidade', 'Fio terapêutico inteligente', 'Zíper frontal reforçado'],
  },
  {
    id: 'macacao-manga-longa',
    name: 'Macacão Fitness Manga Longa',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/macacao-manga-longa.jpg',
    description:
      'Cobertura corporal completa para práticas esportivas e yoga, proporcionando aquecimento muscular homogêneo e conforto ergonômico.',
    highlights: ['Cobertura total do corpo com ação terapêutica', 'Acelera o aquecimento muscular', 'Sensação de aconchego térmico', 'Design moderno e sofisticado'],
  },
  {
    id: 'macaquinho-manga-longa-shorts',
    name: 'Macaquinho Fitness Manga Longa Shorts',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/macaquinho-manga-longa-shorts.jpg',
    description:
      'Combinação de manga longa com comprimento shorts, ideal para treinos funcionais, dança e pilates em ambientes climatizados.',
    highlights: ['Estilo contemporâneo exclusivo', 'Corte shorts com barra anti-deslizamento', 'Tecido com tecnologia de biocerâmica', 'Máxima mobilidade'],
  },
  {
    id: 'regata-feminina',
    name: 'Regata Feminina',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/regata-feminina.jpg',
    description:
      'Regata leve com caimento solto e tecido arejado para quem busca frescor e mobilidade durante os exercícios mais intensos.',
    highlights: ['Tecido ultra leve e respirável', 'Secagem instantânea do suor', 'Decote discreto e confortável', 'Tratamento antibolor e antiodor'],
  },
  {
    id: 'regata-feminina-fitness',
    name: 'Regata Feminina Fitness Nadador',
    category: 'linha-fitness',
    categoryLabel: 'Linha Fitness',
    image: './images/eko7/regata-feminina-fitness.jpg',
    description:
      'Regata esportiva com recorte anatômico cavado que acompanha a linha do corpo sem prender os movimentos dos ombros e escápulas.',
    highlights: ['Corte cavado ideal para treinos de membros superiores', 'Toque sedoso com propriedades bioativas', 'Alta durabilidade após lavagens', 'Estilo esportivo moderno'],
  },

  // ==========================================
  // 8. LINHA ÍNTIMA (2 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'calcinha-terapeutica',
    name: 'Calcinha Terapêutica Eko\'7',
    category: 'linha-intima',
    categoryLabel: 'Linha Íntima',
    image: './images/eko7/calcinha.jpg',
    description:
      'Lingerie funcional confeccionada com tecido inteligente e pastilhas magnéticas posicionadas para auxiliar no bem-estar pélvico e microcirculação.',
    highlights: ['Modelagem anatômica que não marca sob a roupa', 'Tecido respirável e antialérgico', 'Pastilhas magnéticas de baixa intensidade', 'Sensação prolongada de conforto diário'],
  },
  {
    id: 'sutia-terapeutico',
    name: 'Sutiã Terapêutico Eko\'7',
    category: 'linha-intima',
    categoryLabel: 'Linha Íntima',
    image: './images/eko7/sutia.jpg',
    description:
      'Sutiã sem aros rígidos, com alças largas acolchoadas e pastilhas bioenergéticas que aliviam a tensão dos ombros e da musculatura dorsal.',
    highlights: ['Sem aros de metal desconfortáveis', 'Alças acolchoadas que não machucam', 'Apoio terapêutico nas costas e escápulas', 'Fechamento frontal ou traseiro prático'],
  },

  // ==========================================
  // 9. LINHA PET (3 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'dreams-pet-slim',
    name: 'Colchão Dreams Pet Modelo Slim',
    category: 'linha-pet',
    categoryLabel: 'Linha Pet',
    image: './images/eko7/dreams-pet-slim.jpg',
    description:
      'Caminha ortopédica para cães e gatos com perfilado terapêutico, pastilhas magnéticas e tecido impermeável de fácil higienização.',
    highlights: ['Protege a coluna e articulações dos pets', 'Tecido impermeável resistente a arranhões', 'Capa removível com zíper para lavagem', 'Pastilhas de magnetos e infravermelho longo'],
    sizes: ['P (50 x 60cm)', 'M (60 x 80cm)', 'G (70 x 100cm)'],
  },
  {
    id: 'puff-pet',
    name: 'Puff Pet Eko\'7',
    category: 'linha-pet',
    categoryLabel: 'Linha Pet',
    image: './images/eko7/puff-pet.jpg',
    description:
      'Almofada fofa e aconchegante preenchida com espumas nobres Eko\'7 picadas, proporcionando aconchego térmico imediato para o seu animal.',
    highlights: ['Enchimento macio de alta densidade', 'Bordas elevadas acolhedoras', 'Fundo antiderrapante', 'Ideal para filhotes e pets idosos'],
    sizes: ['Médio (70cm diâmetro)', 'Grande (90cm diâmetro)'],
  },
  {
    id: 'dreams-pet-plus',
    name: 'Colchão Dreams Pet Modelo Plus',
    category: 'linha-pet',
    categoryLabel: 'Linha Pet',
    image: './images/eko7/dreams-pet-plus.jpg',
    description:
      'Versão reforçada com laterais estofadas tipo berço e colchão interno ortopédico com infravermelho longo para pets de médio e grande porte.',
    highlights: ['Laterais altas que servem de apoio para a cabeça', 'Colchão ortopédico interno espesso', 'Excelente isolamento do frio do chão', 'Durabilidade máxima para uso intenso'],
    sizes: ['M (70 x 80cm)', 'G (80 x 100cm)', 'GG (90 x 120cm)'],
  },

  // ==========================================
  // 10. LINHA TÊXTIL (17 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'edredom-percal-300',
    name: 'Edredom Percal Acetinado - 300 Fios',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/edredom-percal-300.jpg',
    description:
      'Toque sedoso incomparável em 100% algodão egípcio com acabamento acetinado de 300 fios, manta interna térmica que mantém a temperatura perfeita.',
    highlights: ['Tecido 100% Algodão 300 fios acetinado', 'Manta interna com toque de plumas', 'Acabamento matelassado geométrico', 'Hipoalergênico e respirável'],
    sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
  },
  {
    id: 'jogo-lencol-percal-300',
    name: 'Jogo de Lençol Percal Acetinado - 300 Fios',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/jogo-de-lencol-percal-acetinado-300-fios.jpg',
    description:
      'Lençol de elástico para colchões de até 40 cm de altura acompanhado de sobrelençol com vira bordada e fronhas com abas nos quatro lados.',
    highlights: ['Vira bordada elegante', 'Elástico reforçado em toda a borda', 'Toque fresco que não esquenta', 'Resistente a bolinhas (anti-pilling)'],
    sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
  },
  {
    id: 'protetor-colchao-impermeavel',
    name: 'Protetor de Colchão Impermeável Respirável',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/protetor-de-colchao.jpg',
    description:
      'Membrana microporosa de última geração que bloqueia 100% dos líquidos e ácaros sem fazer barulho plástico nem reter calor.',
    highlights: ['100% Impermeável e silencioso', 'Membrana respirável inteligente', 'Laterais com elástico para abraçar o colchão', 'Pode ser lavado em máquina'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'capa-protetora-travesseiro',
    name: 'Capa Protetora de Travesseiro Impermeável',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/capa-protetora-de-travesseiro.jpg',
    description:
      'Proteção completa com zíper para manter seus travesseiros sempre higienizados, sem manchas e livres de alérgenos.',
    highlights: ['Fechamento com zíper invisível', 'Barreira contra ácaros, bactérias e fungos', 'Toque suave que não altera a maciez do travesseiro', 'Lavagem rápida'],
  },
  {
    id: 'coberdrom-sherpa-dupla-face',
    name: 'Coberdrom Dupla Face com Pele de Carneiro',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/coberdrom.jpg',
    description:
      'A união perfeita do cobertor sherpa felpudo com o volume fofo de um edredom premium. Máximo aquecimento nos dias mais frios.',
    highlights: ['Lado superior aveludado e inferior em sherpa macia', 'Aquecimento térmico potente para o inverno', 'Não solta pelos', 'Cores nobres e acolhedoras'],
    sizes: ['Casal', 'Queen', 'King'],
  },
  {
    id: 'jogo-toalhas-banho-algodao',
    name: 'Jogo de Toalhas de Banho Fio Penteado',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/jogo-de-toalhas.jpg',
    description:
      'Gramatura generosa de 500g/m² em puro algodão fio penteado, oferecendo secagem ultrarrápida e maciez felpuda duradoura.',
    highlights: ['Algodão puro 500g/m²', 'Absorção imediata desde o primeiro uso', 'Barra decorativa em jacquard elegante', 'Kit com toalhas de banho, rosto e piso'],
  },
  {
    id: 'roupao-eko7',
    name: 'Roupão Eko\'7 Veludo Plush',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/roupao.jpg',
    description:
      'Roupão unissex quentinho e aconchegante, confeccionado em plush veludo com bolsos frontais e faixa de ajuste na cintura.',
    highlights: ['Plush aveludado e envolvente', 'Fácil de lavar e secagem rápida', 'Corte elegante com gola xale', 'Disponível nos tamanhos M e G'],
  },
  {
    id: 'almofadas-versatile',
    name: 'Almofadas Versatile Ecológicas',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/almofadas-versatile.jpg',
    description:
      'Conceito ecológico sustentável com aproveitamento total de nobres tecidos e espumas da fábrica Eko\'7, combinando com o décor do quarto.',
    highlights: ['Conceito de desperdício zero sustentável', 'Design que coordena com os colchões da marca', 'Enchimento elástico e firme', 'Acabamento primoroso'],
  },
  {
    id: 'edredom-classic-100-algodao',
    name: 'Edredom 100% Algodão Classic',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/edredom.jpg',
    description:
      'Edredom leve e respirável em 100% algodão poroso que auxilia na termorregulação natural durante as noites de meia-estação.',
    highlights: ['Puro algodão respirável', 'Costura matelassê que mantém o enchimento fixo', 'Suavidade ao toque', 'Cores neutras e elegantes'],
    sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
  },
  {
    id: 'jogo-cama-classic',
    name: 'Jogo de Cama Classic',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/jogo-de-cama-classic.jpg',
    description:
      'Coleção em tons neutros atemporais, composição 100% algodão de excelente custo-benefício e durabilidade garantida.',
    highlights: ['100% Algodão natural', 'Tons neutros clássicos', 'Fácil de passar', 'Inclui lençol com elástico, lençol superior e fronhas'],
    sizes: MATTRESS_SIZES,
  },
  {
    id: 'almofadas-decorativas-kit',
    name: 'Kit Almofadas Decorativas Eko\'7',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/almofadas-decorativas.jpg',
    description:
      'Kit de almofadas em tecido 100% poliéster preenchidas com espumas nobres de fabricação própria, ideais para sofás e camas.',
    highlights: ['Kit decorativo harmonioso', 'Espuma resiliente que não amassa', 'Capa com zíper lavável', 'Cores sofisticadas'],
  },
  {
    id: 'jogo-cama-dubai',
    name: 'Jogo de Cama Dubai Fio Penteado',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/jogo-de-cama-dubai.jpg',
    description:
      'Estampas exclusivas inspiradas na arquitetura cosmopolita de Dubai, trabalhadas em cartela contemporânea de cores terrosas.',
    highlights: ['Estampa geométrica elegante', 'Fio Penteado de toque extra macio', 'Acabamento premium nas costuras', 'Design exclusivo'],
    sizes: ['Casal', 'Queen', 'King'],
  },
  {
    id: 'jogo-cama-garden',
    name: 'Jogo de Cama Garden Floral',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/jogo-de-cama-garden.jpg',
    description:
      'Padronagem botânica suave que transmite calma e frescor natural ao quarto de dormir, confeccionada com algodão selecionado.',
    highlights: ['Estampa floral relaxante', 'Fio Penteado 100% algodão', 'Cores resistentes à lavagem', 'Aconchego romântico'],
    sizes: ['Casal', 'Queen', 'King'],
  },
  {
    id: 'jogo-cama-majestic',
    name: 'Jogo de Cama Majestic',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/jogo-de-cama-majestic.jpg',
    description:
      'Linha refinada em tons nobres com detalhes acetinados, perfeita para montar uma cama digna de hotel cinco estrelas.',
    highlights: ['Elegância estilo hotel 5 estrelas', 'Acabamento acetinado brilhante e discreto', 'Toque extremamente suave na pele', 'Alta gramatura'],
    sizes: ['Casal', 'Queen', 'King'],
  },
  {
    id: 'manta-em-plush',
    name: 'Manta em Plush Velvet',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/manta-em-plush.jpg',
    description:
      'Manta leve, quente e macia com toque aveludado, ideal para relaxar no sofá assistindo TV ou como peseira decorativa aos pés da cama.',
    highlights: ['Toque aveludado ultra suave', 'Leve e de aquecimento rápido', 'Fácil higienização e secagem rápida', 'Cores elegantes'],
    sizes: ['1,50 x 2,00m', '2,20 x 2,40m'],
  },
  {
    id: 'jogo-cama-estocolmo',
    name: 'Jogo de Cama Estocolmo Escandinavo',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/jogo-de-cama-estocolmo.jpg',
    description:
      'Estilo escandinavo minimalista com listras sutis e tons sóbrios, combinando modernidade com a naturalidade do puro algodão.',
    highlights: ['Design nórdico minimalista', 'Fio Penteado suave e durável', 'Não forma bolinhas', 'Elegância clean'],
    sizes: ['Casal', 'Queen', 'King'],
  },
  {
    id: 'kit-colcha-matelasse',
    name: 'Kit Colcha Matelassê com Porta-Fronhas',
    category: 'linha-textil',
    categoryLabel: 'Linha Têxtil',
    image: './images/eko7/kit-colcha.jpg',
    description:
      'Composto por 1 colcha matelassada e 2 porta-fronhas com abas. Veste a cama com caimento impecável e praticidade para o dia a dia.',
    highlights: ['Kit completo de 3 peças', 'Matelassê resistente', 'Fácil de arrumar e passar', 'Caimento perfeito nas laterais da cama'],
    sizes: ['Casal', 'Queen', 'King'],
  },

  // ==========================================
  // 11. PUFF (1 PRODUTO OFICIAL EKO'7)
  // ==========================================
  {
    id: 'puff-eko7',
    name: 'Puff Eko\'7',
    category: 'puff',
    categoryLabel: 'Puff',
    image: './images/eko7/puff-eko7.jpg',
    description:
      'Puff ergonômico fabricado com 100% espumas nobres de densidade calibrada e capa aveludada removível em veludo de alto padrão.',
    highlights: ['Estrutura 100% espuma própria Eko\'7', 'Capa removível e lavável', 'Disponível nos tamanhos P, M e G', 'Cores elegantes em Bege e Azul'],
  },

  // ==========================================
  // 12. TAPETE (1 PRODUTO OFICIAL EKO'7)
  // ==========================================
  {
    id: 'tapete-terapeutico-eko7',
    name: 'Tapete Terapêutico Eko\'7',
    category: 'tapete',
    categoryLabel: 'Tapete',
    image: './images/eko7/manta-quantica.jpg',
    description:
      'Tapete terapêutico inovador projetado para ambientes de relaxamento, integrando tecnologia de infravermelho longo e campo magnético para alívio do estresse diário.',
    highlights: ['Tecnologias bioenergéticas exclusivas Eko\'7', 'Fibras nobres e de fácil manutenção', 'Base antiderrapante com isolamento térmico', 'Consulte disponibilidade sob encomenda'],
  },

  // ==========================================
  // 13. TRAVESSEIRO (3 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'travesseiro-viscoelastico',
    name: 'Travesseiro Viscoelástico',
    category: 'travesseiro',
    categoryLabel: 'Travesseiro',
    image: './images/eko7/travesseiro-viscoelastico.png',
    description:
      'Espuma com memória que se molda exatamente ao contorno da cabeça e pescoço, aliviando tensões e equipada com pastilhas de magnetos e photon.',
    highlights: ['Espuma viscoelástica moldável', 'Pastilhas de magnetos e infravermelho longo', 'Alívio para dores cervicais e torcicolos', 'Capa lavável com zíper'],
  },
  {
    id: 'travesseiro-soft',
    name: 'Travesseiro Soft',
    category: 'travesseiro',
    categoryLabel: 'Travesseiro',
    image: './images/eko7/travesseiro-soft.jpg',
    description:
      'Alta maciez e toque suave com suporte que abraça a cabeça, garantindo alinhamento cervical delicado para noites relaxantes.',
    highlights: ['Toque extra suave envolvente', 'Espuma hipoalergênica respirável', 'Tratamento antibacteriano', 'Ideal para dormir de bruços ou costas'],
  },
  {
    id: 'travesseiro-hugging',
    name: 'Travesseiro Hugging',
    category: 'travesseiro',
    categoryLabel: 'Travesseiro',
    image: './images/eko7/travesseiro-hugging.jpg',
    description:
      'Formato alongado para abraçar durante o repouso lateral, proporcionando suporte equilibrado para os braços, ombros e coluna dorsal.',
    highlights: ['Formato anatômico alongado', 'Alinha a coluna dorsal ao dormir de lado', 'Pastilhas terapêuticas integradas', 'Capa com zíper removível'],
  },

  // ==========================================
  // 14. ACESSÓRIO (12 PRODUTOS OFICIAIS EKO'7)
  // ==========================================
  {
    id: 'slim-hug',
    name: 'Slim Hug — Apoio Corporal',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/slim-hug.png',
    description:
      'Apoio anatômico compacto e versátil projetado para abraçar ou posicionar entre os joelhos, alinhando a lombar e a bacia ao dormir de lado.',
    highlights: ['Alinhamento ortopédico de joelhos e quadril', 'Alivia tensões na coluna lombar', 'Espuma macia que não esquenta', 'Capa removível e lavável'],
  },
  {
    id: 'garrafa-eko7',
    name: 'Garrafa Eko\'7 com Corretor Magnético',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/garrafa-eko7.jpg',
    description:
      'Garrafa de vidro nobre com dispositivo de magnetos e infravermelho longo que atua na reestruturação molecular da água e neutralização do pH.',
    highlights: ['Estrutura em vidro nobre com capa protetora', 'Corretor magnético e photon integrados', 'Favorece a hidratação celular', 'Livre de BPA e bisfenóis'],
  },
  {
    id: 'suporte-multiconforto',
    name: 'Suporte Multiconforto Cunha Ergonômica',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/suporte-multiconforto.jpg',
    description:
      'Almofada em formato de cunha para recostar confortavelmente na cama para leitura ou elevação terapêutica das pernas para melhora da circulação.',
    highlights: ['Design em cunha multiuso', 'Alivia refluxo gastroesofágico e ronco', 'Promove alívio imediato nas pernas cansadas', 'Espuma de suporte firme e durável'],
  },
  {
    id: 'pulseiras-terapeuticas',
    name: 'Pulseiras Magnéticas Eko\'7',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/pulseiras.jpg',
    description:
      'Pulseira em silicone cirúrgico hipoalergênico com fecho em aço inox, contendo ímãs de neodímio e pastilha de infravermelho longo.',
    highlights: ['Ímãs de neodímio de alta potência', 'Pastilha de infravermelho longo photon', 'Silicone cirúrgico anatômico e ajustável', 'Resistente à água'],
  },
  {
    id: 'palmilha-terapeutica',
    name: 'Palmilha Terapêutica Perfurada',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/palmilha.jpg',
    description:
      'Palmilha respirável perfurada com pastilhas de magnetos e infravermelho nos pontos de reflexologia plantar, adaptável a qualquer calçado fechado.',
    highlights: ['Estimula pontos de reflexologia dos pés', 'Perfurada para ventilação contínua', 'Recortável nos números 34 ao 44', 'Reduz o impacto no calcanhar e joelhos'],
  },
  {
    id: 'office-protect',
    name: 'Office Protect — Assento Ergonômico',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/office-protect.jpg',
    description:
      'Almofada ergonômica de assento para cadeiras de escritório ou assentos automotivos, prevenindo dores no cóccix e problemas na lombar.',
    highlights: ['Recorte ergonômico com alívio no cóccix', 'Espuma resiliente que não cede', 'Tecido respirável anti-transpiração', 'Reduz a fadiga ao sentar por muitas horas'],
  },
  {
    id: 'mascara-magnetos',
    name: 'Máscara de Magnetos para Dormir',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/mascara-de-magnetos.jpg',
    description:
      'Máscara de dormir em plush macio e respirável com bloqueio total de 100% da luz e pastilhas magnéticas posicionadas para relaxamento ocular.',
    highlights: ['Bloqueio total da claridade ambiente', 'Plush macio com toque sedoso', 'Pastilhas de magnetos que aliviam tensão facial', 'Elástico com regulagem precisa'],
  },
  {
    id: 'imantador-liquidos',
    name: 'Imantador de Líquidos Eko\'7',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/imantador-de-liquidos.jpg',
    description:
      'Dispositivo externo em aço inoxidável com 05 pastilhas de superímãs para imantação de jarras, garrafas e recipientes de água em geral.',
    highlights: ['05 Superpastilhas magnéticas integradas', 'Aço inoxidável cirúrgico resistente à corrosão', 'Não precisa de refil ou bateria', 'Uso prático em qualquer jarra de água'],
  },
  {
    id: 'drive-eko7',
    name: 'Drive Eko\'7 — Encosto Automotivo',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/drive-eko7.jpg',
    description:
      'Encosto postural automotivo com perfilado terapêutico, magnetos e photon, tornando qualquer viagem ou trânsito muito menos cansativo.',
    highlights: ['Encaixe universal em bancos de motorista ou passageiro', 'Fixação firme por tiras elásticas reguláveis', 'Massagem passiva do perfilado tipo do-in', 'Previne dores nas costas e lombar ao dirigir'],
  },
  {
    id: 'colar-magnetos',
    name: 'Colar de Magnetos Cervical',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/colar-de-magnetos.jpg',
    description:
      'Acessório cervical terapêutico indicado para quem sofre com tensões no trapézio causadas por longas horas diante de telas ou estresse.',
    highlights: ['Campo magnético focado na região cervical', 'Design discreto e confortável', 'Alívio para rigidez e dores no pescoço', 'Material macio e hipoalergênico'],
  },
  {
    id: 'cinta-compressao',
    name: 'Cinta de Compressão e Postura',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/cinta-de-compressao.jpg',
    description:
      'Cinta elástica reforçada com hastes de sustentação que estabilizam a coluna lombar e auxiliam no alinhamento postural durante o dia.',
    highlights: ['Hastes flexíveis de sustentação lombar', 'Compressão ajustável com duplo fecho de velcro', 'Tecido ventilado com canais de ar', 'Auxilia na prevenção de lesões na coluna'],
  },
  {
    id: 'almofada-viagem',
    name: 'Almofada de Viagem Viscoelástica',
    category: 'acessorio',
    categoryLabel: 'Acessório',
    image: './images/eko7/almofada-de-viagem.jpg',
    description:
      'Apoio de pescoço ergonômico em espuma viscoelástica para viagens de avião, ônibus ou carro, com fecho frontal e capa removível.',
    highlights: ['Espuma viscoelástica com memória', 'Apoio de queixo 360 graus que evita quedas da cabeça', 'Capa em plush aveludado com zíper', 'Acompanha botão de fechamento frontal'],
  },
];
