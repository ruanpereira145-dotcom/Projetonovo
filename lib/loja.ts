// Dados da loja usados na página inicial. Para mudar contatos, textos ou imagens, edite só este arquivo.

export const loja = {
  nome: 'PatioBox3D',
  nomeCurto: 'PatioBox3D',
  // Logo em texto (usado quando "logo" estiver vazio): sigla do selo e as duas linhas do nome.
  sigla: 'P',
  marca: ['Patio', 'Box3D'] as [string, string],
  whatsapp: '5521987727657',
  mensagem: 'Oi, vim pelo site da PatioBox3D e quero fazer um orçamento.',
  cidade: 'Rio de Janeiro-RJ',
  entrega: 'Atendimento das 9h às 18h',
  aviso: 'Decoração 3D que encanta, brinquedos criativos e personalizados sob medida.',
  rodape: 'Decoração, brinquedos e personalizados em impressão 3D, direto do Rio de Janeiro.',

  // Deixe vazio ('') para esconder.
  instagram: 'patiobox3d',
  linktree: '',
  grupoWhatsApp: '',
  termosDeUso: '',

  // Crédito de criação do site (rodapé).
  credito: { usuario: 'next_sites014', url: 'https://www.instagram.com/next_sites014/' },

  // Números da seção "Por que criar". Lista vazia esconde o bloco. Ex.: { valor: '+1.300', texto: 'seguidores no Instagram' }
  numeros: [] as { valor: string; texto: string }[],

  // Depoimento de um cliente. Texto vazio esconde o bloco.
  avaliacao: { nota: '', texto: '', destaque: '', cliente: '', foto: '' },

  // Logo em imagem (PNG transparente em /public). Vazio = logo em texto.
  logo: '',
};

// Imagens da página inicial (pasta public/bonecos). Coloque os arquivos com estes nomes, em PNG.
// Para esconder um espaço, troque o caminho por ''.
const pasta = '/bonecos/';
export const imagens = {
  heroFundo: pasta + 'hero-bugou.png',                       // arte do topo (paisagem, ~1300 x 800)
  flutuante1: pasta + 'anime-float-blonde-cutout.png',       // "Nada de prateleira pronta", à esquerda
  flutuante2: pasta + 'anime-float-purple-cutout.png',       // mesma seção, à direita
  flutuante3: pasta + 'anime-float-hero-cutout.png',         // abaixo dos três passos, menor
  organizador: pasta + 'printing-desk-organizer-cutout.png', // cartão "Por que criar"
  galeria: [                                                  // "Quem já criou com a gente"
    { src: pasta + 'mikey-figure-cutout.png', alt: 'Peça impressa em 3D' },
    { src: pasta + 'zoro-figure-cutout.png', alt: 'Peça impressa em 3D' },
    { src: pasta + 'sukuna-yuji-figure-cutout.png', alt: 'Peça impressa em 3D' },
  ] as { src: string; alt: string }[],
};

export const waLink = (texto: string = loja.mensagem) =>
  `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent(texto)}`;
