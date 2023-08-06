
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = "Field required";
      if (!values.password) errors.password = "Field required";
      
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
          <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
            {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div>: null}

        <div>Password</div>
          <input name="password" type="password" onChange={formik.handleChange} value={formik.values.password}/>
          {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div>: null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
