export interface ProductItem {
  id: string;
  name: string;
  line: string;
  category: 'Colchões Terapêuticos' | 'Bases e Baús' | 'Poltronas & Massagem' | 'Travesseiros';
  comfortLevel: 'Firme Ortopédico' | 'Intermediário Equilibrado' | 'Plush Envolvente' | 'Personalizável';
  height: string;
  warranty: string;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  technologies: string[];
  layers: { name: string; detail: string }[];
  sizes: string[];
}

export interface TechnologyItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  color: 'blue' | 'rose' | 'marsala';
  iconName: 'layers' | 'magnet' | 'sun' | 'waves' | 'sparkles' | 'shield';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  initials: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  model: string;
  rating: number;
  text: string;
  initials: string;
}

export const WHATSAPP_NUMBER = '5551997795664';
export const INSTAGRAM_URL = 'https://www.instagram.com/naturale_colchoes/';

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const EKO7_TECHNOLOGIES: TechnologyItem[] = [
  {
    id: 'densidade-progressiva',
    name: 'Densidade Progressiva',
    subtitle: 'Alinhamento ortopédico inteligente',
    description:
      'Sistema exclusivo de multicamadas com espumas de diferentes densidades que distribuem o peso corporal de forma uniforme, mantendo a coluna perfeitamente alinhada em qualquer posição.',
    color: 'blue',
    iconName: 'layers',
  },
  {
    id: 'magnetoterapia',
    name: 'Magnetoterapia',
    subtitle: 'Equilíbrio bioenergético',
    description:
      'Pastilhas magnéticas estrategicamente inseridas no perfilado para auxiliar na circulação sanguínea periférica e promover relaxamento muscular profundo durante toda a noite.',
    color: 'marsala',
    iconName: 'magnet',
  },
  {
    id: 'infravermelho',
    name: 'Infravermelho Longo',
    subtitle: 'Ação anti-inflamatória natural',
    description:
      'Tecnologia emissora de ondas semelhantes aos raios benéficos do sol da manhã, auxiliando na recuperação celular, redução de fadiga e bem-estar articular.',
    color: 'rose',
    iconName: 'sun',
  },
  {
    id: 'vibromassagem',
    name: 'Vibromassagem & Quântica',
    subtitle: 'Descompressão e relaxamento',
    description:
      'Motores silenciosos com controle digital de intensidade e zonas de atuação, perfeitos para aliviar tensões do dia a dia e induzir um sono mais profundo.',
    color: 'blue',
    iconName: 'waves',
  },
  {
    id: 'perfilado-nanoex',
    name: 'Perfilado Nanoex',
    subtitle: 'Efeito massagem Do-In e ventilação',
    description:
      'Espuma perfilada de poliuretano de alta tecnologia com toque suave, ação antimicrobiana, canais de ventilação contínua e estímulo suave aos pontos de pressão.',
    color: 'marsala',
    iconName: 'sparkles',
  },
  {
    id: 'cromoterapia',
    name: 'Cromoterapia Integrada',
    subtitle: 'Harmonia sensorial no descanso',
    description:
      'Aplicação de frequências luminosas suaves que auxiliam no equilíbrio físico e mental, criando um ritual noturno de tranquilidade e renovação.',
    color: 'rose',
    iconName: 'shield',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'eko7-diamante',
    name: 'Eko7 Diamante',
    line: 'Linha Alta Performance',
    category: 'Colchões Terapêuticos',
    comfortLevel: 'Plush Envolvente',
    height: '38 cm',
    warranty: '10 anos de garantia estrutural',
    badge: 'Topo de Linha',
    shortDesc:
      'O ápice do conforto ortopédico aliado ao acabamento luxuoso e ao pacote completo de terapias integradas.',
    fullDesc:
      'Desenvolvido para quem não abre mão da máxima sofisticação e saúde postural. O Eko7 Diamante une multicamadas de densidade progressiva, perfilado tecnológico Nanoex, magnetoterapia, infravermelho longo e sistema de vibromassagem silenciosa com controle dedicado.',
    image: './images/eko7-diamante.jpg',
    technologies: [
      'Densidade Progressiva',
      'Magnetoterapia',
      'Infravermelho Longo',
      'Vibromassagem',
      'Perfilado Nanoex',
      'Cromoterapia',
    ],
    layers: [
      { name: 'Malha Belga de Alta Gramatura', detail: 'Toque sedoso, termorregulador e tratamento antiácaro.' },
      { name: 'Perfilado Tecnológico Nanoex', detail: 'Efeito massagem Do-In com pastilhas de Magneto e Infravermelho.' },
      { name: 'Camada Conforto Visco/HR', detail: 'Alívio imediato nos pontos de pressão de ombros e quadris.' },
      { name: 'Núcleo Densidade Progressiva', detail: 'Sustentação ortopédica firme para alinhamento total da coluna.' },
    ],
    sizes: ['Solteiro (88x188)', 'Casal (138x188)', 'Queen (158x198)', 'King (193x203)'],
  },
  {
    id: 'eko7-serie-ouro',
    name: 'Eko7 Série Ouro Premium',
    line: 'Linha Premium Pillow',
    category: 'Colchões Terapêuticos',
    comfortLevel: 'Intermediário Equilibrado',
    height: '36 cm',
    warranty: '10 anos de garantia estrutural',
    badge: 'Mais Procurado',
    shortDesc:
      'Revestimento nobre em tecidos sofisticados, pillow robusto e suporte anatômico de alta resiliência.',
    fullDesc:
      'A Série Ouro Premium combina estética contemporânea em malhas nobres com o rigor ortopédico da Eko7. Oferece adaptação perfeita ao contorno do corpo sem perder a sustentação necessária para a saúde lombar.',
    image: './images/eko7-articulado-ouro.png',
    technologies: [
      'Densidade Progressiva',
      'Magnetoterapia',
      'Infravermelho Longo',
      'Vibromassagem',
      'Perfilado Nanoex',
    ],
    layers: [
      { name: 'Tecido Nobre Bouclé & Malha', detail: 'Elegância visual com respirabilidade superior.' },
      { name: 'Pillow Top Terapêutico', detail: 'Conforto envolvente aliado às pastilhas bioenergéticas.' },
      { name: 'Espuma de Alta Resiliência', detail: 'Retorno rápido e zero deformação ao longo dos anos.' },
      { name: 'Base Estrutural Ortopédica', detail: 'Estabilidade absoluta e isolamento de movimentos para casais.' },
    ],
    sizes: ['Solteiro (88x188)', 'Casal (138x188)', 'Queen (158x198)', 'King (193x203)'],
  },
  {
    id: 'eko7-seven',
    name: 'Eko7 Seven',
    line: 'Linha Multi-Terapias',
    category: 'Colchões Terapêuticos',
    comfortLevel: 'Intermediário Equilibrado',
    height: '32 cm',
    warranty: '10 anos de garantia estrutural',
    badge: 'Versatilidade',
    shortDesc:
      'Equilíbrio magistral entre firmeza ortopédica e maciez superficial, com pacote versátil de terapias.',
    fullDesc:
      'O Eko7 Seven é um clássico da ergonomia preventiva. Projetado com espessura robusta e camadas progressivas inteligentes, atende diferentes biotipos com excelência e conforto contínuo.',
    image: './images/sleep-wellness.jpg',
    technologies: [
      'Densidade Progressiva',
      'Magnetoterapia',
      'Infravermelho Longo',
      'Vibromassagem',
    ],
    layers: [
      { name: 'Malha Respirável Soft Touch', detail: 'Frescor noturno e sensação aconchegante.' },
      { name: 'Perfilado Ortopédico', detail: 'Ventilação ativa e distribuição inteligente do peso.' },
      { name: 'Bloco Progressivo Eko7', detail: 'Suporte contínuo para coluna cervical, torácica e lombar.' },
    ],
    sizes: ['Solteiro (88x188)', 'Casal (138x188)', 'Queen (158x198)', 'King (193x203)'],
  },
  {
    id: 'eko7-news',
    name: 'Eko7 Soft News',
    line: 'Linha Contemporânea',
    category: 'Colchões Terapêuticos',
    comfortLevel: 'Firme Ortopédico',
    height: '30 cm',
    warranty: '10 anos de garantia estrutural',
    shortDesc:
      'Laterais em fibras nobres de linho, malha respirável e espumas certificadas de fabricação própria.',
    fullDesc:
      'Com visual clean e atemporal, o Eko7 Soft News traz acabamento lateral refinado e estrutura ortopédica de alta durabilidade, ideal para quem busca suporte mais firme com toque acolhedor.',
    image: './images/eko7-softnews.png',
    technologies: [
      'Densidade Progressiva',
      'Magnetoterapia',
      'Infravermelho Longo',
      'Perfilado Nanoex',
    ],
    layers: [
      { name: 'Revestimento em Malha & Linho', detail: 'Sofisticação natural e alta resistência.' },
      { name: 'Perfilado Nanoex Antialérgico', detail: 'Proteção contra ácaros, fungos e bactérias.' },
      { name: 'Camadas Ortopédicas Certificadas', detail: 'Postura correta noite após noite.' },
    ],
    sizes: ['Solteiro (88x188)', 'Casal (138x188)', 'Queen (158x198)', 'King (193x203)'],
  },
  {
    id: 'eko7-unico',
    name: 'Eko7 Único',
    line: 'Linha Personalizada',
    category: 'Colchões Terapêuticos',
    comfortLevel: 'Personalizável',
    height: '34 cm',
    warranty: '10 anos de garantia estrutural',
    badge: 'Sob Medida',
    shortDesc:
      'Permite personalização de revestimento e adaptação ergonômica para casais com diferentes biotipos.',
    fullDesc:
      'O Eko7 Único foi criado para respeitar a individualidade do seu descanso. Excelente isolamento de movimentos e opções refinadas de acabamento para harmonizar com qualquer projeto de quarto.',
    image: './images/showroom-naturale.jpg',
    technologies: [
      'Densidade Progressiva',
      'Magnetoterapia',
      'Infravermelho Longo',
      'Vibromassagem',
    ],
    layers: [
      { name: 'Acabamento Personalizável', detail: 'Opções de tecidos nobres sob encomenda.' },
      { name: 'Sistema Bioenergético Integrado', detail: 'Magnetos e infravermelho de ação contínua.' },
      { name: 'Estrutura de Suporte Independente', detail: 'Conforto individual para cada lado da cama.' },
    ],
    sizes: ['Casal (138x188)', 'Queen (158x198)', 'King (193x203)', 'Sob Medida'],
  },
  {
    id: 'eko7-lunar',
    name: 'Eko7 Lunar',
    line: 'Linha Anatômica',
    category: 'Colchões Terapêuticos',
    comfortLevel: 'Intermediário Equilibrado',
    height: '28 cm',
    warranty: '10 anos de garantia estrutural',
    shortDesc:
      'Conforto anatômico moderno estruturado em densidade progressiva para alinhamento suave da coluna.',
    fullDesc:
      'Leveza, acolhimento e tecnologia. O Eko7 Lunar proporciona adaptação natural às curvas do corpo, aliviando tensões acumuladas e favorecendo um sono contínuo sem interrupções.',
    image: './images/hero-bedroom.jpg',
    technologies: ['Densidade Progressiva', 'Infravermelho Longo', 'Perfilado Nanoex'],
    layers: [
      { name: 'Tampo em Malha Fresca', detail: 'Conforto térmico em todas as estações.' },
      { name: 'Perfilado Terapêutico', detail: 'Estimulação suave e ventilação permanente.' },
      { name: 'Núcleo Progressivo', detail: 'Sustentação equilibrada para toda a família.' },
    ],
    sizes: ['Solteiro (88x188)', 'Casal (138x188)', 'Queen (158x198)', 'King (193x203)'],
  },
  {
    id: 'eko7-renova',
    name: 'Eko7 Renova',
    line: 'Linha Essencial',
    category: 'Colchões Terapêuticos',
    comfortLevel: 'Firme Ortopédico',
    height: '26 cm',
    warranty: '10 anos de garantia estrutural',
    badge: 'Custo-Benefício',
    shortDesc:
      'A porta de entrada para o universo terapêutico Eko7, reunindo as tecnologias essenciais no dia a dia.',
    fullDesc:
      'O Eko7 Renova entrega o padrão de qualidade certificada Eko7 com excelente custo-benefício. Estrutura firme ortopédica ideal para prevenção de dores lombares e máxima durabilidade.',
    image: './images/sleep-wellness.jpg',
    technologies: ['Densidade Progressiva', 'Magnetoterapia', 'Infravermelho Longo'],
    layers: [
      { name: 'Malha Hipoalergênica', detail: 'Toque agradável e fácil manutenção.' },
      { name: 'Camada Terapêutica Essencial', detail: 'Pastilhas magnéticas e infravermelho longo.' },
      { name: 'Base Firme Certificada', detail: 'Resistência estrutural certificada pelo INMETRO.' },
    ],
    sizes: ['Solteiro (88x188)', 'Casal (138x188)', 'Queen (158x198)'],
  },
  {
    id: 'base-box-bau',
    name: 'Base Box & Baú Estrutural',
    line: 'Linha Bases e Cabeceiras',
    category: 'Bases e Baús',
    comfortLevel: 'Firme Ortopédico',
    height: '38 cm (com pés)',
    warranty: '3 anos de garantia',
    shortDesc:
      'Madeira de reflorestamento tratada, pistões hidráulicos silenciosos e revestimento coordenado com seu colchão.',
    fullDesc:
      'Projetadas para oferecer o suporte plano perfeito que o seu colchão Eko7 precisa. Disponível nas versões Box tradicional, Box Baú com amplo espaço interno e cabeceiras estofadas sob medida.',
    image: './images/showroom-naturale.jpg',
    technologies: ['Densidade Progressiva'],
    layers: [
      { name: 'Estrutura em Eucalipto Tratado', detail: 'Alta resistência mecânica e zero rangidos.' },
      { name: 'Pistões a Gás (Versão Baú)', detail: 'Abertura leve, segura e silenciosa.' },
      { name: 'Tecido Coordenado', detail: 'Linho, suede ou bouclé combinando com o colchão.' },
    ],
    sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
  },
  {
    id: 'travesseiro-ergonomico',
    name: 'Travesseiro Ergonômico Eko7',
    line: 'Linha Acessórios Terapêuticos',
    category: 'Travesseiros',
    comfortLevel: 'Intermediário Equilibrado',
    height: '12 cm a 15 cm',
    warranty: '1 ano de garantia',
    badge: 'Alívio Cervical',
    shortDesc:
      'Suporte cervical anatômico com perfilado tecnológico, infravermelho longo e magnetos para alinhamento do pescoço.',
    fullDesc:
      'O complemento indispensável para o alinhamento completo da coluna. Reduz tensões nos ombros, melhora a respiração noturna e mantém frescor contínuo durante o sono.',
    image: './images/sleep-wellness.jpg',
    technologies: ['Magnetoterapia', 'Infravermelho Longo', 'Perfilado Nanoex'],
    layers: [
      { name: 'Capa Removível em Malha Nobre', detail: 'Lavável, fresca e antialérgica.' },
      { name: 'Núcleo Perfilado Terapêutico', detail: 'Apoio anatômico que respeita a curvatura cervical.' },
    ],
    sizes: ['Padrão (50x70 cm)', 'Cervical Anatômico'],
  },
  {
    id: 'poltrona-relaxamento',
    name: 'Poltrona Terapêutica Reclinável',
    line: 'Linha Bem-Estar',
    category: 'Poltronas & Massagem',
    comfortLevel: 'Plush Envolvente',
    height: 'Ergonômica',
    warranty: '2 anos de garantia',
    shortDesc:
      'Poltrona de descanso com reclinação suave, sistema de vibromassagem e apoio anatômico para pernas e lombar.',
    fullDesc:
      'Ideal para momentos de leitura, recuperação pós-trabalho ou descanso terapêutico na sala ou no quarto. Une design acolhedor com tecnologia de relaxamento muscular.',
    image: './images/showroom-naturale.jpg',
    technologies: ['Vibromassagem', 'Infravermelho Longo', 'Densidade Progressiva'],
    layers: [
      { name: 'Estofamento de Alta Resiliência', detail: 'Conforto duradouro sem perder a ergonomia.' },
      { name: 'Módulo de Massagem Silenciosa', detail: 'Programas de relaxamento lombar e dorsal.' },
    ],
    sizes: ['Tamanho Único Ergonomia Universal'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mariana & Rodrigo Almeida',
    city: 'Cliente Naturale Colchões',
    model: 'Eko7 Série Ouro Premium',
    rating: 5,
    text: 'Acordávamos todos os dias com dores na lombar e cansaço. Depois da consultoria na Naturale e da troca para o Eko7 Série Ouro, nossa qualidade de sono mudou completamente já na primeira semana.',
    initials: 'MR',
  },
  {
    id: 't2',
    name: 'Carlos Eduardo Silveira',
    city: 'Cliente Naturale Colchões',
    model: 'Eko7 Diamante King',
    rating: 5,
    text: 'Atendimento impecável do início ao fim. Eles realmente explicam cada camada do colchão e ajudam a escolher conforme o seu peso e postura. A vibromassagem antes de dormir é maravilhosa!',
    initials: 'CS',
  },
  {
    id: 't3',
    name: 'Dra. Helena Vasconcelos',
    city: 'Cliente Naturale Colchões',
    model: 'Eko7 Seven + Travesseiros',
    rating: 5,
    text: 'Como profissional da saúde, sempre pesquisei muito sobre alinhamento da coluna. A densidade progressiva da Eko7 combinada com o atendimento humano da Naturale superou todas as expectativas.',
    initials: 'HV',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Consultor Especialista 01',
    role: 'Consultor do Sono & Ergonomia',
    department: 'Atendimento Showroom',
    bio: 'Especialista em avaliação postural e indicação de densidade progressiva para casais e clientes com queixas lombares.',
    image: './images/team-1.jpg',
    initials: 'CS',
  },
  {
    id: 'm2',
    name: 'Consultora Especialista 02',
    role: 'Especialista em Linha Eko7',
    department: 'Consultoria Personalizada',
    bio: 'Acompanha cada cliente na descoberta das tecnologias terapêuticas (magnetoterapia, infravermelho e vibromassagem).',
    image: './images/team-2.jpg',
    initials: 'CE',
  },
  {
    id: 'm3',
    name: 'Coordenação de Pós-Venda',
    role: 'Relacionamento & Entrega Assistida',
    department: 'Experiência do Cliente',
    bio: 'Garante entrega agendada, montagem cuidadosa e acompanhamento da adaptação nos primeiros meses de uso.',
    image: './images/team-3.jpg',
    initials: 'PV',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'artigo-01',
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    category: 'Categoria 01',
    readTime: '4 min de leitura',
    date: 'Novembro 2026',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: './images/blog-postura.jpg',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
    ],
  },
  {
    id: 'artigo-02',
    title: 'Sed do eiusmod tempor incididunt ut labore et dolore',
    category: 'Categoria 02',
    readTime: '5 min de leitura',
    date: 'Novembro 2026',
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.',
    image: './images/blog-tecnologia.jpg',
    content: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    ],
  },
  {
    id: 'artigo-03',
    title: 'Ut enim ad minim veniam quis nostrud exercitation',
    category: 'Categoria 03',
    readTime: '3 min de leitura',
    date: 'Outubro 2026',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
    image: './images/blog-medidas.jpg',
    content: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
    ],
  },
  {
    id: 'artigo-04',
    title: 'Duis aute irure dolor in reprehenderit in voluptate',
    category: 'Categoria 04',
    readTime: '4 min de leitura',
    date: 'Outubro 2026',
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium.',
    image: './images/blog-sinais.jpg',
    content: [
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    ],
  },
];
