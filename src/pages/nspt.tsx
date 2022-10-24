import Head from 'next/head';
import { useContext } from 'react';
import { InputContext } from '../contexts/InputContext';
import { Home } from '../templates/Home';

export default function Index() {
  const { inputSoil, inputArea, inputLength, inputPerimeter, inputStake } =
    useContext(InputContext);

  return (
    <>
      <Head>
        <title>Dados de Nspt</title>
      </Head>
      <p>{inputSoil}</p>
      <p>{inputArea}</p>
    </>
  );
}
