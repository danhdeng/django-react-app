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
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Hidden } from '@material-ui/core';
import Post from './post'
import useStyles from './singlepost.styles';

export default function SinglePost() {
	const { id } = useParams<{id: string}>();
	console.log("the id is :",id);
	const classes = useStyles();

	const [data, setData]=useState({} as Post);

	useEffect(() => {
		axiosInstance.get(id).then((res) => {
			setData(res.data);
			console.log(res.data);
		});
		console.log('post data',data);
	}, []);

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}></div>
			<Card className={classes.card}>
				<CardMedia className={classes.cardMedia} image={data.image} title={""} />
				<div className={classes.cardDetails}>
					<CardContent>
					<Typography component="h2" variant="h5">
						{data.title}
					</Typography>
					<Typography variant="subtitle1" color="textSecondary">
						{data.excerpt}
					</Typography>
					<Typography variant="subtitle1" paragraph>
						{data.content}
					</Typography>
					<Typography variant="subtitle1" color="primary">
						Continue reading...
					</Typography>
					</CardContent>
				</div>
				{/* <Hidden xsDown>
					<CardMedia className={classes.cardMedia} image={data.image} title={""} />
				</Hidden> */}
			</Card>
		</Container>
	);
}
