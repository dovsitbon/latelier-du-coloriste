# Prompt Claude Code : site « L'Atelier du Coloriste » (coloriste, Montmorency)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet de **L'Atelier du Coloriste**, le salon de **Barbara**, coloriste. Objectif business : positionner Barbara comme **la référence couleur du Val-d'Oise** (rattrapage de couleurs ratées, couleurs naturelles et lumineuses, santé du cheveu), remplir l'agenda (rendez-vous obligatoire) et prévenir clairement des modalités pratiques (paiement espèces/chèques uniquement).

## Fiche d'identité (informations vérifiées)
- **Nom** : L'Atelier du Coloriste (société BHO, dirigeante Barbara Buchmuller selon le registre `[À CONFIRMER avant d'afficher le nom de famille]`)
- **Type** : salon de coiffure spécialisé **coloration** (coloriste experte), aussi coupe
- **Adresse** : 1 rue de l'Église, 95160 Montmorency (anciennement installée 2 place de l'Église à Soisy-sous-Montmorency → mentionner le déménagement si confirmé `[À CONFIRMER]`)
- **Téléphone** : 06 21 52 38 38
- **Horaires** : mercredi au samedi 10h00–20h00 · dimanche, lundi et mardi fermés
- **Note Google** : 4,9/5 sur 73 avis
- **Rendez-vous** : **obligatoire** (pas de passage sans RDV)
- **Paiement** : **espèces et chèques uniquement** (pas de carte) → à afficher clairement
- **Accessibilité** : entrée, parking, places et toilettes accessibles en fauteuil roulant, **boucle magnétique** pour personnes malentendantes
- **Schema.org** : `HairSalon`

## Ce que disent les clientes
« La fée de la couleur », « une artiste, vos cheveux sa toile », « une magicienne ». Barbara écoute, conseille, sait dire non pour protéger le cheveu, propose des alternatives. Elle **rattrape les dégâts des couleurs « maison » et des coiffeurs amateurs**. Résultats naturels et lumineux. Produits de grande qualité, **massage du cuir chevelu** apprécié. Salon cosy, décoré avec soin, « une bulle de sérénité ». Clientes fidèles depuis 8 et 10 ans.

Extraits d'avis utilisables (« Avis Google ») :
- « Ce n'est pas une simple coloriste, c'est une artiste : vos cheveux sa toile, elle maîtrise à la perfection ses pinceaux. »
- « Elle tient compte de vos envies mais n'hésite pas à vous stopper et à suggérer des alternatives pour protéger vos cheveux. »
- « Elle est experte en couleur et sait comment rattraper les dégâts des couleurs maison et des coiffeurs amateurs. »
- « J'y vais les yeux fermés depuis plus de 10 ans et ce n'est pas près de s'arrêter ! »
- « Le résultat est toujours magnifique, naturel et lumineux. »
- « Le salon est décoré avec soin, on s'y sent bien, et le massage du cuir chevelu fait un bien fou. »

## Direction artistique (angle : « le nuancier »)
- Barbara est décrite comme une peintre : le site est un **nuancier de coloriste**. Les sections sont des **pastilles/mèches de couleur** (blond miel, cuivré, châtain, chocolat, noir bleuté, gris perle) qui servent aussi de navigation.
- Palette : fond blanc atelier, texte noir encre, et une gamme de vraies teintes de cheveux comme accents (pas d'arc-en-ciel saturé).
- Typo : une serif à caractère (ex. Gloock ou Fraunces) + une sans calme (ex. Karla).
- Idée signature : un **nuancier interactif** en tête de page (mèches dessinées en SVG/CSS ; au survol, la mèche se soulève et affiche une prestation), et une section « Rattrapage couleur » mise en scène comme un **atelier de restauration de tableau**.

## Structure
1. **Accueil** : « Barbara, coloriste à Montmorency », note 4,9/5, bouton « Prendre rendez-vous » (tel: + SMS), mention RDV obligatoire.
2. **Barbara** : son approche (écoute, conseil, protection du cheveu), portrait (photo à prendre).
3. **Les couleurs** : balayage, ombré, coloration, patine, gris/blanc assumé, etc. `[À CONFIRMER liste et tarifs]` dans `src/data/prestations.json`.
4. **Rattrapage couleur** : couleurs maison ratées, nuances inégales : comment ça se passe (diagnostic, étapes, plusieurs séances possibles `[À CONFIRMER]`).
5. **Le rituel** : diagnostic, produits de qualité, massage du cuir chevelu.
6. **Avis** : 6 extraits + 4,9/5.
7. **Infos pratiques** : horaires (mercredi → samedi, jusqu'à 20h : argument pour les actives), adresse près de l'église, accessibilité + boucle magnétique, **paiement espèces/chèques uniquement**, carte.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
