import {Img} from 'remotion';
import DienerImg from './assets/servant.png';

export const Diener: React.FC<{sizes: string | undefined}> = ({sizes}) => {
	return <Img style={{height: sizes, width: sizes }} src={DienerImg} />;
};
