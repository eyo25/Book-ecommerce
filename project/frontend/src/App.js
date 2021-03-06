import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen}  />
        </Container>
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;
