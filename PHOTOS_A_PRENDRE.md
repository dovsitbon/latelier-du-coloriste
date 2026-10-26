# Photos à prendre au salon

Aucune photo Google Maps / Facebook / Instagram n'a été reprise (droits des clientes et du salon). Trois emplacements attendent des photos ; ils sont pour l'instant des aplats de teinte avec la légende du cliché.

Conseils généraux : lumière du jour (milieu de matinée, salon vide), pas de flash, téléphone en mode photo standard (pas portrait/flou artificiel), fichiers JPG ou HEIC en pleine résolution. Accord écrit de toute personne reconnaissable.

| # | Emplacement | Cliché | Format | Notes |
|---|---|---|---|---|
| 1 | Section « Barbara » | Portrait de Barbara au travail, pinceau ou bol de couleur en main, regard vers la mèche (pas vers l'objectif). | Vertical 4:5, min. 1600 × 2000 px | Lumière latérale d'une fenêtre. Fond : un coin du salon décoré, pas le miroir. |
| 2 | Section « Le rituel », grande photo | Le salon vide, vue d'ensemble depuis l'entrée, lampes allumées. | Horizontal 3:2, min. 2400 × 1600 px | Ranger les produits du poste ; montrer la décoration (« salon cosy »). Téléphone à hauteur de poitrine, bien droit. |
| 3 | Section « Le rituel », petite photo | Gros plan des mains de Barbara pendant le massage du cuir chevelu, au bac. | Horizontal 3:2 ou carré, min. 1600 px de large | Cadrer les mains et les cheveux, pas le visage de la cliente. |

Bonus (facultatif, pour une future galerie « avant / après » rattrapage) : mêmes cadrage, lumière et position avant et après, avec l'accord écrit de la cliente.

Intégration : placer les fichiers dans `src/assets/`, puis remplacer chaque `<figure class="photo">` de `src/pages/index.astro` par un composant `<Image>` d'`astro:assets` (AVIF/WebP automatiques, `loading="lazy"`), avec un `alt` descriptif (ex. « Barbara applique une couleur au pinceau sur une mèche »).
