/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE MANUEL (LES PAIRS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de nombres, par exemple [1, 2, 3, 4, 5, 6], 
 * et retourne un NOUVEAU tableau ne contenant que les nombres pairs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day04/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function pairs(tableau)
{
    let i = 0
    let pairs = []
    while(i < tableau.length)
    {
        if(tableau[i] % 2 == 0)
            pairs.push(tableau[i])
        i++
    }
    return pairs
}
let tableau = [1, 8, 2, 9, -4]
console.log(pairs(tableau))