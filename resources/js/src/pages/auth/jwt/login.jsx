import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormHelperText,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { useAuth } from '@/hooks/use-auth';
import { useMounted } from '@/hooks/use-mounted';
import { usePageView } from '@/hooks/use-page-view';
import { useSearchParams } from '@/hooks/use-search-params';
import { paths } from '@/paths';
import { SvexAuthCard } from './register';

const initialValues = {
  email: 'demo@devias.io',
  password: 'Password123!',
  submit: null
};

const validationSchema = Yup.object({
  email: Yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup
    .string()
    .max(255)
    .required('Password is required')
});

const Page = () => {
  const isMounted = useMounted();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const { signIn } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        await signIn(values.email, values.password);

        if (isMounted()) {
          // returnTo could be an absolute path
          window.location.href = returnTo || paths.dashboard.index;
        }
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    }
  });

  usePageView();

  return (
    <>
      <Seo title="Login" />
      <SvexAuthCard>
        <Card elevation={16}>
          <CardHeader
            subheader={(
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  component={RouterLink}
                  href={paths.auth.jwt.register}
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            )}
            sx={{ pb: 0 }}
            title="Log in"
          />
          <CardContent>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  autoFocus
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
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
              </Stack>
              {formik.errors.submit && (
                <FormHelperText
                  error
                  sx={{ mt: 3 }}
                >
                  {formik.errors.submit}
                </FormHelperText>
              )}
              <Button
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
            </form>
          </CardContent>
        </Card>
      </SvexAuthCard>
    </>
  );
};

export default Page;
