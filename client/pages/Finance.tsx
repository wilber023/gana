import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Shield,
  Calculator,
  AlertCircle,
  Blocks,
} from "lucide-react";

export default function Finance() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CreditCard className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Control Financiero</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Fintech integrado con blockchain para transacciones seguras y
              contabilidad automatizada
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Blocks className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Blockchain</h3>
                <Badge className="bg-indigo-100 text-indigo-800">
                  Próximamente
                </Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Transacciones inmutables y transparentes</li>
                <li>• Contratos inteligentes para pagos</li>
                <li>• Auditoría automática con DLT</li>
                <li>• Tokenización de activos ganaderos</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Automatización</h3>
                <Badge className="bg-green-100 text-green-800">
                  Planificado
                </Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Contabilidad automática por IoT</li>
                <li>• Facturación digital inteligente</li>
                <li>• Análisis de ROI por animal</li>
                <li>• Cumplimiento fiscal automático</li>
              </ul>
            </Card>
          </div>

          {/* Fintech Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Características Fintech
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Pagos Digitales</h4>
                  <p className="text-sm text-muted-foreground">
                    Gateway de pagos integrado con múltiples métodos y
                    criptomonedas
                  </p>
                </div>

                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Analytics Financiero</h4>
                  <p className="text-sm text-muted-foreground">
                    Dashboards en tiempo real con proyecciones y análisis
                    predictivo
                  </p>
                </div>

                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Seguridad Avanzada</h4>
                  <p className="text-sm text-muted-foreground">
                    Encriptación end-to-end y autenticación multi-factor
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Architecture */}
          <Card>
            <CardHeader>
              <CardTitle>Arquitectura Fintech</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Contabilidad Automática</h4>
                    <p className="text-sm text-muted-foreground">
                      Algoritmos que procesan datos de sensores IoT para generar
                      asientos contables automáticos basados en eventos del
                      ganado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Blockchain Privada</h4>
                    <p className="text-sm text-muted-foreground">
                      Red blockchain permisionada para auditoría inmutable de
                      transacciones financieras y cumplimiento regulatorio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">API Banking Abierto</h4>
                    <p className="text-sm text-muted-foreground">
                      Integración con sistemas bancarios mediante Open Banking
                      APIs para automatización de flujos financieros
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button size="lg" disabled>
                  Módulo en Diseño
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Requiere certificaciones fintech adicionales
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
