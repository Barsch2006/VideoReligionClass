import {Img} from 'remotion';
import JesusImg from './assets/jesus.png';

export const Jesus: React.FC<{sizes: string | undefined}> = ({sizes}) => {
	return <Img style={{height: sizes, width: sizes }} src={JesusImg} />;
};
