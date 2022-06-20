import Head from "next/head";
import type { GetServerSidePropsContext } from "next";
interface IndexProps {
  user: {
    displayName: string;
    email: string;
  };
}
const Index = ({ user }: IndexProps) => {
  console.log("user", user.displayName);
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
      <p>
        name: {user.displayName}, email: {user.email}
      </p>
    </div>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: { user: ctx.query },
  };
}

export default Index;
