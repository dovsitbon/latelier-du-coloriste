import type { APIRoute } from 'astro';
import { SITE, HORAIRES, fmtHeure } from '../data/site';
import data from '../data/prestations.json';

export const GET: APIRoute = () => {
  const u = (p: string) => new URL(p, SITE.url).href;
  const horaires = HORAIRES.map((h) => `${h.nom} : ${h.plages.length ? h.plages.map(([o, f]) => `${fmtHeure(o)}–${fmtHeure(f)}`).join(', ') : 'fermé'}`).join(' ; ');
  const txt = `# ${SITE.nom} (Montmorency)

> Salon de coiffure spécialisé en coloration, tenu par Barbara, coloriste, au ${SITE.adresseTexte} (Val-d'Oise), près de l'église. Couleurs naturelles et lumineuses, rattrapage de couleurs maison ratées, protection du cheveu. Note Google ${SITE.note}/5 sur ${SITE.nbAvis} avis.

- Téléphone (appel ou SMS) : ${SITE.telAffiche}
- Rendez-vous obligatoire : pas de passage sans réservation
- Paiement : espèces et chèques uniquement (carte bancaire non acceptée)
- Horaires : ${horaires}
- Accessibilité : entrée, parking, places et toilettes accessibles en fauteuil roulant ; boucle magnétique pour personnes malentendantes
- Prestations : ${data.prestations.map((p) => p.nom).join(', ')} (tarifs communiqués au salon)
- Communes proches : ${SITE.voisines.join(', ')}

## Pages
- [Accueil](${u('/')}) : Barbara, les couleurs, rattrapage couleur, le rituel, avis, infos pratiques
- [Mentions légales](${u('/mentions-legales/')})
- [Confidentialité](${u('/confidentialite/')})
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
