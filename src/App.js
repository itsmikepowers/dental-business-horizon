import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';  // <-- Importing Provider from react-redux
import { store } from './redux/reduxSetup';  // <-- Importing the store from reduxSetup.js
import Header from './Components/Header';
import Hero from './Components/Hero';
import { Intro } from './Components/Intro';
import theme from './theme'; 
import Testimonial from './Components/Testimonal';
import { Info } from './Components/Info';
import { Submit } from './Components/Submit';
import Topic from './Components/Topic';
import About from './Components/About';
import Footer from './Components/Footer';
import Cred from './Components/Cred';
import Patients from './Components/Patients';
import Team from './Components/Team';
import Why from './Components/Why';
import Doctors from './Components/Doctors';
import Location from './Components/Location';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>  {/* <-- Wrap your app with Provider component */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Intro />
                <Why />
                <Submit />
                <Location />
              </>
            } />
            
            <Route path="/about" element={
               <>
                <Topic title="About Us" imageName="about" />
                <About />
                <Why />
                <Submit />
              </>
            } />

            <Route path="/patients" element={
              <>
                <Topic title="Patients" imageName="patients" />
                <Patients />
                <Submit />
              </>
            } />

            <Route path="/team" element={
               <>
                <Topic title="Meet Our Amazing Team" imageName="team" />
                <Doctors />
                <Team />
              </>
            } />

            <Route path="/contact" element={
               <>
               <Topic title="Contact Us" imageName="contact" />
               <Location />
               <Submit />
              </>
            } />

          </Routes>
          <Testimonial />
          <Footer />
          <Cred />
          <Info />
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
