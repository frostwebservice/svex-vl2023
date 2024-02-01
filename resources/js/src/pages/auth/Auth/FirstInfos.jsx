import { useRef, useState } from "react";
import * as Yup from 'yup';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from 'formik';
import { useSearchParams } from '@/hooks/use-search-params';
import { useNavigate } from 'react-router-dom';

import {
  Box,
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
import './Form.css';





const Page = () => {


  const validationSchema = Yup.object({
    firstname: Yup
      .string()
      .max(255)
      .required('Name is required'),
    lastname: Yup
      .string()
      .max(255)
      .required('Name is required'),
    phonenumber: Yup
      .string()
      .max(255)
      .required('Name is required'),
    companywebsite: Yup
      .string()
      .max(255)
      .required('Name is required'),
    companylocation: Yup
      .string()
      .max(255)
      .required('Name is required'),
    companyname: Yup
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
    firstname: '',
    lastname: '',
    phonenumber: '',
    companywebsite:'',
    companylocation: '',
    companyname:'',
    email:''
  });
  initialValues.email = email;

  const onCancel = () =>{
    navigate(returnTo || paths.auth.auth.signin)
} 

  const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit: values => { 

    setIsLoading(true);
    setLetter("");
    axios
      .post("/api/first-Info", values)
        .then((response) => {
          if (response.data.status === 200) {
            setInitialValues({
            firstname: '',
            lastname: '',
            phonenumber: '',
            companywebsite:'',
            companylocation: '',
            companyname:'',
            email:''
          })
          navigate(returnTo || paths.auth.auth.secondInfos)
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
      <div style={{ width:'693px',
      margin:'auto'}}>
      <Typography   color="primary" variant="h4" sx={{pb:1, fontWeight:'bold',textAlign: 'center'}}>
          LOGO
             </Typography>
        <Card sx={{borderRadius: 2.5 }} className="mainCard card  px-4 pt-4 pb-3">
         
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
              <div className='p-2 '>
              <TextField
                  label="First name"
                  className="title-inter "
                  name="firstname"
                  variant="filled"
                  fullWidth
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.firstname && formik.errors.firstname)}
                  helperText={formik.touched.firstname && formik.errors.firstname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                /></div>
                 <div className='p-2 '>
                <TextField
                  variant="filled"
                  className="title-inter "
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.phonenumber && formik.errors.phonenumber)}
                  helperText={formik.touched.phonenumber && formik.errors.phonenumber}
                  label="Phone Number"
                  name="phonenumber"
                  fullWidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phonenumber}
                /></div>
                 <div className='p-2'>
                <TextField
                  variant="filled"
                  className="title-inter "
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.companywebsite && formik.errors.companywebsite)}
                  helperText={formik.touched.companywebsite && formik.errors.companywebsite}
                  label="Company Website"
                  name="companywebsite"
                  fullWidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.companywebsite}
                /></div>
              </Stack>  
              <Stack spacing={0} className = "col-md-6 col-12 ">
              <div className='p-2  '>
              <TextField
                  label="Last name"
                  className="title-inter"
                  name="lastname"
                  variant="filled"
                  fullWidth
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.lastname && formik.errors.lastname)}
                  helperText={formik.touched.lastname && formik.errors.lastname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                /></div>
                 <div className='p-2 '>
                <TextField
                  variant="filled"
                  className="title-inter "
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.companyname && formik.errors.companyname)}
                  helperText={formik.touched.companyname && formik.errors.companyname}
                  label="Company Name"
                  name="companyname"
                  fullWidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.companyname}
                /></div>
                 <div className='p-2'>
                <TextField
                  variant="filled"
                  className="title-inter "
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.companylocation && formik.errors.companylocation)}
                  helperText={formik.touched.companylocation && formik.errors.companylocation}
                  label="Company Location"
                  name="companylocation"
                  fullWidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.companylocation}
                /></div>
              </Stack>  
            

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
