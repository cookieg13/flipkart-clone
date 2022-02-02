import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
//components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import TemplateProvider from "./templates/TemplateProvider";
import DetailView from './components/product/DetailView';
import { Box } from '@material-ui/core'

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/product/:id" component={DetailView} />
            </Switch>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
