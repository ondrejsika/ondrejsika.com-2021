import Head from "next/head";
import Gauges from "../components/Gauges";
import GoogleAnalytics from "../components/GoogleAnalytics";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.35em;
  }
`;
const Container = styled.div`
  padding: 0 2em;
  font-family: "IBM Plex Sans", sans-serif;
  max-width: 800px;
  @media (max-width: 600px) {
    padding: 0 1em;
  }
`;
const Header = styled.h1`
  font-size: 2.8em;
  margin-block-end: 0.2em;
`;
const Technologies = styled.b`
  font-size: 1.7em;
`;
const A = styled.a`
  color: #131480;
`;
const Button = styled.a`
  border: 2px solid #131480;
  padding: 0.15em 0.4em;
  margin: 0.3em 0.6em 0.3em 0;
  color: #131480;
  text-decoration: none;
  display: inline-block;
  &:hover {
    border: 2px solid #131480;
    padding: 0.15em 0.4em;
    background-color: #131480;
    color: white;
  }
`;
Button.defaultProps = {
  target: "_blank",
};

export default () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Ondrej Sika - ondrejsika.com</title>
        <link rel="shortcut icon" type="image/png"  href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Header>Ondrej Sika</Header>
        <p>
          <A href="mailto:ondrej@ondrejsika.com">ondrej@ondrejsika.com</A>
          <br />
          <A href="tel:+420773452376">+420 773 452 376</A> (
          <A href="https://t.me/ondrejsika">Telegram</A>)
        </p>

        <p className="row">
          <Button href="https://www.instagram.com/ondrejsika/">
            Instagram
          </Button>
          <Button href="https://www.linkedin.com/in/ondrejsika/">
            Linkedin
          </Button>
          <Button href="https://github.com/ondrejsika">Github</Button>
          <Button href="https://twitter.com/ondrejsika">Twitter</Button>
          <Button href="https://www.facebook.com/ondrejsika">Facebook</Button>
          <Button href="https://www.flickr.com/photos/ondrejsika/albums">
            Flickr
          </Button>
        </p>
        <p className="row">
          <Button href="https://sika.io/">Ondrej Sika DevOps (sika.io)</Button>
          <br />
          <Button href="https://sikalabs.com">SikaLabs (sikalabs.com)</Button>
          <br />
          <Button href="https://trainera.io">Trainera (trainera.io)</Button>
        </p>
        <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
          <A href="/ondrej">/ondrej</A>
        </div>
      </Container>

      <Gauges gauges_site_id="xxx" />
      <GoogleAnalytics google_analytics_site_id="UA-xxx-1" />
    </>
  );
};
