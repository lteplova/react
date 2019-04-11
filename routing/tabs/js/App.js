'use strict';

class App extends React.Component {
    render() {
      return (
        <Router>
        <div className="tabs">
            <nav className="tabs__items">
                <NavLink className="tabs__item" exact activeClassName="tabs__item-active" to="/">Рефераты</NavLink>
                <NavLink className="tabs__item" activeClassName="tabs__item-active" to="/creator">Криэйтор</NavLink>
                <NavLink className="tabs__item" activeClassName="tabs__item-active" to="/fortune">Гадалка</NavLink>
            </nav>
            <div className="tabs__content">
                <Route path= "/" exact component={Essay} />
                <Route path="/creator" exact component={Creator} />
                <Route path="/fortune" exact component={Fortune} />
            </div>
        </div>
    </Router>
      );
    }
  }
