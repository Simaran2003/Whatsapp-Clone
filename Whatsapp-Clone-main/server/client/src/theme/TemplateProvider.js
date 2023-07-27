import React, { createContext } from 'react'
import { ThemeProvider,createTheme } from '@material-ui/core'

export const TemplateContext=createContext(null)


export default function TemplateProvider({children}) {

     const theme = createTheme({
          overrides: {
               MuiDrawer: {
                    paperAnchorLeft: {
                         height: 542,
                         top: 14,
                         width: '30%',
                         left: 57,
                         boxShadow: 'none',
                    }
               },
               MuiBackdrop: {
                    root: {
                         backgroundColor:'unset'
                    }
               }
          }
     })

     return (
          <TemplateContext.Provider>
               <ThemeProvider theme={theme}>
                    {children}
               </ThemeProvider>
          </TemplateContext.Provider>
     )
}
