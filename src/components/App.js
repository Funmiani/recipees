import React, {Component} from 'react';
import SearchRecipes from './SeachRecipes';
import RecipeList from  './RecipeList';
import '../styles/index.css';


class App extends Component {
    render(){
        console.log('this.props', this.props);
        
        return(
            <div>
                <h2>Recipe Finder</h2>
                <SearchRecipes/>
                <RecipeList/>
            </div>
        )
    }
}

export default App;