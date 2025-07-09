import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Eye, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ganatrace-50 via-background to-accent/20" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEyNV8yKSI+CjxwYXRoIGQ9Ik0zNiAzSDMzVjBIMzZWM1pNMzYgNjBIMzNWNjMiIGZpbGw9InJnYmEoMTQ5LCA0NSwgNTAsIDAuMDUpIi8+CjxwYXRoIGQ9Ik0wIDM2SDNWMzNIMFYzNlpNNjAgMzZINjNWMzNINjBWMzZaIiBmaWxsPSJyZ2JhKDE0OSwgNDUsIDUwLCAwLjA1KSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEyNV8yIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=')] opacity-20" />

      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge variant="outline" className="px-4 py-2 text-sm">
            <Shield className="w-3 h-3 mr-2" />
            Certificado ISO 22005 • 150 CFP
          </Badge>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block">Sistema Integral de</span>
            <span className="bg-gradient-to-r from-primary via-ganatrace-500 to-ganatrace-600 bg-clip-text text-transparent">
              Gestión Ganadera
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Plataforma completa para trazabilidad, ventas en marketplace,
            gestión de usuarios y cumplimiento normativo para productores
            ganaderos.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="w-4 h-4 text-primary" />
              <span>Trazabilidad Completa</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cloud className="w-4 h-4 text-primary" />
              <span>Marketplace Integrado</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              <span>Planes Básico y Premium</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/dashboard">
                Acceder al Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Ver Demo en Vivo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                150
              </div>
              <div className="text-sm text-muted-foreground">
                Function Points
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                5,000+
              </div>
              <div className="text-sm text-muted-foreground">
                Animales Registrados
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                ISO
              </div>
              <div className="text-sm text-muted-foreground">
                22005 Certificado
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Soporte Técnico
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
