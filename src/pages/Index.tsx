import { useState, useEffect } from "react";
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

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          return 300; // Reset to 5 minutes when reaches 0
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

      {/* Floating promotional banners */}
      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm animate-pulse z-10">
        ⚡ ÚLTIMAS 50 VAGAS
      </div>
      <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm animate-bounce z-10">
        🎯 97% APROVADOS HOJE
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Bank Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Building className="w-16 h-16 mr-4 text-blue-400" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                BANCO CREDFÁCIL
              </h1>
              <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Instituição Financeira Digital Licenciada</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-300">Online e Operante</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs">
            <div className="flex items-center gap-1 bg-blue-600/20 backdrop-blur px-3 py-2 rounded-full border border-blue-400/30">
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200">BACEN 12.345.678/0001-90</span>
            </div>
            <div className="flex items-center gap-1 bg-green-600/20 backdrop-blur px-3 py-2 rounded-full border border-green-400/30">
              <Award className="w-4 h-4 text-green-300" />
              <span className="text-green-200">Desde 2015 • 9 anos</span>
            </div>
            <div className="flex items-center gap-1 bg-purple-600/20 backdrop-blur px-3 py-2 rounded-full border border-purple-400/30">
              <Users className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200">+2.8M clientes ativos</span>
            </div>
            <div className="flex items-center gap-1 bg-yellow-600/20 backdrop-blur px-3 py-2 rounded-full border border-yellow-400/30">
              <Star className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-200">4.8★ Reclame Aqui</span>
            </div>
          </div>

          {/* Live activity banner */}
          <div className="bg-green-600/10 backdrop-blur border border-green-400/20 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-green-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">🔥 Atividade em tempo real:</span>
            </div>
            <div className="text-sm text-green-200 mt-2 space-y-1">
              <p>• Carlos S. - São Paulo: Cartão aprovado há 2 min - Limite R$ 3.500</p>
              <p>• Maria F. - Rio de Janeiro: Cartão aprovado há 4 min - Limite R$ 2.800</p>
              <p>• João M. - Belo Horizonte: Cartão aprovado há 7 min - Limite R$ 4.200</p>
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
        
        {/* Promotional banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-xl mb-12 shadow-2xl border border-red-500">
          <div className="text-center">
            <p className="font-bold text-lg">🔥 ATENÇÃO: Apenas 127 vagas restantes para aprovação sem consulta!</p>
            <p className="text-sm mt-1 text-red-100">Mais de 2.500 pessoas solicitaram nas últimas 24h</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { 
              icon: Zap, 
              title: "Aprovação Instantânea", 
              desc: "Análise por IA em menos de 5 minutos",
              color: "from-yellow-500 to-orange-500",
              badge: "NOVO!"
            },
            { 
              icon: Shield, 
              title: "100% Seguro", 
              desc: "Criptografia bancária nível militar",
              color: "from-blue-500 to-indigo-500",
              badge: "GARANTIDO"
            },
            { 
              icon: TrendingUp, 
              title: "Limite até R$ 5.000", 
              desc: "Seu limite aumenta automaticamente",
              color: "from-green-500 to-emerald-500",
              badge: "EXCLUSIVO"
            },
            { 
              icon: Phone, 
              title: "Suporte 24/7", 
              desc: "WhatsApp direto com especialistas",
              color: "from-purple-500 to-pink-500",
              badge: "PREMIUM"
            }
          ].map((benefit, i) => (
            <Card key={i} className="relative group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Badge */}
              <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${benefit.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10`}>
                {benefit.badge}
              </div>
              
              <CardContent className="p-8 text-center relative">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-800">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
                
                {/* Social proof indicators */}
                <div className="mt-4 flex items-center justify-center gap-1 text-xs text-slate-500">
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx} className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border border-white"></div>
                    ))}
                  </div>
                  <span className="ml-2">+{Math.floor(Math.random() * 500 + 1000)} hoje</span>
                </div>
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

  // FAQ Section
  const FAQSection = () => (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h3>
          <p className="text-xl text-slate-600">
            Esclarecemos suas principais dúvidas sobre o cartão
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              question: "Realmente não consulta SPC/Serasa?",
              answer: "Sim! Nosso sistema exclusivo de análise não consulta os órgãos de proteção ao crédito. Utilizamos inteligência artificial para avaliar seu perfil."
            },
            {
              question: "Qual é a taxa de aprovação?",
              answer: "Temos 97% de aprovação! Apenas casos muito específicos não são aprovados, mas oferecemos alternativas mesmo para esses casos."
            },
            {
              question: "Demora quanto tempo para chegar o cartão?",
              answer: "Após a aprovação, seu cartão físico chega em até 7 dias úteis. Mas você pode usar imediatamente no digital através do app!"
            },
            {
              question: "Tem anuidade ou taxas escondidas?",
              answer: "Cartão 100% gratuito no primeiro ano! Sem taxas de adesão, sem pegadinhas. Transparência total em todos os processos."
            }
          ].map((faq, i) => (
            <Card key={i} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                  ❓ {faq.question}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-slate-700 mb-6">Ainda tem dúvidas? Fale direto com nosso especialista!</p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
            <Phone className="w-5 h-5 mr-2" />
            WhatsApp: (11) 99999-9999
          </Button>
        </div>
      </div>
    </div>
  );

  // Form Section
  const FormSection = () => (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-2xl mx-auto">
        {/* Social proof banner above form */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-xl mb-8 text-center shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
            <span className="font-bold">🔥 +2.847 pessoas preencheram hoje</span>
          </div>
          <p className="text-sm text-green-100">Maria S. (SP) - Aprovada há 3 min • Limite R$ 3.200</p>
        </div>

        <Card className="shadow-2xl border-0 overflow-hidden">
          {/* Progress bar */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2"></div>
          
          <CardHeader className="text-center bg-gradient-to-br from-white to-blue-50 pb-8">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              🎯 PRÉ-APROVAÇÃO INSTANTÂNEA
            </CardTitle>
            <p className="text-slate-600 font-medium">
              ✅ Processo 100% seguro e confidencial • ⚡ Resultado em 5 minutos
            </p>
            
            {/* Trust indicators */}
            <div className="flex justify-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1 text-green-600">
                <Shield className="w-4 h-4" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center gap-1 text-blue-600">
                <Building className="w-4 h-4" />
                <span>BACEN</span>
              </div>
              <div className="flex items-center gap-1 text-purple-600">
                <Star className="w-4 h-4" />
                <span>4.9★ Avaliação</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6 p-8 bg-white">
            {/* Step indicator */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Clock className="w-4 h-4" />
                Etapa 1 de 1 • Tempo restante: ⏰ 4:32
              </div>
            </div>

            {[
              { key: "nome", label: "Nome Completo", type: "text", required: true },
              { key: "cpf", label: "CPF", type: "text", required: true },
              { key: "telefone", label: "Telefone", type: "tel", required: true },
              { key: "whatsapp", label: "WhatsApp", type: "tel", required: true },
              { key: "endereco", label: "Endereço Completo", type: "text", required: true },
              { key: "nomeMae", label: "Nome da Mãe", type: "text", required: true },
              { key: "renda", label: "Renda Mensal", type: "text", required: false },
              { key: "profissao", label: "Profissão", type: "text", required: false }
            ].map((field) => (
              <div key={field.key} className="space-y-2">
                <Label htmlFor={field.key} className="text-slate-700 font-semibold">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </Label>
                <Input
                  id={field.key}
                  type={field.type}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => setFormData({
                    ...formData,
                    [field.key]: e.target.value
                  })}
                  className="h-12 border-2 border-slate-200 focus:border-green-500 rounded-lg font-medium"
                  placeholder={field.key === "renda" ? "Ex: R$ 2.500" : field.key === "cpf" ? "000.000.000-00" : ""}
                />
              </div>
            ))}

            {/* Benefits reminder */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-2">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Aprovação em 5min</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">100% Seguro</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-2">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Até R$ 5.000</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                console.log("Dados do formulário (educativo):", formData);
                alert("DEMONSTRAÇÃO: Em uma página real, esses dados seriam enviados para um servidor.");
              }}
            >
              <CheckCircle className="w-6 h-6 mr-2" />
              🚀 CONFIRMAR PRÉ-APROVAÇÃO AGORA
            </Button>

            {/* Security and terms */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>Dados protegidos por SSL</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  <span>Certificado BACEN</span>
                </div>
              </div>
              
              <p className="text-xs text-center text-slate-500 leading-relaxed">
                Ao continuar, você autoriza o Banco CredFácil a utilizar seus dados para análise de crédito e concorda com nossos 
                <a href="#" className="text-blue-600 hover:underline ml-1">termos de uso</a> e 
                <a href="#" className="text-blue-600 hover:underline ml-1">política de privacidade</a>.
              </p>
            </div>

            {/* Social proof */}
            <div className="text-center pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-2">Junte-se a milhares de aprovados:</p>
              <div className="flex justify-center items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm text-slate-600">+12.847 clientes satisfeitos</span>
              </div>
            </div>
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
      <FAQSection />
      <FormSection />
    </div>
  );
};

export default Index;
