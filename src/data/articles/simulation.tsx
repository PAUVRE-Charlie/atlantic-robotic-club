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
import videos from '../videos';

const article: Article = {
    id:10,
    title: "Simulation",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Sellami'),
	preview:
		"Suite à l’impossibilité d’un prototypage physique dû au contexte sanitaire, la simulation du robot est apparue comme solution idéale pour pouvoir prototyper et tester les différentes solutions techniques pour le robot. De plus, la simulation a pour avantage de pouvoir tester aisément le robot sur différents scénarios et offre une grande flexibilité.",
	body:[
        {
            title: "Objectif",
            body: (
                <React.Fragment>
                    <p>Suite à l’impossibilité d’un prototypage physique dû au contexte sanitaire, la simulation du robot est apparue comme solution idéale pour pouvoir prototyper et tester les différentes solutions techniques pour le robot. De plus, la simulation a pour avantage de pouvoir tester aisément le robot sur différents scénarios et offre une grande flexibilité.</p>
                </React.Fragment>
            )
        },
        {
            title: "La solution logicielle",
            body: (
                <React.Fragment>
                    <div className="sideViewImage">
                        <img className="smallImage" src={images.simulation.webots_logo.src} alt={images.simulation.webots_logo.name} ></img>
                        <span>Webots est une application open-source et multi-plateforme utilisée pour la simulation de robots. Il fournit un environnement de développement complet pour modéliser, programmer et simuler un robot. Il a été conçu pour une utilisation professionnelle, et est largement utilisé dans l’industrie, l’éducation et la recherche. Cyberbotics Ltd. maintient Webots en tant que logiciel principal depuis 1998.</span>
                    </div>
                </React.Fragment>
            )
        },
        {
            title: "Présentation du logiciel",
            body: (
                <React.Fragment>
                    <img className="bigImage" src={images.simulation.interface.src} alt={images.simulation.interface.name} />
                    <p>L’interface permet d'interagir avec les éléments de la simulation, de visualiser la simulation, de visualiser les capteurs, ainsi que de coder directement le contrôleur du robot.</p>
                </React.Fragment>
            )
        },
        {
            title: "Simulation et test d'éléments de la détection",
            body: (
                <React.Fragment>
                    <h4>Test LIDAR</h4>
                    <span>Nous avons simuler l’utilisation d’un LIDAR sur un robot possédant un algorithme d’évitement d’obstacle simple pour valider la capacité du LIDAR à détecter les bouées sur le terrain.</span>
                    <h4>Le robot</h4>
                    <div className="sideViewImage">
                        <img className="smallImage" src={images.simulation.robot_model.src} alt={images.simulation.robot_model.name}></img>
                        <span>Il s’agit d’un robot à quatres roues motrices, équipé de deux capteurs de distances.</span>
                    </div>
                    <h4>Le LIDAR</h4>
                    <div className="sideViewImage">
                        <img className="smallImage" src={images.simulation.lds.src} alt={images.simulation.lds.name} ></img>
                        <span>LDS-01 - Robotis, très proche du LIDAR que l’on veut utiliser (YDLIDAR)</span>
                    </div>
                    <span>Spécifications du lidar:</span>
                    <table>
                        <tbody>
                        <tr>
                                <td>Operating Supply Voltage</td>
                                <td>5V DC ±5%</td>
                            </tr>
                            <tr>
                                <td>Light Source</td>
                                <td>Semiconductor Laser Diode(λ=785nm)</td>
                            </tr>
                            <tr>
                                <td>LASER safety</td>
                                <td>IEC60825-1 Class 1</td>
                            </tr>
                            <tr>
                                <td>Current consumption</td>
                                <td>400mA or less (Rush current 1A)</td>
                            </tr>
                            <tr>
                                <td>Detection distance</td>
                                <td>120mm ~ 3,500mm</td>
                            </tr>
                            <tr>
                                <td>Interface</td>
                                <td>3.3V USART (230,400 bps) 42bytes per 6 degrees, Full Duplex option</td>
                            </tr>
                            <tr>
                                <td>Ambient Light Resistance</td>
                                <td>10,000 lux or less</td>
                            </tr>
                            <tr>
                                <td>Sampling Rate</td>
                                <td>1.8kHz</td>
                            </tr>
                            <tr>
                                <td>Dimensions</td>
                                <td>69.5(W) X 95.5(D) X 39.5(H)mm</td>
                            </tr>
                            <tr>
                                <td>Mass</td>
                                <td>Under 125g</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>La simulation</h4>
                    <video controls src={videos.simu_modelisation_3D.src} />
                    <h4>Conclusion</h4>
                    <p>On voit effectivement que toutes les bouées sont détectées et se traduisent par un “trou” sur le demi-cercle de détection. On peut donc confirmer que le LIDAR est une solution viable pour la détection de bouées.</p>
                </React.Fragment>
            )
        },
    ]
}

export default article;