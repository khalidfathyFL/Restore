
// Importing the Catalog component, which will display the list of products
import Catalog from '../../features/catalog/components/catalog/catalog';


// Importing Material UI components: CssBaseline for global reset and Typography for text styling
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

// Importing the Header component, which might display the header or navigation bar
import Header from './Header';
import { useState } from 'react';

// Main functional component App
function App() {

  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }

  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  // Returning JSX to render the UI
  return (
    <>
      <ThemeProvider theme={theme}>

        {/* CssBaseline removes default margins and paddings from the page */}
        <CssBaseline />

        {/* The Header component is rendered, typically for navigation or branding */}
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>

        <Container>

          {/* Rendering the Catalog component, passing products and addProduct as props */}
          <Catalog />
        </Container>
      </ThemeProvider>
    </>
  )
}

// Exporting the App component so it can be used in other parts of the app
export default App;
