import {useCurrentFrame, useVideoConfig} from 'remotion';
import {Img} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {Jesus} from './Persons/Jesus';
import Background from './img/landscape.png';
import {Aeltester} from './Persons/Aeltester';

export const JesusAndAeltesteGo: React.FC = () => {
	const JesusmarginLeft =
		(useCurrentFrame() / useVideoConfig().durationInFrames) * 98;
	const AeltesterMarginLeft =
		10 + (useCurrentFrame() / useVideoConfig().durationInFrames) * 98;

	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<Img src={Background} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-20px', marginLeft: `${JesusmarginLeft}%`}}>
					<Jesus sizes="50vh" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div
					style={{marginBottom: '-20px', marginLeft: `${AeltesterMarginLeft}%`}}
				>
					<Aeltester sizes="50vh" />
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

export const JesusAndAeltesteCome: React.FC = () => {
	const AeltesterMarginLeft =
		100 - (useCurrentFrame() / (useVideoConfig().durationInFrames)) * 98;

	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<Img src={Background} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-20px'}}>
					<Jesus sizes="50vh" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div
					style={{marginBottom: '-20px', marginLeft: `${AeltesterMarginLeft}%`}}
				>
					<Aeltester sizes="50vh" />
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

export const JesusAndAeltesteStand: React.FC = () => {
	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<Img src={Background} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-20px'}}>
					<Jesus sizes="50vh" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div
					style={{marginBottom: '-20px', marginLeft: `200px`}}
				>
					<Aeltester sizes="50vh" />
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
