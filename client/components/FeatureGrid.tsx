import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Scan,
  ShoppingCart,
  TrendingUp,
  CreditCard,
  Users,
  Activity,
  Eye,
  Smartphone,
  Shield,
  Zap,
  Globe,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Scan,
    title: "Trazabilidad del Ganado",
    description:
      "Registro completo del animal desde nacimiento hasta venta, incluyendo historial sanitario, genealogía y certificados.",
    href: "/traceability",
    badge: "ISO 22005",
    details: [
      "Registro individual",
      "Historial sanitario",
      "Genealogía completa",
      "Certificados digitales",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketplace y Ventas",
    description:
      "Publicación de ganado, gestión de cotizaciones, subastas en línea y facturación electrónica integrada.",
    href: "/marketplace",
    badge: "Marketplace",
    details: [
      "Publicación de animales",
      "Cotizaciones automáticas",
      "Subastas en línea",
      "Facturación electrónica",
    ],
  },
  {
    icon: Users,
    title: "Gestión de Usuarios",
    description:
      "Sistema de roles y permisos, registro de organizaciones, auditorías de acceso y gestión multi-empresa.",
    href: "/users",
    badge: "Multi-Rol",
    details: [
      "Roles y permisos",
      "Gestión de organizaciones",
      "Auditoría de accesos",
      "Multi-empresa",
    ],
  },
  {
    icon: CreditCard,
    title: "Planes de Suscripción",
    description:
      "Modelo Básico y Premium con funcionalidades diferenciadas según las necesidades del productor.",
    href: "/subscription",
    badge: "SaaS",
    details: [
      "Plan Básico",
      "Plan Premium",
      "Facturación automática",
      "Gestión de límites",
    ],
  },
  {
    icon: Activity,
    title: "Dashboard Central",
    description:
      "Panel de control unificado con reportes, métricas del rebaño y alertas importantes para la gestión diaria.",
    href: "/dashboard",
    badge: "Reportes",
    details: [
      "Reportes personalizados",
      "Métricas del rebaño",
      "Alertas importantes",
      "Exportación de datos",
    ],
  },
  {
    icon: Shield,
    title: "Cumplimiento Normativo",
    description:
      "Herramientas para cumplir con ISO 22005 y regulaciones nacionales de trazabilidad ganadera.",
    href: "/compliance",
    badge: "Normativo",
    details: [
      "ISO 22005",
      "Regulaciones nacionales",
      "Auditorías automáticas",
      "Documentación legal",
    ],
  },
];

const techHighlights = [
  {
    icon: Database,
    label: "Base de Datos",
    desc: "Almacenamiento seguro y escalable",
  },
  {
    icon: Smartphone,
    label: "Web Responsive",
    desc: "Acceso desde cualquier dispositivo",
  },
  { icon: Shield, label: "ISO 22005", desc: "Cumplimiento de trazabilidad" },
  { icon: Globe, label: "Multi-usuario", desc: "Organizaciones y roles" },
  { icon: Zap, label: "SaaS", desc: "Software como servicio" },
  { icon: Eye, label: "Reportes", desc: "Informes y análisis detallados" },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Módulos del Sistema
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solución completa con arquitectura serverless, sensores IoT y
            cumplimiento normativo
          </p>
        </div>

        {/* Main feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>

                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:bg-primary/10"
                  >
                    <Link to={feature.href}>Explorar módulo</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology highlights */}
        <div className="bg-card/30 backdrop-blur rounded-lg p-8 border">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Stack Tecnológico
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techHighlights.map((tech) => {
              const Icon = tech.icon;
              return (
                <div key={tech.label} className="text-center group">
                  <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors mx-auto w-fit mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">{tech.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {tech.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
