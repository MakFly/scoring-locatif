import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link2, Upload, AlertTriangle, TrendingUp, Home, ArrowRight, Download, Share2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const CAPEX_DATA = [
  { name: "Cuisine", min: 4500, max: 6000, value: 5250 },
  { name: "SDB", min: 3000, max: 4500, value: 3750 },
  { name: "Sols", min: 1500, max: 2000, value: 1750 },
  { name: "Élec.", min: 2500, max: 3500, value: 3000 },
];

const TAX_DATA = [
  { year: "1", LMNP: 0, SCI: 1200, Nu: 2500 },
  { year: "3", LMNP: 0, SCI: 1200, Nu: 2500 },
  { year: "5", LMNP: 500, SCI: 1200, Nu: 2500 },
  { year: "10", LMNP: 2800, SCI: 1500, Nu: 2500 },
];

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const startAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsAnalyzing(true);
    setProgress(0);
    setShowResults(false);

    // Simulate analysis steps
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 15;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setIsAnalyzing(false);
          setShowResults(true);
        }, 500);
      } else {
        setProgress(currentProgress);
      }
    }, 800);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {!showResults && !isAnalyzing && (
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Évaluer une annonce</h1>
          <p className="text-muted-foreground mb-8">
            Collez l'URL d'une annonce LeBonCoin, SeLoger ou PAP pour obtenir une analyse complète en 30 secondes.
          </p>
          
          <Card className="p-6">
            <form onSubmit={startAnalysis} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Link2 className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="https://www.leboncoin.fr/ad/ventes_immobilieres/..." 
                    className="pl-10 h-12"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 w-full sm:w-auto" disabled={!url}>
                  Analyser
                </Button>
              </div>
              
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Ou</span>
                </div>
              </div>
              
              <Button type="button" variant="outline" className="h-12 border-dashed">
                <Upload className="mr-2 h-4 w-4" />
                Saisie manuelle (sans annonce)
              </Button>
            </form>
          </Card>
        </div>
      )}

      {isAnalyzing && (
        <div className="max-w-md mx-auto mt-20 text-center">
          <h2 className="text-2xl font-bold mb-6">Analyse IA en cours...</h2>
          <Progress value={progress} className="h-2 mb-8" />
          <div className="space-y-4 text-sm text-left mx-auto w-4/5 text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className={`h-4 w-4 rounded-full border ${progress > 10 ? 'bg-primary border-primary' : ''}`} />
              <span className={progress > 10 ? 'text-foreground' : ''}>Extraction des photos et données</span>
            </div>
            <div className="flex items-center gap-3">
              <div className={`h-4 w-4 rounded-full border ${progress > 40 ? 'bg-primary border-primary' : ''}`} />
              <span className={progress > 40 ? 'text-foreground' : ''}>Vision IA: estimation des travaux</span>
            </div>
            <div className="flex items-center gap-3">
              <div className={`h-4 w-4 rounded-full border ${progress > 70 ? 'bg-primary border-primary' : ''}`} />
              <span className={progress > 70 ? 'text-foreground' : ''}>Recherche comparables DVF</span>
            </div>
            <div className="flex items-center gap-3">
              <div className={`h-4 w-4 rounded-full border ${progress >= 100 ? 'bg-primary border-primary' : ''}`} />
              <span className={progress >= 100 ? 'text-foreground' : ''}>Calcul fiscal 10 ans</span>
            </div>
          </div>
        </div>
      )}

      {showResults && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 md:pb-8">
          
          {/* Header Report */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">SCORE 82/100 • GO</Badge>
                <span className="text-sm text-muted-foreground">T2 • 42 m² • 4e arr. Marseille</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">145 000 € <span className="text-muted-foreground font-normal text-lg ml-2">3 452 €/m²</span></h1>
              <p className="text-sm text-muted-foreground mt-1">Rentabilité brute estimée: 6.8% • Cashflow net: +120€/mois</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
               <Button variant="outline" size="sm" className="flex-1 md:flex-none"><Share2 className="w-4 h-4 mr-2"/> Partager</Button>
               <Button variant="outline" size="sm" className="flex-1 md:flex-none"><Download className="w-4 h-4 mr-2"/> PDF Banque</Button>
               <Button size="sm" className="flex-1 md:flex-none">OCR PV AG</Button>
            </div>
          </div>

          {/* Cards 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* CAPEX Travaux IA */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Vision IA Travaux
                    </CardTitle>
                    <CardDescription>Estimation sur 6 photos (Confiance: 85%)</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xl">~14 k€</div>
                    <div className="text-xs text-muted-foreground">soit 330 €/m²</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-48 mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={CAPEX_DATA} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={60} fontSize={12} />
                      <Tooltip 
                        formatter={(value: number) => [`${value} €`, 'Estimation']}
                        cursor={{fill: 'transparent'}}
                      />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {CAPEX_DATA.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill="var(--color-primary)" opacity={0.8} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <Button variant="link" className="px-0 mt-2 h-auto text-primary">Voir détail par poste <ArrowRight className="w-4 h-4 ml-1"/></Button>
              </CardContent>
            </Card>

            {/* Comparables DVF */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Comparables DVF</CardTitle>
                    <CardDescription>10 ventes récentes (&lt; 500m)</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xl text-success">Sous le marché</div>
                    <div className="text-xs text-muted-foreground">Médiane: 3 850 €/m²</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mt-2">
                   {[
                     { adress: "Rue d'Endoume", price: "152 000 €", sqft: "3 800", date: "Il y a 2 mois" },
                     { adress: "Boulevard Tellene", price: "165 000 €", sqft: "3 928", date: "Il y a 5 mois" },
                     { adress: "Rue des Lices", price: "148 000 €", sqft: "3 700", date: "Il y a 6 mois" },
                   ].map((comp, i) => (
                     <div key={i} className="flex justify-between items-center text-sm border-b last:border-0 pb-2 last:pb-0">
                       <div>
                         <div className="font-medium">{comp.adress}</div>
                         <div className="text-xs text-muted-foreground">{comp.date}</div>
                       </div>
                       <div className="text-right">
                         <div>{comp.price}</div>
                         <div className="text-xs text-muted-foreground">{comp.sqft} €/m²</div>
                       </div>
                     </div>
                   ))}
                </div>
                <Button variant="link" className="px-0 mt-2 h-auto text-primary">Voir sur la carte DVF <ArrowRight className="w-4 h-4 ml-1"/></Button>
              </CardContent>
            </Card>

            {/* Fiscalité 10 ans */}
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                 <CardTitle>Impact Fiscal (10 ans)</CardTitle>
                 <CardDescription>LMNP Réel vs SCI IS vs Nu</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="lmnp" className="w-full mt-2">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="lmnp">LMNP (2025)</TabsTrigger>
                    <TabsTrigger value="sci">SCI IS</TabsTrigger>
                    <TabsTrigger value="nu">Nu (IR)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="lmnp" className="space-y-4 pt-4">
                     <div className="grid grid-cols-2 gap-4 text-sm">
                       <div className="p-3 bg-secondary rounded-lg">
                         <div className="text-muted-foreground text-xs mb-1">Impôts / an (1-5 ans)</div>
                         <div className="font-bold text-lg">0 €</div>
                       </div>
                       <div className="p-3 bg-secondary rounded-lg">
                         <div className="text-muted-foreground text-xs mb-1">Plus-value latente (10 ans)</div>
                         <div className="font-bold text-lg text-warning">Réintégrée</div>
                       </div>
                     </div>
                     <p className="text-xs text-muted-foreground mt-2 border-l-2 border-primary pl-2">
                       L'amortissement neutralise l'impôt les 6 premières années. Attention, la réforme 2025 réintègre les amortissements lors de la revente.
                     </p>
                  </TabsContent>
                  <TabsContent value="sci">... SCI IS ...</TabsContent>
                  <TabsContent value="nu">... Nu (Déficit foncier) ...</TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Risques */}
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                 <CardTitle>Analyse des risques</CardTitle>
                 <CardDescription>Réglementation et technique</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mt-2">
                  <div className="flex items-start gap-3 p-3 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
                    <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">DPE Actuel : F (Passoire)</div>
                      <div className="text-xs mt-1">Interdiction de location en 2028. Notre budget travaux (14k€) inclut l'isolation pour viser DPE D.</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-success/10 text-success rounded-lg border border-success/20">
                    <TrendingUp className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Encadrement des loyers</div>
                      <div className="text-xs mt-1">Non soumis à l'encadrement à Marseille (sauf vote à venir). Loyer estimé: 750 € CC.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-warning/10 text-warning rounded-lg border border-warning/20">
                    <Home className="h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Risque Copro : Inconnu</div>
                      <div className="text-xs mt-1">Uploadez les PV d'AG pour vérifier les impayés et le fonds ALUR.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Sticky Mobile CTA: Voir le rapport (if we had scrolled) - Simplification for mock */}
      {showResults && (
        <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
          <Button size="lg" className="w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            Sauvegarder le deal
          </Button>
        </div>
      )}
    </div>
  );
}
