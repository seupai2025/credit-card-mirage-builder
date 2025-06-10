import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Shield, Clock, CreditCard, Star, Building, Zap, Award, TrendingUp, Users, Phone } from "lucide-react";

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
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Bank Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Building className="w-12 h-12 mr-4 text-blue-400" />
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                BANCO CREDFÁCIL
              </h1>
              <p className="text-sm text-blue-200 uppercase tracking-wider">Instituição Financeira Digital</p>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex justify-center gap-6 mb-8 text-xs text-blue-200">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>BACEN 12.345.678/0001-90</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>Desde 2015</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>+2M clientes</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Cartão de Crédito
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                SEM CONSULTA
              </span>
              <span className="block text-3xl text-blue-200">ao SPC/Serasa</span>
            </h2>
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl mb-8 shadow-2xl">
              <p className="text-xl font-bold mb-2">✅ LIMITE PRÉ-APROVADO</p>
              <p className="text-3xl font-black">Até R$ 5.000</p>
              <p className="text-sm mt-2 opacity-90">Aprovação em 5 minutos • 100% Digital</p>
            </div>
            
            <div className="bg-red-600 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-xl mb-8 shadow-xl border border-red-500">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 animate-pulse" />
                <span className="font-bold">OFERTA LIMITADA - HOJE APENAS</span>
                <Zap className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white text-xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200">
              <CreditCard className="w-6 h-6 mr-2" />
              SOLICITAR AGORA - GRÁTIS
            </Button>
          </div>

          {/* Right content - Credit card */}
          <div className="relative">
            <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-500">
              {/* Card shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl blur-xl opacity-50 transform translate-x-4 translate-y-4"></div>
              
              {/* Actual card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700">
                {/* Card background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
                
                <div className="relative">
                  {/* Bank logo */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-white">
                      <p className="text-sm font-bold tracking-wider">BANCO CREDFÁCIL</p>
                      <p className="text-xs text-blue-300">MASTERCARD</p>
                    </div>
                    <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded opacity-80"></div>
                  </div>

                  {/* Chip */}
                  <div className="w-12 h-9 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg mb-6 shadow-lg"></div>

                  {/* Card number */}
                  <div className="text-white text-xl font-mono tracking-wider mb-6">
                    •••• •••• •••• 1234
                  </div>

                  {/* Card details */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-blue-300 text-xs mb-1">TITULAR</p>
                      <p className="text-white font-bold">JOÃO SILVA</p>
                    </div>
                    <div>
                      <p className="text-blue-300 text-xs mb-1">VÁLIDO</p>
                      <p className="text-white font-mono">12/28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Approval badge */}
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-xl animate-pulse">
              ✓ APROVADO
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="text-center mt-16">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
              <Shield className="w-4 h-4" />
              <span>Protegido por SSL</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
              <Building className="w-4 h-4" />
              <span>Banco Central</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
              <Award className="w-4 h-4" />
              <span>Certificado ISO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Benefits Section
  const BenefitsSection = () => (
    <div className="relative py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
            Por que escolher o Banco CredFácil?
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tecnologia de ponta, segurança bancária e aprovação instantânea para quem precisa de crédito
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { 
              icon: Zap, 
              title: "Aprovação Instantânea", 
              desc: "Análise por IA em menos de 5 minutos",
              color: "from-yellow-500 to-orange-500"
            },
            { 
              icon: Shield, 
              title: "100% Seguro", 
              desc: "Criptografia bancária e proteção total",
              color: "from-blue-500 to-indigo-500"
            },
            { 
              icon: TrendingUp, 
              title: "Limite Progressivo", 
              desc: "Seu limite aumenta conforme o uso",
              color: "from-green-500 to-emerald-500"
            },
            { 
              icon: Phone, 
              title: "Suporte 24/7", 
              desc: "Atendimento especializado sempre",
              color: "from-purple-500 to-pink-500"
            }
          ].map((benefit, i) => (
            <Card key={i} className="relative group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm">
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 text-center relative">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-800">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced trust indicators */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <h4 className="text-2xl font-bold text-center mb-8 text-slate-800">Certificações e Segurança</h4>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Building, title: "Banco Central", desc: "Autorizado pelo BACEN", color: "text-blue-600" },
              { icon: Shield, title: "SSL 256-bit", desc: "Criptografia militar", color: "text-green-600" },
              { icon: Award, title: "ISO 27001", desc: "Certificado de segurança", color: "text-purple-600" },
              { icon: Star, title: "5 estrelas", desc: "Avaliação dos clientes", color: "text-yellow-600" }
            ].map((cert, i) => (
              <div key={i} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className={`w-8 h-8 ${cert.color}`} />
                </div>
                <h5 className="font-bold text-slate-800 mb-1">{cert.title}</h5>
                <p className="text-sm text-slate-600">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "+2M", label: "Clientes Aprovados", icon: Users },
            { number: "R$ 500M", label: "Crédito Liberado", icon: TrendingUp },
            { number: "98%", label: "Satisfação", icon: Star }
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl transform group-hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 h-8 mx-auto mb-4" />
                <div className="text-3xl font-black mb-2">{stat.number}</div>
                <div className="text-blue-100 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <div className="relative py-20 px-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Transformamos vidas financeiras
          </h3>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Mais de 2 milhões de brasileiros já conquistaram sua independência financeira conosco
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              name: "Maria Santos", 
              time: "Cliente há 2 anos", 
              text: "Estava negativada há 3 anos e consegui meu cartão! Hoje tenho limite de R$ 4.500 e minha vida mudou completamente.",
              location: "São Paulo, SP",
              limit: "R$ 4.500"
            },
            { 
              name: "João Francisco", 
              time: "Cliente há 1 ano", 
              text: "Não acreditei quando vi meu limite de R$ 2.500 aprovado em 5 minutos. Melhor decisão que tomei!",
              location: "Rio de Janeiro, RJ", 
              limit: "R$ 2.500"
            },
            { 
              name: "Ana Lucia", 
              time: "Cliente há 6 meses", 
              text: "Processo super rápido e seguro! Recomendo para todos que precisam de crédito urgente.",
              location: "Belo Horizonte, MG",
              limit: "R$ 3.200"
            }
          ].map((testimonial, i) => (
            <Card key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardContent className="p-8">
                {/* Profile header */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <Avatar className="w-16 h-16 mr-4 ring-2 ring-white/20">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-blue-200 text-sm">{testimonial.location}</p>
                    <p className="text-green-300 text-sm font-semibold">Limite: {testimonial.limit}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-white/90 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Verified badge */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-300 text-sm">{testimonial.time}</span>
                  <div className="flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-full">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-xs font-semibold">VERIFICADO</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video testimonials section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h4 className="text-2xl font-bold text-center mb-8 text-white">
            Veja depoimentos em vídeo
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {["Aprovação em 2 minutos", "Limite de R$ 5.000", "Mudança de vida"].map((title, i) => (
              <div key={i} className="relative group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden border border-white/20">
                  <div className="w-full h-full flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <p className="text-white font-semibold mt-3 text-center">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Urgency CTA Section
  const UrgencyCTASection = () => (
    <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-red-800 px-6 py-3 rounded-full font-bold text-lg mb-6">
            <Zap className="w-6 h-6" />
            PROMOÇÃO ESPECIAL
            <Zap className="w-6 h-6" />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Últimas vagas para
            <span className="block text-yellow-300">APROVAÇÃO GARANTIDA</span>
          </h3>
          
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Apenas hoje: Aprovação em 5 minutos, sem consulta ao SPC/Serasa e limite de até R$ 5.000
          </p>
        </div>
        
        {/* Timer */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <p className="text-2xl font-bold mb-4 text-yellow-300">⏰ Esta oferta termina em:</p>
          <div className="flex justify-center gap-4 mb-4">
            {[
              { value: Math.floor(timeLeft / 60), label: "MIN" },
              { value: timeLeft % 60, label: "SEG" }
            ].map((time, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 min-w-[80px]">
                <div className="text-4xl font-black text-yellow-300">
                  {time.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-red-200 font-semibold">{time.label}</div>
              </div>
            ))}
          </div>
          <p className="text-red-200">Depois deste prazo, volta ao processo tradicional</p>
        </div>

        {/* Benefits recap */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: CheckCircle, text: "Sem consulta SPC" },
            { icon: Zap, text: "Aprovação em 5min" },
            { icon: CreditCard, text: "Até R$ 5.000" }
          ].map((benefit, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <benefit.icon className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <p className="font-bold text-white">{benefit.text}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-2xl px-16 py-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-400"
        >
          <CreditCard className="w-8 h-8 mr-3" />
          GARANTIR MINHA APROVAÇÃO AGORA
        </Button>
        
        <p className="text-red-200 text-sm mt-4">
          ✅ Processo 100% digital • ✅ Sem taxas de adesão • ✅ Confirmação imediata
        </p>
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
