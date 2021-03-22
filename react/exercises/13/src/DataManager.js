import axios from 'axios';
const DataManager = async () => {
  const cardsData = [];
  for (let i = 0; i < 30; i++) {
    const [data] = (await axios.get('https://randomuser.me/api/')).data.results;
    const person = {
      name: data.name.first + ' ' + data.name.last,
      pictureURL: data.picture.large,
    };

    cardsData.push(person);
  }
  return cardsData;
};
export default DataManager;
