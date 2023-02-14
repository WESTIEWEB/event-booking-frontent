import './App.css'
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DemoPage } from './pages/demo'
import { DashboardPage } from './pages/dashboard/DashboardPage';
// import { BookrProvider } from './utils/context';
import Navbar from './components/navbar/Navbar';
import { ContextProvider } from './utils/context';
import { Bookerpallette } from './utils/theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './components/header/Header';
import MiniHeader from './components/miniHeader/Miniheader';

import Ticket from './components/Drop_Down/Ticket';
import EventCard from './pages/event-card';
import TicketSelection from './pages/ticketSelection'
import HomePageHeader from './components/homepageHeader/HomePageHeader';



const theme = createTheme({
  palette: {
    ...Bookerpallette
  },
})


function App() {
  return (
    <>
    <ContextProvider>
     <ThemeProvider theme={theme}>
     Your Nav here ...
      <BrowserRouter>
     {/* <Header /> */}
     {/* <MiniHeader /> */}
     <HomePageHeader />

        <Routes>
          <Route path='/' element={<DemoPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
      Your Footer here... 
     </ThemeProvider>
    </ContextProvider>
    {/* </BookrProvider> */}
      <ContextProvider>
        <ThemeProvider theme={theme}>
        <Navbar />  
          <BrowserRouter>
            <Routes>
              <Route path='' element={<DemoPage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/tickets' element={<Ticket />} />
              <Route path='/event-card' element={<EventCard />} />
              <Route path='/ticket-selection' element={<TicketSelection />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}

export default App
