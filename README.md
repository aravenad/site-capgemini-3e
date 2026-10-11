# SAE 1.05-1.06 – Site Capgemini (groupe D2)

Projet de première année de BUT Informatique : créer le site institutionnel d'une entreprise du numérique
pour des élèves de 3e qui cherchent un stage. Notre groupe avait **Capgemini**.

⚠️ Ce n'est pas le site officiel de Capgemini, juste un projet étudiant.

## Ce qu'il y a sur le site

- **L'entreprise** : ce que fait Capgemini, ses chiffres, son histoire, ses concurrents…
- **Valeurs**, **Services**, **Secteurs** et **Métiers**, expliqués simplement
- **Engagements** : ce que fait l'entreprise pour le climat
- **Stage de 3e** : comment trouver et préparer son stage
- **Lexique** : tous les mots compliqués expliqués
- **Contact**

## Lancer le site

Pas besoin d'installer quoi que ce soit, c'est du HTML/CSS. Il faut juste lancer un petit serveur
depuis le dossier du projet (sinon certains navigateurs bloquent la police) :

```bash
python3 -m http.server
```

puis d'aller sur http://localhost:8000.

## Arborescence

```
├── index.html          page d'accueil
├── pages/              les autres pages du site
└── assets/
    ├── css/            la feuille de style
    ├── fonts/          la police (Torus Notched)
    └── img/
        ├── bandeaux/       images en haut des pages
        ├── illustrations/  images des valeurs, services et métiers
        └── projets/        photos des exemples de projets
```

## Nos choix

On a essayé de faire un site **sobre** comme demandé dans le sujet : images en WebP et
redimensionnées, pas de framework, presque pas de JavaScript (juste pour le formulaire de contact)
et aucun service externe. Résultat : chaque page pèse moins de 250 Ko.
Le site s'adapte aussi aux téléphones, vu que c'est surtout là-dessus que les collégiens vont le regarder.

Le formulaire de contact est une **démo** : il n'envoie rien, vu que c'est un site statique
sans serveur derrière.

## Crédits

- Chiffres et informations : site officiel et rapports annuels de Capgemini (sources sur chaque page)
- Images : banques d'images gratuites, dont les bandeaux de L'entreprise, Métiers et Engagements par vectorjuice sur Freepik
- Police : Torus Notched
