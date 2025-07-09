import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  BarChart,
  Globe,
  AlertCircle,
  Smartphone,
} from "lucide-react";

export default function Sales() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Módulo de Ventas</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Dashboard inmersivo para análisis de mercado y optimización de
              precios en tiempo real
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Analytics Avanzado</h3>
                <Badge className="bg-purple-100 text-purple-800">
                  Próximamente
                </Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dashboards inmersivos con visualización 3D</li>
                <li>• Métricas de rendimiento en tiempo real</li>
                <li>• Análisis predictivo de demanda</li>
                <li>• Reportes automáticos por AR</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">E-commerce</h3>
                <Badge className="bg-blue-100 text-blue-800">Planificado</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Integración con plataformas digitales</li>
                <li>• Marketplace B2B especializado</li>
                <li>• Trazabilidad completa para compradores</li>
                <li>• Certificaciones automáticas</li>
              </ul>
            </Card>
          </div>

          {/* Mobile-First Design Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Experiencia Mobile-First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Ventas Móviles</h4>
                  <p className="text-sm text-muted-foreground">
                    Gestión completa desde dispositivos móviles con interfaz
                    optimizada
                  </p>
                </div>

                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">AR Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualización de datos de ventas superpuestos en realidad
                    aumentada
                  </p>
                </div>

                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Marketplace</h4>
                  <p className="text-sm text-muted-foreground">
                    Plataforma B2B con trazabilidad completa y certificaciones
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Implementation */}
          <Card>
            <CardHeader>
              <CardTitle>Implementación Técnica</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Visualización Inmersiva</h4>
                    <p className="text-sm text-muted-foreground">
                      Three.js y WebXR para dashboards 3D que permiten
                      exploración inmersiva de datos de ventas y mercado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Predicción de Precios</h4>
                    <p className="text-sm text-muted-foreground">
                      Algoritmos ML que analizan tendencias de mercado,
                      estacionalidad y calidad del ganado para optimización de
                      precios
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Integración E-commerce</h4>
                    <p className="text-sm text-muted-foreground">
                      APIs serverless que conectan con plataformas digitales y
                      marketplace especializado para ganadería sostenible
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button size="lg" disabled>
                  Módulo en Planificación
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Desarrollo previsto para Q3 2024
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
