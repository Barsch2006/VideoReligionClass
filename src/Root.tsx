import {Composition} from 'remotion';
import {MainVideo} from './Main';

import './style.css';

const videoLenghtInSeconds = (4050)/30;

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="Video"
			component={MainVideo}
			durationInFrames={30 * videoLenghtInSeconds}
			fps={30}
			width={1920}
			height={1080}
			defaultProps={{}}
		/>
	);
};
