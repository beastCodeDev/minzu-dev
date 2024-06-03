import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "../config/RoouterConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading.....</h1>}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route 
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;