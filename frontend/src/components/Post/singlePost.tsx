// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import useStyles from './singlepost.styles';
// import Post from './post';

// const SinglePost:React.FC<Post>=({title, excerpt,content }: Post)=>{
//   const classes = useStyles();
//   return (
//     <Grid item xs={12} md={6}>
//       <CardActionArea component="a" href="#">
//         <Card className={classes.card}>
//           <div className={classes.cardDetails}>
//             <CardContent>
//                 <CardMedia
//                     className={classes.cardMedia}
//                     image="https://source.unsplash.com/random"
//                     title="Image title"
//                 />
//               <Typography component="h2" variant="h5">
//                 {title}
//               </Typography>
//               <Typography variant="subtitle1" color="textSecondary">
//                 {excerpt}
//               </Typography>
//               <Typography variant="subtitle1" paragraph>
//                 {content}
//               </Typography>
//               <Typography variant="subtitle1" color="primary">
//                 Continue reading...
//               </Typography>
//             </CardContent>
//           </div>
//          </Card>
//       </CardActionArea>
//     </Grid>
//   );
// }

// export default SinglePost

import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';
//MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Post from './post'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

export default function SinglePost() {
	const { slug } = useParams<{slug: string}>();
	const classes = useStyles();

	const [data, setData]=useState({} as Post);

	useEffect(() => {
		axiosInstance.get(slug).then((res) => {
			setData(res.data);
			console.log(res.data);
		});
		console.log('post data',data);
	}, []);

	return (
		
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}></div>
			<div>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						{data?.title}
					</Typography>
					<Typography
						variant="h5"
						align="center"
						color="textSecondary"
						paragraph
					>
						{data?.excerpt}
					</Typography>
				</Container>
			</div>
		</Container>
	);
}
