import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";

//TODO Для расширения: добавить нормализацию стилей
// TODO Для расширения: добавить компонент обертку под Route формата AuthRoute/NoAuthRoute

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((el) => {
            return (
              <Route path={el.path} component={el.component} exact={el.exact} />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
