import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  Search,
  Filter,
  Eye,
  Star,
  MapPin,
  Calendar,
  Weight,
  FileText,
  Gavel,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail,
  ArrowRight,
  Users,
  Shield,
} from "lucide-react";

export default function Marketplace() {
  const logo = "/img/logoGanaTrace.jpg"; 
  const featuredListings = [
    {
      id: "GT-001234",
      title: "Toro Holstein Premiado",
      breed: "Holstein",
      age: "3 años",
      weight: "850 kg",
      price: "$15,000",
      originalPrice: "$18,000",
      location: "Cundinamarca, Colombia",
      seller: "Hacienda San José",
      rating: 4.8,
      images: 5,
      verified: true,
      premium: true,
      auction: false,
      description:
        "Toro reproductor con excelente genealogía, padre de más de 200 crías...",
      features: [
        "Registro genealógico",
        "Certificado sanitario",
        "Vacunas al día",
      ],
    },
    {
      id: "GT-005678",
      title: "Vaca Lechera Jersey",
      breed: "Jersey",
      age: "4 años",
      weight: "450 kg",
      price: "$8,500",
      location: "Antioquia, Colombia",
      seller: "Finca El Paraíso",
      rating: 4.9,
      images: 8,
      verified: true,
      premium: false,
      auction: true,
      auctionEnds: "2024-01-20 15:00",
      currentBid: "$7,800",
      description: "Vaca en producción con historial excepcional, 25L/día...",
      features: ["En producción", "Historial lechero", "Excelente genética"],
    },
    {
      id: "GT-009012",
      title: "Novillo Brahman",
      breed: "Brahman",
      age: "18 meses",
      weight: "420 kg",
      price: "$6,200",
      location: "Meta, Colombia",
      seller: "Ganadería Los Llanos",
      rating: 4.7,
      images: 4,
      verified: true,
      premium: false,
      auction: false,
      description:
        "Excelente para cría en clima cálido, resistente y adaptado...",
      features: [
        "Adaptado al trópico",
        "Excelente conversión",
        "Genética pura",
      ],
    },
    {
      id: "GT-012345",
      title: "Vaca Simmental Gestante",
      breed: "Simmental",
      age: "5 años",
      weight: "600 kg",
      price: "$12,500",
      location: "Boyacá, Colombia",
      seller: "Finca La Esperanza",
      rating: 4.6,
      images: 6,
      verified: true,
      premium: true,
      auction: false,
      description: "Vaca gestante de 6 meses, excelente para cría...",
      features: ["Gestante 6 meses", "Registro genealógico", "Doble propósito"],
    },
    {
      id: "GT-067890",
      title: "Ternera Holstein F1",
      breed: "Holstein F1",
      age: "8 meses",
      weight: "180 kg",
      price: "$3,200",
      location: "Nariño, Colombia",
      seller: "Ganadería El Refugio",
      rating: 4.4,
      images: 3,
      verified: true,
      premium: false,
      auction: false,
      description: "Ternera F1 con excelente potencial lechero...",
      features: ["F1 Holstein x Cebú", "Destete reciente", "Potencial lechero"],
    },
    {
      id: "GT-098765",
      title: "Toro Angus Negro",
      breed: "Angus Negro",
      age: "2 años",
      weight: "720 kg",
      price: "$13,800",
      location: "Casanare, Colombia",
      seller: "Hacienda Altamira",
      rating: 4.9,
      images: 7,
      verified: true,
      premium: true,
      auction: true,
      auctionEnds: "2024-01-22 18:00",
      currentBid: "$12,500",
      description: "Toro Angus joven con excelente conformación cárnica...",
      features: [
        "Registro Angus",
        "Excelente conformación",
        "Reproductivamente sano",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section for Public */}
        <div className="bg-gradient-to-r from-primary/10 via-background to-accent/20 py-16 mb-8 rounded-lg">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-ganatrace-600 bg-clip-text text-transparent">
                Marketplace Ganadero
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              El marketplace líder para compra y venta de ganado con
              trazabilidad completa, vendedores verificados y garantías de
              calidad
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="px-8">
                <TrendingUp className="h-5 w-5 mr-2" />
                Quiero Vender
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Ver Cómo Funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">
                  Animales Vendidos
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Vendedores Verificados
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Trazabilidad
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">ISO</div>
                <div className="text-sm text-muted-foreground">
                  22005 Certificado
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Main Search Bar */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Buscar por raza, edad, ubicación, vendedor..."
                    className="w-full h-12 text-lg"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="h-12">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros Avanzados
                  </Button>
                  <Button className="h-12 px-8">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">Razas Populares:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Holstein
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Brahman
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Jersey
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Angus
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Cebú
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Simmental
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Ubicaciones:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Cundinamarca
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Antioquia
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Meta
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Córdoba
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      Valle del Cauca
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">
                    Rango de Precios:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      $5,000 - $10,000
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      $10,000 - $20,000
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    >
                      $20,000+
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="auctions">Subastas</TabsTrigger>
            <TabsTrigger value="direct">Venta Directa</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Featured Listings */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Animales Destacados</h2>
                <Button variant="outline">
                  Ver Todos ({featuredListings.length * 12}+ animales)
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredListings.map((listing) => (
                  <Card
                    key={listing.id}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <Eye className="h-8 w-8 text-gray-400 mx-auto mb-1" />
                          <span className="text-sm text-gray-500">
                            {listing.images} fotos
                          </span>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {listing.verified && (
                          <Badge className="bg-green-600 text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            Verificado
                          </Badge>
                        )}
                        {listing.premium && (
                          <Badge className="bg-purple-600 text-xs">
                            <Star className="h-3 w-3 mr-1" />
                            Premium
                          </Badge>
                        )}
                      </div>

                      <div className="absolute top-2 right-2">
                        {listing.auction && (
                          <Badge className="bg-orange-600 text-xs">
                            <Gavel className="h-3 w-3 mr-1" />
                            Subasta
                          </Badge>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0"
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0"
                          >
                            <Phone className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                            {listing.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">
                            ID: {listing.id} • {listing.breed}
                          </p>
                        </div>
                        <div className="text-right">
                          {listing.auction && listing.currentBid ? (
                            <div>
                              <div className="text-sm text-muted-foreground">
                                Oferta actual:
                              </div>
                              <div className="text-lg font-bold text-orange-600">
                                {listing.currentBid}
                              </div>
                            </div>
                          ) : (
                            <div>
                              {listing.originalPrice && (
                                <div className="text-sm text-muted-foreground line-through">
                                  {listing.originalPrice}
                                </div>
                              )}
                              <div className="text-xl font-bold text-primary">
                                {listing.price}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {/* Animal Details */}
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>{listing.age}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Weight className="h-3 w-3 text-muted-foreground" />
                          <span>{listing.weight}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="truncate">{listing.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{listing.rating}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1">
                        {listing.features?.slice(0, 2).map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {listing.features && listing.features.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{listing.features.length - 2}
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {listing.description}
                      </p>

                      {/* Seller Info */}
                      <div className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">
                            {listing.seller
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">
                            {listing.seller}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Vendedor verificado
                          </div>
                        </div>
                      </div>

                      {/* Auction Timer */}
                      {listing.auction && listing.auctionEnds && (
                        <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                          <Clock className="h-4 w-4 text-orange-600" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-orange-700">
                              Subasta termina:
                            </div>
                            <div className="text-sm text-orange-600">
                              {listing.auctionEnds}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">
                          {listing.auction ? (
                            <>
                              <Gavel className="h-3 w-3 mr-1" />
                              Ofertar
                            </>
                          ) : (
                            <>
                              <Phone className="h-3 w-3 mr-1" />
                              Contactar
                            </>
                          )}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Cargar Más Animales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="auctions">
            <div className="text-center py-12">
              <Gavel className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Subastas Activas</h3>
              <p className="text-muted-foreground">
                Funcionalidad de subastas en desarrollo
              </p>
            </div>
          </TabsContent>

          <TabsContent value="direct">
            <div className="text-center py-12">
              <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Venta Directa</h3>
              <p className="text-muted-foreground">
                Animales disponibles para compra inmediata
              </p>
            </div>
          </TabsContent>

          <TabsContent value="premium">
            <div className="text-center py-12">
              <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Animales Premium</h3>
              <p className="text-muted-foreground">
                Disponible solo para usuarios Premium
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Trusted Seller Profile Example */}
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              Perfil de Vendedor Verificado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <img src={logo}  className="text-xl font-bold text-primary rounded-e-3xl"   />
               
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-lg">Hacienda San José</h4>
                  <Badge className="bg-green-600">Verificado</Badge>
                  <Badge variant="outline">Premium</Badge>
                </div>

                {/* Detailed Seller Information */}
                <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                  <div>
                    <strong>Ubicación:</strong> Cundinamarca, Colombia
                    <br />
                    <strong>Registro:</strong> Miembro desde 2019
                    <br />
                    <strong>Especialidad:</strong> Ganado Holstein y Jersey
                  </div>
                  <div>
                    <strong>Teléfono:</strong> +57 300 123 4567
                    <br />
                    <strong>Email:</strong> contacto@haciendansanjose.com
                    <br />
                    <strong>Sitio web:</strong> www.haciendansanjose.com
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-4 my-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">4.8/5</span>
                    <span className="text-sm text-muted-foreground">
                      (156 reseñas)
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-green-600">98%</span>
                    <span className="text-muted-foreground"> satisfacción</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">847</span>
                    <span className="text-muted-foreground">
                      {" "}
                      ventas exitosas
                    </span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <h5 className="font-medium mb-2">
                    Certificaciones y Verificaciones:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50">
                      ISO 22005
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50">
                      ICA Autorizado
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50">
                      SENASA
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50">
                      Cámara de Comercio
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="h-3 w-3 mr-1" />
                    Contactar
                  </Button>
                  <Button size="sm" variant="outline">
                    <Mail className="h-3 w-3 mr-1" />
                    Mensaje
                  </Button>
                  <Button size="sm" variant="outline">
                    <FileText className="h-3 w-3 mr-1" />
                    Ver Certificados
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3 mr-1" />
                    Ver Perfil Completo
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose GANATRACE */}
        <section className="mt-16 py-16 bg-gradient-to-r from-primary/5 via-background to-ganatrace-500/5 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Por Qué Elegir GANATRACE?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La plataforma más confiable y completa para la compra-venta de
              ganado en Colombia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Verificado</h3>
              <p className="text-muted-foreground">
                Todos nuestros vendedores están verificados con documentos,
                certificaciones y ubicación confirmada.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Trazabilidad Completa
              </h3>
              <p className="text-muted-foreground">
                Cada animal cuenta con trazabilidad completa certificada bajo
                estándares ISO 22005.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Comunidad Confiable
              </h3>
              <p className="text-muted-foreground">
                Más de 500 ganaderos activos con miles de transacciones exitosas
                y reseñas reales.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">
                Vendedores Activos
              </div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">5,000+</div>
              <div className="text-sm text-muted-foreground">
                Animales Vendidos
              </div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte</div>
            </div>
          </div>
        </section>

        {/* Sales Process Flow */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Proceso de Compra-Venta Seguro</CardTitle>
            <p className="text-muted-foreground">
              Transacciones protegidas en cada paso
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  1
                </div>
                <h4 className="font-medium mb-2">Explorar y Seleccionar</h4>
                <p className="text-xs text-muted-foreground">
                  Navega animales verificados con trazabilidad completa y
                  vendedores certificados
                </p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  2
                </div>
                <h4 className="font-medium mb-2">Contactar y Negociar</h4>
                <p className="text-xs text-muted-foreground">
                  Comunícate directamente con el vendedor, agenda visitas y
                  negocia precios
                </p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  3
                </div>
                <h4 className="font-medium mb-2">Contrato Digital</h4>
                <p className="text-xs text-muted-foreground">
                  Firma digital del acuerdo con validez legal completa
                </p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  4
                </div>
                <h4 className="font-medium mb-2">Documentación</h4>
                <p className="text-xs text-muted-foreground">
                  Factura electrónica y transferencia de trazabilidad automática
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
