import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Shield, Clock, CreditCard, Star } from "lucide-react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    whatsapp: "",
    endereco: "",
    nomeMae: "",
    renda: "",
    profissao: ""
  });

  // Educational disclaimer banner
  const EducationalBanner = () => (
    <div className="bg-destructive/10 border border-destructive/20 p-4 text-center">
      <p className="text-destructive font-semibold">
        ⚠️ PÁGINA EDUCATIVA - DEMONSTRAÇÃO DE TÉCNICAS DE MARKETING QUESTIONÁVEIS ⚠️
      </p>
      <p className="text-sm text-muted-foreground mt-1">
        Esta página demonstra práticas comuns em landing pages duvidosas. NÃO use para enganar pessoas.
      </p>
    </div>
  );

  // Hero Section
  const HeroSection = () => (
    <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">CREDFÁCIL</h1>
          <p className="text-sm opacity-90">Soluções Financeiras</p>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Seu nome está NEGATIVADO?
        </h2>
        <h3 className="text-2xl md:text-3xl mb-6 text-yellow-300">
          Aproveite seu limite APROVADO de até R$ 3.000!
        </h3>
        
        <div className="bg-red-600 inline-block px-6 py-3 rounded-lg mb-8">
          <p className="text-lg font-semibold">
            ⏰ SEM CONSULTA AO SPC/SERASA • APENAS HOJE • CONFIRMAÇÃO IMEDIATA
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur rounded-lg p-6 inline-block">
          <img 
            src="/placeholder.svg" 
            alt="Cartão de Crédito" 
            className="w-64 h-40 mx-auto rounded-lg shadow-lg"
          />
          <p className="mt-2 text-sm">JOÃO SILVA - APROVADO ✓</p>
        </div>
      </div>
    </div>
  );

  // Benefits Section
  const BenefitsSection = () => (
    <div className="py-16 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Vantagens Exclusivas do seu Cartão
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Clock, title: "Aprovado em 5 min", desc: "Processo 100% online" },
            { icon: Shield, title: "Sem comprovação", desc: "Não precisa de renda" },
            { icon: CheckCircle, title: "Sem consulta SPC", desc: "Aprovação garantida" },
            { icon: CreditCard, title: "Até R$ 5.000", desc: "Limite pré-aprovado" }
          ].map((benefit, i) => (
            <Card key={i} className="text-center p-6">
              <benefit.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h4 className="font-bold mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Empresa Verificada ✓",
            "SSL Seguro 🔒",
            "100% Confiável",
            "Reclame Aqui ⭐⭐⭐⭐⭐"
          ].map((seal, i) => (
            <Badge key={i} variant="secondary" className="px-4 py-2">
              {seal}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Veja o que nossos clientes dizem
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Maria S.", time: "há 2h", text: "Estava negativada há 3 anos e consegui meu cartão! Super confiável! Recomendo muito!" },
            { name: "João F.", time: "há 3 dias", text: "Não acreditei quando vi meu limite de R$ 2.500 aprovado. Funcionou mesmo!" },
            { name: "Ana L.", time: "há 1 dia", text: "Rápido e fácil! Em 5 minutos já tinha meu cartão aprovado. Muito obrigada!" }
          ].map((testimonial, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="w-12 h-12 mr-3">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.time}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  // Urgency CTA Section
  const UrgencyCTASection = () => (
    <div className="bg-red-600 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">
          ⏰ OFERTA POR TEMPO LIMITADO!
        </h3>
        
        <div className="bg-black/20 rounded-lg p-6 mb-8">
          <p className="text-lg mb-2">Essa oferta termina em:</p>
          <div className="text-4xl font-bold">
            {Math.floor(timeLeft / 60).toString().padStart(2, '0')}:
            {(timeLeft % 60).toString().padStart(2, '0')}
          </div>
          <p className="text-sm mt-2">minutos restantes</p>
        </div>
        
        <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-6">
          🚀 QUERO MEU LIMITE APROVADO AGORA!
        </Button>
      </div>
    </div>
  );

  // Form Section
  const FormSection = () => (
    <div className="py-16 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-600">
              Preencha seus dados para PRÉ-APROVAÇÃO
            </CardTitle>
            <p className="text-muted-foreground">
              Processo 100% seguro e confidencial
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {[
              { key: "nome", label: "Nome Completo", type: "text" },
              { key: "cpf", label: "CPF", type: "text" },
              { key: "telefone", label: "Telefone", type: "tel" },
              { key: "whatsapp", label: "WhatsApp", type: "tel" },
              { key: "endereco", label: "Endereço Completo", type: "text" },
              { key: "nomeMae", label: "Nome da Mãe", type: "text" },
              { key: "renda", label: "Renda Mensal (opcional)", type: "text" },
              { key: "profissao", label: "Profissão (opcional)", type: "text" }
            ].map((field) => (
              <div key={field.key}>
                <Label htmlFor={field.key}>{field.label}</Label>
                <Input
                  id={field.key}
                  type={field.type}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => setFormData({
                    ...formData,
                    [field.key]: e.target.value
                  })}
                  className="mt-1"
                />
              </div>
            ))}
            
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
              onClick={() => {
                console.log("Dados do formulário (educativo):", formData);
                alert("DEMONSTRAÇÃO: Em uma página real, esses dados seriam enviados para um servidor.");
              }}
            >
              ✅ SOLICITAR CARTÃO AGORA - GRÁTIS
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              Ao continuar, você concorda com nossos termos de uso
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <EducationalBanner />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <UrgencyCTASection />
      <FormSection />
    </div>
  );
};

export default Index;
