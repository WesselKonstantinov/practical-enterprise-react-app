import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

type Props = {
	className?: string;
	color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
	children?: ReactNode;
	style?: {};
};

const useStyles = makeStyles(theme => ({
	root: {
		fontFamily: theme.typography.fontFamily,
		alignItems: 'center',
		borderRadius: 2,
		display: 'inline-flex',
		flexGrow: 0,
		whiteSpace: 'nowrap',
		cursor: 'default',
		flexShrink: 0,
		fontSize: theme.typography.pxToRem(12),
		fontWeight: theme.typography.fontWeightMedium,
		height: 20,
		justifyContent: 'center',
		letterSpacing: 0.5,
		minWidth: 20,
		padding: theme.spacing(0.5, 1),
		textTransform: 'uppercase',
	},
	primary: {
		color: theme.palette.primary.main,
		backgroundColor: alpha(theme.palette.primary.main, 0.08),
	},
	secondary: {
		color: theme.palette.secondary.main,
		backgroundColor: alpha(theme.palette.secondary.main, 0.08),
	},
	error: {
		color: theme.palette.error.main,
		backgroundColor: alpha(theme.palette.error.main, 0.08),
	},
	success: {
		color: theme.palette.success.main,
		backgroundColor: alpha(theme.palette.success.main, 0.08),
	},
	warning: {
		color: theme.palette.warning.main,
		backgroundColor: alpha(theme.palette.warning.main, 0.08),
	},
}));

const Label = ({
	className = '',
	color = 'secondary',
	children,
	style,
	...rest
}: Props) => {
	const classes = useStyles();

	return (
		<span
			className={clsx(
				classes.root,
				{ [classes[color]]: color },
				className,
			)}
			{...rest}
		>
			{children}
		</span>
	);
};

export default Label;
