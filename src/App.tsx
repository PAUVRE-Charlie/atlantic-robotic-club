/**
 * This file is the main component of the website.
 * All the other components of the website are its children.
*/

/* Packages */
// used for navigating between pages
// the Switch/Redirect couple is used to redirect any user to a certain page when the path doesn't match any route
import { Route, BrowserRouter as Router, Switch, Redirect, RouteComponentProps } from 'react-router-dom';

/* Types */
import { MatchParamsArticlesPage, MatchParamsArticlePage } from './utils';

/* Pages */
// the home page of the website
import HomePage from './pages/homePage'
// the page gathering all the articles
import ArticlesPage from './pages/articlesPage'
// the page that details one article
import ArticlePage from './pages/articlePage'

/* Components */
// the header component
import Header from './components/header'

/* Data */
import colors from './data/colors'

export default function App() {
  return (
    <Router>
      <div style={{backgroundColor: colors.background, width: '100%', height: '100%'}}>
        {/* <Header /> */}
        Hello
        {/* <Switch> */}
          {/* The route to the home page */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} /> */}
          {/* The route to the articles page */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/articles/:category'} component={({match, location, history}: RouteComponentProps<MatchParamsArticlesPage>) => <ArticlesPage match={match} history={history} location={location}/>} /> */}
          {/* The route to the article page */}
          {/* <Route exact path={process.env.PUBLIC_URL + '/articles/:category/:id'} component={({match, location, history}: RouteComponentProps<MatchParamsArticlePage>) => <ArticlePage match={match} history={history} location={location} />} /> */}
          {/* The adress of the page that will appear on the user's screen when he is redirected */}
          {/* <Redirect to={process.env.PUBLIC_URL + '/'} /> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}
