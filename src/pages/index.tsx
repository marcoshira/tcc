import Head from 'next/head';
import { useContext } from 'react';
import { InputContext } from '../contexts/InputContext';
import { Home } from '../templates/Home';

export default function Index() {
  const { formSubmit } = useContext(InputContext);

  return (
    <>
      <Head>
        <title>Estaca Web</title>
      </Head>
      <Home modalElement="#__next" />
    </>
  );
}
