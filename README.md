# SAE1.05-1.06_D2_Capgemini

Site web institutionnel de **Capgemini** à destination des **élèves de 3e** qui cherchent un stage,
réalisé dans le cadre de la SAE 1.05–1.06 du BUT Informatique (groupe D2).

> Ce n'est pas le site officiel de Capgemini.

## Les pages

| Page | Contenu |
| --- | --- |
| `index.html` | Accueil : Capgemini en bref et accès aux autres pages |
| `entreprise.html` | Activité, chiffres clés, histoire, organisation, clients, concurrents, financement, stratégie |
| `valeurs.html` | Les 7 valeurs du groupe, avec des exemples concrets |
| `services.html` | Ce que Capgemini vend à ses clients |
| `secteurs.html` | Les secteurs des clients (part du chiffre d'affaires) et des exemples de projets |
| `metiers.html` | Quelques métiers, leurs qualités et les études pour y arriver |
| `engagements.html` | Transition écologique et numérique : émissions, objectifs, résultats, difficultés |
| `nous-rejoindre.html` | Le stage de 3e : ce que c'est, comment le trouver, comment s'y préparer |
| `contact.html` | Coordonnées du site de Grenoble et formulaire de démonstration |
| `lexique.html` | Le vocabulaire de l'entreprise et du numérique expliqué simplement |

## Choix techniques

- **HTML et CSS seulement**, sans framework ni outil de build. Le seul JavaScript (quelques lignes)
  sert au formulaire de contact.
- **Responsive « mobile d'abord »** : la mise en page est pensée pour le téléphone, puis élargie
  sur grand écran.
- **Sobriété** : images en WebP redimensionnées (avec une version mobile pour les bandeaux),
  police réduite aux caractères utiles en WOFF2, aucune ressource externe ni traceur.
  Chaque page pèse moins de 250 Ko.
- **Accessibilité** : lien d'évitement, contrastes conformes WCAG AA, navigation au clavier,
  textes alternatifs, respect de `prefers-reduced-motion`.
- HTML et CSS validés avec le validateur du W3C (Nu Html Checker).

## Lancer le site en local

Le site est statique, il suffit d'un petit serveur, par exemple :

```bash
python3 -m http.server 5501
```

puis d'ouvrir <http://localhost:5501>.

## Arborescence

```
.
├── *.html          les pages
├── style/style.css la feuille de style unique
├── font/           la police Torus Notched (WOFF2)
└── img/            les images (WebP) et le favicon
```

L'en-tête et le pied de page sont identiques sur toutes les pages : penser à modifier chaque
fichier en cas de changement du menu.
