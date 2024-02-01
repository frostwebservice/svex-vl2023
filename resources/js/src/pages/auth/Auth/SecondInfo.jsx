import { useRef, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSearchParams } from '@/hooks/use-search-params';
// import { RedditTextfield} from '../../../frontendpage/TextfieldStyle'
import { useNavigate } from 'react-router-dom';

import "./Form.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormHelperText,
  Link,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { paths } from '@/paths';

const Page = () => {


  const validationSchema = Yup.object({
    nichecategory: Yup
      .string()
      .max(255)
      .required('Name is required'),
    budget: Yup
      .string()
      .max(255)
      .required('Name is required'),
    companysize: Yup
      .string()
      .max(255)
      .required('Name is required'),
    companyfounded: Yup
      .string()
      .max(255)
      .required('Name is required'),
    aboutbusiness: Yup
      .string()
      .max(255)
      .required('Name is required'),
  
  });

  
  const searchParams = useSearchParams();
  const returnTo = searchParams.get('returnTo');  
  const [isLoading, setIsLoading] = useState(false);
  const [letter, setLetter] = useState("Save changes and NEXT");
  const email = JSON.parse(localStorage.getItem('Email'));
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    nichecategory: '',
    budget: '',
    companysize: '',
    companyfounded:'',
    aboutbusiness: '',
    email:'',
  });
  initialValues.email = email;

  const onCancel = (e) =>{
    navigate(returnTo || paths.auth.auth.signin);
  } 

  const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit: values => { 

    setIsLoading(true);
    setLetter("");
    
    axios
      .post("/api/second-Info", values)
        .then((response) => {
          if (response.data.status === 200) {
            setInitialValues({
            nichecategory: '',
            budget: '',
            companysize: '',
            companyfounded:'',
            aboutbusiness: '',
            email:'',
          })
          navigate(returnTo || paths.auth.auth.socialHandle)
          setLetter("Save changes and NEXT")
          setIsLoading(false)
        }

        if (response.data.status === "failed") {
        setLetter("Save changes and NEXT")
        setIsLoading(false);

        }
      });
    }
  });

  return (
    <>
      <Seo title="Business Info" />
      <div className="secondInfo-page">
      <Typography   color="primary" variant="h4" sx={{pb:1, fontWeight:'bold',textAlign: 'center'}}>
          LOGO
             </Typography>
        <Card  sx={{borderRadius: 2.5 }}className="mainCard card  px-4 pt-4 pb-3" >
       
          <CardContent className="container">
            <form
              noValidate
              onSubmit={formik.handleSubmit}
               className = "row"
            >
                <Typography color='black' 
              className="title largesize mb-1"
              // variant="h4" 
              >
              General Business Information
            </Typography>
            <Stack spacing={0} className = "col-md-6 col-12">
              <div className='p-1 '>
              <TextField
                  label=" Niche category"
                  className="title-inter"
                  name="nichecategory"
                  variant="filled"
                  fullWidth
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.nichecategory && formik.errors.nichecategory)}
                  helperText={formik.touched.nichecategory && formik.errors.nichecategory}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.nichecategory}
                /></div>
                <div  className='p-1 '>
                <TextField
                  variant="filled"
                  className="title-inter "
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.companysize && formik.errors.companysize)}
                  helperText={formik.touched.companysize && formik.errors.companysize}
                  label="Company Size"
                  name="companysize"
                  fullWidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.companysize}
                /></div>
              </Stack>  
              <Stack spacing={0} className = "col-md-6 col-12 ">
              <div className='p-1 '>
                <TextField
                  variant="filled"
                  className="title-inter "
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.budget && formik.errors.budget)}
                  helperText={formik.touched.budget && formik.errors.budget}
                  label="Budget"
                  name="budget"
                  fullWidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.budget}
                /></div>
            
              <div className='p-1  '>
              <TextField
                  label="Company founded"
                  className="title-inter"
                  name="companyfounded"
                  variant="filled"
                  fullWidth
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.companyfounded && formik.errors.companyfounded)}
                  helperText={formik.touched.companyfounded && formik.errors.companyfounded}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.companyfounded}
                /></div>
                
              </Stack>  
              <div className='p-1 px-3  '>
              <TextField
                  label="Bio"
                  className="title-inter "
                  name="aboutbusiness"
                  variant="filled"
                  multiline
                  inputProps={{
                      style: {
                        height: "110px",
                      },
                    }}
                  fullWidth
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.aboutbusiness && formik.errors.aboutbusiness)}
                  helperText={formik.touched.aboutbusiness && formik.errors.aboutbusiness}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.aboutbusiness}
                /></div>

              <div className= "row d-flex justify-content-end pt-4 px-1 title-inter ">
              
                  <Button 
                  className="text-center m-2 w-25  btn btn-hover-outline mainButton smallsize"
                    variant="white"
                    onClick={onCancel}
                  >
                  Cancel
                  </Button>
                        
                    
                  <Button
                    className="text-center   mx-8 w-50  mainButton background-blue smallsize"
                    variant="contained"
                  
                    sx={{ width:200 , justifyContent: 'center',
                          maxWidth: '260px', maxHeight: '48px', minWidth: '100px', minHeight: '48px'
                        }}
                    type="submit">
                    <span className="ml-2"> {letter } </span>
                        {isLoading ? (
                        
                        <CircularProgress color="inherit" size="2rem"/>
                        ) : (
                        <span></span>
                        )}
                  </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
