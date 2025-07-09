import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  ArrowRight,
  Shield,
  Users,
  Eye,
  TrendingUp,
  UserPlus,
  Search,
  ShoppingCart,
  FileText,
  Award,
  CreditCard,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-ganatrace-50 via-background to-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-ganatrace-600 bg-clip-text text-transparent">
                  Cómo Funciona GANATRACE
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                El marketplace ganadero más confiable con trazabilidad completa
                y vendedores verificados. Descubre cómo compradores y vendedores
                se conectan de forma segura.
              </p>
              <Button size="lg" className="px-8">
                Comenzar Ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* How it Works for Buyers */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Para Compradores
                </h2>
                <p className="text-lg text-muted-foreground">
                  Encuentra y compra ganado de calidad con total confianza
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Explora</h3>
                  <p className="text-muted-foreground">
                    Navega el marketplace sin necesidad de registro. Ve fotos,
                    precios y detalles de cada animal.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Verifica</h3>
                  <p className="text-muted-foreground">
                    Revisa la trazabilidad completa, certificados sanitarios y
                    perfil del vendedor verificado.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Contacta</h3>
                  <p className="text-muted-foreground">
                    Contacta directamente al vendedor, solicita más información
                    o agenda una visita.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">4. Compra</h3>
                  <p className="text-muted-foreground">
                    Negocia el precio, firma el contrato digital y recibe la
                    factura electrónica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works for Sellers */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Para Vendedores
                </h2>
                <p className="text-lg text-muted-foreground">
                  Regístrate, crea tu perfil de confianza y vende con garantías
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-ganatrace-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserPlus className="h-8 w-8 text-ganatrace-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Regístrate</h3>
                  <p className="text-muted-foreground">
                    Crea tu cuenta, completa tu perfil detallado y sube tus
                    certificaciones para generar confianza.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-ganatrace-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-ganatrace-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Veríficate</h3>
                  <p className="text-muted-foreground">
                    Nuestro equipo verifica tu identidad, ubicación y
                    certificaciones para obtener el sello de confianza.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-ganatrace-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-ganatrace-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Publica</h3>
                  <p className="text-muted-foreground">
                    Registra tus animales con trazabilidad completa, sube fotos
                    y publícalos en el marketplace.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-ganatrace-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-ganatrace-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">4. Vende</h3>
                  <p className="text-muted-foreground">
                    Recibe contactos de compradores interesados, negocia y
                    cierra la venta con nuestras herramientas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Security */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-8">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Confianza y Seguridad
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Vendedores Verificados</h3>
                  <p className="text-sm text-muted-foreground">
                    Todos los vendedores pasan por un proceso de verificación de
                    identidad, ubicación y certificaciones.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Trazabilidad ISO 22005</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada animal tiene trazabilidad completa certificada bajo
                    estándares internacionales de calidad.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Protección de Datos</h3>
                  <p className="text-sm text-muted-foreground">
                    Cumplimos con las más estrictas normas de protección de
                    datos personales y empresariales.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Planes de Suscripción
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Elige el plan que mejor se adapte a tu negocio ganadero
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Plan Básico</h3>
                    <div className="text-3xl font-bold text-primary">
                      $29/mes
                    </div>
                    <p className="text-muted-foreground">
                      Para pequeños productores
                    </p>
                  </div>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Hasta 100 animales registrados
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />5
                      publicaciones por mes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Trazabilidad básica
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Soporte por email
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Comenzar Gratis
                  </Button>
                </Card>

                <Card className="p-8 border-primary/50 bg-primary/5">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Plan Premium</h3>
                    <div className="text-3xl font-bold text-primary">
                      $79/mes
                    </div>
                    <p className="text-muted-foreground">
                      Para productores medianos y grandes
                    </p>
                  </div>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Animales ilimitados
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Publicaciones ilimitadas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Trazabilidad completa + Subastas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Soporte 24/7 prioritario
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Actualizar a Premium</Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Narrative */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Historia de Éxito: De Visitante a Vendedor
              </h2>

              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        María explora el marketplace
                      </h4>
                      <p className="text-muted-foreground">
                        María, productora de café, busca ganado lechero para
                        diversificar su negocio. Entra a GANATRACE y explora el
                        marketplace sin registrarse, viendo precios, fotos y
                        ubicaciones de los animales disponibles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Encuentra el animal perfecto
                      </h4>
                      <p className="text-muted-foreground">
                        Ve una vaca Holstein de 3 años en Cundinamarca. Revisa
                        su trazabilidad completa: nacimiento, vacunas,
                        genealogía, y el perfil verificado del vendedor con 4.8
                        estrellas y más de 200 ventas exitosas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Contacta y compra</h4>
                      <p className="text-muted-foreground">
                        Contacta al vendedor, negocia el precio, agenda una
                        visita a la finca, y finalmente compra el animal. Recibe
                        toda la documentación digital y certificados de
                        trazabilidad.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-ganatrace-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        María decide vender también
                      </h4>
                      <p className="text-muted-foreground">
                        Impresionada por la plataforma, María se registra como
                        vendedora, completa su perfil detallado con ubicación,
                        contacto, certificaciones, y sube fotos de su finca.
                        Obtiene verificación y comienza a vender sus excedentes
                        de ganado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-ganatrace-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        Primera venta exitosa
                      </h4>
                      <p className="text-muted-foreground">
                        Tres meses después, María registra un ternero en el
                        sistema con su trazabilidad completa, lo publica en el
                        marketplace, y lo vende a $2,500. El sistema genera
                        automáticamente el contrato y la factura electrónica.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Formar Parte de GANATRACE?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Únete a más de 500 vendedores verificados y miles de compradores
              que ya confían en nuestra plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                Quiero Vender
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Search className="h-5 w-5 mr-2" />
                Explorar Marketplace
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
