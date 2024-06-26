import { useCallback, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useMounted } from '@/hooks/use-mounted';
import { useRouter } from '@/hooks/use-router';
import { paths } from '@/paths';

const Page = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const { handleRedirectCallback } = useAuth();

  const handle = useCallback(async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    const hasParams = !!(code && state);

    if (!hasParams) {
      router.replace(paths.index);
      return;
    }

    try {
      const appState = await handleRedirectCallback();

      if (isMounted()) {
        // returnTo could be an absolute path
        window.location.replace(appState?.returnTo || paths.dashboard.index);
      }
    } catch (err) {
      console.error(err);

      if (isMounted()) {
        router.replace(paths.index);
      }
    }
  }, [router, handleRedirectCallback, isMounted]);

  useEffect(() => {
      handle();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  return null;
};

export default Page;
