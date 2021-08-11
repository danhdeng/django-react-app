import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

interface WithLoadingProps {
	loading: boolean;
  }


  export const PostLoading = <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithLoadingProps> => ({
	loading,
	...props
  }: WithLoadingProps) =>
	loading ? ( <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign: 'left'}}>
  <MoonLoader
    color={'#123abc'}
   loading={true}
   size={20}
  />
</div>) : <Component {...props as P} />;