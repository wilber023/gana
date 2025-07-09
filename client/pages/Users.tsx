import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Shield,
  Fingerprint,
  AlertCircle,
  Key,
  Eye,
} from "lucide-react";

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Gestión de Usuarios</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Sistema de roles avanzado con autenticación biométrica y
              cumplimiento GDPR total
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Fingerprint className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Autenticación</h3>
                <Badge className="bg-purple-100 text-purple-800">
                  Próximamente
                </Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reconocimiento facial biométrico</li>
                <li>• Autenticación multi-factor (MFA)</li>
                <li>• SSO empresarial integrado</li>
                <li>• Tokens JWT con rotación automática</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">GDPR & Privacidad</h3>
                <Badge className="bg-green-100 text-green-800">
                  Certificado
                </Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Encriptación end-to-end de datos</li>
                <li>• Auditoría completa de accesos</li>
                <li>• Derecho al olvido automatizado</li>
                <li>• Consentimiento granular por módulo</li>
              </ul>
            </Card>
          </div>

          {/* Role Management */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Sistema de Roles Granulares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Administrador</h4>
                  <p className="text-sm text-muted-foreground">
                    Acceso completo al sistema, gestión de usuarios y
                    configuración avanzada
                  </p>
                </div>

                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Veterinario</h4>
                  <p className="text-sm text-muted-foreground">
                    Acceso a datos de salud, registros médicos y módulos AR de
                    inspección
                  </p>
                </div>

                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium mb-2">Operario de Campo</h4>
                  <p className="text-sm text-muted-foreground">
                    Acceso móvil limitado para registro de eventos y
                    trazabilidad básica
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Características de Seguridad</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800">
                      Cumplimiento GDPR
                    </h4>
                    <p className="text-sm text-green-700">
                      Sistema certificado con protección de datos personal,
                      consentimiento informado y derecho al olvido
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <Fingerprint className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">
                      Biometría Avanzada
                    </h4>
                    <p className="text-sm text-blue-700">
                      Reconocimiento facial y huella dactilar integrado con
                      dispositivos móviles para máxima seguridad
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                  <Key className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-purple-800">
                      Zero Trust Architecture
                    </h4>
                    <p className="text-sm text-purple-700">
                      Verificación continua de identidad y permisos granulares
                      por recurso y operación
                    </p>
                  </div>
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
                    <h4 className="font-medium">Microservicio de Identidad</h4>
                    <p className="text-sm text-muted-foreground">
                      Servicio dedicado para autenticación, autorización y
                      gestión de sesiones con Redis distribuido
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Auditoría Blockchain</h4>
                    <p className="text-sm text-muted-foreground">
                      Registro inmutable de todos los accesos y cambios de
                      permisos para cumplimiento normativo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">API de Biometría</h4>
                    <p className="text-sm text-muted-foreground">
                      Integración con dispositivos móviles para captura y
                      verificación biométrica en tiempo real
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button size="lg" disabled>
                  Módulo en Desarrollo
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Requiere certificaciones de seguridad adicionales
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
