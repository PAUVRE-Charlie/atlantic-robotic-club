/**
 * This file store an article used in this website
 */

/* Packages */
import React from 'react';

/* Types */
import { Article } from '../../utils';

/* Data */
import images from '../images';
import { navigation } from '../navigation';
import team from '../team';

const article: Article = {
    id: 18,
    title: "Asservissement théorique du moteur",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Takhi'),
	preview:
		"Avant d’aller au laboratoire vérifier le modèle réel de notre moteur, nous pouvons d’ores et déjà faire un asservissement théorique en se basant sur les caractéristiques données par le constructeur.",
	body:[
        {
            title: "",
            body: (
                <React.Fragment>
                    <p>Avant d’aller au laboratoire vérifier le modèle réel de notre moteur, nous pouvons d’ores et déjà faire un asservissement théorique en se basant sur les caractéristiques données par le constructeur. Voici ce qui est indiqué par Maxon pour nos moteurs:</p>
                    <img className="bigImage" src={images.enslavement.table1.src} alt={images.enslavement.table1.name} />
                    <img className="bigImage" src={images.enslavement.table2.src} alt={images.enslavement.table2.name} />
                    <span>On connaît le modèle mathématique pour représenter un moteur à courant continu:</span>
                    <img className="bigImage" src={images.enslavement.blueprint.src} alt={images.enslavement.blueprint.name} />
                    <span>avec Km=Kb, la constante de vitesse, J le moment d’inertie, Kf la constante de frottement, L l’inductance et R la résistance interne.</span>
                    <br/>
                    <p>On obtient alors la fonction de transfert G=THETA/Va, et on peut ensuite réaliser un bon asservissement.</p>
                    <span>Plusieurs options s’offrent alors à nous. Nous allons opter, plutôt qu’un PID classique, pour un asservissement plus robuste, dans l’optique de la garder pour les années suivantes et que sa robustesse garantisse son bon fonctionnement malgré des changements possibles de modèle dus à l’usure des composants. On va donc opter pour la méthode de Placement de Pôle Robuste proposée par Philippe De Larminat.</span>
                    <br/>
                    <p>De façon analogue au réglage d’un PID, on va ici jouer sur deux paramètres, bien plus parlant: Tc et Tf, respectivement les horizons temporels de commande et de filtrage. Augmenter Tf revient à augmenter le filtrage de bruit, mais diminue la robustesse. Baisser Tc revient à être plus réactif mais baisse les marges de robustesse en même temps. C’est à nous de régler ces paramètres au mieux selon la qualité de nos capteurs et nos attentes.</p>
                    <br/>
                    <p>Ceci fera l’objet d’un prochain article, mais nous effectuerons aussi le test de cet asservissement avec un filtre de Kalman de sorte à obtenir un réglage vraiment optimal.</p>
                    <br/>
                    <p>Enfin, une fois le labo de nouveau accessible, on pourra effectuer des tests avec la base en elle-même, et donc affiner notre modèle de sorte à le rendre plus proche de la réalité. Il ne s’agit ici que de l’asservissement en nominal de notre MCC.</p>
                </React.Fragment>
            )
        },
    ]
}

export default article;