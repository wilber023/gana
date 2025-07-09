import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Users,
  Shield,
  BarChart3,
  PieChart,
  Activity,
  Award,
  MapPin,
  Clock,
} from "lucide-react";

export default function Reports() {
  const reports = [
    {
      name: "Inventario de Ganado",
      description: "Listado completo de animales registrados",
      type: "inventory",
      lastGenerated: "2024-01-15",
      format: "PDF, Excel",
      compliance: "ISO 22005",
    },
    {
      name: "Historial Sanitario",
      description: "Registros médicos y vacunaciones",
      type: "health",
      lastGenerated: "2024-01-14",
      format: "PDF",
      compliance: "Normativo",
    },
    {
      name: "Trazabilidad Completa",
      description: "Seguimiento desde nacimiento hasta venta",
      type: "traceability",
      lastGenerated: "2024-01-13",
      format: "PDF, XML",
      compliance: "ISO 22005",
    },
    {
      name: "Reporte de Ventas",
      description: "Análisis de transacciones del marketplace",
      type: "sales",
      lastGenerated: "2024-01-12",
      format: "Excel, CSV",
      compliance: "Fiscal",
    },
  ];

  const analytics = [
    { label: "Total Animales", value: "1,247", change: "+12%", trend: "up" },
    { label: "Ventas del Mes", value: "$45,600", change: "+8%", trend: "up" },
    { label: "Animales Vendidos", value: "23", change: "-2%", trend: "down" },
    { label: "Tasa de Fertilidad", value: "94%", change: "+3%", trend: "up" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Reportes y Analytics</h1>
            <p className="text-muted-foreground">
              Informes personalizados y análisis de datos para tu operación
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 lg:mt-0">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Programar Reporte
            </Button>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Nuevo Reporte
            </Button>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analytics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.label}
                </CardTitle>
                {metric.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p
                  className={`text-xs ${
                    metric.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change} vs mes anterior
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reports Tabs */}
        <Tabs defaultValue="standard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="standard">Reportes Estándar</TabsTrigger>
            <TabsTrigger value="custom">Personalizados</TabsTrigger>
            <TabsTrigger value="compliance">Cumplimiento</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="standard">
            <div className="grid md:grid-cols-2 gap-6">
              {reports.map((report, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{report.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {report.description}
                        </p>
                      </div>
                      <Badge variant="outline">{report.compliance}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Último generado:
                        </span>
                        <span>{report.lastGenerated}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Formatos:</span>
                        <span>{report.format}</span>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-3 w-3 mr-1" />
                          Generar
                        </Button>
                        <Button size="sm" variant="outline">
                          <Calendar className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="custom">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Reportes Personalizados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Crea Reportes a Medida
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Selecciona los campos, filtros y formato que necesites para
                    generar reportes específicos
                  </p>
                  <Button>
                    <FileText className="h-4 w-4 mr-2" />
                    Crear Reporte Personalizado
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance">
            <div className="space-y-6">
              {/* ISO 22005 Compliance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Cumplimiento ISO 22005
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-medium">Trazabilidad</h4>
                      <p className="text-sm text-muted-foreground">
                        100% Completa
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-medium">Documentación</h4>
                      <p className="text-sm text-muted-foreground">
                        Actualizada
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-medium">Auditoría</h4>
                      <p className="text-sm text-muted-foreground">
                        Próxima: Mar 2024
                      </p>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Generar Reporte de Cumplimiento
                  </Button>
                </CardContent>
              </Card>

              {/* National Regulations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Regulaciones Nacionales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">
                          Registro de Identificación Animal
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Decreto 1500 de 2007
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Cumple
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Sanidad Animal</h4>
                        <p className="text-sm text-muted-foreground">
                          Resolución 2640 de 2007
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Cumple
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Movilización de Ganado</h4>
                        <p className="text-sm text-muted-foreground">
                          Resolución 3651 de 2014
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        Cumple
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Análisis de Productividad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Tasa de Natalidad</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tasa de Mortalidad</span>
                      <span className="font-semibold">1.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Ganancia de Peso Promedio</span>
                      <span className="font-semibold">0.8 kg/día</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Eficiencia Reproductiva</span>
                      <span className="font-semibold">94%</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Ver Análisis Completo
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Tendencias de Mercado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Precio Promedio/kg</span>
                      <span className="font-semibold text-green-600">
                        $6,200
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Demanda del Mercado</span>
                      <span className="font-semibold text-green-600">Alta</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tiempo Promedio de Venta</span>
                      <span className="font-semibold">12 días</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Margen de Ganancia</span>
                      <span className="font-semibold text-green-600">23%</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Ver Tendencias Detalladas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Report Schedule */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Reportes Programados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Inventario Mensual</h4>
                  <p className="text-sm text-muted-foreground">
                    Cada primer lunes del mes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Activo</Badge>
                  <Button size="sm" variant="outline">
                    Editar
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Cumplimiento ISO 22005</h4>
                  <p className="text-sm text-muted-foreground">
                    Cada trimestre
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Activo</Badge>
                  <Button size="sm" variant="outline">
                    Editar
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
