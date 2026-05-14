import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UploadCloud, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate("/portfolio");
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full mb-8">
        <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2 px-1">
          <span>Profil & Fiscalité</span>
          <span>Objectifs</span>
          <span>Import</span>
        </div>
        <Progress value={step * 33.33} className="h-2" />
      </div>

      <Card className="w-full">
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle>Commençons par votre profil</CardTitle>
              <CardDescription>Vos informations fiscales nous permettent de simuler précisément vos rendements.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tmi">Tranche Marginale d'Imposition (TMI)</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="tmi">
                    <SelectValue placeholder="Sélectionnez votre TMI" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0 %</SelectItem>
                    <SelectItem value="11">11 %</SelectItem>
                    <SelectItem value="30">30 %</SelectItem>
                    <SelectItem value="41">41 %</SelectItem>
                    <SelectItem value="45">45 %</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="situation">Situation familiale</Label>
                <Select defaultValue="single">
                  <SelectTrigger id="situation">
                    <SelectValue placeholder="Situation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Célibataire</SelectItem>
                    <SelectItem value="married">Marié(e) / Pacsé(e)</SelectItem>
                    <SelectItem value="children">Avec enfants</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="assets">Nombre de biens actuels</Label>
                <Input id="assets" type="number" defaultValue={2} />
              </div>
            </CardContent>
          </>
        )}

        {step === 2 && (
          <>
             <CardHeader>
              <CardTitle>Vos objectifs</CardTitle>
              <CardDescription>Quelle est votre stratégie d'investissement ?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="target">Biens à acquérir d'ici 3 ans</Label>
                <Select defaultValue="1-3">
                  <SelectTrigger id="target">
                    <SelectValue placeholder="Nombre de biens" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1 à 3 biens (Immeuble de rapport ou diffus)</SelectItem>
                    <SelectItem value="4-10">4 à 10 biens</SelectItem>
                    <SelectItem value="10+">+ de 10 biens</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="horizon">Horizon de revente type</Label>
                <Select defaultValue="10">
                  <SelectTrigger id="horizon">
                    <SelectValue placeholder="Horizon" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">Marchand de biens (&lt; 5 ans)</SelectItem>
                    <SelectItem value="10">Classique (7-10 ans)</SelectItem>
                    <SelectItem value="15">Patrimonial (+ de 15 ans)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle>Migration Horiz.io</CardTitle>
              <CardDescription>Vous utilisiez Horiz ? Importez votre historique pour ne rien perdre.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center space-y-4 bg-secondary/20">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <UploadCloud className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Glissez votre fichier CSV Horiz</p>
                  <p className="text-sm text-muted-foreground mt-1">Ou cliquez pour parcourir</p>
                </div>
                <Button variant="outline" size="sm">Sélectionner un fichier</Button>
              </div>

               <div className="mt-6 flex items-start gap-3 p-3 bg-success/10 text-success rounded-lg border border-success/20">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">Mapping automatique</div>
                    <div className="text-xs mt-1">Nous recréerons les régimes fiscaux correspondants à chaque bien, même les immeubles mixtes.</div>
                  </div>
               </div>
            </CardContent>
          </>
        )}

        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="ghost" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>
            Retour
          </Button>
          <div className="space-x-2">
            {step === 3 && <Button variant="ghost" onClick={() => navigate("/portfolio")}>Passer</Button>}
            <Button onClick={handleNext}>
              {step === 3 ? "Terminer et voir mon portefeuille" : "Continuer"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
