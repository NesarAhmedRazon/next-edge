import HTMLReactParser, { domToReact } from "html-react-parser";
import Image from "next/image";

import React from "react";

export default function WpParser(props) {
  const options = {
    replace: (domNode) => {
      const { attribs, children, name } = domNode;
      if (name === "img") {
        let src = attribs.src;
        if (src && src.startsWith("//")) {
          src = "https:" + src;
        }
        return (
          <Image
            src={src}
            width={attribs.width ?? "100"}
            height={attribs.height ?? "100"}
          />
        );
      }
      return domToReact(domNode, options);
    }
  };
  return <>{HTMLReactParser(props.cont, options)}</>;
}
