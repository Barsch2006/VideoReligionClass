import {useVideoConfig} from 'remotion'
import {useCurrentFrame} from 'remotion'
import {Img} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {Aeltester} from './Persons/Aeltester';
import Background from './img/landscape.png';
import {Hauptmann} from './Persons/Hauptmann';

export const DienerGoes: React.FC = () => {
	const AeltesterMarginLeft = 10 + 
		(useCurrentFrame() / useVideoConfig().durationInFrames) * 98;

	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<Img src={Background} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-45px'}}>
					<Hauptmann sizes="55vh" />
				</div>
			</AbsoluteFill>
      <AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-20px', marginLeft: AeltesterMarginLeft + '%'}}>
					<Aeltester sizes="50vh" />
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

