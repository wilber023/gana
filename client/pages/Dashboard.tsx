import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Activity,
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  AlertTriangle,
  CheckCircle,
  Zap,
  Thermometer,
  Heart,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Dashboard() {
  const livestock = [
    {
      id: "GT-001234",
      status: "healthy",
      lastCheck: "2024-01-15",
      location: "Pastizal Norte",
    },
    {
      id: "GT-002345",
      status: "alert",
      lastCheck: "2024-01-14",
      location: "Corral Central",
    },
    {
      id: "GT-003456",
      status: "healthy",
      lastCheck: "2024-01-15",
      location: "Pastizal Sur",
    },
    {
      id: "GT-004567",
      status: "healthy",
      lastCheck: "2024-01-15",
      location: "Sector A",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard Central</h1>
            <p className="text-muted-foreground">
              Resumen general de tu operación ganadera
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              Última actualización: Hoy
            </Badge>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Ganado Total
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1 text-green-500" />
                +12% vs mes anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Estado de Salud
              </CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">98.2%</div>
              <p className="text-xs text-muted-foreground">
                <CheckCircle className="inline h-3 w-3 mr-1 text-green-500" />
                Saludable
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Alertas Activas
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-xs text-muted-foreground">
                <TrendingDown className="inline h-3 w-3 mr-1 text-red-500" />
                -2 vs ayer
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Sensores Activos
              </CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,189</div>
              <p className="text-xs text-muted-foreground">
                <Activity className="inline h-3 w-3 mr-1 text-blue-500" />
                95.3% operativo
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {livestock.map((animal) => (
                  <div
                    key={animal.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">
                          {animal.id.split("-")[1].slice(0, 3)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{animal.id}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          {animal.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-3 w-3" />
                          {animal.lastCheck}
                        </div>
                      </div>
                      <Badge
                        variant={
                          animal.status === "healthy"
                            ? "default"
                            : "destructive"
                        }
                        className={
                          animal.status === "healthy"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                      >
                        {animal.status === "healthy" ? "OK" : "Revisar"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Ver Todos los Animales
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Acciones Rápidas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h4 className="font-medium mb-2">Registrar Animal</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Agregar un nuevo animal al sistema
                </p>
                <Button size="sm" className="w-full">
                  Registrar
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
             
  <h4 className="font-medium mb-2">Ver Trazabilidad</h4>
  <p className="text-sm text-muted-foreground mb-3">
    Consultar historial completo de animales
  </p>
  <Link to="/traceability">
    <Button size="sm" variant="outline" className="w-full">
      Ver Historial
    </Button>
  </Link>
              </div>

  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
  <h4 className="font-medium mb-2">Generar Reporte</h4>
  <p className="text-sm text-muted-foreground mb-3">
    Crear reportes de cumplimiento
  </p>
  <Link to="/reports">
    <Button size="sm" variant="outline" className="w-full">
      Crear Reporte
    </Button>
  </Link>
</div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Example Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ejemplo de Uso: Flujo Completo de un Animal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                <strong>Día 1 - Registro:</strong> El ternero GT-001234 nace en
                la Hacienda San José. Inmediatamente se registra en GANATRACE
                con su número de identificación, fecha de nacimiento, madre
                (GT-000567), padre (GT-000123), y se genera automáticamente su
                certificado de nacimiento digital conforme a ISO 22005.
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Mes 2 - Historial Sanitario:</strong> Se registran las
                vacunas obligatorias, controles veterinarios, y tratamientos.
                Cada evento queda documentado con fecha, veterinario
                responsable, medicamentos utilizados y dosis aplicadas.
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Año 2 - Marketplace:</strong> El animal está listo para
                la venta. Se publica en el marketplace con su trazabilidad
                completa, fotos, certificados sanitarios y genealogía. Un
                comprador hace una oferta, se negocia el precio, se firma el
                contrato digital y se genera automáticamente la factura
                electrónica.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
