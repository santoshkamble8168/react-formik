import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Please confirm password'),
})

const Signup = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

  return (
      <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                  type="text"
                  {...formik.getFieldProps('firstName')}
                  isInvalid={formik.touched.firstName && formik.errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName}
              </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                  type="text"
                  {...formik.getFieldProps('lastName')}
                  isInvalid={formik.touched.lastName && formik.errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                  {formik.errors.lastName}
              </Form.Control.Feedback>
          </Form.Group>
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
          <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                  type="password"
                  {...formik.getFieldProps('confirmPassword')}
                  isInvalid={
                      formik.touched.confirmPassword && formik.errors.confirmPassword
                  }
              />
              <Form.Control.Feedback type="invalid">
                  {formik.errors.confirmPassword}
              </Form.Control.Feedback>
          </Form.Group>
          <Button variant='success' className='mt-3' type="submit">Signup</Button>
      </Form>

  )
}

export default Signup