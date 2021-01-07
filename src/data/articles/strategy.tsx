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
    id: 15,
    title: "Stratégie de l’ARC",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Nesme'),
	preview:
		"Après observation des match disputés cette année nous avons remarqué que la phase de détection et classement des bouées sur les bandes de couleurs des ports était une étape chronophage et souvent peu rentable pour les équipes avec peu d’expérience. C’est pourquoi notre stratégie de base consiste en la collecte des points ne nécessitant que très peu (voir aucune) de détection de couleurs et n’ayant que peu de chances (ibid) d’être contesté par l’adversaire.",
	body:[
        {
            title: "Rappels du système de comptage de points",
            body: (
                <React.Fragment>
                    <h4>L'aire de jeu:</h4>
                    <img className="mediumImage" src={images.strategy.table_blueprint.src} alt={images.strategy.table_blueprint.name} />
                    <img className="mediumImage" src={images.strategy.table_upView.src} alt={images.strategy.table_upView.name} />
                    <span>On rappelle le nombre de point obtenus par mission accomplis:</span>
                    <h4>Manches à air:</h4>
                    <ul>
                        <li>5 points si 1 seul manche à air est relevé à la fin</li>
                        <li>15 points si les deux manches sont relevés à la fin</li>
                    </ul>
                    <h4>Phare:</h4>
                    <ul>
                        <li>2 points si le phare est déposé sur la zone rocheuse pendant la phase de préparation</li>
                        <li>3 points supplémentaires si le phare est activé pendant la partie (et le reste jusqu’à la fin)</li>
                        <li>10 points supplémentaires si le phare est correctement déployé et allumé avant la fin du match</li>
                    </ul>
                    <h4>Arriver à bon port:</h4>
                    <ul>
                        <p>Si l’équipe a un seul robot:</p>
                        <li>20 points si le robot est valide dans la zone indiquée par la girouette</li>
                        <li>6 points si le robot est valide dans la mauvaise zone</li>
                        <p>Si l’équipe a 2 robots:</p>
                        <li>20 points si les deux robots sont valides dans la zone de mouillage indiquée par la girouette</li>
                        <li>6 points si les deux robots sont valides dans la mauvaise zone de mouillage</li>
                        <li>13 points si un des deux robots est valide dans la zone de mouillage indiquée par la girouette</li>
                        <li>0 point si les deux robots sont valides mais dans des zones de mouillage différentes</li>
                    </ul>
                    <h4>Pavillons:</h4>
                    <ul>
                        <li>10 points si au moins un des robots de l’équipe a hissé 2 pavillons minimum avant la fin</li>
                    </ul>
                    <h4>Bouées:</h4>
                    <p>Les 30 bouées à la dérive, qui se situent directement sur l’aire de jeu.</p>
                    <ul>
                        <li>4 bouées sont directement assignées à chaque port et sont réservées à l’équipe qui détient le port (chaque équipe a 2 ports, donc 8 bouées assignées).</li>
                        <li>8 bouées restantes sont au centre de l’aire et accessibles par n’importe laquelle des équipes.</li>
                        <li>6 bouées sont dans la zone de haut fond et sont disposées aléatoirement par paquets de 3 de part et d’autres de l’axe de symétrie de l’aire de jeu. Elles sont accessibles par les 2 équipes.</li>
                    </ul>
                    <p>Les 20 bouées “échouées”, qui se situent sur des écueils situés sur les côtés.</p>
                    <ul>
                        <li>10 bouées sont situées sur les parties latérales et sont réservées à l’équipe dont la zone de départ est la plus proche (5 par équipes, alternance bouées rouge/bouées vertes fixée comme sur la première figure).</li>
                        <li>10 bouées situées sur la partie arrière (en haut sur la première figure) accessibles par toutes les équipes et disposées aléatoirement selon 3 configurations possibles.</li>
                    </ul>
                    <h4>Prédire la performance:</h4>
                    <ul>
                        <li>Bonus de 0.3*(Score réel) - | écart | = 0.3*(Score réel) - | (Score réel)-(Score estimé) |</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "Analyse",
            body: (
                <React.Fragment>
                    <p>Après observation des match disputés cette année nous avons remarqué que la phase de détection et classement des bouées sur les bandes de couleurs des ports était une étape chronophage et souvent peu rentable pour les équipes avec peu d’expérience. C’est pourquoi notre stratégie de base consiste en la collecte des points ne nécessitant que très peu (voir aucune) de détection de couleurs et n’ayant que peu de chances (ibid) d’être contesté par l’adversaire.</p>
                    <p>Au vu du contexte actuel, l’organisation et la réalisation de deux robots nous semble difficile c’est pourquoi notre stratégie s’applique pour la réalisation d’un robot. Se voulant évolutive, elle permet d’être adaptée, modulée et améliorée en fonction de nos performances.</p>
                    <br/>
                    <span>La collecte de ces points fondamentaux est avantageuse pour deux choses:</span>
                    <ul>
                        <li>Ce sont des points statiques c'est-à-dire que la prise en compte de l’adversaire n’est pas une condition prépondérante. Cette stratégie permet donc à notre robot d’avoir une certaine stabilité dans le résultat final, et d’axer la construction du robot sur la garantie de réalisation des objectifs définis.</li>
                        <li>Elle permet dans une bonne partie des cas de faire mieux, en terme de score final, que les robots réalisant le classement des bouées sur les chenaux de couleurs.</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "Stratégie de base pour un robot",
            body: (
                <React.Fragment>
                    <span>Stratégie sans détection:</span>
                    <ul>
                        <li>Faire fonctionner le phare: 15 points</li>
                        <li>Relever les manches à air: 15 points</li>
                        <li>Récupérer les bouées des écueils et les déposer sur la ligne la plus proche sans tri de couleurs: 19 points à minima</li>
                        <li>Afficher les pavillons: 10 points</li>
                        <li>Aller dans le port sans détection: entre 6 et 10 points.</li>
                        <li>Détection de l’adversaire: Arrêt du robot si robot adverse trop proche.</li>
                        <li>Estimation à la main: entre 0.3*65 - 4 = 15 points et 0.3*69 - 0 = 20 pts</li>
                    </ul>
                    <p>TOTAL =  80-85 points</p>
                </React.Fragment>
            )
        },
    ]
}

export default article;