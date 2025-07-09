import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  MapPin,
  Phone,
  Mail,
  Globe,
  Shield,
  Award,
  Star,
  Upload,
  Camera,
  FileText,
  Edit,
  Save,
  Building,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    // Personal Information
    fullName: "Carlos Hernández Rodríguez",
    businessName: "Hacienda San José",
    documentType: "Cédula",
    documentNumber: "12.345.678",
    birthDate: "1975-03-15",

    // Contact Information
    email: "carlos@haciendansanjose.com",
    phone: "+57 300 123 4567",
    whatsapp: "+57 300 123 4567",
    website: "www.haciendansanjose.com",

    // Location
    country: "Colombia",
    state: "Cundinamarca",
    city: "Zipaquirá",
    address: "Vereda El Rosal, Finca San José",
    coordinates: "5.0256, -74.0067",

    // Business Information
    businessType: "Ganadería Lechera y de Cría",
    experience: "25 años",
    specialties: ["Holstein", "Jersey", "Ganado Lechero"],
    farmSize: "150 hectáreas",
    animalCapacity: "500 cabezas",

    // Profile Description
    description:
      "Ganadero con más de 25 años de experiencia en producción lechera y cría de ganado Holstein y Jersey. Certificado en buenas prácticas ganaderas y comprometido con la sostenibilidad y el bienestar animal.",

    // Trust Metrics (read-only)
    memberSince: "2019-03-15",
    totalSales: 847,
    rating: 4.8,
    reviewsCount: 156,
    satisfactionRate: 98,
    responseTime: "2 horas",
  });

  const certifications = [
    {
      name: "ISO 22005 - Trazabilidad",
      issuer: "ICONTEC",
      date: "2023-06-15",
      status: "Vigente",
    },
    {
      name: "ICA - Autorización Sanitaria",
      issuer: "ICA",
      date: "2024-01-10",
      status: "Vigente",
    },
    {
      name: "SENASA - Registro Ganadero",
      issuer: "SENASA",
      date: "2023-12-01",
      status: "Vigente",
    },
    {
      name: "Cámara de Comercio",
      issuer: "CCB",
      date: "2024-03-01",
      status: "Vigente",
    },
    {
      name: "Buenas Prácticas Ganaderas",
      issuer: "FEDEGAN",
      date: "2023-08-20",
      status: "Vigente",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mi Perfil</h1>
            <p className="text-muted-foreground">
              Gestiona tu información para generar confianza en los compradores
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 lg:mt-0">
            <Button
              variant={isEditing ? "default" : "outline"}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Cambios
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4 mr-2" />
                  Editar Perfil
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Profile Preview */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Vista Previa del Perfil Público
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">CH</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{profile.businessName}</h3>
                  <Badge className="bg-green-600">Verificado</Badge>
                  <Badge variant="outline">Premium</Badge>
                </div>
                <p className="text-muted-foreground mb-3">
                  {profile.description}
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">{profile.rating}/5</span>
                    <span className="text-muted-foreground">
                      ({profile.reviewsCount} reseñas)
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-green-600">
                      {profile.satisfactionRate}%
                    </span>
                    <span className="text-muted-foreground"> satisfacción</span>
                  </div>
                  <div>
                    <span className="font-medium">{profile.totalSales}</span>
                    <span className="text-muted-foreground">
                      {" "}
                      ventas exitosas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Management Tabs */}
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="contact">Contacto</TabsTrigger>
            <TabsTrigger value="business">Negocio</TabsTrigger>
            <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
            <TabsTrigger value="trust">Confianza</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Información Personal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Nombre Completo</Label>
                    <Input
                      id="fullName"
                      value={profile.fullName}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessName">Nombre del Negocio</Label>
                    <Input
                      id="businessName"
                      value={profile.businessName}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="documentType">Tipo de Documento</Label>
                    <Input
                      id="documentType"
                      value={profile.documentType}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="documentNumber">Número de Documento</Label>
                    <Input
                      id="documentNumber"
                      value={profile.documentNumber}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={profile.birthDate}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Descripción del Perfil</Label>
                  <Textarea
                    id="description"
                    value={profile.description}
                    disabled={!isEditing}
                    className={!isEditing ? "bg-muted" : ""}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Information */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      value={profile.phone}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      value={profile.whatsapp}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Sitio Web</Label>
                    <Input
                      id="website"
                      value={profile.website}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Ubicación
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">País</Label>
                      <Input
                        id="country"
                        value={profile.country}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-muted" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">Departamento/Estado</Label>
                      <Input
                        id="state"
                        value={profile.state}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-muted" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">Ciudad</Label>
                      <Input
                        id="city"
                        value={profile.city}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-muted" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="coordinates">Coordenadas GPS</Label>
                      <Input
                        id="coordinates"
                        value={profile.coordinates}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-muted" : ""}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Dirección Completa</Label>
                    <Textarea
                      id="address"
                      value={profile.address}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                      rows={2}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Business Information */}
          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Información del Negocio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessType">Tipo de Negocio</Label>
                    <Input
                      id="businessType"
                      value={profile.businessType}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Años de Experiencia</Label>
                    <Input
                      id="experience"
                      value={profile.experience}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="farmSize">Tamaño de la Finca</Label>
                    <Input
                      id="farmSize"
                      value={profile.farmSize}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  <div>
                    <Label htmlFor="animalCapacity">
                      Capacidad de Animales
                    </Label>
                    <Input
                      id="animalCapacity"
                      value={profile.animalCapacity}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                </div>
                <div>
                  <Label>Especialidades</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profile.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Certificaciones y Documentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Emisor: {cert.issuer} • Fecha: {cert.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={
                            cert.status === "Vigente"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }
                        >
                          {cert.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Upload className="h-3 w-3 mr-1" />
                          Subir
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Agregar Nueva Certificación
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trust & Reputation */}
          <TabsContent value="trust">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Métricas de Confianza
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {profile.rating}/5
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Calificación
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {profile.satisfactionRate}%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Satisfacción
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {profile.totalSales}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Ventas Exitosas
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {profile.responseTime}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Tiempo Respuesta
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Historial de Miembro
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-medium">
                        Miembro desde {profile.memberSince}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Más de 5 años siendo parte de la comunidad GANATRACE
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
