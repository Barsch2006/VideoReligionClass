import {Img} from 'remotion';
import AeltesterImg from './assets/aeltester.png';

export const Aeltester: React.FC<{sizes: string | undefined}> = ({sizes}) => {
	return <Img style={{height: sizes, width: sizes }} src={AeltesterImg} />;
};
