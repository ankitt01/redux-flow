import './App.css';
import Bat from './components/Bat'
import Ball from './components/Ball'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Bat/>
        <Ball/>
      </Provider>
    </div>
  );
}

export default App;
