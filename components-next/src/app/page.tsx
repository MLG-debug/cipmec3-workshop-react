import { Plan } from "./components/Plan";
import { Title } from "./components/Title";

export default function Home() {
    return (
      <div className="bg-gray-900 h-screen w-screen">
        <div className="max-w-[1280px] mx-auto">
        <Title className="py-8">
          Selecione seu plano
        </Title>
        <div className="flex justify-between items-start gap-8">
          <Plan
            best={false}
            features={[
              "Ferramentas básicas",
              "Projetos individuais",
              "Suporte 24/7"
            ]}
            type="silver"
            title="Plano Silver"
            text="Perfeito para iniciantes"
            price={29.99} />
          <Plan
            best={true}
            features={[
              "Ferramentas básicas",
              "Ferramentas avançadas",
              "Projetos em equipe",
              "Suporte 24/7"
            ]}
            type="gold" title="Plano Gold" text="Perfeito para equipes" price={39.99} />
          <Plan
            best={false}
            features={[
              "Ferramentas básicas",
              "Ferramentas avançadas",
              "Projetos em equipe",
              "Acesso ilimitado",
              "API disponível 24h",
              "Suporte 24/7"
            ]}
            type="diamond" title="Plano Diamond" text="Perfeito para empresas" price={79.99} />
  
        </div>
        </div>
      </div>
  );
}
