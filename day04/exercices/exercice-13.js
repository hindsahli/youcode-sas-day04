/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPARAISON DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction sontEgaux(tab1, tab2) qui vérifie si deux tableaux contiennent exactement les mêmes éléments dans le même ordre.
 *  (Rappel: [1] == [1] donne false en JS !).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day04/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function sontEgaux(tab1, tab2)
{
    if(tab1.length != tab2.length )
        return false

    let k = 0
    let i = 0
    let j = 0
    while(i<tab1.length)
    {
        if (tab1[i] !== tab2[i])
        {
            k = 1
            break
        }
        i++
        j++
    }

    if(k == 0)
        return true

    return false
}
let tab1 = [1, 2, 2, 3, 9, 4, 5, 10]
let tab2 = [1, 2, 2, 3, 4, 4, 5]
console.log(sontEgaux(tab1, tab2))
