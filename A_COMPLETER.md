# À compléter avant mise en ligne définitive

Chaque point correspond à un marqueur `[À CONFIRMER]` visible sur le site, ou à une information volontairement omise.

## Salon
- [ ] **Liste des prestations** : confirmer la liste (balayage, ombré, coloration, patine, gris/blanc assumé, rattrapage, coupe) → `src/data/prestations.json`.
- [ ] **Tarifs** de chaque prestation (7 marqueurs « Tarif [À CONFIRMER] ») → champ `tarif` du même fichier.
- [ ] **Rattrapage couleur** : nombre et espacement habituels des séances ; durée et tarif d'un rattrapage → `src/pages/index.astro`, section « Fiche de restauration ».
- [ ] **Marques de produits** utilisées (section « Le rituel »).
- [ ] **Déménagement** : confirmer que le salon était bien 2 place de l'Église à Soisy-sous-Montmorency avant (section Infos pratiques). Si non confirmé, supprimer la phrase.
- [ ] **Nom de famille de Barbara** : le registre indique Barbara Buchmuller (dirigeante de BHO). Non affiché tant que Barbara n'a pas donné son accord.
- [ ] **Réseaux sociaux** (Instagram, Facebook, fiche Google) : aucun lien fourni → ajouter les URL dans `SITE.reseaux` (`src/data/site.ts`), elles alimentent `sameAs` du JSON-LD.
- [ ] **Coordonnées GPS** (`geo` du JSON-LD) : omises faute de coordonnées vérifiées. Récupérer latitude/longitude depuis la fiche Google du salon et les ajouter dans `src/layouts/Base.astro`.
- [ ] **Codes teintes** du nuancier (8.3, 6.44, 5, 4.7, 1.1, 10.1) : codes de hauteur de ton/reflet indicatifs choisis pour le design. Barbara peut les remplacer par ses propres références → `TEINTES` dans `src/data/site.ts`.

## Mentions légales
- [ ] Forme juridique et capital social de BHO
- [ ] SIRET, RCS
- [ ] N° de TVA intracommunautaire
- [ ] Adresse du siège social (si différente du salon)
- [ ] E-mail de contact (aussi utilisé dans la politique de confidentialité)
- [ ] Nom complet de la directrice de la publication

## Après déploiement
- [ ] Remplacer l'URL provisoire dans `src/data/url.mjs` si un domaine est acheté.
- [ ] Déclarer le site dans Google Search Console et lier le site à la fiche Google Business Profile.
- [ ] Vérifier la note Google (4,9/5, 73 avis) et la mettre à jour dans `SITE.note` / `SITE.nbAvis` de temps en temps.
