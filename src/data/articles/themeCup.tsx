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
    id: 2,
    title: "Règlement Coupe de France Robotique 2021",
    category: navigation.cup,
	author: team.members.find(member=> member.lastname === 'Bonnemains'),
	preview:
		'Chaque année, le règlement de la Coupe de France de Robotique évolue avec des nouveaux thèmes et de nouvelles missions à effectuer pour pouvoir marquer des points lors des matchs. Cependant, avec les circonstances sanitaires actuelles, une exception a été faite cette année et le thème de l’édition 2020, Sail The World a été repris, à quelques modifications prêt.',
	body:[
        {
            title: "Liste des missions",
            body: (
                <React.Fragment>
                    <ul>
                        <li><b>Créer des chenaux</b> pour rétablir la circulation maritime.</li>
                        <li><b>Relever les manches à air</b> qui ont été balayées par la tempête.</li>
                        <li><b>Allumer le phare</b> pour que les bateaux égarés puissent rentrer au port en toute sécurité.</li>
                        <li><b>Arriver à bon port</b>, afin de mettre les robots au mouillage, à l’abri du vent, à la fin de leur voyage. </li>
                        <li><b>Hisser vos pavillons</b> pour transmettre des messages aux autres navires.</li>
                        <li><b>Estimer votre performance</b>.</li>
                    </ul>
                    <span>Toutes ces actions sont <b>indépendantes les unes des autres et aucun ordre n’est imposé pour les réaliser</b>. Aucune action n’est obligatoire.</span>
                </React.Fragment>
            )
        },
        {
            title: "L'aire de jeu",
            body: (
                <React.Fragment>
                    <span>Dimensions : 3mx2mx70cm</span>
                    <span>CHANGEMENT: Ajout de la zone de haut-fond sous la girouette (12).</span>
                    <img className="mediumImage" src={images.themeCup.table_blueprint.src} alt={images.themeCup.table_blueprint.name} />
                    <h4>Les matchs</h4>
                    <p>Les matchs ont une durée de 100 secondes (cela peut finir avant en cas d’accord avec les 2 équipes -par ex robots bloqués dans un coin) et sont précédés d’un temps de préparation de 3 minutes au cours duquel les équipes doivent installer leurs robots, les balises mais également tous les équipements tels que le phare par exemple.</p>
                    <p>Le résultat du match se joue au nombre de points obtenus : ceux gagnés grâce à l’accomplissement des missions (voir juste après), ceux découlant du bonus d’estimation du score et ceux perdus par le biais de pénalités de 20 points (ex: anti-jeu, rentrer dans l’adversaire, enlever des bouées appartenant à l’adversaire…). Par ailleurs, chaque équipe non déclarée forfait obtient 5 points supplémentaires.</p>
                </React.Fragment>
            )
        },
        {
            title: "Mission 1: Créer des chenaux",
            body: (
                <React.Fragment>
                    <span>CHANGEMENT: des bouées ont été ajoutées <b>dans la zone de haut fond</b> (sous la boussole). On en a <b>6 nouvelles disposées de manière totalement aléatoire</b>, 3 de parts et d’autres de l’axe de symétrie centrale. Il y en a 3 rouges et 3 vertes dont la répartition est aléatoire. Elles sont <b>accessibles aux 2 équipes.</b></span>
                    <img className="mediumImage" src={images.themeCup.table_upView.src} alt={images.themeCup.table_upView.name} />
                    <h4>Les bouées et leur position</h4>
                    <span>50 bouées (25 rouges, 25 vertes) sont accessibles lors d’une partie et sont réparties à divers endroits de la plateforme de jeu.</span>
                    <span>Les 30 bouées à la “dérive”, qui se situent directement sur l’aire de jeu.</span>
                    <ul>
                        <li>4 bouées sont directement assignées à chaque port et sont réservées à l’équipe qui détient le port (chaque équipe a 2 ports, donc 8 bouées assignées).</li>
                        <li>8 bouées sont au centre de l’aire et accessibles par n’importe laquelle des équipes. Leurs positions et leurs couleurs sont définies comme sur la figure ci-dessus.</li>
                        <li>6 bouées sont dans la zone de haut fond et sont disposées aléatoirement par paquets de 3 de part et d’autres de l’axe de symétrie de l’aire de jeu. Elles sont accessibles par les 2 équipes.</li>
                    </ul>
                    <span>Les 20 bouées “échouées”, qui se situent sur des écueils situés sur les côtés.</span>
                    <ul>
                        <li>10 bouées sont situées sur les parties latérales et sont réservées à l’équipe dont la zone de départ est la plus proche (5 par équipes, alternance bouées rouge/bouées vertes fixée comme sur la figure ci-dessus).</li>
                        <li>10 bouées situées sur la partie arrière (en haut sur la figure ci-dessus) accessibles par toutes les équipes et disposées aléatoirement selon 3 configurations possibles.</li>
                    </ul>
                    <img className="bigImage" src={images.themeCup.shuffle_buoy.src} alt={images.themeCup.shuffle_buoy.name}/>
                    <h4>Les bouées et leur position</h4>
                    <ul>
                        <li>Si la bouée est dans le port, cela rapporte 1 point. Elle est considérée dedans même si elle ne l’est que partiellement ou sans contact avec le sol (cf figure a)</li>
                        <li>Si la bouée est sur la ligne de chenal de la couleur associée, cela rapporte 1 point supplémentaire. Il faut que la partie inférieure ou supérieure soit entièrement en contact avec le sol et au moins partiellement sur la ligne (cf figure b)</li>
                        <li>Pour chaque couple de bouées rouge/verte sur les chenaux, 2 points supplémentaires sont accordés.</li>
                    </ul>
                    <img className="bigImage" src={images.themeCup.validity_buoy.src} alt={images.themeCup.validity_buoy.name} />
                    <h4>En bref</h4>
                    <p>Le schéma suivant résume les informations sur les bouées (disposition et appartenance):</p>
                    <img className="bigImage" src={images.themeCup.table_blueprint_detailed.src} alt={images.themeCup.table_blueprint_detailed.name} />
                </React.Fragment>
            )
        },
        {
            title: "Mission 2: Relever les manches à air",
            body: (
                <React.Fragment>
                    <span>CHANGEMENT : introduction d’une marque (point rose sur la figure) doit être totalement recouverte par le manche à la fin du match pour valider l’action.</span>
                    <img className="mediumImage" src={images.themeCup.table_windsock.src} alt={images.themeCup.table_windsock.name} />
                    <h4>Les manches à air et leur position</h4>
                    <p>Chaque équipe dispose de 2 manches à air réservés, situés proches de l’aire de départ. Pour être considéré comme relevé il faut que le mât soit relevé à la verticale à la fin de la partie (l’équipe adverse n’a pas le droit de toucher à ceux de l’autre équipe).</p>
                    <h4>Comptage des points</h4>
                    <ul>
                        <li>5 points si 1 seul manche à air est relevé à la fin.</li>
                        <li>15 points si les deux manches sont relevés à la fin.</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "Mission 3: Allumer le phare",
            body: (
                <React.Fragment>
                    <h4>Le phare et sa position</h4>
                    <p>Le phare se positionne sur la zone rocheuse de l’équipe durant la phase de préparation de la partie. Il est créé par l’équipe avant la compétition et doit respecter les dimensions suivantes:</p>
                    <ul>
                        <li>Profondeur maximum : 222 mm</li>
                        <li>Largeur maximum : 450 mm</li>
                        <li>Hauteur initiale maximum : 300 mm</li>
                        <li>Hauteur minimum de la source lumineuse (déployée) : 700 mm</li>
                        <li>Hauteur déployée maximum : 900 mm</li>
                    </ul>
                    <span>Par ailleurs, il doit peser maximum 3kg.</span><br/>
                    <span>Le phare doit être animé physiquement par le robot au début de la partie et doit présenter 3 phases:</span>
                    <ul>
                        <li>une phase initiale avant le début de la partie, où il est positionné sur la zone rocheuse</li>
                        <li>une phase d’allumage du phare, qui doit nécessairement faire suite à un contact physique avec le robot</li>
                        <li>une phase d’élévation du phare, qui peut faire suite à un contact physique ou à une communication sans fil avec le robot</li>
                    </ul>
                    <p>La lumière du phare ne doit pas éblouir mais doit être visible et doit balayer un champ d’au moins 180° (cf figures a, b, c).</p>
                    <img className="bigImage" src={images.themeCup.table_sweep.src} alt={images.themeCup.table_sweep.src} />
                    <h4>Comptage des points</h4>
                    <ul>
                        <li>2 points si le phare est déposé sur la zone rocheuse pendant la phase de préparation</li>
                        <li>3 points supplémentaires si le phare est activé pendant la partie (et le reste jusqu’à la fin)</li>
                        <li>10 points supplémentaires si le phare est correctement déployé et allumé avant la fin du match</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "Mission 4: Arriver à bon port",
            body: (
                <React.Fragment>
                    <span>CHANGEMENT : décomptage des points a évolué - voir les points associés !!!</span>
                    <h4>Les zones de mouillage et leur choix</h4>
                    <span>A la fin de la partie, le (ou les) robot de l’équipe doivent aller se positionner dans la zone de mouillage Sud ou Nord.</span>
                    <img className="bigImage" src={images.themeCup.table_zones.src} alt={images.themeCup.table_zones.name}/>
                    <span>La zone à cibler est indiquée par la girouette, qui va être lancée en début de partie. Cette girouette est équipée d’un tag ArUco 4x4 numéro 17 de 6 cm de largeur en son centre.</span>
                    <img className="mediumImage" src={images.themeCup.compass.src} alt={images.themeCup.compass.name}/>
                    <h4>Comptage des points</h4>
                    <p>Pour être considéré dans une zone de mouillage, il faut que la projection verticale du robot soit au moins en partie dans la zone (cf : figure ci-dessous) (si la projection verticale est dans les 2 zones de mouillage, la zone défavorable est conservée).</p>
                    <img className="bigImage" src={images.themeCup.validity_robot.src} alt={images.themeCup.validity_robot.name} />
                    <span>Les points sont décomptés ainsi:</span>
                    <p>Si l’équipe a un seul robot :</p>
                    <ul>
                        <li>20 points si le robot est valide dans la zone indiquée par la girouette, (10 pts seulement en 2020)</li>
                        <li>6 points si le robot est valide dans la mauvaise zone (5 pts en 2020)</li>
                    </ul>
                    <p>Si l’équipe a deux robots:</p>
                    <ul>
                        <li>10 points par robot valide dans la zone de mouillage indiquée par la girouette, (10 pts avant si il y avait les deux en 2020)</li>
                        <li>3 points par robot valide dans la mauvaise zone de mouillage, (5pts en 2020)</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "Mission 5: Hisser des pavillons",
            body: (
                <React.Fragment>
                    <h4>Les pavillons et leurs contraintes</h4>
                    <p>Entre la 95ème seconde et la 100ème seconde du match, les robots doivent hisser au moins  2 pavillons conformes au code international des signaux maritimes (pavillons de type lettre) (pour plus d'informations, voir <a href="https://fr.wikipedia.org/wiki/Code_international_des_signaux_maritimes">ici</a>).Ces pavillons sont recto verso et doivent avoir une surface `{'>'}`=30cm².</p>
                    <span>Ils doivent être hissés avant la fin à au moins 35 cm de hauteur (cf figures b et c).</span>
                    <img className="mediumImage" src={images.themeCup.robot_positions.src} alt={images.themeCup.robot_positions.name} />
                    <h4>Comptage des points</h4>
                    <ul>
                        <li>10 points si au moins un des robots de l’équipe a hissé 2 pavillons minimum avant la fin</li>
                    </ul>
                </React.Fragment>
            )
        },
        {
            title: "Mission 6: Prédire la performance",
            body: (
                <React.Fragment>
                    <p>Chaque équipe doit prédire son score final, soit de manière manuscrite avant la partie (typiquement sur une ardoise), soit via un afficheur numérique en continu durant le match et placé sur le robot ou sur le port.</p>
                    <h4>Comptage des points</h4>
                    <ul>
                        <li>Bonus de 0.3*(Score réel) - | écart | = 0.3*(Score réel) - | (Score réel)-(Score estimé) |</li>
                    </ul>
                    <span>Ce bonus est arrondi à l’entier supérieur et ne peut pas être négatif (il vaut 0 dans ce cas).</span>
                </React.Fragment>
            )
        },
    ]
}

export default article;