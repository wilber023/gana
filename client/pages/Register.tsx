import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Building,
  MapPin,
  Phone,
  Mail,
  Shield,
  CheckCircle,
  ArrowRight,
  Upload,
  FileText,
  Globe,
  Users,
  Award,
  Eye,
  EyeOff,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Paso 1: Información Personal
    firstName: "",
    lastName: "",
    documentType: "",
    documentNumber: "",
    birthDate: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",

    // Paso 2: Información del Negocio
    businessName: "",
    businessType: "",
    experience: "",
    specialties: [],
    farmSize: "",
    animalCapacity: "",
    description: "",

    // Paso 3: Ubicación
    country: "Colombia",
    state: "",
    city: "",
    address: "",
    coordinates: "",

    // Paso 4: Plan y Términos
    selectedPlan: "basic",
    acceptTerms: false,
    acceptPrivacy: false,
    acceptMarketing: false,
  });

  const totalSteps = 4;

  const plans = [
    {
      id: "basic",
      name: "Plan Básico",
      price: "$29",
      period: "/mes",
      description: "Perfecto para empezar",
      features: [
        "Hasta 100 animales",
        "5 publicaciones/mes",
        "Trazabilidad básica",
        "Soporte por email",
        "Perfil verificado",
      ],
      recommended: false,
    },
    {
      id: "premium",
      name: "Plan Premium",
      price: "$79",
      period: "/mes",
      description: "Para negocios en crecimiento",
      features: [
        "Animales ilimitados",
        "Publicaciones ilimitadas",
        "Trazabilidad completa",
        "Soporte 24/7",
        "Subastas y cotizaciones",
        "Dashboard avanzado",
      ],
      recommended: true,
    },
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Únete a GANATRACE</h1>
          <p className="text-muted-foreground">
            Crea tu cuenta y comienza a vender ganado con trazabilidad completa
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-muted-foreground text-muted-foreground"
                }`}
              >
                {currentStep > step ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span className="font-medium">{step}</span>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <span
                className={
                  currentStep >= 1
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }
              >
                Información Personal
              </span>
            </div>
            <div className="text-center">
              <span
                className={
                  currentStep >= 2
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }
              >
                Tu Negocio
              </span>
            </div>
            <div className="text-center">
              <span
                className={
                  currentStep >= 3
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }
              >
                Ubicación
              </span>
            </div>
            <div className="text-center">
              <span
                className={
                  currentStep >= 4
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }
              >
                Plan y Confirmación
              </span>
            </div>
          </div>
        </div>

        {/* Form Steps */}
        <Card>
          <CardContent className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <User className="h-12 w-12 mx-auto text-primary mb-2" />
                  <h2 className="text-2xl font-bold">Información Personal</h2>
                  <p className="text-muted-foreground">
                    Cuéntanos sobre ti para crear tu perfil de confianza
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombres *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      placeholder="Ej: Will  "
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellidos *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      placeholder="Ej: Hernández "
                    />
                  </div>
                  <div>
                    <Label htmlFor="documentType">Tipo de Documento *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cedula">
                          Cédula de Ciudadanía
                        </SelectItem>
                        <SelectItem value="nit">NIT</SelectItem>
                        <SelectItem value="pasaporte">Pasaporte</SelectItem>
                        <SelectItem value="extranjeria">
                          Cédula de Extranjería
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="documentNumber">
                      Número de Documento *
                    </Label>
                    <Input
                      id="documentNumber"
                      value={formData.documentNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          documentNumber: e.target.value,
                        })
                      }
                      placeholder="Ej: 12.345.678"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate">Fecha de Nacimiento *</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) =>
                        setFormData({ ...formData, birthDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono/WhatsApp *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Ej: +57 300 123 4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Contraseña *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        placeholder="Mínimo 8 caracteres"
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
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800">
                        Verificación de Identidad
                      </h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Esta información será verificada para obtener tu sello
                        de vendedor confiable. Tu documento será validado pero
                        no será público.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <Building className="h-12 w-12 mx-auto text-primary mb-2" />
                  <h2 className="text-2xl font-bold">Tu Negocio Ganadero</h2>
                  <p className="text-muted-foreground">
                    Cuéntanos sobre tu experiencia y especialidades
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="businessName">
                      Nombre del Negocio/Finca *
                    </Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                      placeholder="Ej: Hacienda San José"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessType">Tipo de Ganadería *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lechera">
                          Ganadería Lechera
                        </SelectItem>
                        <SelectItem value="carne">
                          Ganadería de Carne
                        </SelectItem>
                        <SelectItem value="cria">Ganadería de Cría</SelectItem>
                        <SelectItem value="mixta">Ganadería Mixta</SelectItem>
                        <SelectItem value="doble-proposito">
                          Doble Propósito
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Años de Experiencia *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona rango" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 años</SelectItem>
                        <SelectItem value="6-10">6-10 años</SelectItem>
                        <SelectItem value="11-20">11-20 años</SelectItem>
                        <SelectItem value="21-30">21-30 años</SelectItem>
                        <SelectItem value="30+">Más de 30 años</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="farmSize">Tamaño de la Finca</Label>
                    <Input
                      id="farmSize"
                      value={formData.farmSize}
                      onChange={(e) =>
                        setFormData({ ...formData, farmSize: e.target.value })
                      }
                      placeholder="Ej: 150 hectáreas"
                    />
                  </div>
                  <div>
                    <Label htmlFor="animalCapacity">
                      Capacidad de Animales
                    </Label>
                    <Input
                      id="animalCapacity"
                      value={formData.animalCapacity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          animalCapacity: e.target.value,
                        })
                      }
                      placeholder="Ej: 500 cabezas"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Descripción del Negocio *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Describe tu experiencia, especialidades y qué te hace único como ganadero..."
                    rows={4}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Esta descripción aparecerá en tu perfil público
                  </p>
                </div>

                <div>
                  <Label>Especialidades (opcional)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {[
                      "Holstein",
                      "Jersey",
                      "Brahman",
                      "Angus",
                      "Simmental",
                      "Cebú",
                      "Normando",
                      "Charolais",
                      "Criollo",
                      "Gyr",
                    ].map((breed) => (
                      <div key={breed} className="flex items-center space-x-2">
                        <Checkbox id={breed} />
                        <Label htmlFor={breed} className="text-sm">
                          {breed}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Location */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <MapPin className="h-12 w-12 mx-auto text-primary mb-2" />
                  <h2 className="text-2xl font-bold">Ubicación de tu Finca/Rancho</h2>
                  <p className="text-muted-foreground">
                    Los compradores necesitan saber dónde están ubicados tus
                    animales
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country">Estado *</Label>
                    <Select defaultValue="mexico">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guadalajara">Guadalajara</SelectItem>
                        <SelectItem value="chiapas">Chiapas</SelectItem>
                        <SelectItem value="tabasco">Tabasco</SelectItem>
                        <SelectItem value="veracurz">Veracurz</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="state">Ciudad *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una Ciudad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="antioquia">Comitan</SelectItem>
                        <SelectItem value="cundinamarca">
                          Tuxtla Gutierrez
                        </SelectItem>
                        <SelectItem value="valle">Tonala</SelectItem>
                        <SelectItem value="santander">Ocosingo</SelectItem>
                        <SelectItem value="cordoba">San fernando</SelectItem>
                        <SelectItem value="meta">Suchiapa</SelectItem>
                        <SelectItem value="casanare">Concordia</SelectItem>
                        <SelectItem value="cesar">Villaflores</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="city">Ciudad/Municipio *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      placeholder="Ej: tonala"
                    />
                  </div>
                  <div>
                    <Label htmlFor="coordinates">
                      Coordenadas GPS (opcional)
                    </Label>
                    <Input
                      id="coordinates"
                      value={formData.coordinates}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          coordinates: e.target.value,
                        })
                      }
                      placeholder="Ej: 5.0256, -74.0067"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Dirección Completa *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="Ej: Vereda El Rosario, Rancho el Mezquite, Kilómetro 5 vía Huixtla-Arriaga"
                    rows={3}
                  />
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">
                        Ubicación Verificable
                      </h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        Esta ubicación será verificada y mostrada a los
                        compradores para generar confianza. Asegúrate de que sea
                        exacta y actualizada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Plan Selection */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <Award className="h-12 w-12 mx-auto text-primary mb-2" />
                  <h2 className="text-2xl font-bold">Elige tu Plan</h2>
                  <p className="text-muted-foreground">
                    Selecciona el plan que mejor se adapte a tu negocio
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {plans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={`cursor-pointer transition-all ${
                        formData.selectedPlan === plan.id
                          ? "border-primary bg-primary/5"
                          : "hover:border-primary/50"
                      } ${plan.recommended ? "border-primary/30" : ""}`}
                      onClick={() =>
                        setFormData({ ...formData, selectedPlan: plan.id })
                      }
                    >
                      {plan.recommended && (
                        <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
                          Recomendado
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="text-3xl font-bold text-primary">
                          {plan.price}
                          <span className="text-base text-muted-foreground">
                            {plan.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {plan.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              formData.selectedPlan === plan.id
                                ? "bg-primary border-primary"
                                : "border-muted-foreground"
                            }`}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          acceptTerms: checked as boolean,
                        })
                      }
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Acepto los{" "}
                      <Link
                        to="/terms"
                        className="text-primary hover:underline"
                      >
                        Términos y Condiciones
                      </Link>{" "}
                      de GANATRACE *
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={formData.acceptPrivacy}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          acceptPrivacy: checked as boolean,
                        })
                      }
                    />
                    <Label htmlFor="privacy" className="text-sm">
                      Acepto la{" "}
                      <Link
                        to="/privacy"
                        className="text-primary hover:underline"
                      >
                        Política de Privacidad
                      </Link>{" "}
                      y el tratamiento de mis datos *
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={formData.acceptMarketing}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          acceptMarketing: checked as boolean,
                        })
                      }
                    />
                    <Label htmlFor="marketing" className="text-sm">
                      Deseo recibir información sobre ofertas y novedades
                      (opcional)
                    </Label>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">
                        ¡Ya casi terminas!
                      </h4>
                      <p className="text-sm text-green-700 mt-1">
                        Una vez registrado, nuestro equipo verificará tu
                        información en 24-48 horas. Recibirás un email cuando tu
                        cuenta esté lista para vender.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex items-center gap-4">
                {currentStep > 1 && (
                  <Button variant="outline" onClick={prevStep}>
                    Anterior
                  </Button>
                )}
                <div className="text-sm text-muted-foreground">
                  Paso {currentStep} de {totalSteps}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  ¿Ya tienes cuenta?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    Inicia sesión
                  </Link>
                </div>

                {currentStep < totalSteps ? (
                  <Button onClick={nextStep}>
                    Continuar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    className="px-8"
                    disabled={!formData.acceptTerms || !formData.acceptPrivacy}
                  >
                    Crear Cuenta
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
