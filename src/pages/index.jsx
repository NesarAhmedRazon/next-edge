import Template from "@/utils/layouts";
import { getClient } from "@/utils/apollo/Client";
import { SINGLE } from "@/utils/gql/SinglePage";
import { Page } from "@/utils/template";

export default function Home(props) {
  return <>{<Page {...props} />}</>;
}
Home.Layout = Template;

export async function getStaticProps(contex) {
  const client = getClient();
  const single = await client.query({
    query: SINGLE
  });

  return {
    props: {
      single: single?.data?.nodeByUri ?? "", //Nesar
      menus: single?.data?.menus ?? ""
    },
    revalidate: 1
  };
}
