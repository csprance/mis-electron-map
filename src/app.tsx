import * as React from 'react';
import { connect } from 'react-redux';
import { MemoryRouter as Router, Route, Switch } from 'react-router';
import { Store } from 'redux';
import styled from 'styled-components';

import TitleBar from './components/TitleBar';
import Map from './containers/Map';
import createConnection from './db';
import { misMapActions } from './redux/mismap';
import { Dispatch } from './redux/redux-types';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
type Props = {
  dispatch: Dispatch;
  store: Store;
};
type State = {};
class WrappedApp extends React.Component<Props, State> {
  public async componentDidMount() {
    await createConnection();
    await this.hydrateAllFromDatabase();
  }

  hydrateAllFromDatabase = async () => {
    const { dispatch } = this.props;
    await Promise.all([dispatch(misMapActions.hydrateFromDbThunk())]);
  };

  public render() {
    return (
      <Router>
        <Wrapper>
          <TitleBar />
          <Switch>
            <Route exact path={'/'} component={Map} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}
export const App = connect()(WrappedApp);
