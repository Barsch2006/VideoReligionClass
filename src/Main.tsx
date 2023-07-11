import {AbsoluteFill, Sequence} from 'remotion';
import {DienerKrank} from './components/DienerKrank';
import {DienerGoes} from './components/DienerGoes';
import {Outro} from './components/Outro/Outro';
import {
	JesusAndAeltesteGo,
	JesusAndAeltesteCome,
	JesusAndAeltesteStand,
} from './components/JesusAndAelteste';
import {Start} from './components/Start';
import {Subttitle} from './components/Subttitle';
import {HouseComing, HouseComingIn, HouseComingOut} from './components/House';
const MainCSS = {
	backgroundColor: '#222',
};

export const MainVideo: React.FC = () => {
	const defaultSubtitleLenght = 300;
	const defaultSceneDuration = 300;
	const runningSpeedDuration = 150;
	return (
		<AbsoluteFill style={MainCSS}>
			{/* Intro */}
			<Sequence durationInFrames={120}>
				<Start StyleCSS={MainCSS} />
			</Sequence>
			{/* Diener wird krank */}
			<Sequence from={120} durationInFrames={defaultSceneDuration}>
				<DienerKrank />
			</Sequence>
			<Sequence from={120} durationInFrames={defaultSubtitleLenght}>
				<Subttitle
					talking="Hauptmann"
					text="Mein Ältester, mein mir lieber Diener ist schwer krank. Aber ich habe gehört, dass ein gewisser Jesus in der Gegend ist. Würdest du ihn fragen, ob er meinen Diener heilen könne? Ich fühle mich zu unwürdig mit ihn selbst zu bitten."
				/>
			</Sequence>
			{/* Ältester geht */}
			<Sequence from={420} durationInFrames={runningSpeedDuration}>
				<DienerGoes />
			</Sequence>
			{/* Ältester kommt zu Jesus */}
			<Sequence from={570} durationInFrames={runningSpeedDuration}>
				<JesusAndAeltesteCome />
			</Sequence>
			{/* Ältester spricht zu Jesus */}
			<Sequence from={720} durationInFrames={defaultSceneDuration * 2}>
				<JesusAndAeltesteStand />
			</Sequence>
			<Sequence from={720} durationInFrames={defaultSubtitleLenght}>
				<Subttitle
					talking="Ältester"
					text="Hallo Jesus, ich wurde von einem
						Hauptmann aus Kafernaum geschickt. Sein Diener ist krank und er
						fühlt sich nicht würdig genug dich selbst aufzusuchen und zu fragen,
						ob Du ihn heilen könntest."
				/>
			</Sequence>
			<Sequence from={1020} durationInFrames={defaultSubtitleLenght}>
				<Subttitle
					talking="Ältester"
					text="Er verdient es, dass du seine Bitte erfüllst, denn er liebt unser Volk und hat uns die Synagoge gebaut."
				/>
			</Sequence>
			{/* Beide gehen zum Haus */}
			<Sequence from={1320} durationInFrames={runningSpeedDuration}>
				<JesusAndAeltesteGo />
			</Sequence>
			<Sequence from={1320} durationInFrames={defaultSubtitleLenght}>
				<Subttitle talking="Jesus" text="Begleite mich hin." />
			</Sequence>
			{/* Beide kommen zum Haus */}
			<Sequence from={1470} durationInFrames={defaultSceneDuration * 4}>
				<HouseComing />
			</Sequence>
			<Sequence from={1470} durationInFrames={defaultSceneDuration}>
				<Subttitle
					talking="Hauptmann"
					text="Herr, bemüh dich nicht! Denn ich bin es nicht wert, dass du unter mein Dach einkehrst."
				/>
			</Sequence>
			<Sequence from={1770} durationInFrames={defaultSceneDuration}>
				<Subttitle
					talking="Hauptmann"
					text="Deshalb habe ich mich selbst auch nicht für würdig gehalten, zu dir zu kommen. 
				Aber sprich nur ein Wort, dann wird mein Diener gesund."
				/>
			</Sequence>
			<Sequence from={2070} durationInFrames={defaultSceneDuration}>
				<Subttitle
					talking="Hauptmann"
					text="Denn auch ich muss Befehlen gehorchen und ich habe selbst Soldaten unter mir; sage ich nun zu einem: Geh!, so geht er, und zu einem andern: Komm!, so kommt er, und zu meinem Diener: Tu das!, so tut er es."
				/>
			</Sequence>
			{/* Jesus spricht */}
			<Sequence from={2370} durationInFrames={defaultSceneDuration}>
				<Subttitle
					talking="Jesus"
					text="Ich sage euch: Einen solchen Glauben habe ich in Israel nicht gefunden."
				/>
			</Sequence>
			{/* Jesus geht */}
			<Sequence from={2670} durationInFrames={runningSpeedDuration}>
				<HouseComingIn />
			</Sequence>
			{/* Diener ist gesund */}
			<Sequence from={2820} durationInFrames={runningSpeedDuration}>
				<HouseComingOut />
			</Sequence>
			<Sequence from={2820} durationInFrames={defaultSubtitleLenght}>
				<Subttitle
					talking="Ältester"
					text="Der Diener ist Gesund, Hauptmann!"
				/>
			</Sequence>
			{/* Outro */}
			<Sequence from={2970} durationInFrames={defaultSceneDuration * 3}>
				<Outro logoColor1="#91EAE4" logoColor2="#86A8E7" />
			</Sequence>
		</AbsoluteFill>
	);
};
