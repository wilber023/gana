import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Scan,
  Eye,
  MapPin,
  Calendar,
  Thermometer,
  Heart,
  Shield,
  QrCode,
  Camera,
  Search,
  Download,
  Share,
} from "lucide-react";

export default function Traceability() {
  const traceabilityData = {
    id: "GT-001234",
    currentStatus: "Saludable",
    location: "Sector A - Pastizal Norte",
    lastUpdate: "2024-01-15 14:30",
    birthDate: "2022-03-15",
    breed: "Holstein",
    weight: "485 kg",
    temperature: "38.2°C",
    heartRate: "72 bpm",
  };

  const timeline = [
    {
      date: "2024-01-15",
      event: "Inspección AR completada",
      location: "Sector A",
      status: "success",
    },
    {
      date: "2024-01-10",
      event: "Vacunación antirrábica",
      location: "Corral Central",
      status: "success",
    },
    {
      date: "2024-01-05",
      event: "Traslado de pastizal",
      location: "Sector A → Sector B",
      status: "info",
    },
    {
      date: "2024-01-01",
      event: "Control peso mensual",
      location: "Báscula Digital",
      status: "success",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Trazabilidad del Ganado</h1>
            <p className="text-muted-foreground">
              Seguimiento completo desde nacimiento hasta venta
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 lg:mt-0">
            <Button>
              <Camera className="h-4 w-4 mr-2" />
              Nuevo Registro
            </Button>
            <Button variant="outline">
              <QrCode className="h-4 w-4 mr-2" />
              Imprimir QR
            </Button>
          </div>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Buscar Animal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="ID del animal (ej: GT-001234)"
                className="flex-1"
                defaultValue="GT-001234"
              />
              <Button>
                <Scan className="h-4 w-4 mr-2" />
                Buscar
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Animal Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Información del Animal
                </CardTitle>
                <Badge className="bg-green-100 text-green-800">
                  {traceabilityData.currentStatus}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      ID del Animal
                    </label>
                    <div className="text-lg font-semibold">
                      {traceabilityData.id}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Raza
                    </label>
                    <div className="text-lg">{traceabilityData.breed}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Fecha de Nacimiento
                    </label>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {traceabilityData.birthDate}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Ubicación Actual
                    </label>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {traceabilityData.location}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Peso Actual
                    </label>
                    <div className="text-lg">{traceabilityData.weight}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Última Actualización
                    </label>
                    <div className="text-sm">{traceabilityData.lastUpdate}</div>
                  </div>
                </div>
              </div>

              {/* Health Data */}
              <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Heart className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Estado de Salud
                    </div>
                    <div className="font-semibold text-green-600">
                      Excelente
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Último Control
                    </div>
                    <div className="font-semibold">2024-01-10</div>
                  </div>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex gap-3 mt-6">
                <Button className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Detalle
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
                <Button variant="outline">
                  <Share className="h-4 w-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Compliance Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Cumplimiento Normativo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="font-medium">ISO 22005</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Trazabilidad completa documentada
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="font-medium">GDPR</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Datos protegidos y encriptados
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="font-medium">Reg. Identificación</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Registro oficial actualizado
                </p>
              </div>

              <Button variant="outline" className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Verificar Cumplimiento
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Historial de Trazabilidad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-3 h-3 rounded-full mt-2 ${
                      item.status === "success"
                        ? "bg-green-500"
                        : item.status === "info"
                          ? "bg-blue-500"
                          : "bg-yellow-500"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{item.event}</span>
                      <Badge variant="outline" className="text-xs">
                        {item.location}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Features */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Características del Sistema de Trazabilidad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Seguimiento Completo</h4>
                <p className="text-sm text-muted-foreground">
                  Registro detallado desde nacimiento hasta venta con historial
                  sanitario, genealogía y eventos importantes
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scan className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Identificación Única</h4>
                <p className="text-sm text-muted-foreground">
                  Códigos QR y RFID únicos para cada animal con acceso rápido a
                  toda la información desde dispositivos móviles
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Cumplimiento ISO 22005</h4>
                <p className="text-sm text-muted-foreground">
                  Cada registro incluye firma digital y timestamp para
                  auditorías y cumplimiento de normativas de trazabilidad
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
