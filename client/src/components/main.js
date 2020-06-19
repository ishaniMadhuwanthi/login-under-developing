import React from 'react';
import Landingpage from './landingpage';
import Home from './home';
import Aboutme from './aboutme';
import Contact from './contact';
import Register from './register';
import Login from './login';
import Otherreg from './others/otherreg';
import Otherlog from './others/otherlog';
import Otherlanding from './others/otherlanding';
import Profile from './profile';
import { Switch , Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/landingpage" component={Landingpage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/otherreg" component={Otherreg} />
        <Route path="/otherlog" component={Otherlog} />
        <Route path="/otherlanding" component={Otherlanding} />
        <Route path="/profile" component={Profile} />
    </Switch>
)
export default Main;