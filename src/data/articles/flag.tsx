/**
 * This file store an article used in this website
 */

/* Packages */
import React from 'react';
import MathJax from 'react-mathjax';

/* Types */
import { Article } from '../../utils';

/* Data */
import images from '../images';
import { navigation } from '../navigation';
import team from '../team';

const article: Article = {
    id: 16,
    title: "Dispositif pour hisser les pavillons",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Hamel'),
	preview:
		"L’objectif de ce dispositif est de hisser deux pavillons de surface supérieur à 30 cm2 chacun au-delà d’une hauteur de 35cm dans les 5 dernières secondes du match. Cette mission permet de rapporter 10 points lors de la coupe si elle est réussie.",
	body:[
        {
            title: "Objectif",
            body: (
                <React.Fragment>
                    <span>L’objectif de ce dispositif est de hisser deux pavillons de surface supérieur à 30 cm2 chacun au-delà d’une hauteur de 35cm dans les 5 dernières secondes du match. Cette mission permet de rapporter 10 points lors de la coupe si elle est réussie.</span>
                </React.Fragment>
            )
        },
        {
            title: "Considérations physiques",
            body: (
                <MathJax.Provider>
                    <div className="mathJaxContainer">
                        <span>Pour atteindre cet objectif, nous allons mettre en œuvre un dispositif qui s’apparente à une glissière qui coulisse dans son support. Cette glissière sera projetée en l’air grâce à un ressort et maintenue en l’air grâce à un aimant. Commençons par modéliser théoriquement notre glissière. On assimilera cette glissière par un point matériel dans un premier temps de masse m posée sur un support de masse m’ et on ne prendra pas en compte les frottements. Le schéma suivant illustre la situation de départ à gauche et la situation finale à droite. On prendra comme origine la position à l’équilibre du système.</span>
                        <img className="smallImage" src={images.flag.blueprint.src} alt={images.flag.blueprint.name} />
                        <span>On appuie ensuite à <MathJax.Node inline formula={`t=0`} /> sur sur le plateau qui se déplace vers le bas d’une distance d et on le lâche sans vitesse initiale.</span>
                        <span>L’allongement algébrique <MathJax.Node inline formula={`𝚫z_{eq}`} /> du ressort lorsque l’ensemble est à l’équilibre est: </span>
                        <MathJax.Node formula={`𝚫z_{eq} = - \\frac{m+m'}{k}*g`}/>
                        <span>L’équation différentielle régissant les oscillations est: </span>
                        <MathJax.Node formula={`\\frac{d^2z}{dt^2} + \\frac{k}{m+m'}z = 0`} />
                        <span> avec comme pulsation de référence: </span>
                        <MathJax.Node formula={`\\omega_0^2=\\frac{k}{m+m'}`} />
                        <span>La loi horaire est de la forme: </span>
                        <MathJax.Node formula={`z(t)=-d \\cos{(\\omega_0t)}`} />
                        <span>Intéressons nous maintenant à la condition à laquelle la masse va quitter le support.</span>
                        <span>La réaction du support prend la forme suivante: </span>
                        <MathJax.Node formula={`R = m(d\\omega_0^2\\cos{(\\omega_0t)}+g)`} />
                        <span>La masse pourra décoller seulement si <MathJax.Node inline formula={`R=0`} />, ce qui revient à ce que <MathJax.Node inline formula={`-1\\le -\\frac{g}{d\\omega_0^2} \\le 1`} />.</span>
                        <br/>
                        <span>Ce qui revient à: <MathJax.Node inline formula={`g < d\\omega_0^2`}/>.</span>
                        <span>Cherchons maintenant à déterminer la distance <MathJax.Node inline formula={`d`} /> que l’on doit enfoncer le ressort pour pouvoir obtenir la hauteur <MathJax.Node inline formula={`H`} /> désirée.</span>
                        <span>On utilise pour cela le théorème de l’énergie mécanique en supposant aucune force externe ni non conservative. On obtient les relations suivantes:</span>
                        <MathJax.Node formula={`E_{m,initiale} = E_{m,finale}`}/>
                        <MathJax.Node formula={`\\frac{k(d+\\frac{(m+m')*g}{k})^2}{2}-m*g*d=m*g*H`}/>
                        <span>Il reste plus qu’à résoudre cette équation d’ordre 2 en imposant la condition d’obtenir une valeur positive de <MathJax.Node inline formula={`d`} />.</span>
                    </div>
                    
                </MathJax.Provider>
            )
        },
        {
            title: "Modélisation",
            body: (
                <React.Fragment>
                    <p>Nous avons modélisé sur le logiciel Autodesk Fusion 360 la glissière, son support et la structure permettant de la faire glisser. Il s’agit d’une première modélisation qui sera affinée par la suite en fonction des différents essais qui permettra de valider ou non la théorie. Les dimensions et le design sont amenés à changer en fonction de la base mobile finale. La modélisation à gauche représente la glissière totalement baissée alors que celle de droite montre la glissière relevée à la hauteur attendue. Sur cette modélisation ne sont pas représentés le ressort, le support et le moteur qui actionne le mécanisme qui libérera la glissière au moment attendu.</p>
                    <div className="multipleImages">
                        <img className="verySmallImage" src={images.flag.model1.src} alt={images.flag.model1.name} />
                        <img className="verySmallImage" src={images.flag.model2.src} alt={images.flag.model2.name} />
                    </div>
                </React.Fragment>
            )
        },
        {
            title: "Expériences",
            body: (
                <React.Fragment>
                    <p>La première expérience consistera à vérifier la hauteur atteinte par la glissière grâce à l’impulsion initiale donnée au ressort ainsi que de vérifier le temps mis par la glissière pour atteindre cette hauteur. La seconde expérience consistera quant à elle à tester le mécanisme qui libérera la glissière grâce à l’action du moteur et à valider le mécanisme d’arrêt de la glissière à la hauteur souhaitée.</p>
                </React.Fragment>
            )
        },
        {
            title: "Conclusion et perspectives",
            body: (
                <React.Fragment>
                    <p>En l’état actuel des choses, il reste à imprimer les pièces de la modélisation et à commander le matériel pour réaliser les expériences au mois de Janvier.</p>
                </React.Fragment>
            )
        },
        {
            title: "Bibliographie",
            body: (
                <React.Fragment>
                    <ul>
                        <li><a href="https://www.camerecole.org/classes/135-correction-les-oscillateurs-mecaniques.html#les-oscillateurs-mecaniques-13">Concept théorique</a> (Exercice VII)</li>
                        <li>Modélisation librement inspirée de l'équipe des Karibous</li>
                    </ul>
                </React.Fragment>
            )
        },
    ]
}

export default article;