const images = {};
const modules = import.meta.glob("./img/*.{png,jpg,jpeg,svg}", { eager: true });

Object.entries(modules).forEach(([path, module]) => {
  const name = path.split("/").pop();
  images[name] = module.default;
});

export default images;
