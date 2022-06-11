import Head from "next/head";
import AboutComponent from "../components/AboutComponent";
import FooterComponent from "../components/FooterComponent";
import ServiceComponent from "../components/ServiceComponent";
import TopContainer from "../components/TopContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOODO - Landign Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
      </Head>

      <TopContainer />
      <ServiceComponent />
      <AboutComponent />
      <FooterComponent />

    </div>
  );
}
