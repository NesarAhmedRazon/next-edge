import React from "react";
import Default from "./Default";

export default function Template(props) {
  const dtemplates = [
    "Template_LeftsidebarForLegalPages",
    "Template_FullwidthPageNoSidebarButSLIM",
    "Template_FullwidthPageNoSidebar",
    "DefaultTemplate"
  ];

  return (
    <>
      {props?.single?.template?.templateName === "Default" && (
        <Default {...props} />
      )}
    </>
  );
}
