import { Route, Routes } from 'react-router-dom';
import Home from '../../../pages/home/Home';
import TeoricoFacil from '../../../pages/teoricoFacil/TeoricoFacil';
import { ROUTES } from './routes';

const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.home}
        element={<Home />}
      />
      <Route
        path={ROUTES.teoricoFacil}
        element={<TeoricoFacil />}
      />
      {/* <Route
        path={ROUTES.consumptionTracking}
        element={<ConsumptionTracking />}
      /> */}
    </Routes>
  );
};

export default Router;
