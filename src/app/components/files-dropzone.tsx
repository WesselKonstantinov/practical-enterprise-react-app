import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@mui/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FileCopy, MoreVert } from '@mui/icons-material';
import {
	Box,
	Button,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tooltip,
	Typography,
} from '@mui/material';
import bytesToSizes from 'utils/bytes-to-size';

type Props = {
	className?: string;
};

const useStyles = makeStyles(theme => ({
	root: {},
	dropZone: {
		border: `1px dashed ${theme.palette.divider}`,
		padding: theme.spacing(6),
		outline: 'none',
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		alignItems: 'center',
		'&:hover': {
			backgroundColor: theme.palette.action.hover,
			opacity: 0.5,
			cursor: 'pointer',
		},
	},
	dragActive: {
		backgroundColor: theme.palette.action.active,
		opacity: 0.5,
	},
	image: {
		width: 130,
	},
	info: {
		marginTop: theme.spacing(1),
	},
	list: {
		maxHeight: 320,
	},
	actions: {
		marginTop: theme.spacing(2),
		display: 'flex',
		justifyContent: 'flex-end',
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
}));

const FilesDropzone = ({ className, ...rest }: Props) => {
	const classes = useStyles();
	const [files, setFiles] = useState<any[]>([]);

	const handleDrop = useCallback(acceptedFiles => {
		setFiles(prevFiles => [...prevFiles].concat(acceptedFiles));
	}, []);

	const handleRemoveAll = () => {
		setFiles([]);
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: handleDrop,
	});

	return (
		<div className={clsx(classes.root, className)} {...rest}>
			<div
				className={clsx({
					[classes.dropZone]: true,
					[classes.dragActive]: isDragActive,
				})}
				{...getRootProps()}
			>
				<input {...getInputProps()} />
				<div>
					<img
						alt="Select file"
						className={classes.image}
						src="/images/products/add_file.svg"
					/>
				</div>
				<div>
					<Typography gutterBottom variant="h5">
						Select files
					</Typography>
					<Box mt={2}>
						<Typography color="textPrimary" variant="body1">
							Drop files here or click{' '}
							<Link underline="always">browse</Link> through your
							machine
						</Typography>
					</Box>
				</div>
			</div>
			{files.length > 0 && (
				<>
					<PerfectScrollbar options={{ suppressScrollX: true }}>
						<List className={classes.list}>
							{files.map((file, i) => (
								<ListItem
									divider={i < files.length - 1}
									key={i}
								>
									<ListItemIcon>
										<FileCopy />
									</ListItemIcon>
									<ListItemText
										primary={file.name}
										primaryTypographyProps={{
											variant: 'h5',
										}}
										secondary={bytesToSizes(file.size)}
									/>
									<Tooltip title="More options">
										<IconButton edge="end">
											<MoreVert />
										</IconButton>
									</Tooltip>
								</ListItem>
							))}
						</List>
					</PerfectScrollbar>
					<div className={classes.actions}>
						<Button onClick={handleRemoveAll} size="small">
							Remove all
						</Button>
						<Button
							color="secondary"
							size="small"
							variant="contained"
						>
							Upload files
						</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default FilesDropzone;
