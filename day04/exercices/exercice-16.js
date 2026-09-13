/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SCRAPING : EXTRACTION DE DONNÉES MIXTES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez "scrappé" une page mal codée et obtenu ce tableau : ["Prix", 15.5, null, "Quantite", 3, undefined, "Total", 46.5]. Écrivez une fonction qui filtre ce tableau pour ne garder QUE les nombres valides.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day04/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function filtrerNombres(tableau)
{
    let nombres = []
    let i = 0
    while(i < tableau.length)
    {
        if(typeof tableau[i] === "number")
            nombres.push(tableau[i])
        i++
    }
    return nombres
}

let tableau = ["Hind", 15.5, false, 3, undefined, "Total", 46.5]
console.log(filtrerNombres(tableau))