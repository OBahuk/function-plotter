import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    overrides: {
        MuiContainer: {
            root: {
                textAlign: 'center',
                '& .MuiBox-root': {
                    margin: '2em'
                },
                '& .error': {
                    color: 'red',
                    fontWeight: 'bold'
                }
            }
        },
        MuiInput: {
            root: {
                margin: '1em'
            }
        }
    }
});