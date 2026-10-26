// Données du salon : NAP, horaires, liens, avis. Modifier ici, tout le site suit.
import { SITE_URL } from './url.mjs';

const adresseTexte = "1 rue de l'Église, 95160 Montmorency";

export const SITE = {
  url: SITE_URL,
  nom: "L'Atelier du Coloriste",
  prenom: 'Barbara',
  societe: 'BHO',
  adresse: { rue: "1 rue de l'Église", cp: '95160', ville: 'Montmorency', pays: 'FR' },
  adresseTexte,
  telAffiche: '06 21 52 38 38',
  telLien: '+33621523838',
  smsLien: 'sms:+33621523838',
  note: '4,9',
  noteNum: 4.9,
  nbAvis: 73,
  itineraire: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("L'Atelier du Coloriste, " + adresseTexte)}`,
  carte: `https://www.google.com/maps?q=${encodeURIComponent("L'Atelier du Coloriste, " + adresseTexte)}&output=embed`,
  // Réseaux sociaux : aucun lien confirmé pour l'instant (voir A_COMPLETER.md). Ajouter les URL ici.
  reseaux: [] as string[],
  voisines: ['Soisy-sous-Montmorency', 'Groslay', 'Deuil-la-Barre', 'Saint-Brice-sous-Forêt', 'Montmagny', 'Sarcelles', 'Domont', 'Ézanville'],
};

// Horaires. jour : 0 = dimanche … 6 = samedi. Format 24 h "HH:MM". Plusieurs plages possibles par jour.
export const HORAIRES: { jour: number; nom: string; plages: [string, string][] }[] = [
  { jour: 3, nom: 'Mercredi', plages: [['10:00', '20:00']] },
  { jour: 4, nom: 'Jeudi', plages: [['10:00', '20:00']] },
  { jour: 5, nom: 'Vendredi', plages: [['10:00', '20:00']] },
  { jour: 6, nom: 'Samedi', plages: [['10:00', '20:00']] },
  { jour: 0, nom: 'Dimanche', plages: [] },
  { jour: 1, nom: 'Lundi', plages: [] },
  { jour: 2, nom: 'Mardi', plages: [] },
];

export const fmtHeure = (h: string) => h.replace(':00', 'h').replace(':', 'h');

// Les 6 extraits d'avis fournis (Avis Google). Ne jamais en ajouter d'inventés.
export const AVIS = [
  "Ce n'est pas une simple coloriste, c'est une artiste : vos cheveux sa toile, elle maîtrise à la perfection ses pinceaux.",
  "Elle tient compte de vos envies mais n'hésite pas à vous stopper et à suggérer des alternatives pour protéger vos cheveux.",
  "Elle est experte en couleur et sait comment rattraper les dégâts des couleurs maison et des coiffeurs amateurs.",
  "J'y vais les yeux fermés depuis plus de 10 ans et ce n'est pas près de s'arrêter !",
  "Le résultat est toujours magnifique, naturel et lumineux.",
  "Le salon est décoré avec soin, on s'y sent bien, et le massage du cuir chevelu fait un bien fou.",
];

// Les six teintes du nuancier = les six sections de l'accueil.
export const TEINTES = [
  { id: 'barbara', code: '8.3', nom: 'Blond miel', hex: '#C99A4B', clair: '#E2BE7C', fonce: '#9C7333', section: 'Barbara', note: "L'écoute avant le pinceau" },
  { id: 'couleurs', code: '6.44', nom: 'Cuivré', hex: '#A5532A', clair: '#C9733F', fonce: '#7A3A1C', section: 'Les couleurs', note: 'Balayage, ombré, patine, gris assumé' },
  { id: 'rattrapage', code: '5', nom: 'Châtain', hex: '#6B4428', clair: '#8E6040', fonce: '#4C2F1B', section: 'Rattrapage', note: 'Une couleur maison à reprendre' },
  { id: 'rituel', code: '4.7', nom: 'Chocolat', hex: '#3E2618', clair: '#5E3D29', fonce: '#26170E', section: 'Le rituel', note: 'Diagnostic, soin, massage' },
  { id: 'avis', code: '1.1', nom: 'Noir bleuté', hex: '#1E2430', clair: '#3A4458', fonce: '#0F131A', section: 'Avis', note: '4,9/5 sur 73 avis Google' },
  { id: 'infos', code: '10.1', nom: 'Gris perle', hex: '#B9B7B3', clair: '#D9D7D3', fonce: '#8F8C87', section: 'Infos pratiques', note: 'Du mercredi au samedi, 10h à 20h' },
];
