import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    link:{
        margin: theme.spacing(1, 1.5)
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    root: {
        flexGrow: 2,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
}));