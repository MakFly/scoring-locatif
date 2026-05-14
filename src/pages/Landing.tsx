import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, FileText, Upload, Calculator, ArrowRight, Star, Building2, TrendingUp, AlertCircle } from "lucide-react";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section - Minimalist & Trust focused */}
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden border-b border-border/40">
        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <Badge variant="outline" className="mb-8 py-1.5 px-4 rounded-full border-primary/20 text-primary font-medium animate-in fade-in slide-in-from-top-4 duration-1000">
            Version 2.0 • Compatible Réforme LMNP 2025
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-balance bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Le pré-achat intelligent pour <span className="text-primary italic">investisseurs locatifs</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            Collez une annonce. On chiffre vos travaux, votre marge et votre fiscalité <strong>avant la visite</strong>. En 30 secondes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/eval/new" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-10 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                Évaluer une annonce gratuitement
              </Button>
            </Link>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-lg h-14 px-10 border border-transparent hover:border-border">
              Voir une démo (45s)
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 grayscale opacity-60">
            <div className="flex items-center gap-2 font-semibold"><Star className="w-5 h-5 text-amber-500 fill-amber-500"/> Trustpilot 4.8/5</div>
            <div className="font-bold flex items-center gap-2"><Check className="w-5 h-5 text-primary"/> Conforme AI Act</div>
            <div className="font-bold flex items-center gap-2"><Check className="w-5 h-5 text-primary"/> Audit DVF 2024</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_100%)] opacity-[0.03] pointer-events-none" />
      </section>

      {/* Problem Section - Market Shock */}
      <section className="py-24 border-b border-border/40 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Trois chocs ont rendu <span className="text-primary">votre Excel obsolète.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Le marché immobilier français a changé plus en 18 mois qu'en 20 ans. Utiliser un simulateur classique en 2025, c'est risquer l'erreur fiscale majeure.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-xl bg-background border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><AlertCircle className="text-primary"/></div>
                  <div>
                    <h4 className="font-bold">Réforme LMNP 2025</h4>
                    <p className="text-sm text-muted-foreground">Les amortissements sont désormais réintégrés lors de la revente. Nous sommes les seuls à l'intégrer nativement.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-background border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0"><Shield className="text-amber-500"/></div>
                  <div>
                    <h4 className="font-bold">DPE & Interdiction de louer</h4>
                    <p className="text-sm text-muted-foreground">Calendrier 2025-2034 intégré. On calcule pour vous les travaux d'isolation nécessaires pour sortir du statut "passoire".</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-2xl border-primary/20 rotate-1 flex flex-col justify-center items-center p-8 text-center bg-card">
                 <TrendingUp className="w-12 h-12 text-primary mb-4" />
                 <h3 className="text-4xl font-mono font-bold">14s</h3>
                 <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">Temps d'analyse</p>
              </Card>
              <Card className="shadow-2xl -rotate-1 flex flex-col justify-center items-center p-8 text-center bg-card">
                 <Building2 className="w-12 h-12 text-primary mb-4" />
                 <h3 className="text-4xl font-mono font-bold">82%</h3>
                 <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">Précision Travaux</p>
              </Card>
              <Card className="col-span-2 shadow-2xl rotate-1 p-6 bg-primary text-primary-foreground">
                 <h4 className="font-bold mb-2">Verdict instantané</h4>
                 <p className="text-sm opacity-90">"Score GO : Le prix est 8% sous le marché local DVF. Rentabilité nette-nette de 6.2% après travaux d'énergies."</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">L'outil d'audit immobilier le plus complet.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour prendre une décision ferme, avant que l'annonce ne disparaisse.
            </p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-4 max-w-6xl mx-auto">
            <Card className="md:col-span-8 bg-muted/40 border-none overflow-hidden group">
              <CardHeader>
                <Badge className="w-fit mb-2">Unique sur le marché</Badge>
                <CardTitle className="text-2xl">Audit instantané de Copropriété</CardTitle>
                <CardDescription className="text-base">Glissez un PV d'AG, l'IA détecte les impayés, les ravalements votés et l'état du fonds de travaux ALUR.</CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="bg-background rounded-lg p-4 border border-border/50 group-hover:translate-y-[-8px] transition-transform duration-500 shadow-sm">
                   <div className="flex items-center gap-3 border-b pb-3 mb-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">Projet_AG_2024_Marseille.pdf</span>
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden"><div className="h-full bg-primary w-[75%]" /></div>
                      <p className="text-[10px] text-muted-foreground">Extraction des résolutions en cours...</p>
                   </div>
                </div>
              </div>
            </Card>

            <Card className="md:col-span-4 bg-muted/40 border-none">
              <CardHeader>
                <CardTitle className="text-2xl">Vision Travaux</CardTitle>
                <CardDescription className="text-base text-balance">L'IA analyse les photos de l'annonce et estime le CAPEX poste par poste.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center p-6 pt-0">
                <div className="w-full aspect-square bg-background rounded-xl border border-dashed flex items-center justify-center">
                  <Upload className="w-8 h-8 text-muted-foreground opacity-30" />
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-4 bg-muted/40 border-none">
              <CardHeader>
                <CardTitle className="text-lg">DVF & PLU</CardTitle>
                <CardDescription>Données officielles de l'état pour chaque adresse.</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="md:col-span-8 bg-muted/40 border-none">
              <CardHeader>
                <CardTitle className="text-2xl">Le Co-pilote Fiscal</CardTitle>
                <CardDescription className="text-base">Simulation comparative sur 10 ans : LMNP réel, Micro-BIC, Déficit Foncier ou SCI IS.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 bg-card border-y border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Karim, Lyon", quote: "J'ai failli acheter un studio en passoire thermique. ScoringDeal m'a alerté sur les 12k€ de travaux d'isolation oubliés dans mon Excel.", role: "Ingénieur, 4 biens" },
              { name: "Sophie, Bordeaux", quote: "L'audit du PV d'AG est incroyable. J'ai découvert 15% d'impayés dans la copro avant même de signer l'offre.", role: "SCI Familiale" },
              { name: "Marc, Paris", quote: "Enfin un outil qui comprend la réforme LMNP 2025. Le calcul de la plus-value latente change tout.", role: "Investisseur aguerri" }
            ].map((t, i) => (
              <div key={i} className="space-y-4">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                </div>
                <p className="italic text-lg text-balance">"{t.quote}"</p>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Sales structure */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Investissez avec certitude.</h2>
            <p className="text-muted-foreground text-lg">Choisissez le forfait adapté à votre ambition.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="flex flex-col border-none shadow-sm bg-muted/30">
              <CardHeader>
                <CardTitle className="text-xl">Solo</CardTitle>
                <CardDescription>Pour évaluer vos premiers projets.</CardDescription>
                <div className="mt-4 font-mono text-4xl font-bold">29€<span className="text-xl font-sans text-muted-foreground font-normal">/mois</span></div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" /> 5 évaluations / mois</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" /> Vision IA travaux</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" /> Simu fiscale 3 régimes</li>
                  <li className="flex items-center gap-3 text-muted-foreground"><Check className="h-4 w-4" /> Export PDF</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Commencer l'essai</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-primary shadow-2xl relative scale-105 z-10 bg-card">
              <div className="absolute top-0 right-0 p-4">
                <Badge className="bg-primary text-primary-foreground font-bold">CONSEILLÉ</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <CardDescription>Pour les investisseurs actifs.</CardDescription>
                <div className="mt-4 font-mono text-4xl font-bold">49€<span className="text-xl font-sans text-muted-foreground font-normal">/mois</span></div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 text-sm font-semibold">
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" /> Évaluations illimitées</li>
                  <li className="flex items-center gap-3 text-primary"><Check className="h-4 w-4" /> OCR PV AG copro</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" /> Portefeuille jusqu'à 5 biens</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" /> Accès Comparables DVF</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full shadow-lg shadow-primary/30">Essai gratuit 14 jours</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-none shadow-sm bg-muted/30">
              <CardHeader>
                <CardTitle className="text-xl">Patrimoine</CardTitle>
                <CardDescription>Multi-biens & Marchands.</CardDescription>
                <div className="mt-4 font-mono text-4xl font-bold">99€<span className="text-xl font-sans text-muted-foreground font-normal">/mois</span></div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" /> Biens illimités</li>
                  <li className="flex items-center gap-3 font-semibold text-primary"><Check className="h-4 w-4" /> Dossier banque exportable</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" /> Multi-immeubles mixtes</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" /> Support prioritaire</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Contacter un conseiller</Button>
              </CardFooter>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Sans carte bancaire. Annulation en un clic depuis votre espace.</p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Arrêtez de deviner. Commencez à scorer.</h2>
          <Link to="/eval/new">
            <Button size="lg" variant="secondary" className="text-lg h-14 px-12 group">
              Évaluer mon premier deal gratuitement
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                 <Calculator className="w-6 h-6 text-primary" /> ScoringDeal
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Le premier outil IA certifié pour l'investissement locatif en France. Aide à la décision, pas de conseil financier.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produit</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/eval/new" className="hover:text-foreground">Calculatrice de deal</Link></li>
                <li><Link to="/copro/new" className="hover:text-foreground">Audit de copropriété</Link></li>
                <li><Link to="/portfolio" className="hover:text-foreground">Gestion de portefeuille</Link></li>
                <li><Link to="#" className="hover:text-foreground">DVF Open Data</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Alternatives</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground">Vs Horiz.io</Link></li>
                <li><Link to="#" className="hover:text-foreground">Vs Lybox</Link></li>
                <li><Link to="#" className="hover:text-foreground">Vs RendementLocatif</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground">Confidentialité & RGPD</Link></li>
                <li><Link to="#" className="hover:text-foreground">Conditions Générales</Link></li>
                <li><Link to="#" className="hover:text-foreground">AI Act Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t border-border/50 text-xs text-muted-foreground">
            <p>© 2026 ScoringDeal Locatif. Tous droits réservés.</p>
            <p>Made in France 🇫🇷 avec passion.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <Link to="/eval/new">
          <Button size="lg" className="w-full shadow-2xl h-14 text-lg">
            Scorer un deal maintenant
          </Button>
        </Link>
      </div>
    </div>
  );
}

