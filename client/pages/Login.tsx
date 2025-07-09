import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Shield,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  Smartphone,
  Globe,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [resetEmail, setResetEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Login Form */}
            <div className="max-w-md mx-auto lg:mx-0">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    Inicia Sesión
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Accede a tu cuenta de GANATRACE
                  </p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                      <TabsTrigger value="reset">Recuperar</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="email">Correo Electrónico</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              type="email"
                              value={loginData.email}
                              onChange={(e) =>
                                setLoginData({
                                  ...loginData,
                                  email: e.target.value,
                                })
                              }
                              className="pl-10"
                              placeholder="tu@email.com"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="password">Contraseña</Label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              value={loginData.password}
                              onChange={(e) =>
                                setLoginData({
                                  ...loginData,
                                  password: e.target.value,
                                })
                              }
                              className="pl-10 pr-10"
                              placeholder="Tu contraseña"
                              required
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-0 top-0 h-full px-3"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="remember"
                              checked={loginData.rememberMe}
                              onCheckedChange={(checked) =>
                                setLoginData({
                                  ...loginData,
                                  rememberMe: checked as boolean,
                                })
                              }
                            />
                            <Label
                              htmlFor="remember"
                              className="text-sm text-muted-foreground"
                            >
                              Recordarme
                            </Label>
                          </div>
                          <Button
                            variant="link"
                            className="p-0 text-sm"
                            onClick={() =>
                              (
                                document.querySelector(
                                  '[data-value="reset"]',
                                ) as HTMLElement
                              )?.click()
                            }
                          >
                            ¿Olvidaste tu contraseña?
                          </Button>
                        </div>

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            "Iniciando sesión..."
                          ) : (
                            <>
                              Iniciar Sesión
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="reset">
                      <form
                        onSubmit={handlePasswordReset}
                        className="space-y-4"
                      >
                        <div className="text-center mb-4">
                          <AlertCircle className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
                          <h3 className="font-semibold">
                            Recuperar Contraseña
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Te enviaremos un enlace para restablecer tu
                            contraseña
                          </p>
                        </div>

                        <div>
                          <Label htmlFor="resetEmail">Correo Electrónico</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="resetEmail"
                              type="email"
                              value={resetEmail}
                              onChange={(e) => setResetEmail(e.target.value)}
                              className="pl-10"
                              placeholder="tu@email.com"
                              required
                            />
                          </div>
                        </div>

                        <Button type="submit" className="w-full">
                          Enviar Enlace de Recuperación
                          <Mail className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      ¿No tienes cuenta?{" "}
                      <Link
                        to="/register"
                        className="text-primary hover:underline font-medium"
                      >
                        Regístrate gratis
                      </Link>
                    </p>
                  </div>


                </CardContent>
              </Card>

              {/* Security Notice */}
              <Card className="mt-6 border-green-200 bg-green-50/50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">
                        Seguridad Garantizada
                      </h4>
                      <p className="text-sm text-green-700 mt-1">
                        Tu información está protegida con encriptación de grado
                        bancario y cumplimos con estándares de protección de
                        datos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Benefits */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Bienvenido de vuelta a{" "}
                  <span className="bg-gradient-to-r from-primary to-ganatrace-600 bg-clip-text text-transparent">
                    GANATRACE
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Accede a tu panel de control y gestiona tu negocio ganadero
                  con las herramientas más avanzadas del mercado.
                </p>
              </div>

              {/* Key Features for Logged Users */}
              <div className="grid gap-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Dashboard Personalizado
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Accede a métricas en tiempo real de tus ventas,
                        inventario de animales y rendimiento de tu negocio.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Gestión de Publicaciones
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Publica y administra tus animales, gestiona cotizaciones
                        y cierra ventas directamente desde tu panel.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Trazabilidad Completa
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Registra y gestiona la trazabilidad de tus animales con
                        certificación ISO 22005 automática.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Perfil Verificado</h3>
                      <p className="text-sm text-muted-foreground">
                        Mantén tu perfil actualizado y aumenta la confianza de
                        los compradores con verificaciones y certificaciones.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-primary/10 to-ganatrace-500/10 p-6 rounded-lg">
                <h3 className="font-semibold mb-4 text-center">
                  GANATRACE en Números
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Vendedores Activos
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      5,000+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Animales Vendidos
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">
                      Satisfacción
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">
                      Soporte Premium
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center lg:text-left">
                <p className="text-muted-foreground mb-4">
                  ¿Aún no tienes cuenta?
                </p>
                <Button asChild size="lg" variant="outline">
                  <Link to="/register">
                    Crear Cuenta Gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
