import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import {
  Plus,
  Download,
  List,
  TrendingUp,
  Landmark,
  FileCheck,
  Search,
  Filter,
  Eye,
  FileText,
  MapPin,
  Calendar,
  Wallet,
  MessageSquare,
  ChevronRight,
  MoreVertical,
  History
} from "lucide-react";
import { Link } from "react-router-dom";

type PropertyStatus = "Analyse" | "Visite" | "Offre" | "Compromis" | "Acheté" | "Vendu";

interface Property {
  id: number;
  address: string;
  city: string;
  regime: string;
  rent: number;
  rentability: string;
  dpe: string;
  dpeDeadline: string;
  status: PropertyStatus;
  price: number;
  surface: number;
  notes: string[];
  lastUpdate: string;
}

const CRM_DATA: Property[] = [
  {
    id: 1,
    address: "12 Rue de la République",
    city: "Lyon",
    regime: "LMNP Réel",
    rent: 850,
    rentability: "5.8%",
    dpe: "D",
    dpeDeadline: "2034",
    status: "Acheté",
    price: 185000,
    surface: 32,
    notes: ["Taxe foncière payée le 15/10", "Dégât des eaux réglé en cuisine"],
    lastUpdate: "3 jours"
  },
  {
    id: 2,
    address: "12 Rue de la République",
    city: "Lyon",
    regime: "Nu (IR)",
    rent: 750,
    rentability: "4.2%",
    dpe: "E",
    dpeDeadline: "2034",
    status: "Acheté",
    price: 165000,
    surface: 28,
    notes: ["Locataire en place depuis 2021", "Révision loyer prévue en février"],
    lastUpdate: "1 semaine"
  },
  {
    id: 3,
    address: "45 Boulevard Prado",
    city: "Marseille",
    regime: "SCI IS",
    rent: 1200,
    rentability: "7.1%",
    dpe: "C",
    dpeDeadline: "-",
    status: "Acheté",
    price: 245000,
    surface: 45,
    notes: ["Immeuble de grand standing", "Pas de gros travaux AG"],
    lastUpdate: "5 jours"
  },
  {
    id: 4,
    address: "Impasse des Lices",
    city: "Marseille",
    regime: "LMNP Micro",
    rent: 600,
    rentability: "6.5%",
    dpe: "F",
    dpeDeadline: "2028",
    status: "Compromis",
    price: 110000,
    surface: 18,
    notes: ["Signature acte authentique prévue le 20/06", "Prêt accordé"],
    lastUpdate: "Hier"
  },
  {
    id: 5,
    address: "22 Rue Saint-Ferréol",
    city: "Marseille",
    regime: "LMNP Réel",
    rent: 980,
    rentability: "6.2%",
    dpe: "E",
    dpeDeadline: "2034",
    status: "Offre",
    price: 195000,
    surface: 38,
    notes: ["Offre à -5% acceptée oralement", "En attente de signature offre"],
    lastUpdate: "2h"
  },
  {
    id: 6,
    address: "8 Place Bellecour",
    city: "Lyon",
    regime: "SCI IS",
    rent: 2200,
    rentability: "4.9%",
    dpe: "D",
    dpeDeadline: "2034",
    status: "Analyse",
    price: 450000,
    surface: 65,
    notes: ["Deal off-market", "Potentiel division"],
    lastUpdate: "4h"
  }
];

const getStatusColor = (status: PropertyStatus) => {
  switch (status) {
    case "Acheté": return "bg-primary/10 text-primary border-primary/20";
    case "Compromis": return "bg-success/10 text-success border-success/20";
    case "Offre": return "bg-warning/10 text-warning border-warning/20";
    case "Visite": return "bg-blue-500/10 text-blue-600 border-blue-200";
    case "Analyse": return "bg-muted text-muted-foreground border-border";
    default: return "bg-background text-foreground";
  }
};

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    return CRM_DATA.filter(p => {
      const matchesSearch = p.address.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTab = activeTab === "all" || 
                        (activeTab === "patrimoine" && p.status === "Acheté") ||
                        (activeTab === "pipeline" && p.status !== "Acheté");
      return matchesSearch && matchesTab;
    });
  }, [searchTerm, activeTab]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mon CRM Immobilier</h1>
          <p className="text-muted-foreground mt-1">Gérez vos acquisitions et votre patrimoine existant au même endroit.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Download className="mr-2 h-4 w-4" /> Exporter
          </Button>
          <Link to="/eval/new">
            <Button size="sm" className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" /> Nouveau deal
            </Button>
          </Link>
        </div>
      </div>

      {/* Aggregate Stats Section (CRM context) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Loyers Mensuels</p>
                <div className="text-2xl font-bold font-mono">3 400 €</div>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Wallet className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-success">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+2.5% vs mois dernier</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Valeur Patrimoine</p>
                <div className="text-2xl font-bold font-mono">750 000 €</div>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Landmark className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-muted-foreground">
              <History className="h-4 w-4 mr-1" />
              <span>Basé sur 3 biens acquis</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Pipeline Deals</p>
                <div className="text-2xl font-bold font-mono">3 Deals</div>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-muted-foreground">
              <span>Valeur estimée: 755 k€</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Fiscalité 2025</p>
                <div className="text-2xl font-bold font-mono">Optimisée</div>
              </div>
              <div className="p-2 bg-success/10 rounded-lg text-success">
                <FileCheck className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs text-success">
              <span>0 € d'IR sur les revenus</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main CRM Interface */}
      <Card className="border-none shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
                <TabsTrigger value="all">Tout</TabsTrigger>
                <TabsTrigger value="patrimoine">Patrimoine</TabsTrigger>
                <TabsTrigger value="pipeline">Pipeline Deals</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher une adresse..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-0 sm:px-6">
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="w-[280px]">Bien & Localisation</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Régime</TableHead>
                  <TableHead className="text-right">Renta N-N</TableHead>
                  <TableHead className="text-center">DPE</TableHead>
                  <TableHead className="text-right">Prix / Loyer</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    <TableRow 
                      key={property.id} 
                      className="cursor-pointer transition-colors hover:bg-muted/30"
                      onClick={() => setSelectedProperty(property)}
                    >
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-semibold text-sm">{property.address}</span>
                          <span className="text-xs text-muted-foreground">{property.city} • {property.surface} m²</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`${getStatusColor(property.status)} border rounded-full font-medium py-0 px-2`}>
                          {property.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-xs font-medium px-2 py-0.5 bg-secondary rounded-md">{property.regime}</span>
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">{property.rentability}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={`
                          ${property.dpe === 'A' || property.dpe === 'B' || property.dpe === 'C' ? 'border-success/30 text-success bg-success/5' : ''}
                          ${property.dpe === 'D' || property.dpe === 'E' ? 'border-warning/30 text-warning bg-warning/5' : ''}
                          ${property.dpe === 'F' || property.dpe === 'G' ? 'border-destructive/30 text-destructive bg-destructive/5' : ''}
                          font-mono
                        `}>
                          {property.dpe}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono text-xs">
                        <div className="flex flex-col">
                          <span className="font-bold">{property.status === 'Acheté' ? property.rent + ' € / mois' : property.price.toLocaleString() + ' €'}</span>
                          <span className="text-muted-foreground">{Math.round(property.price / property.surface).toLocaleString()} €/m²</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                     <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                        Aucun bien trouvé pour cette recherche.
                     </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Property Drawer (CRM Detail) */}
      <Sheet open={!!selectedProperty} onOpenChange={(open) => !open && setSelectedProperty(null)}>
        <SheetContent className="sm:max-w-xl overflow-y-auto">
          {selectedProperty && (
            <>
              <SheetHeader className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className={getStatusColor(selectedProperty.status)}>
                    {selectedProperty.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">Maj il y a {selectedProperty.lastUpdate}</span>
                </div>
                <SheetTitle className="text-2xl">{selectedProperty.address}</SheetTitle>
                <SheetDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {selectedProperty.city} • {selectedProperty.regime}
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-8">
                {/* Stats Grid in Detail */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/40 rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Prix d'acquisition</p>
                    <p className="text-lg font-bold font-mono">{selectedProperty.price.toLocaleString()} €</p>
                  </div>
                  <div className="p-4 bg-muted/40 rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Loyer estimé</p>
                    <p className="text-lg font-bold font-mono text-primary">{selectedProperty.rent} € / mois</p>
                  </div>
                </div>

                <Tabs defaultValue="overview">
                  <TabsList className="w-full grid grid-cols-4">
                    <TabsTrigger value="overview">Info</TabsTrigger>
                    <TabsTrigger value="finance">Finance</TabsTrigger>
                    <TabsTrigger value="docs">Docs</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" /> DPE: {selectedProperty.dpe} ({selectedProperty.dpeDeadline})
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Eye className="h-4 w-4" /> Surface: {selectedProperty.surface} m²
                      </div>
                    </div>
                    <div className="space-y-2">
                       <h4 className="font-semibold text-sm">Description du projet</h4>
                       <p className="text-sm text-balance leading-relaxed">
                          Ce bien a été acquis avec un fort potentiel de revalorisation. L'objectif est une détention à 10 ans en optimisant la fiscalité via le régime {selectedProperty.regime}.
                       </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" /> Voir le rapport complet
                    </Button>
                  </TabsContent>

                  <TabsContent value="notes" className="mt-6 space-y-4">
                    <div className="space-y-3">
                      {selectedProperty.notes.map((note, i) => (
                        <div key={i} className="p-3 bg-secondary/30 rounded-lg text-sm border-l-2 border-primary">
                          {note}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                       <Input placeholder="Ajouter une note..." />
                       <Button size="icon"><Plus className="h-4 w-4" /></Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="docs" className="mt-6">
                    <div className="space-y-2">
                       {["Compromis de vente.pdf", "Diagnostic DPE.pdf", "PV AG 2024.pdf"].map((doc, i) => (
                         <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                            <div className="flex items-center gap-3">
                               <FileText className="h-4 w-4 text-primary" />
                               <span className="text-sm font-medium">{doc}</span>
                            </div>
                            <Download className="h-4 w-4 text-muted-foreground" />
                         </div>
                       ))}
                       <Button variant="outline" className="w-full mt-4 border-dashed">
                          <Plus className="mr-2 h-4 w-4" /> Téléverser un document
                       </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <SheetFooter className="mt-12 flex flex-row gap-2 border-t pt-6">
                 <Button variant="outline" className="flex-1" onClick={() => setSelectedProperty(null)}>Fermer</Button>
                 <Button className="flex-1">Éditer le bien</Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
      
      {/* Strategic Tip (Floating style) */}
      <div className="mt-12">
        <Card className="bg-primary/5 border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2">
             <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">Nouveau Conseil</Badge>
          </div>
          <CardContent className="p-4 sm:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-primary/20 rounded-2xl text-primary shrink-0 ring-8 ring-primary/5">
               <TrendingUp className="h-8 w-8" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-xl mb-2 text-foreground">💡 Stratégie CRM : Arbitrage Fiscal 2025</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                L'IA a détecté que vous possédez deux biens (LMNP et Nu) dans le même immeuble à Lyon. 
                Suite à la <strong>réforme LMNP 2025</strong>, il est plus rentable de basculer vos travaux d'entretien vers le bien détenu en "Nu" pour imputer le déficit foncier sur vos revenus globaux, ce qui neutralisera mécaniquement l'impôt de votre LMNP.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
               <Button className="whitespace-nowrap">Simuler l'arbitrage</Button>
               <Button variant="ghost" className="text-xs">Ignorer</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
