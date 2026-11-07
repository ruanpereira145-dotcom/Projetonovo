// Dados da loja usados na página inicial.
// Para mudar textos de contato, números ou depoimento, edite só este arquivo.

export const loja = {
  nome: 'JLC Soluções',
  nomeCurto: 'JLC',
  whatsapp: '5514997096646',
  mensagem: 'Oi, vim pelo site da JLC Soluções e quero falar sobre orçamento ou vendas.',
  cidade: 'Marília-SP',
  // Confirme se a JLC envia para todo o Brasil; se não, ajuste as duas linhas abaixo.
  entrega: 'Enviamos para todo o Brasil',
  aviso: 'Sua ideia em 3D — entregamos em Marília e enviamos para todo o Brasil.',
  rodape: 'Impressão 3D com atitude, de Marília para todo o Brasil.',

  // Deixe vazio ('') para esconder. Ex.: instagram: 'jlcsolucoes' (sem @).
  instagram: '',
  grupoWhatsApp: '',
  termosDeUso: '',

  // Números da seção "Por que criar com a JLC?". Lista vazia esconde o bloco.
  // Ex.: { valor: '+200', texto: 'ideias materializadas' }
  numeros: [] as { valor: string; texto: string }[],

  // Depoimento de um cliente da JLC. Texto vazio esconde o bloco.
  // foto: caminho em /public (ex.: '/clientes/maria.jpg') ou vazio para usar as iniciais.
  avaliacao: { nota: '', texto: '', destaque: '', cliente: '', foto: '' },
};

// Bonecos e peças (mesmas imagens do site de referência).
// Salve os arquivos em public/bonecos — veja LEIA-ME.md, seção "Bonecos".
const pasta = '/bonecos/';
export const imagens = {
  flutuante1: pasta + 'anime-float-blonde-cutout.png',
  flutuante2: pasta + 'anime-float-purple-cutout.png',
  flutuante3: pasta + 'anime-float-hero-cutout.png',
  organizador: pasta + 'printing-desk-organizer-cutout.png',
  galeria: [
    { src: pasta + 'mikey-figure-cutout.png', alt: 'Figure do Mikey impressa em 3D' },
    { src: pasta + 'zoro-figure-cutout.png', alt: 'Figure do Zoro impressa em 3D' },
    { src: pasta + 'sukuna-yuji-figure-cutout.png', alt: 'Figure do Itadori Yuji possuído por Sukuna impressa em 3D' },
  ],
};

export const waLink = (texto: string = loja.mensagem) =>
  `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent(texto)}`;
