import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import Posts from '../components/Post/Posts';

// function PostLoading<Posts>(WrappedComponent: React.ComponentType<Posts>) {
// 	return function PostLoadingComponent(Props: IPostLoadingProps) {
// 		const {isLoading, ...props}=Props
// 		console.log(props)
// 		//if (!Props.isLoading) return <WrappedComponent {...props}/>;
// 		return (
// 			<p style={{ fontSize: '25px' }}>
// 				We are waiting for the data to load!...
// 			</p>
// 		);
// 	};
// }
// export default PostLoading;

interface WithLoadingProps {
	loading: boolean;
  }
  const spinerstyle = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  export const PostLoading = <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithLoadingProps> => ({
	loading,
	...props
  }: WithLoadingProps) =>
	loading ? (<div style={{ display: "flex", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"  }}>
	<MoonLoader size={32} />
 </div>) : <Component {...props as P} />;