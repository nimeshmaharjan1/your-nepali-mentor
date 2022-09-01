import { NextPage } from "next";
import Head from "next/head";
import Header from "./header";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Page: NextPage<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header></Header>
      <div className="container mx-auto">{children}</div>
    </>
  );
};
export default Page;
