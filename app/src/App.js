import React from 'react';
import Search from './components/Search'
import Results from './components/results/Results'
import { connect } from 'react-redux'
import Idle from './components/idle'
import Character from './components/Character/Character'
import theme from './assets/chocobo.mp3'

const audio = new Audio(theme)




function App(props){
  // console.log(props.searching)
  let display = <Idle />
  if (props.loading) {
    display = <img src='https://steamuserimages-a.akamaihd.net/ugc/436109173208068121/922AF23ED38FBCCA770590ECC14BF42E555B3AA1/' />
    audio.play()
  } else if (props.searching) {
    display = <Results />
    audio.pause()
  } else if (props.character) {
    display = <Character />
  }
  return (
    <div>
      <div>
        <Search />
      </div>
      
      <div>
          {display}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    ...state
  }
}

export default connect(mapStateToProps, {})(App);

// https://xivapi.com/character/search?name=rain+masu&server=midgardsormr

// https://xivapi.com/character/8604830?data=FR,FC,CJ,MIMO
