import DefaultLayout from '@/components/layouts/DefaultLayout';
import { ReactElement } from 'react';

const Home = () => {
  return (
    <div >
      hello
    </div>
  )
}

Home.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);


export default Home
