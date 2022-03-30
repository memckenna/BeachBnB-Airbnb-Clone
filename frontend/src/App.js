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
import SingleBookingDetails from "./components/Bookings/SingleBooking";
import ManageHostSpots from "./components/SpotsPage/ManageHostSpots";

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
          <Route path="/" exact={true}>
            <SplashPage />
          </Route>
          <Route path="/spots" exact={true}>
            <SpotsBrowserPage />
          </Route>
          <Route path="/spots/:id" exact={true}>
            <SingleSpotDetailPage />
          </Route>
          <Route path="/spots/:id/edit" exact={true}>
            <EditSpotForm  />
          </Route>
          <Route path="/spot/new" exact={true}>
            <CreateNewSpot />
          </Route>
          <Route path="users/:id" exact={true}>
            <ManageHostSpots />
          </Route>
          <Route path="/bookings" exact={true}>
            <BookingsPage />
          </Route>
          <Route path="/bookings/:id" exact={true}>
            <SingleBookingDetails />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
