import Head from "next/head";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className="py-5 px-11">
      <Head>
        <title>Index page</title>
        <meta
          name="description"
          content="This is the description of the Index page"
        ></meta>
      </Head>
      <Header />
      <p>Content on index page</p>
    </div>
  );
};

export default Index;
