window.React = require('react');
window.ReactDOM = require('react-dom');
window.ReactRouter = require('react-router');

var CollectionApi = require('./utils/CollectionApi');
var QuickFluxApp = require('./components/QuickFluxApp.react');
var FBLogin = require('./components/FBLogin.react');
var About = require('./components/About.react');
var NoMatch = require('./components/NoMatch.react');

var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory	;
var Route = ReactRouter.Route;

// Load Mock Api call
CollectionApi.getUrlData(); 

ReactDOM.render(
	<FBLogin fb={FB} />, 
	document.getElementById('login-button')
);

// Render 
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={QuickFluxApp}>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
	), document.getElementById('quick-app')
)