import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UploadCloud, FileText, AlertTriangle, ShieldCheck, Milestone } from "lucide-react";

export default function Copro() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleUpload = () => {
    setIsAnalyzing(true);
    setProgress(0);
    setShowResults(false);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 20;
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
    }, 600);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-bold">Analyse PV AG Copro (OCR)</h1>
        <p className="text-muted-foreground mt-1 text-balance">
          Glissez-déposez jusqu'à 3 ans de PV d'Assemblée Générale. Notre IA identifie instantanément les risques cachés.
        </p>
      </div>

      {!showResults && !isAnalyzing && (
        <Card>
          <CardContent className="pt-6">
             <div 
               className="border-2 border-dashed border-border rounded-xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-secondary/50 transition-colors"
               onClick={handleUpload}
             >
                <div className="h-16 w-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <UploadCloud className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Glissez vos PDF ici</h3>
                <p className="text-muted-foreground mb-6">PDF max 15 MB. Détection automatique des dates et résolutions.</p>
                <Button>Parcourir les fichiers</Button>
             </div>
          </CardContent>
        </Card>
      )}

      {isAnalyzing && (
        <div className="max-w-md mx-auto mt-20 text-center">
          <FileText className="h-12 w-12 mx-auto text-primary mb-6 animate-pulse" />
          <h2 className="text-xl font-bold mb-6">Lecture OCR et analyse sémantique...</h2>
          <Progress value={progress} className="h-2 mb-4" />
          <p className="text-sm text-muted-foreground">Extraction des résolutions de travaux et du bilan financier.</p>
        </div>
      )}

      {showResults && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
          <Card className="border-warning shadow-sm">
            <CardHeader className="bg-warning/10 pb-4">
              <CardTitle className="text-warning flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Résumé Exécutif (Danger Modéré)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm leading-relaxed">
                La copropriété présente un niveau d'impayés <strong>supérieur à la moyenne (12%)</strong>. 
                Le fonds de travaux ALUR est <strong>insuffisant</strong> par rapport aux obligations légales de 5%. 
                Un ravalement de façade, bien que rejeté en 2024, reviendra très probablement à l'ordre du jour d'ici 2 ans en raison des obligations liées au DPE.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Drapeaux Rouges (Alertes)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">Fonds ALUR insuffisant</div>
                    <div className="text-xs mt-1">Solde à 12 500 € pour 45 lots. Le syndic alerte sur la nécessité d'un appel exceptionnel.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-warning/10 text-warning rounded-lg border border-warning/20">
                  <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">Impayés &gt; 10%</div>
                    <div className="text-xs mt-1">12% d'impayés constatés sur l'exercice clos. Deux procédures contentieuses en cours.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Drapeaux Verts (Sécurité)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-success/10 text-success rounded-lg border border-success/20">
                  <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">Toiture rénovée (2022)</div>
                    <div className="text-xs mt-1">Réfection totale de la toiture votée et appelée en 2022. Pas de travaux majeurs prévus sur ce poste.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-success/10 text-success rounded-lg border border-success/20">
                  <ShieldCheck className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">Chaufferie votée</div>
                    <div className="text-xs mt-1">Remplacement chaudière collective voté (appels de fonds déjà réalisés par le vendeur).</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Milestone className="h-5 w-5" /> Timeline des votes structurants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative border-l border-muted-foreground/30 ml-4 space-y-8 pb-4">
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-destructive" />
                  <div className="text-sm font-semibold mb-1">Juin 2024</div>
                   <div className="p-3 bg-secondary rounded-lg text-sm">
                     <span className="font-medium text-destructive">Rejeté (42%)</span> - Résolution 12 : Ravalement de façade avec isolation par l'extérieur. Devis estimatif: 245 000€.
                   </div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-success" />
                  <div className="text-sm font-semibold mb-1">Mai 2023</div>
                   <div className="p-3 bg-secondary rounded-lg text-sm">
                     <span className="font-medium text-success">Adopté (75%)</span> - Résolution 8 : Contrat de syndic renouvelé (Cabinet XYZ) sans augmentation d'honoraires.
                   </div>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-success" />
                  <div className="text-sm font-semibold mb-1">Mai 2022</div>
                   <div className="p-3 bg-secondary rounded-lg text-sm">
                     <span className="font-medium text-success">Adopté (91%)</span> - Résolution 14 : Réfection totale de la toiture.
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8">
             <Button variant="outline"><UploadCloud className="w-4 h-4 mr-2" /> Analyser un autre document</Button>
          </div>
        </div>
      )}
    </div>
  );
}
