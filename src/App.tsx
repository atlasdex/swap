import React, { lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./routerHistory";

import GlobalStyle from "./style/Global";
import PageLoader from "./components/PageLoader";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import Header from "components/Header";
import Web3ReactManager from "components/Web3ReactManager";
import { useFetchPublicData } from "state/hooks";
import MainLayout from 'components/layout/MainLayout'
import useTokens from "hooks/useTokens";
import useRates from "hooks/useRates";
import useQuotes from "hooks/useQuotes";

const Swap = lazy(() => import("./views/Swap"));
const PageNotFound = lazy(() => import("./views/PageNotFound"));

const App: React.FC = () => {
  useFetchPublicData();
  useTokens(); 
  return (
    <Router history={history}>
      <GlobalStyle />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        {/* <Header /> */}
        <Web3ReactManager>
          <MainLayout>
            <Switch>
              <Route path="/" exact>
                <Swap />
              </Route>
              <Route component={PageNotFound} />
            </Switch>
          </MainLayout>
        </Web3ReactManager>
      </SuspenseWithChunkError>
    </Router>
  );
};

export default App;
