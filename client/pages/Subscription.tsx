import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Check,
  X,
  Crown,
  Users,
  FileText,
  TrendingUp,
  Shield,
  Zap,
  Star,
  Clock,
  Database,
} from "lucide-react";

export default function Subscription() {
  const plans = [
    {
      name: "Básico",
      price: "$29",
      period: "/mes",
      description: "Ideal para pequeños productores",
      popular: false,
      features: [
        { name: "Hasta 100 animales registrados", included: true },
        { name: "Trazabilidad básica", included: true },
        { name: "Historial sanitario", included: true },
        { name: "Reportes básicos", included: true },
        { name: "Soporte por email", included: true },
        { name: "Marketplace - Ver publicaciones", included: true },
        { name: "Marketplace - Publicar (5 al mes)", included: true },
        { name: "Genealogía básica", included: true },
        { name: "Certificados ISO 22005", included: false },
        { name: "Subastas", included: false },
        { name: "API access", included: false },
        { name: "Reportes avanzados", included: false },
        { name: "Soporte telefónico", included: false },
        { name: "Multi-organización", included: false },
      ],
    },
    {
      name: "Premium",
      price: "$79",
      period: "/mes",
      description: "Para productores medianos y grandes",
      popular: true,
      features: [
        { name: "Animales ilimitados", included: true },
        { name: "Trazabilidad completa", included: true },
        { name: "Historial sanitario avanzado", included: true },
        { name: "Reportes avanzados", included: true },
        { name: "Soporte 24/7", included: true },
        { name: "Marketplace - Acceso completo", included: true },
        { name: "Publicaciones ilimitadas", included: true },
        { name: "Genealogía completa", included: true },
        { name: "Certificados ISO 22005", included: true },
        { name: "Subastas y cotizaciones", included: true },
        { name: "API access", included: true },
        { name: "Dashboard personalizado", included: true },
        { name: "Soporte telefónico prioritario", included: true },
        { name: "Multi-organización", included: true },
      ],
    },
  ];

  const currentPlan = {
    name: "Básico",
    nextBilling: "2024-02-15",
    animalsUsed: 67,
    animalsLimit: 100,
    publicationsUsed: 3,
    publicationsLimit: 5,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Planes de Suscripción</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu operación
            ganadera
          </p>
        </div>

        {/* Current Plan Status */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" />
              Plan Actual: {currentPlan.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {currentPlan.animalsUsed}
                </div>
                <div className="text-sm text-muted-foreground">
                  de {currentPlan.animalsLimit} animales
                </div>
                <div className="w-full bg-muted h-2 rounded-full mt-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${(currentPlan.animalsUsed / currentPlan.animalsLimit) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {currentPlan.publicationsUsed}
                </div>
                <div className="text-sm text-muted-foreground">
                  de {currentPlan.publicationsLimit} publicaciones
                </div>
                <div className="w-full bg-muted h-2 rounded-full mt-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${(currentPlan.publicationsUsed / currentPlan.publicationsLimit) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  <Clock className="h-6 w-6 mx-auto" />
                </div>
                <div className="text-sm text-muted-foreground">
                  Próxima facturación
                </div>
                <div className="text-sm font-medium mt-1">
                  {currentPlan.nextBilling}
                </div>
              </div>

              <div className="text-center p-4 bg-background rounded-lg">
                <Button className="w-full">Actualizar Plan</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-primary/50 shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  <Star className="w-3 h-3 mr-1" />
                  Más Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {plan.name === "Premium" ? (
                    <Crown className="h-6 w-6 text-primary" />
                  ) : (
                    <Shield className="h-6 w-6 text-primary" />
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === currentPlan.name
                    ? "Plan Actual"
                    : `Cambiar a ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Comparación Detallada de Funcionalidades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Gestión de Datos
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span>Límite de animales</span>
                    <div className="flex gap-4">
                      <span className="text-muted-foreground">100</span>
                      <span className="text-primary font-medium">
                        Ilimitado
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span>Genealogía</span>
                    <div className="flex gap-4">
                      <span className="text-muted-foreground">
                        3 generaciones
                      </span>
                      <span className="text-primary font-medium">Completa</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span>Almacenamiento de archivos</span>
                    <div className="flex gap-4">
                      <span className="text-muted-foreground">1 GB</span>
                      <span className="text-primary font-medium">10 GB</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Marketplace
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span>Publicaciones por mes</span>
                    <div className="flex gap-4">
                      <span className="text-muted-foreground">5</span>
                      <span className="text-primary font-medium">
                        Ilimitadas
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span>Subastas</span>
                    <div className="flex gap-4">
                      <span className="text-muted-foreground">No</span>
                      <span className="text-primary font-medium">Sí</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span>Comisión por venta</span>
                    <div className="flex gap-4">
                      <span className="text-muted-foreground">5%</span>
                      <span className="text-primary font-medium">3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Información de Facturación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Método de Pago</h4>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">•••• •••• •••• 4242</div>
                    <div className="text-sm text-muted-foreground">
                      Vence 12/2027
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Cambiar
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Historial de Pagos</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Enero 2024</span>
                    <Badge variant="outline">Pagado</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Diciembre 2023</span>
                    <Badge variant="outline">Pagado</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Ver Todos
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
