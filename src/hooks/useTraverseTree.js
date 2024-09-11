const useTraverseTree = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.children.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        children: [],
      });
      return tree;
    }

    const updatedChildren = tree.children.map((folder) => {
      return insertNode(folder, folderId, item, isFolder);
    });

    return { ...tree, children: updatedChildren };
  };
  return { insertNode };
};

export default useTraverseTree;
