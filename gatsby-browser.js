const React = require('react')
const { StyledEngineProvider } = require('@mui/material/styles')
const { Box, ScopedCssBaseline, Toolbar, Button, Link, AppBar, CssBaseline } = require('@mui/material')

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline/>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link href="/get-started" color="inherit">
              Gat Started
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box component='main'>
        {children}
      </Box>
    </>
  )
}

exports.wrapRootElement = ({ element }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ScopedCssBaseline>
        <Layout>
          {element}
        </Layout>
      </ScopedCssBaseline>
    </StyledEngineProvider>
  )
}
