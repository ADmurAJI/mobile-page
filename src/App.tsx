import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppLayout } from './app/AppLayout'

import { theme } from './app/theme/theme'
import { ExchangePage } from './pages/ExchangePage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout>
        <ExchangePage />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
