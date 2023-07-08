import {Img} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {Aeltester} from './Persons/Aeltester';
import Background from './img/landscape.png';
import {Hauptmann} from './Persons/Hauptmann';
import {Jesus} from './Persons/Jesus';
import House from './img/house.png';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {Diener} from './Persons/Diener';

export const HouseComing: React.FC = () => {
	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<Img src={Background} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '0px', marginLeft: '75%'}}>
					<Img src={House} style={{height: '90vh', width: '90vh'}} />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-45px', marginLeft: '60%'}}>
					<Hauptmann sizes="55vh" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-20px', marginLeft: '-130px'}}>
					<Aeltester sizes="50vh" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-20px'}}>
					<Jesus sizes="50vh" />
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

export const HouseComingIn: React.FC = () => {
	const JesusmarginRight =
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
				<div style={{marginBottom: '0px', marginLeft: '75%'}}>
					<Img src={House} style={{height: '90vh', width: '90vh'}} />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-45px', marginLeft: '60%'}}>
					<Hauptmann sizes="55vh" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div
					style={{marginBottom: '-20px', marginLeft: AeltesterMarginLeft + '%'}}
				>
					<Aeltester sizes="50vh" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div
					style={{marginBottom: '-20px', marginLeft: -JesusmarginRight + '%'}}
				>
					<Jesus sizes="50vh" />
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};

export const HouseComingOut: React.FC = () => {
	const AeltesterMarginLeft =
		100 - (useCurrentFrame() / useVideoConfig().durationInFrames) * 20;
	const ServantMarginLeft =
		100 - (useCurrentFrame() / useVideoConfig().durationInFrames) * 15;

	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<Img src={Background} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '0px', marginLeft: '75%'}}>
					<Img src={House} style={{height: '90vh', width: '90vh'}} />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div style={{marginBottom: '-45px', marginLeft: '60%'}}>
					<Hauptmann sizes="55vh" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div
					style={{marginBottom: '-20px', marginLeft: (ServantMarginLeft - 5) + '%'}}
				>
					<Diener sizes="50vh" />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'row'}}
			>
				<div
					style={{marginBottom: '-20px', marginLeft: (AeltesterMarginLeft - 10) + '%'}}
				>
					<Aeltester sizes="50vh" />
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
