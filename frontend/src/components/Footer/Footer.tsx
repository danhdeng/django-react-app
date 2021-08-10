import React from 'react'
import { Container, Typography, Link, Grid, Box} from '@material-ui/core';
import  useStyles from './style';

function CopyRight(){
    return (
    <Typography variant="body2" color="textSecondary" align="center">
        {'CopyRight @'}
   
    <Link color="inherit" href="https://material-ui.com/">
        MyBlog
    </Link>{' '}
    {new Date().getFullYear()}
       {' . '} 
    </Typography>
    )
}

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
        ],
    },
    {
        title: 'Resources',
        description: [
            'Resource',
            'Resource name',
            'Another resource',
            'Final resource',
        ],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];


export default function Footer() {
    const classes=useStyles()
    
    
    return (
        <React.Fragment>
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justifyContent="space-evenly">
                    {
                        footers.map((footer)=>(
                            <Grid item xs={6} sm={3} key={footer.title}>
                                <Typography variant="h6" color="textPrimary" gutterBottom >
                                    {footer.title}
                                </Typography>
                                <ul>
                                    {footer.description.map((item)=>(
                                        <li key={item}>
                                            <Link href="#" variant="subtitle1" color="textSecondary">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        ))
                    }

                </Grid>
                <Box mt={5}>
					<CopyRight />
				</Box>
            </Container>
        </React.Fragment>
    )
}
