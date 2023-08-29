'use client';
import React from 'react';
import { TextField, Container } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../components/ui-components/Button/Button';
import axios from 'axios';


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

const createPersonFetch = async (values: FormValues) => {
	const url = process.env.NEXT_PUBLIC_DOMAIN + '/persons';
	try {
		await axios.post(url, values);
	} catch (error) {
		console.error('Error creating person:', error);
	}
}

const FormPerson: React.FC = () => {

	const formik = useFormik<FormValues>({
		initialValues: {
			name: '',
			email: '',
			rank: '',
		},
		validationSchema,
		onSubmit: (values) => {
			createPersonFetch(values)
		},
	});

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
					type='number'
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

				<Button type="submit" appearance="primary">
					Submit
				</Button>
			</form>
		</Container>
	);
};


export default FormPerson;