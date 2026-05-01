export function remarkCodeMeta() {
  return (tree: any) => {
    const walk = (node: any) => {
      if (!node || typeof node !== "object") return;

      if (node.type === "code") {
        const meta: string | undefined = node.meta;
        if (meta) {
          node.data ||= {};
          node.data.hProperties ||= {};

          node.data.hProperties["data-meta"] = meta;

          const titleMatch = meta.match(/title="([^"]+)"/);
          if (titleMatch?.[1]) {
            node.data.hProperties["data-title"] = titleMatch[1];
          }
        }
      }

      const children = node.children;
      if (Array.isArray(children)) {
        for (const child of children) walk(child);
      }
    };

    walk(tree);
  };
}
