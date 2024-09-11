export const initialState = {
  id: 1,
  name: "root",
  isFolder: true,
  children: [
    {
      id: 2,
      name: "src",
      isFolder: true,
      children: [{ id: 5, name: "routes", isFolder: false, children: [] }],
    },
    {
      id: 3,
      name: "package.json",
      isFolder: false,
      children: [],
    },
  ],
};
