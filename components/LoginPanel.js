import { Formik, Form, Field } from "formik";

const LoginPanel = ({ loginAction }) => (
  <Formik initialValues={{ password: "" }} onSubmit={loginAction}>
    <Form>
      <p>
        <label htmlFor="password">Please provide your password.</label>
        <Field name="password" type="password" id="password" required />
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
    </Form>
  </Formik>
);

export default LoginPanel;
