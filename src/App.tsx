import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyles';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SubscriptionForm } from './components/SubscriptionForm';
import { FeaturedSection } from './components/FeaturedSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <SubscriptionForm />
        <FeaturedSection />
        <Testimonials />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;