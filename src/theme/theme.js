import { createTheme } from '@mui/material/styles';

// Olive Green Theme Configuration
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4B5E40',
      light: '#6B7E60',
      dark: '#2A3226',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#A6B984',
      light: '#C6D9A4',
      dark: '#869964',
      contrastText: '#2C2C2C',
    },
    background: {
      default: '#F7F9F4',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#5A5A5A',
    },
    error: {
      main: '#D9534F',
      light: '#E57373',
      dark: '#C62828',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB74D',
      dark: '#F57C00',
    },
    info: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    divider: 'rgba(75, 94, 64, 0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(75, 94, 64, 0.15)',
          },
        },
        contained: {
          backgroundColor: '#4B5E40',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#6B7E60',
          },
        },
        outlined: {
          borderColor: '#4B5E40',
          color: '#4B5E40',
          '&:hover': {
            backgroundColor: 'rgba(75, 94, 64, 0.04)',
            borderColor: '#6B7E60',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(75, 94, 64, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: '#4B5E40',
          color: '#FFFFFF',
        },
        colorSecondary: {
          backgroundColor: '#A6B984',
          color: '#2C2C2C',
        },
        colorError: {
          backgroundColor: '#D9534F',
          color: '#FFFFFF',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #A6B984 0%, #4B5E40 100%)',
          boxShadow: '0 2px 12px rgba(75, 94, 64, 0.15)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#4B5E40',
          color: '#FFFFFF',
          borderRight: 'none',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: '4px 8px',
          '&.Mui-selected': {
            backgroundColor: '#A6B984',
            color: '#2C2C2C',
            '&:hover': {
              backgroundColor: '#C6D9A4',
            },
          },
          '&:hover': {
            backgroundColor: 'rgba(166, 185, 132, 0.1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
              borderColor: 'rgba(75, 94, 64, 0.23)',
            },
            '&:hover fieldset': {
              borderColor: '#4B5E40',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4B5E40',
            },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& .MuiTableHead-root': {
            backgroundColor: '#F7F9F4',
          },
          '& .MuiTableCell-head': {
            backgroundColor: '#4B5E40',
            color: '#FFFFFF',
            fontWeight: 600,
          },
          '& .MuiTableRow-root:nth-of-type(even)': {
            backgroundColor: 'rgba(166, 185, 132, 0.04)',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(75, 94, 64, 0.04)',
          },
        },
      },
    },
  },
});

// Dark theme variant
export const darkTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: 'dark',
    primary: {
      main: '#A6B984',
      light: '#C6D9A4',
      dark: '#869964',
      contrastText: '#2A3226',
    },
    secondary: {
      main: '#4B5E40',
      light: '#6B7E60',
      dark: '#2A3226',
      contrastText: '#F3F6E8',
    },
    background: {
      default: '#2A3226',
      paper: '#3A4336',
    },
    text: {
      primary: '#F3F6E8',
      secondary: '#C6D9A4',
    },
  },
  components: {
    ...theme.components,
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2A3226',
          color: '#F3F6E8',
          borderRight: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #4B5E40 0%, #2A3226 100%)',
          boxShadow: '0 2px 12px rgba(42, 50, 38, 0.25)',
        },
      },
    },
  },
});

export default theme;