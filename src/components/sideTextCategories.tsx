/**
 * This file is an article card component.
 * It is composed of two elements: 
 * - a title
 * - a small preview
 */

/* Packages */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/* Types */
import { SideTextProps } from '../utils';

/* Styles */
import '../styles/css/articleCard.css'

export default function SideTextCategories({category, sideTextElements}: SideTextProps) {
    return (
        <Fragment>
            {
                sideTextElements && sideTextElements.length === 3 && 
                sideTextElements.map(element => {
                    return <Link key={'sideTextCategory_' + element.navigationItem.link} to={element.navigationItem.completeLink}>
                        <div className="sideTextItem" style={{top: element.position, color: element.color, opacity: (category !== element.navigationItem.link) ? "50%":'100%'}}>
                            {element.navigationItem.name.substring(0, 1)}<span style={{fontSize: (category !== element.navigationItem.link) ? '0':'50px'}}>{element.navigationItem.name.substring(1)}</span>
                        </div>
                    </Link>
                })
            }
        </Fragment>
    )
}
