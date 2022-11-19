
import squirtle from '../images/pokemons/squirtle.png'
import bulbasaur from '../images/pokemons/bulbasaur.png'
import pokemon from '../images/pokemons/pokemon.png'
import jigglypuff from '../images/pokemons/jigglypuff.png'
import './components.css';

function Menu(props) {
    

    return (
<div id="menu" class="menu">
   <div id="subtitle">
   <h3>
    Guess what are your pokemon's today
    </h3>
    </div>
   <div class="buttons-container">
      <div class="button-game"><img src={squirtle} width="100%" class="button-img"/> <h3>Classic Mode</h3></div>
      <div class="button-game"><img src={bulbasaur} width="100%" class="button-img"/><h3>Quote Mode</h3></div>
      <div class="button-game"><img src={pokemon} width="100%" class="button-img"/><h3>Ability Mode</h3></div>
      <div class="button-game"><img src={jigglypuff} width="100%" class="button-img"/><h3>Splash Mode</h3></div>
   </div>
</div>
);
}
export default Menu;
