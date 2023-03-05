import { visit } from "unist-util-visit";

const remarkCodeTitle = () => {
  return (tree, file) => {
    visit(tree, "code", (node, index, parent) => {
      const metaString = `${node.lang ?? ""} ${node.meta ?? ""}`.trim();
      if (!metaString) return;
        const title = metaString.substring(metaString.indexOf(' ') + 1) ?? ''
      if (!title) {
        file.message("Invalid title", node, "remark-code-title");
        return;
      }
      if (!title) return;

//      const titleNode = {
//        type: "paragraph",
//        data: {
//          hName: "div",
//          hProperties: {
//            "data-remark-code-title": true,
//            "data-language": node.lang,
//          },
//        },
//        children: [{ type: "text", value: title }],
//      };

//      parent.children.splice(index, 0, titleNode);
parent.children[index].value = title + '&' + parent.children[index].value
      /* Skips this node (title) and the next node (code) */
      return index + 2;
    });
  };
};

export default remarkCodeTitle;
