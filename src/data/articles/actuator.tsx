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
    id: 19,
    title: "Actionneurs",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Nosthas'),
	preview:
		"Pour cette édition de la Coupe de Robotique, le but principal est de récupérer un maximum de bouées que l’on ramène de notre côté de la table, il nous faut donc un système qui nous permettra de capturer et transporter les gobelets de façon fiable.",
	body:[
        {
            title: '',
            body: (
                <React.Fragment>
                    <p>Pour cette édition de la Coupe de Robotique, le but principal est de récupérer un maximum d'éco cups que l’on ramène de notre côté de la table, il nous faut donc un système qui nous permettra de capturer et transporter les gobelets de façon fiable. La solution est simple: on se servira d’un assemblage de pompes à air couplées avec des ventouses qui saisissent les ecocups par suction et les tiennent en place avec sécurité jusqu'à qu'ils soient relâchés. Pour se faire, le système mécanique sera composé de pompes et électrovannes qui bloquent la pression dans les ventouses à une valeur constante. On a identifié les différentes parties de l’actionneur qu’on a décidé de séparer en cartes électroniques indépendantes. L’actionneur suit donc le diagramme suivant:</p>
                    <img className="veryBigImage" src={images.actuator.blueprint.src} alt={images.actuator.blueprint.name} />
                    <span>Explicitement, chaque carte a les caractéristiques suivantes:</span>
                    <ul>
                        <li>Carte USB:
                            <ul>
                                <li>Génération de 3.3V depuis le 5V</li>
                                <li>Alimentation externe pour le bus</li>
                                <li>Communication avec le bus LIN en tant que master</li>
                                <li>Communique avec un PC via USB</li>
                            </ul>
                            <span>Cette carte sert comme interface entre l’ordinateur et l’actionneur, elle permet donc de     téléverser la configuration de l’interface robot pour calibrer son fonctionnement lors de la phase de réalisation du système. Il  faut donc du hardware permettant de recevoir des données par USB, on peut penser à une carte Arduino (a voir si on peut trouver des cartes plus simples)</span>
                        </li>
                        <br/>
                        <li>Interface Robot:
                            <ul>
                                <li>Est master du bus LIN des pompes</li>
                                <li>Communication via une interface (CAN, UART, I2C)</li>
                            </ul>
                            <span>Cette interface transmet les commandes de haut niveau de l’IA du robot vers la partie mécanique du système. Elle commande donc le comportement de bas niveau de la carte pompes. Conversement, elle sert aussi pour faire remonter à l’IA les informations de l’état du système observé par des capteurs de courant pour adapter la stratégie en temps réel.</span>
                        </li>
                        <br/>
                        <li>Carte Pompes:
                            <ul>
                                <li>Pilote les pompes et électrovannes</li>
                                <li>Communique via le bus LIN</li>
                                <li>Mesure le courant sur une pompe (Capteur de type <a href="https://www.ti.com/lit/ds/symlink/ina139.pdf?ts=1606010238037&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FINA139">INA139</a>)</li>
                            </ul>
                            <span>Cette carte peut être structurée autour d’un microcontrôleur du type <a href="https://www.microchip.com/wwwproducts/en/ATtiny44">ATtiny44</a>.</span>
                        </li>
                    </ul>
                </React.Fragment>
            )
        },
    ]
}

export default article;