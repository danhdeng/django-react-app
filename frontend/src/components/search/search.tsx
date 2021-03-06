// import React from 'react'
// import { useLocation } from 'react-router-dom';

// export default function Search() {
//     const location = useLocation();
//     console.log(location)
//     return (
//         <div>
//             Search Page
//         </div>
//     )
// }


import React, { useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './search.styles';
import Link from '@material-ui/core/Link';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../axios';
import { Location } from "history";

const Search = () => {
	const classes = useStyles();
    const [posts, setPosts]=useState([]);
    const location = useLocation<Location>();

    useEffect(() =>{
        axiosInstance.get('search/'+ location.state.search).then((res) => {
			const allPosts = res.data;
			setPosts(allPosts);
			console.log(res.data);
		});
    },[])

	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{posts.map((post:any) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card className={classes.card}>
									<Link color="textPrimary" href={'post/' + post.slug}  className={classes.link}>
										<CardMedia
											className={classes.cardMedia}
											image="https://source.unsplash.com/random"
											title="Image title"
										/>
									</Link>
									<CardContent>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.postTitle}
										>
											{post.title.substr(0, 50)}...
										</Typography>
										<div className={classes.postText}>
											<Typography
												component="p"
												color="textPrimary"
											></Typography>
											<Typography variant="body2" color="textSecondary">
												{post.excerpt.substr(0, 60)}...
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Search;
