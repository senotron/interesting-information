const getRandomInfo = () => {
  const list = require("./list.json")
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

module.exports = getRandomInfo;
