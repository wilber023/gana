import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Bot, CheckCircle, AlertCircle } from "lucide-react";

export default function Purchases() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Gestión de Compras</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Sistema inteligente de adquisiciones con IA y cumplimiento
              normativo automático
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">IA Predictiva</h3>
                <Badge className="bg-blue-100 text-blue-800">
                  Próximamente
                </Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Predicción de necesidades de alimentación</li>
                <li>• Órdenes automatizadas basadas en IoT</li>
                <li>• Optimización de precios con ML</li>
                <li>• Análisis de proveedores en tiempo real</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Cumplimiento</h3>
                <Badge className="bg-green-100 text-green-800">Activo</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Validación automática de proveedores</li>
                <li>• Control de calidad con blockchain</li>
                <li>• Auditoría digital de transacciones</li>
                <li>• Reportes ISO 22005 automáticos</li>
              </ul>
            </Card>
          </div>

          {/* Architecture Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Arquitectura del Módulo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Microservicio Serverless</h4>
                    <p className="text-sm text-muted-foreground">
                      AWS Lambda con GraphQL para gestión de órdenes y análisis
                      predictivo de compras basado en datos de sensores IoT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Integración Blockchain</h4>
                    <p className="text-sm text-muted-foreground">
                      Contratos inteligentes para validación de proveedores y
                      auditoría inmutable de transacciones comerciales
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">IA y Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Algoritmos de predicción que analizan patrones de consumo,
                      estacionalidad y datos biométricos del ganado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button size="lg" disabled>
                  Módulo en Desarrollo
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Este módulo será implementado en la siguiente fase del
                  proyecto
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
