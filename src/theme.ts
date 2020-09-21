import { createMuiTheme } from '@material-ui/core'
import * as colors from '@material-ui/core/colors'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

const themeOptions: ThemeOptions = {
  palette: {
    primary: colors.grey,
    secondary: colors.pink,
    background: {
      default: colors.grey[200]
    }
  },
  typography: {
    fontFamily: '"Roboto", "Noto sans KR", sans-serif',
    h1: {
      fontSize: '1.625rem'
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500
    },
    h3: {
      fontSize: '1.375rem'
    },
    h4: {
      fontSize: '1.25rem'
    },
    h5: {
      fontSize: '1.125rem'
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 400
    }
  },
  overrides: {
    MuiMenuItem: {
      root: {
        fontSize: '0.875rem'
      }
    },
    MuiInputLabel: {
      shrink: {
        fontSize: '1.125rem'
      }
    },
    MuiTooltip: {
      tooltip: {
        color: colors.blue[600],
        backgroundColor: 'white',
        border: `1px solid ${colors.blue[600]}`,
        fontSize: '1rem'
      }
    }
  }
}
export default createMuiTheme(themeOptions)

export const darkTheme = createMuiTheme({
  ...themeOptions,
  palette: { ...themeOptions.palette, type: 'dark' }
})
