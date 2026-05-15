export type PerfilQuiz = 'executor' | 'analista' | 'construtor' | 'visionario' | 'guardiao';
export type ObjetivoQuiz = 'imovel' | 'veiculo' | 'investimento' | 'patrimonio';

export interface QuizPayload {
  nome: string;
  telefone: string;
  perfil: PerfilQuiz;
  objetivo: ObjetivoQuiz;
  tag: string;
}

export interface BotConversaPayload {
  phone: string;
  first_name: string;
  last_name?: string;
  fields: {
    perfil_quiz: PerfilQuiz;
    objetivo_quiz: ObjetivoQuiz;
  };
  tags: string[];
}
