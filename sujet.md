# Git la suite

## Reprise des bases

- Initialiser un dépôt git
- Créer des fichiers
- Ajouter les fichiers au suivi
- Faire un commit
- Pousser les modifications sur un dépôt distant (GitHub, GitLab, etc.)

## Comment travailler à plusieurs sur un même projet ?

- Cloner un dépôt distant
```
git clone <url-du-depot>
```
- S'inviter sur le projet Github
- Réaliser des modifications
- Ajouter les modifications au suivi
- Commiter les modifications
- Récupérer les modifications des autres membres de l'équipe
```
git pull
```
- Pousser les modifications sur le dépôt distant

## Est ce qu'on peut faire mieux ?

GitFlow est une méthodologie de travail en équipe qui permet de mieux organiser le travail sur un projet. Elle repose sur l'utilisation de branches pour séparer les différentes étapes du développement.
Il existe plusieurs git flow...
Mais là on va rentrer dans le monde des devs...

## Sujet du TP

Maquettes de l'english game sur Teams + Quelques assets graphiques dans le dossier "assets" du projet.
travail à 2 ou 3 personnes.
Environnement un peu dégradé (pas de maquette Figma) => Demo avec Figma

### Stack technique

- HTML + SCSS (sass) pas de framework CSS (bootstrap c'est ciao)
- Git pour le versionning
- Github pour travailler en équipe
- PAS DE JAVASCRIPT !!!

### Infos design

- Police principale : 'Inter', sans-serif

```scss
h1,
h2,
h3,
h4,
p,
.s,
.s-bold,
.xs,
.xs-bold,
.link,
.link-bold,
.xs-link {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

h1 {
  font-size: 48px;
  font-weight: 800;
  line-height: 57.6px;

  @media screen and (min-width: $width-menu-xl) {
    font-size: 64px;
    line-height: 76.8px;
  }
}

h2 {
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
}

h3 {
  font-weight: 600;
  font-size: 32px;
  line-height: 38.4px;
}

h4 {
  font-weight: 600;
  font-size: 24px;
  line-height: 28.8px;
}

p {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}

.bold {
  font-weight: 600;
}

.bolder {
  font-size: 24px;
  font-weight: 800;
  line-height: 28.8px;

  @media screen and (min-width: $width-menu-xl) {
    font-size: 32px;
    line-height: 38.4px;
  }
}

.s {
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
}

.s-bold {
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
}

.xs {
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
}

.xs-bold {
  font-weight: 600;
  font-size: 14px;
  line-height: 16.8px;
}

.link {
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  text-decoration: underline;
}

.link-bold {
  font-weight: 600;
  font-size: 16px;
  line-height: 22.4px;
  text-decoration: underline;
}

.xs-link {
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  text-decoration: underline;
}
```

- Couleurs principales : Utilisez un color picker de votre choix !

```scss
$primary100: #cffefb;
$primary200: #a5fcf8;
$primary300: #68f8f3;
$primary400: #23edea;
$primary500: #07d3d3;
$primary600: #09aab1;
$primary700: #0f878f;
$primary800: #166f78;
$primary900: #165963;
$primary950: #083c44;

$secondary100: #fff3c6;
$secondary200: #ffe588;
$secondary300: #ffd34a;
$secondary400: #ffbd1d;
$secondary500: #f99c07;
$secondary600: #dd7402;
$secondary700: #b75106;
$secondary800: #943d0c;
$secondary900: #7a330d;
$secondary950: #461902;

$neutral0: #ffffff;
$neutral100: #f5f5f5;
$neutral150: #ededed;
$neutral200: #e6e6e6;
$neutral300: #d6d6d6;
$neutral400: #a5a5a5;
$neutral500: #767676;
$neutral600: #575757;
$neutral700: #434343;
$neutral800: #292929;
$neutral900: #1a1a1a;
$neutral950: #101010;

$other_warning: #ff8a22;
$other_warning-hover: #ff7800;
$other_blue-mds-logo: #43bccb;
$other_blue-mds-logo-icon: #65c8d5;
```

- Gérer les espacements avec des multiples de 8px