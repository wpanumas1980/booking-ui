import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookingPage from './views/BookingPage';
import HomePage from './views/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/bookings/:time">
          <BookingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
