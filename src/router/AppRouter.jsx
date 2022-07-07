import React from 'react';
import { Routes, Route} from "react-router-dom";
/* importaciones de pages */
import { LoginPages } from '../auth/pages/LoginPages';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';


export const AppRouter = () => {
  return (
    <>

        <Routes>

            <Route path='login' element={< LoginPages /> } />

            <Route path='/*' element={<HeroesRoutes />} />

      </Routes>
    </>
  )
}
