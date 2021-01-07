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
    id: 14,
    title: "Mise en oeuvre du lidar",
    category: navigation.robot,
	author: team.members.find(member=> member.lastname === 'Shen'),
	preview:
		"Nous avons décidé d'utiliser des lidars pour détecter les gobelets, les murs et les robots des autres joueurs. Un lidar ne peut détecter les obstacle que dans un seul plan, et la hauteur des obstacles que nous voulons détecter est différente, nous pouvons donc placer plusieurs lidars à différentes altitudes, et en comparant les cartes de balayage des lidars, on peut distinguer les espèces d’obstacles.",
	body:[
        {
            title: "all",
            body: (
                <React.Fragment>
                    <p>Nous avons décidé d'utiliser des lidars pour détecter les gobelets, les murs et les robots des autres joueurs. Un lidar ne peut détecter les obstacle que dans un seul plan, et la hauteur des obstacles que nous voulons détecter est différente, nous pouvons donc placer plusieurs lidars à différentes altitudes, et en comparant les cartes de balayage des lidars, on peut distinguer les espèces d’obstacles.</p>  
                    <img className="mediumImage" src={images.lidar.window.src} alt={images.lidar.window.name} />
                    <p>Nous avons acheté un RPLIDAR qui est une version de base de slamtec. Voici ses paramètres connexes.  Il permet une gamme complète de balayage de la portée laser à 360 degrés dans un rayon de 12 mètres du plan bidimensionnel.</p>
                    <img className="smallImage" src={images.lidar.rplidar.src} alt={images.lidar.rplidar.name} />
                    <p>Pour le modèle A1M8 du RPLIDAR seulement:</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Unit</th>
                                <th>Min</th>
                                <th>Typical</th>
                                <th>Max</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                       <tbody>
                            <tr>
                                <td>Distance range</td>
                                <td>Meter(m)</td>
                                <td>TBD</td>
                                <td>
                                    A1M8-R4 and the belowing models(0.15 - 6)<br/>
                                    A1M8-R5 (0.15 - 12)
                                </td>
                                <td>TBD</td>
                                <td>White objects</td>
                            </tr>
                            <tr>
                                <td>Angular range</td>
                                <td>Degree</td>
                                <td>n/a</td>
                                <td>0-360</td>
                                <td>n/a</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Scan Field Flatness</td>
                                <td>Degree</td>
                                <td>-1.5</td>
                                <td> </td>
                                <td>1.5</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Distance resolution</td>
                                <td>mm</td>
                                <td>n/a</td>
                                <td>
                                    `{'<'}`0.5<br/>
                                   `{'<'}`1% of the distance
                                </td>
                                <td>n/a</td>
                                <td>
                                    `{'<'}`1.5 meters<br/>
                                    All distance range
                                </td>
                            </tr>
                            <tr>
                                <td>Angular resolution</td>
                                <td>Degree</td>
                                <td>n/a</td>
                                <td>`{'<'}`1</td>
                                <td>n/a</td>
                                <td>5.5Hz scan rate</td>
                            </tr>
                            <tr>
                                <td>Sample Duration</td>
                                <td>Milliseconds(ms)</td>
                                <td>n/a</td>
                                <td>0.125</td>
                                <td>n/a</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Sample Frequency</td>
                                <td>Hz</td>
                                <td>n/a</td>
                                <td>`{'>='}`8000</td>
                                <td>8010</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Scan rate</td>
                                <td>Hz</td>
                                <td>1</td>
                                <td>5.5</td>
                                <td>10</td>
                                <td>Typical value is measured when RPLIDAR A1 takes 360 samples per scan</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Pour la partie utilisation, il y a des introductions précises sur leur site internet. Nous pouvons obtenir les données en utilisant le sdk que l’entreprise nous donne.  Si nous développons avec Linux, nous utilisons la commande “make” à la racine du sdk pour la compiler.</p>
                    <img className="mediumImage" src={images.lidar.sdk.src} alt={images.lidar.sdk.name} />
                    <span>Voici des applications utiles dans le sdk:</span>
                    <ul>
                        <li>ultra_simple: An ultra-simple command line application demonstrates the simplest way to connect to an RPLIDAR device and continuously fetching the scan data and outputting the data to the console. Users can quickly integrate RPLIDAR to their existing system based on this demo application</li>
                        <li>simple_grabber: A command line grab application. Each execution will grab two round of laser data and show as histogram.</li>
                        <li>frame_grabber: A win32GUI grab application. When pressing start scan button, it will start scan continuously and show the data in the UI. For SDK after compilation, there will be two more subfolders in the SDK: obj and output. The output folder contains generated SDK static library (.lib or .a) and demo application executable files(exe or elf). obj folder contains intermediate files generated during compilation.</li>
                    </ul>
                </React.Fragment>
            )
        },
    ]
}

export default article;