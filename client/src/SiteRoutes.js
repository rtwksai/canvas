import { Flex, Spinner } from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/index";
import UserPage from "./pages/user";
import EventsPage from "./pages/events";
import Canvas from "./pages/canvas";

export default function SiteRoutes() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/checker" />

          <Route exact path="/">
            <React.Suspense fallback={<LoadingPage />}>
              <HomePage />
            </React.Suspense>
          </Route>

          <Route exact path="/user">
            <React.Suspense fallback={<LoadingPage />}>
              <UserPage />
            </React.Suspense>
          </Route>

          <Route exact path="/events">
            <React.Suspense fallback={<LoadingPage />}>
              <EventsPage />
            </React.Suspense>
          </Route>

          <Route exact path="/canvas/:id" component={Canvas}/>


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
