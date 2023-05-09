import { WpParser } from "../tools";

export default function DefaultPage(props) {
  const { single } = props;
  const content = typeof single?.content === "string" ? single?.content : "";
  const postList = single?.children?.nodes ?? null;
  const pageTemplate = single?.template?.__typename ?? "DefaultTemplate";
  const notArc = single.uri.slice(1).split("/").includes("blog");
  const hasChild = single?.children?.nodes?.length > 0;
  const isArchive = single?.likeArchive?.isArchive ?? "no";
  const heading = single?.allCmbMeta?.heading;
  const topPadding = single?.allCmbMeta?.padding?.top;
  const bottomPadding = single?.allCmbMeta?.padding?.bottom;

  //logindev(isArchive);
  return (
    <>
      <main
        className={`bodyContainer site-body single type-${
          typeof single?.__typename !== "undefined" &&
          single.__typename.toLowerCase()
        }`}
      >
        <WpParser cont={content} />
      </main>
    </>
  );
}
