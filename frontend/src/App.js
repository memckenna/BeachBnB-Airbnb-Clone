import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import * as spotsActions from "./store/spotReducer";
import Navigation from "./components/Navigation";
import SplashPage from "./components/HomePage";
import Footer from "./components/Footer";
import SpotsBrowserPage from "./components/SpotsPage/index";
import SpotDetail from "./components/SpotsPage/SpotDetailPage";
import SingleSpotDetailPage from "./components/SpotsPage/SingleSpotDetail";
import CreateNewSpot from "./components/SpotsPage/CreateNewSpot";
import EditSpotForm from "./components/SpotsPage/EditSpotForm";
import BookingsPage from "./components/Bookings";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <SplashPage />
          </Route>
          <Route path="/spots" exact>
            <SpotsBrowserPage />
          </Route>
          <Route path="/spots/:id" exact>
            <SingleSpotDetailPage />
          </Route>
          <Route path="/spots/:id/edit">
            <EditSpotForm  />
          </Route>
          <Route path="/spot/new" exact>
            <CreateNewSpot />
          </Route>
          <Route path="/bookings" exact>
            <BookingsPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
