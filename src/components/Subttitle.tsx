import {AbsoluteFill} from 'remotion';

export const Subttitle: React.FC<{talking: string, text: string}> = ({talking, text}) => {
	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'end',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					background: '#222222aa',
					width: '100%',
					padding: '20px',
					borderRadius: '10px',
					fontFamily: 'Arial',
					fontSize: '30px',
					color: '#fff',
				}}
			>
				<strong>{talking}:</strong> {text}
			</div>
		</AbsoluteFill>
	);
};
