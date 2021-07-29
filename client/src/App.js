import React, { Suspense } from "react";
import SiteRoutes, { LoadingPage } from "./SiteRoutes";

export default function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingPage />}>
        <SiteRoutes />
      </Suspense>
    </React.Fragment>
  );
}