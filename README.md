# L'Atelier du Coloriste — site vitrine

Site statique Astro + Tailwind de Barbara, coloriste au 1 rue de l'Église, 95160 Montmorency.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:4412
npm run build      # génère dist/
npm run preview    # sert dist/ sur le port 4412
npm run captures   # captures pleine page 390 px et 1440 px dans captures/ (après build)
npm run og         # régénère public/og.png et public/apple-touch-icon.png
```

## Déployer

Projet Vercel importé depuis le dépôt GitHub : chaque push sur `main` redéploie. Astro statique est détecté automatiquement (aucune config nécessaire).
Après branchement du domaine définitif, changer l'URL dans `src/data/url.mjs` (un seul endroit : canonical, sitemap, robots.txt, JSON-LD, llms.txt).

## Où modifier

| Quoi | Fichier |
|---|---|
| Nom, adresse, téléphone, note Google, réseaux sociaux | `src/data/site.ts` (`SITE`) |
| Horaires (et statut « Ouvert / Fermé ») | `src/data/site.ts` (`HORAIRES`) |
| Avis affichés | `src/data/site.ts` (`AVIS`) — uniquement de vrais extraits |
| Teintes du nuancier (codes, textes au survol) | `src/data/site.ts` (`TEINTES`) |
| Prestations et tarifs | `src/data/prestations.json` (`tarif` : texte, ou `null` = [À CONFIRMER]) |
| Textes des sections | `src/pages/index.astro` |
| Mentions légales / confidentialité | `src/pages/mentions-legales.astro`, `src/pages/confidentialite.astro` |
| Photos | remplacer les blocs `<figure class="photo">` de `src/pages/index.astro` par `<Image>` d'`astro:assets` (fichiers dans `src/assets/`) — voir `PHOTOS_A_PRENDRE.md` |

Ce qui reste à fournir : `A_COMPLETER.md`.
