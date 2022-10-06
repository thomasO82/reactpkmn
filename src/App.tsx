import React, { FunctionComponent } from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonList from './pages/pokemon-list';
import PageNotFound from './pages/page-not-found';

const App: FunctionComponent = () => {
  
    return (
        <Router>
            <div>
                <nav>
                    <div className='nav-wrapper teal'>
                        <Link to="/">Pokedex</Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path ="/" component={PokemonList} />
                    <Route exact path ="/pokemons" component={PokemonList} />
                    <Route path ="/pokemon/:id" component={PokemonsDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;