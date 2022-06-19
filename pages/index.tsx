import Head from "next/head";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className="py-2.5 px-11">
      <Head>
        <title>Index page</title>
        <meta
          name="description"
          content="This is the description of the Index page"
        ></meta>
      </Head>
      <p className="my-2">Content on index page</p>
      <button className="rounded shadow-md px-4 py-2 bg-zinc-100 min-w-64 transition-all hover:shadow-lg hover:bg-zinc-200">
        MUI BUTTON
      </button>
    </div>
  );
};

export default Index;
