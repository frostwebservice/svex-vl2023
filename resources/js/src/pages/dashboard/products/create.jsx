import { Box, Breadcrumbs, Container, Link, Stack, Typography } from '@mui/material';
import { BreadcrumbsSeparator } from '@/components/breadcrumbs-separator';
import { RouterLink } from '@/components/router-link';
import { Seo } from '@/components/seo';
import { usePageView } from '@/hooks/use-page-view';
import { paths } from '@/paths';
import { ProductCreateForm } from '@/sections/dashboard/product/product-create-form';

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Dashboard: Product Create" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Typography variant="h4">
                Create a new product
              </Typography>
              <Breadcrumbs separator={<BreadcrumbsSeparator />}>
                <Link
                  color="text.primary"
                  component={RouterLink}
                  href={paths.dashboard.index}
                  variant="subtitle2"
                >
                  Dashboard
                </Link>
                <Link
                  color="text.primary"
                  component={RouterLink}
                  href={paths.dashboard.products.index}
                  variant="subtitle2"
                >
                  Products
                </Link>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                >
                  Create
                </Typography>
              </Breadcrumbs>
            </Stack>
            <ProductCreateForm />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Page;
