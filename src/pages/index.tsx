import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const H1Styled = styled.h1`
  color: #1d3557;
  margin: 0;
  padding: 10px 20px;
  font-weight: 600;
`;

const MainStyled = styled.main`
  background-color: #a8dadc;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStyled>
        <H1Styled>Next + StyledComponents + TS + MongoDB Setup</H1Styled>
      </MainStyled>
    </>
  );
}
