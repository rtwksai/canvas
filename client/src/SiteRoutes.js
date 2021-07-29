import { Flex, Spinner } from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/index";

export default function SiteRoutes() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/checker" />

          <Route path="/">
            <React.Suspense fallback={<LoadingPage />}>
              <HomePage />
            </React.Suspense>
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export const LoadingPage = props => {
  return (
    <Flex
      justify="center"
      align="center"
      justifyContent="center"
      direction="column"
      h={["60vh", "75vh"]}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </Flex>
  );
};
