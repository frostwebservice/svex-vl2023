import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
// import { RedditTextfield} from '../../../frontendpage/TextfieldStyle1'
import "./Form.css";
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';

// import { paths } from 'src/paths';

const initialValues = {
  email: localStorage.getItem('email'),
  password: '',
  passwordConfirm: ''
};

const validationSchema = Yup.object({
  password: Yup
    .string()
    .min(7, 'Must be at least 7 characters')
    .max(255)
    .required('Required'),
  passwordConfirm: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required')
});

const Page = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {

      axios
        .post("/api/user-reset", values)
        .then((response) => {
          console.log(response);
          if (response.data.status === 200 && response.data.success) {
            navigate('/auth/auth/SignIn')

          }

          if (response.data.status === "failed") {
            alert(response.data.message);
          }
        });
    }
  });

  return (
    <>
      <Seo title="Reset Password" />
      <div className="resetpassword-page">
        <Box sx={{ mb: 4 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            // href={paths.dashboard.index}
            sx={{
              alignItems: 'center',
              display: 'inline-flex'
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography variant="subtitle2">
              Dashboard
            </Typography>
          </Link>
        </Box>
        <Card elevation={16} sx={{ borderRadius: 5 }} className="card  px-4 pt-4 pb-3">
          <CardHeader
            sx={{ pb: 0 }}
            title="Reset Password"
          />
          <CardContent>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  className="title-inter mt-4"
                  variant="filled"
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                <TextField
                  className="title-inter mt-4"
                  variant="filled"
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.passwordConfirm && formik.errors.passwordConfirm)}
                  fullWidth
                  helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                  label="Password (Confirm)"
                  name="passwordConfirm"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.passwordConfirm}
                />
              </Stack>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 4 }}
                type="submit"
                variant="contained"
              >
                Reset
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
