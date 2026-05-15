import acelerador from "@/assets/char-acelerador.png";
import estrategico from "@/assets/char-estrategico.png";
import patrimonial from "@/assets/char-patrimonial.png";
import visionario from "@/assets/char-visionario.png";
import conservador from "@/assets/char-conservador.png";

export type ProfileKey = "executor" | "analista" | "guardiao" | "visionario" | "construtor";

export interface Profile {
  key: ProfileKey;
  name: string;
  character: string;
  image: string;
  colorVar: string;
  title: string;
  description: string;
  phrase: string;
  hook: string;
  strengths: string[];
}

export const PROFILES: Record<ProfileKey, Profile> = {
  executor: {
    key: "executor",
    name: "Acelerador",
    character: "Executor",
    image: acelerador,
    colorVar: "var(--executor)",
    title: "Você possui perfil de ação e conquista.",
    description:
      "Você gosta de crescimento rápido, movimento e oportunidades. Normalmente busca formas mais inteligentes de acelerar objetivos sem comprometer totalmente sua renda.",
    phrase: "Quem age primeiro normalmente conquista antes.",
    hook: "Seu perfil costuma se adaptar muito bem a planejamentos de aquisição inteligente.",
    strengths: ["Decisão rápida", "Energia para agir", "Foco em resultado"],
  },
  analista: {
    key: "analista",
    name: "Estratégico",
    character: "Analista",
    image: estrategico,
    colorVar: "var(--analista)",
    title: "Você possui perfil analítico e inteligente.",
    description:
      "Você prefere decisões conscientes, economia no longo prazo e crescimento sustentável.",
    phrase: "Inteligência financeira não é gastar menos. É decidir melhor.",
    hook: "Ferramentas de planejamento patrimonial costumam fazer muito sentido para pessoas com seu perfil.",
    strengths: ["Análise profunda", "Visão lógica", "Planejamento sólido"],
  },
  guardiao: {
    key: "guardiao",
    name: "Patrimonial",
    character: "Guardião",
    image: patrimonial,
    colorVar: "var(--guardiao)",
    title: "Você possui perfil construtor de patrimônio.",
    description:
      "Você pensa em crescimento sólido, bens e valorização patrimonial.",
    phrase: "Patrimônio não nasce do acaso. Nasce de estratégia.",
    hook: "Seu perfil normalmente busca formas seguras e eficientes de aquisição.",
    strengths: ["Visão de bens", "Construção sólida", "Foco em valorização"],
  },
  visionario: {
    key: "visionario",
    name: "Visionário",
    character: "Visionário",
    image: visionario,
    colorVar: "var(--visionario)",
    title: "Você possui visão de futuro acima da média.",
    description:
      "Você pensa além do presente e costuma buscar decisões que tragam impacto no longo prazo.",
    phrase: "Quem pensa no futuro hoje vive melhor amanhã.",
    hook: "Planejamento financeiro e construção patrimonial combinam muito com seu perfil.",
    strengths: ["Visão de longo prazo", "Pensamento expansivo", "Mentalidade de evolução"],
  },
  construtor: {
    key: "construtor",
    name: "Conservador",
    character: "Construtor",
    image: conservador,
    colorVar: "var(--construtor)",
    title: "Você valoriza estabilidade e segurança.",
    description:
      "Você prefere crescimento seguro, previsível e com menor exposição emocional.",
    phrase: "Segurança financeira também é liberdade.",
    hook: "Seu perfil normalmente prefere ferramentas previsíveis e organizadas de construção patrimonial.",
    strengths: ["Equilíbrio", "Proteção", "Decisões seguras"],
  },
};

export interface QuizOption {
  label: string;
  profile: ProfileKey;
}
export interface QuizQuestion {
  title: string;
  options: QuizOption[];
}

export const QUESTIONS: QuizQuestion[] = [
  {
    title: "O que você mais deseja conquistar nos próximos anos?",
    options: [
      { label: "Minha casa própria", profile: "guardiao" },
      { label: "Trocar ou comprar carro", profile: "executor" },
      { label: "Começar a investir melhor", profile: "analista" },
      { label: "Construir patrimônio para o futuro", profile: "visionario" },
      { label: "Ter mais estabilidade financeira", profile: "construtor" },
    ],
  },
  {
    title: "Qual dessas frases combina mais com você?",
    options: [
      { label: "“Quero conquistar rápido.”", profile: "executor" },
      { label: "“Prefiro pagar menos no longo prazo.”", profile: "analista" },
      { label: "“Quero segurança nas decisões.”", profile: "construtor" },
      { label: "“Penso muito no meu futuro.”", profile: "visionario" },
      { label: "“Quero transformar renda em patrimônio.”", profile: "guardiao" },
    ],
  },
  {
    title: "Como você costuma tomar decisões financeiras?",
    options: [
      { label: "Aproveito oportunidades rápidas", profile: "executor" },
      { label: "Analiso tudo antes de decidir", profile: "analista" },
      { label: "Evito riscos desnecessários", profile: "construtor" },
      { label: "Planejo pensando em crescimento futuro", profile: "visionario" },
      { label: "Penso em valorização e aquisição de bens", profile: "guardiao" },
    ],
  },
  {
    title: "Qual dessas opções parece mais inteligente para você?",
    options: [
      { label: "Parcelas menores e planejamento", profile: "analista" },
      { label: "Investir para conquistar patrimônio", profile: "guardiao" },
      { label: "Garantir estabilidade antes de crescer", profile: "construtor" },
      { label: "Criar oportunidades futuras", profile: "visionario" },
      { label: "Conseguir resultados mais rápidos", profile: "executor" },
    ],
  },
  {
    title: "Se hoje você recebesse um crédito aprovado, qual seria seu foco?",
    options: [
      { label: "Imóvel", profile: "guardiao" },
      { label: "Veículo", profile: "executor" },
      { label: "Investimento", profile: "analista" },
      { label: "Expansão patrimonial", profile: "visionario" },
      { label: "Reserva e segurança financeira", profile: "construtor" },
    ],
  },
];
