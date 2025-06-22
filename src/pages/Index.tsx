
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Shield, Clock, CreditCard, Star, Building, Zap, Award, TrendingUp, Users, Phone, Sparkles, ArrowRight, Eye, Timer, AlertTriangle } from "lucide-react";

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
    <div className="bg-red-600 border-2 border-red-700 p-6 text-center shadow-xl">
      <div className="flex items-center justify-center gap-3 mb-3">
        <AlertTriangle className="w-8 h-8 text-yellow-300 animate-pulse" />
        <p className="text-white font-black text-xl">
          ⚠️ PÁGINA EDUCATIVA - DEMONSTRAÇÃO DE GOLPES FINANCEIROS ⚠️
        </p>
        <AlertTriangle className="w-8 h-8 text-yellow-300 animate-pulse" />
      </div>
      <p className="text-red-100 font-semibold mb-2">
        Esta página demonstra técnicas PERIGOSAS usadas por golpistas para enganar pessoas
      </p>
      <p className="text-sm text-red-200">
        🚨 NUNCA forneça seus dados pessoais em sites como este • 🚨 SEMPRE desconfie de "aprovação garantida"
      </p>
      <div className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold inline-block">
        MATERIAL EDUCATIVO - NÃO É UM SITE REAL
      </div>
    </div>
  );

  // Hero Section with Krédito branding
  const HeroSection = () => (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-500 transform rotate-45 translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-400 to-purple-500 transform rotate-45 -translate-x-32 translate-y-32"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating promotional banners */}
      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm animate-pulse z-10 shadow-xl">
        🚨 GOLPE: "Últimas vagas"
      </div>
      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm animate-bounce z-10 shadow-xl">
        ⚠️ ALERTA: Taxa falsa
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Bank Header with Logo */}
        <div className="text-center mb-16">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <img 
                src="/lovable-uploads/f0c6e652-f95e-42c7-9c64-453f6b37981c.png" 
                alt="Logo Krédito - Exemplo de identidade visual falsa usada em golpes" 
                className="h-16 w-auto"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-blue-200 uppercase tracking-wider font-semibold mb-2">Banco Digital Falso</p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-red-300">Sistema Fraudulento • Golpe Ativo</span>
            </div>
          </div>
          
          {/* Fake trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs">
            <div className="flex items-center gap-1 bg-blue-800/60 backdrop-blur px-4 py-2 rounded-full border border-red-400/50">
              <Shield className="w-4 h-4 text-red-300" />
              <span className="text-blue-200 line-through">CNPJ FALSO</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-800/60 backdrop-blur px-4 py-2 rounded-full border border-red-400/50">
              <Award className="w-4 h-4 text-red-300" />
              <span className="text-blue-200 line-through">Dados Inventados</span>
            </div>
            <div className="flex items-center gap-1 bg-blue-800/60 backdrop-blur px-4 py-2 rounded-full border border-red-400/50">
              <Users className="w-4 h-4 text-red-300" />
              <span className="text-blue-200 line-through">Números Falsos</span>
            </div>
          </div>

          {/* Educational alert about fake activity */}
          <div className="bg-gradient-to-r from-red-800/60 to-orange-800/60 backdrop-blur border border-red-400/20 rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-2 text-red-300 mb-3">
              <AlertTriangle className="w-5 h-5 animate-pulse" />
              <span className="font-semibold text-lg">🚨 TÉCNICA DE GOLPE: Atividade Falsa</span>
            </div>
            <div className="text-sm text-red-100 space-y-2">
              <div className="flex items-center justify-between bg-red-900/40 p-3 rounded-lg">
                <span>• Nome Inventado - Local Falso</span>
                <span className="text-red-400 font-bold line-through">Aprovação FALSA</span>
              </div>
              <div className="flex items-center justify-between bg-red-900/40 p-3 rounded-lg">
                <span>• Pessoa Inexistente</span>
                <span className="text-red-400 font-bold line-through">Dados INVENTADOS</span>
              </div>
              <p className="text-center text-red-200 font-semibold mt-4">
                ⚠️ Golpistas usam nomes falsos para criar sensação de urgência
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-white">Cartão</span>
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                SEM CONSULTA
              </span>
              <span className="block text-2xl md:text-3xl text-red-300 font-semibold line-through">
                (PROMESSA FALSA)
              </span>
            </h1>
            
            <div className="bg-gradient-to-r from-red-800 to-orange-800 border border-red-400/30 text-white p-8 rounded-2xl mb-8 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                GOLPE
              </div>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <p className="text-xl font-bold text-yellow-400 line-through">LIMITE FALSO</p>
              </div>
              <p className="text-4xl font-black mb-2 line-through">Até R$ 5.000</p>
              <p className="text-red-200 flex items-center gap-2">
                <Timer className="w-4 h-4" />
                Promessa Enganosa • 100% Golpe
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-6 rounded-xl mb-8 shadow-xl border border-red-500/50">
              <div className="flex items-center justify-center gap-3">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
                <span className="font-bold text-lg">TÉCNICA DE GOLPE - URGÊNCIA FALSA</span>
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <p className="text-center mt-2 text-red-100">Golpistas criam urgência para você não pensar</p>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-xl font-black px-16 py-8 rounded-2xl shadow-2xl relative">
              <AlertTriangle className="w-7 h-7 mr-3" />
              NÃO CLIQUE - É GOLPE
              <ArrowRight className="w-7 h-7 ml-3" />
              <div className="absolute -top-2 -right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                PERIGO
              </div>
            </Button>
          </div>

          {/* Right content - Credit card */}
          <div className="relative">
            <div className="relative transform rotate-3 hover:rotate-1 transition-transform duration-500">
              {/* Card shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-orange-600/30 rounded-2xl blur-2xl opacity-60 transform translate-x-6 translate-y-6"></div>
              
              {/* Actual card */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/f6bd72fe-aa67-40bd-99fc-3751589855a7.png" 
                  alt="Cartão Krédito - Exemplo de design usado em golpes financeiros" 
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-red-500"
                />
                <div className="absolute inset-0 bg-red-600/20 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Warning badges */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-full font-bold shadow-2xl animate-pulse">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span>GOLPE!</span>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold shadow-xl">
              <span className="text-sm">⚠️ FALSO</span>
            </div>
          </div>
        </div>

        {/* Warning section */}
        <div className="text-center mt-20">
          <div className="bg-red-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/50">
            <h3 className="text-2xl font-bold text-red-300 mb-4">🚨 COMO IDENTIFICAR ESTE GOLPE</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-red-800/30 p-4 rounded-lg">
                <h4 className="font-bold text-red-200 mb-2">Sinais de Alerta:</h4>
                <ul className="text-red-100 text-sm space-y-1">
                  <li>• "Aprovação sem consulta"</li>
                  <li>• "Últimas vagas disponíveis"</li>
                  <li>• Contador de tempo pressionando</li>
                  <li>• Promessas impossíveis</li>
                </ul>
              </div>
              <div className="bg-green-800/30 p-4 rounded-lg">
                <h4 className="font-bold text-green-200 mb-2">Se Proteja:</h4>
                <ul className="text-green-100 text-sm space-y-1">
                  <li>• Verifique CNPJ no site da Receita</li>
                  <li>• Consulte o Banco Central</li>
                  <li>• Desconfie de urgência excessiva</li>
                  <li>• Nunca pague taxas antecipadas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Benefits Section (Educational about scam techniques)
  const ScamTechniquesSection = () => (
    <div className="relative py-20 px-4 bg-gradient-to-br from-slate-100 to-red-50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Técnicas de Golpe Mais Usadas
          </h3>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium">
            Aprenda a identificar as principais táticas usadas por golpistas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { 
              icon: Zap, 
              title: "Urgência Falsa", 
              desc: "Criam pressa para você não pensar",
              color: "from-red-500 to-orange-500",
              warning: "CUIDADO!"
            },
            { 
              icon: Shield, 
              title: "Falsa Segurança", 
              desc: "Usam selos e certificados falsos",
              color: "from-orange-500 to-red-500",
              warning: "SUSPEITO"
            },
            { 
              icon: TrendingUp, 
              title: "Promessas Impossíveis", 
              desc: "Oferecem o que nenhum banco real oferece",
              color: "from-red-500 to-pink-500",
              warning: "IMPOSSÍVEL"
            },
            { 
              icon: Phone, 
              title: "Pressão Psicológica", 
              desc: "Insistem para você decidir agora",
              color: "from-pink-500 to-red-500",
              warning: "ALERTA"
            }
          ].map((technique, i) => (
            <Card key={i} className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-red-200 bg-white/80 backdrop-blur-sm hover:bg-red-50/90">
              <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${technique.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10`}>
                {technique.warning}
              </div>
              
              <CardContent className="p-8 text-center relative">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${technique.color} flex items-center justify-center shadow-xl`}>
                  <technique.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-red-800">{technique.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{technique.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  // Form Section (Educational warning)
  const WarningFormSection = () => (
    <div className="py-16 px-4 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-red-600 text-white p-4 rounded-xl mb-8 text-center shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">🚨 NUNCA PREENCHA FORMULÁRIOS ASSIM</span>
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </div>
          <p className="text-sm text-red-100">Golpistas usam estes dados para roubo de identidade</p>
        </div>

        <Card className="shadow-2xl border-4 border-red-500 overflow-hidden opacity-50">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 h-2"></div>
          
          <CardHeader className="text-center bg-gradient-to-br from-white to-red-50 pb-8">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
              ⚠️ FORMULÁRIO DE GOLPE
            </CardTitle>
            <p className="text-red-600 font-medium">
              ❌ NUNCA forneça estes dados • ❌ É assim que roubam sua identidade
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6 p-8 bg-white relative">
            <div className="absolute inset-0 bg-red-500/10"></div>
            
            {[
              { key: "nome", label: "Nome Completo", type: "text", danger: "ALTO RISCO" },
              { key: "cpf", label: "CPF", type: "text", danger: "PERIGO!" },
              { key: "telefone", label: "Telefone", type: "tel", danger: "RISCO" },
              { key: "whatsapp", label: "WhatsApp", type: "tel", danger: "RISCO" },
              { key: "endereco", label: "Endereço Completo", type: "text", danger: "ALTO RISCO" },
              { key: "nomeMae", label: "Nome da Mãe", type: "text", danger: "PERIGO!" },
              { key: "renda", label: "Renda Mensal", type: "text", danger: "RISCO" },
              { key: "profissao", label: "Profissão", type: "text", danger: "RISCO" }
            ].map((field) => (
              <div key={field.key} className="space-y-2 relative">
                <div className="flex justify-between items-center">
                  <Label htmlFor={field.key} className="text-slate-700 font-semibold line-through">
                    {field.label}
                  </Label>
                  <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full font-bold">
                    {field.danger}
                  </span>
                </div>
                <Input
                  id={field.key}
                  type={field.type}
                  value=""
                  disabled
                  className="h-12 border-2 border-red-300 bg-red-50 rounded-lg font-medium opacity-50"
                  placeholder="NÃO PREENCHA"
                />
              </div>
            ))}
            
            <Button 
              disabled
              className="w-full bg-red-600 text-white py-6 text-xl font-bold rounded-xl shadow-2xl opacity-50 cursor-not-allowed"
            >
              <AlertTriangle className="w-6 h-6 mr-2" />
              🚫 NÃO ENVIE SEUS DADOS
            </Button>

            <div className="bg-red-100 border-2 border-red-300 p-6 rounded-xl">
              <h4 className="font-bold text-red-800 mb-3">Por que este formulário é perigoso:</h4>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Solicitam CPF e nome da mãe (dados sensíveis)</li>
                <li>• Pedem endereço completo (informação pessoal)</li>
                <li>• Querem dados de renda (informação financeira)</li>
                <li>• Não explicam como protegerão seus dados</li>
                <li>• Pressionam para preenchimento rápido</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Protection Tips Section
  const ProtectionTipsSection = () => (
    <div className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Como se Proteger de Golpes
          </h3>
          <p className="text-xl text-slate-600">
            Dicas essenciais para não cair em armadilhas financeiras
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                O que FAZER
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Verificar CNPJ no site da Receita Federal",
                  "Consultar lista de instituições autorizadas pelo Banco Central",
                  "Pesquisar a empresa no Reclame Aqui",
                  "Desconfiar de promessas impossíveis",
                  "Pedir tempo para pensar antes de decidir",
                  "Consultar amigos e familiares"
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-green-800">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                O que NÃO fazer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Fornecer CPF, RG ou dados pessoais por telefone",
                  "Pagar taxas antecipadas para liberação de crédito",
                  "Decidir sob pressão ou urgência",
                  "Acreditar em 'aprovação garantida sem consulta'",
                  "Ignorar taxas de juros muito baixas",
                  "Confiar apenas em promessas verbais"
                ].map((warning, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-red-800">{warning}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-blue-800 mb-4">
              📞 Em caso de dúvida, contate:
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-blue-700">
              <div>
                <h5 className="font-bold mb-2">Banco Central</h5>
                <p className="text-sm">www.bcb.gov.br</p>
                <p className="text-sm">145 (Atendimento)</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Procon</h5>
                <p className="text-sm">www.procon.org</p>
                <p className="text-sm">151 (Denúncias)</p>
              </div>
              <div>
                <h5 className="font-bold mb-2">Polícia Civil</h5>
                <p className="text-sm">Delegacia Eletrônica</p>
                <p className="text-sm">197 (Emergência)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <EducationalBanner />
      <HeroSection />
      <ScamTechniquesSection />
      <WarningFormSection />
      <ProtectionTipsSection />
    </div>
  );
};

export default Index;
