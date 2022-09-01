import Page from "@/ui/page";
export default function Homepage() {
  const title = "Home";
  const desc = "This is the home page for your nepali mentor";
  return (
    <Page title={title} description={desc}>
      <h1>Home Page</h1>
    </Page>
  );
}
