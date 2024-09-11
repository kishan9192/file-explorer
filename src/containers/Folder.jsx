/* eslint-disable react/prop-types */
import React from "react";
import "./index.css";

const Folder = ({ folders, className = "", handleInsertNode }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [input, setInput] = React.useState({
    visible: false,
    addingFolder: false,
  });

  console.log("Folders", folders);
  const { name, isFolder, children } = folders;

  const onFileOrFolderNameChange = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(folders.id, e.target.value, input.addingFolder);
      setInput({ ...input, visible: false });
    }
  };

  const Add = () => {
    const onAddFileClick = (e) => {
      setIsExpanded(true);
      e.stopPropagation();
      setInput({
        visible: true,
        addingFolder: false,
      });
    };

    const onAddFolderClick = (e) => {
      setIsExpanded(true);
      setInput({
        visible: true,
        addingFolder: true,
      });
      e.stopPropagation();
    };

    return (
      <div className="d-flex justify-evenly">
        <div>
          <button onClick={(e) => onAddFileClick(e)}>+ 📄</button>
        </div>
        <div>
          <button onClick={(e) => onAddFolderClick(e)}>+ 🗂</button>
        </div>
      </div>
    );
  };

  return (
    <div className={className}>
      {isFolder ? (
        <div>
          <div
            className="d-flex justify-between"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>🗂 {name}</span>
            <Add />
          </div>
          {input.visible && (
            <div className="pl-20">
              {input.addingFolder ? <span>🗂</span> : <span>📄</span>}
              <input
                className="ml-6"
                type="text"
                onKeyDown={onFileOrFolderNameChange}
                autoFocus
                onBlur={() => {
                  setInput({ ...input, visible: false });
                }}
              />
            </div>
          )}
          {isExpanded &&
            children.map((items) => (
              <Folder
                className="pl-20"
                key={items.id}
                folders={items}
                handleInsertNode={handleInsertNode}
              />
            ))}
        </div>
      ) : (
        <div className="d-flex justify-between">📄 {name} </div>
      )}
    </div>
  );
};

export default Folder;
