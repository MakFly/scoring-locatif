import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function Settings() {
  const handleSave = () => {
    toast.success("Paramètres enregistrés avec succès.");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Paramètres</h1>

      <Tabs defaultValue="profile">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profil Fiscal</TabsTrigger>
          <TabsTrigger value="billing">Abonnement (Pro)</TabsTrigger>
          <TabsTrigger value="developer">Développeur</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profil d'investisseur</CardTitle>
              <CardDescription>Ces paramètres influencent par défaut toutes vos simulations fiscales.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tmi">Tranche Marginale d'Imposition (TMI)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger id="tmi">
                      <SelectValue placeholder="TMI" />
                    </SelectTrigger>
                    <SelectContent>
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
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="karim@example.com" disabled />
                <p className="text-xs text-muted-foreground">Contactez le support pour modifier votre email.</p>
              </div>
            </CardContent>
            <CardFooter className="justify-end border-t pt-6">
              <Button onClick={handleSave}>Enregistrer</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Abonnement actuel</CardTitle>
              <CardDescription>Gérez votre facturation et vos options.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-secondary/20">
                <div>
                  <div className="font-semibold text-lg">Forfait Pro</div>
                  <div className="text-sm text-muted-foreground">49€ / mois</div>
                </div>
                <Button variant="outline">Gérer sur Stripe</Button>
              </div>
              <p className="text-sm">Votre paiement suivant de 49€ sera prélevé le 12 Juin 2026.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="developer">
          <Card>
            <CardHeader>
              <CardTitle>Accès API</CardTitle>
              <CardDescription>Générez des tokens pour utiliser notre API (Upsell V2).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Token d'accès personnel</Label>
                <div className="flex gap-2">
                  <Input readOnly type="password" value="sk_test_1234567890abcdef" className="font-mono" />
                  <Button variant="secondary">Copier</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6 flex justify-between">
              <Button variant="destructive">Supprimer mon compte</Button>
              <Button variant="outline">Générer un nouveau token</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
