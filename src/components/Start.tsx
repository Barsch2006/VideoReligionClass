import {Sequence, AbsoluteFill} from 'remotion';

export const Start: React.FC<{StyleCSS: React.CSSProperties}> = ({
	StyleCSS,
}) => {
	return (
		<AbsoluteFill style={StyleCSS}>
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<h1 style={{color: '#fff', fontSize: '100px'}}>
					Der Hauptmann von Kafernaum
				</h1>
			</div>
			<Sequence
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				from={20}
				durationInFrames={40}
			>
				<p
					style={{
						marginTop: '260px',
						textAlign: 'center',
						color: '#fff',
						fontSize: '50px',
					}}
				>
					Lukas 7, 2-10 <br />
					By Christian F
				</p>
			</Sequence>
		</AbsoluteFill>
	);
};
