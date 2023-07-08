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
					background: '#222222f5',
					width: '100%',
					padding: '20px',
					borderRadius: '0',
					fontFamily: 'Arial',
					fontSize: '34px',
					color: '#fff',
					lineHeight: '1.3',
				}}
			>
				<strong>{talking}:</strong> {text}
			</div>
		</AbsoluteFill>
	);
};
