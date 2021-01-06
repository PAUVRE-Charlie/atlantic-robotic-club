/**
 * This file contains a component used to automatically 
 * scroll to the top of the page when its children appears on the screen.
 */

/* Packages */
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

/* Types */
import { ScrollToTopProps } from '../utils';

// Component that attaches scroll to top hanler on router change
// renders nothing, just attaches side effects
const ScrollToTop = ({children, location}: ScrollToTopProps) => {
	useEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ location?.pathname ]
	);

	return children;
};

export default withRouter(ScrollToTop);
