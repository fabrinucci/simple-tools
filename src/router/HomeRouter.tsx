import { Route, Switch } from 'wouter';
import { Calculator, Percent } from '../components/tools';
import { HomePage } from '../pages';

export const HomeRouter = () => {
  return (
    <>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/percent' component={Percent} />

        <Route>404: No such page!</Route>
      </Switch>
    </>
  );
};
