import {Img} from 'remotion';
import HauptmannImg from './assets/hauptmann.png';

export const Hauptmann: React.FC<{sizes: string | undefined}> = ({sizes}) => {
	return <Img style={{height: sizes, width: sizes }} src={HauptmannImg} />;
};
