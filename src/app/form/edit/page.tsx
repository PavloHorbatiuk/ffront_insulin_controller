"use client"
import React, { useEffect } from 'react';

import { TextField, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import { Button } from '../../../../components';

interface EditPersonProps {
	personId: number;
}

interface FormValues {
	name: string;
	email: string;
	rank: string;
}

const validationSchema = Yup.object({
	name: Yup.string().required('Name is required'),
	email: Yup.string().email('Invalid email format').required('Email is required'),
	rank: Yup.number().required('Rank is required').positive('Rank must be a positive number'),
});

const EditPersonForm: React.FC<EditPersonProps> = ({ personId }) => {

	const formik = useFormik<FormValues>({
		initialValues: {
			name: '',
			email: '',
			rank: '',
		},
		validationSchema,
		onSubmit: (values) => {
			updatePersonFetch(values);
		},
	});


	useEffect(() => {
		const fetchPersonData = async () => {
			const url = process.env.NEXT_PUBLIC_DOMAIN + '/persons';
			try {
				const response = await axios.get(url +`/${personId}`);
				const personData = response.data; // Assuming your API returns person data
				formik.setValues(personData);
			} catch (error) {
				console.error('Error fetching person data:', error);
			}
		};

		fetchPersonData();
	}, [personId]);



	const updatePersonFetch = async (values: FormValues) => {
		const url = process.env.NEXT_PUBLIC_DOMAIN + `/persons/${personId}`;
		try {
			await axios.put(url, values);
		} catch (error) {
			console.error('Error updating person:', error);
		}
	};

	return (
		<Container maxWidth="sm">
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id="name"
					name="name"
					label="Name"
					variant="outlined"
					margin="normal"
					value={formik.values.name}
					onChange={formik.handleChange}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>

				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					variant="outlined"
					margin="normal"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>

				<TextField
					type="number"
					fullWidth
					id="rank"
					name="rank"
					label="Rank"
					variant="outlined"
					margin="normal"
					value={formik.values.rank}
					onChange={formik.handleChange}
					error={formik.touched.rank && Boolean(formik.errors.rank)}
					helperText={formik.touched.rank && formik.errors.rank}
				/>
				<div className="flex justify-between">
					<Button type="submit" appearance="primary">
						Update
					</Button>
					<Link href="/">
						<ArrowBackIcon />
					</Link>
				</div>
			</form>
		</Container>
	);
};

export default EditPersonForm;
