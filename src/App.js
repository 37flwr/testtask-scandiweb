import { Component } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/routeList'
import Layout from './components/Layout';
import './App.scss';

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Layout>
            <Routes>
            {publicRoutes.map(
              ({ path, component: Component, exact }, idx) => {
                return <Route
                key={idx}
                path={path}
                exact={exact}
                element={<Component />}
                />
              })
            }
            </Routes>
        </Layout>
      </Router>
    </div>
  )}
}
