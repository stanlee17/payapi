// Import react modules
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// Import layouts
import Header from './Header';
import Footer from './Footer';
import ReadyToStart from './ReadyToStart';

const Layout = () => (
  <Fragment>
    <Header />
    {/* Wrap all content in column-direction flexbox */}
    <div className="apptheme">
      {/* REPLACE: {props.children} */}
      <Outlet />
    </div>
    <ReadyToStart />
    <Footer />
  </Fragment>
);

export default Layout;
