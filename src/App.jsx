import React from "react";
import "./App.css";
import Folder from "./containers/Folder";
import { initialState } from "../src/mockData/mockData";
import useTraverseTree from "./hooks/useTraverseTree";

const App = () => {
  const [folders, setFolders] = React.useState(initialState);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(folders, folderId, item, isFolder);
    setFolders(finalTree);
  };

  return (
    <div>
      <h2>File explorer</h2>
      <div className="navigation__container">
        <Folder folders={folders} handleInsertNode={handleInsertNode} />
      </div>
    </div>
  );
};

export default App;
