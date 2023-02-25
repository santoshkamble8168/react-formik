import react from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
})

const Sigin = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    {...formik.getFieldProps('email')}
                    isInvalid={formik.touched.email && formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    {...formik.getFieldProps('password')}
                    isInvalid={formik.touched.password && formik.errors.password}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant='success' className='mt-3' type="submit">Signin</Button>
        </Form>
    )
}

export default Sigin