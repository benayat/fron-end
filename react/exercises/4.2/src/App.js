// import './App.css';
import faker from 'faker';
import Card from './Card.component';
const App = () => {
  return [
    <Card
      image={faker.image.image()}
      title="thing1"
      description="thing1 description"
      links={['Share', 'Explore']}
    />,
    <Card
      image={faker.image.image()}
      title="thing2"
      description="thing2 description"
      links={['Focus', 'exit']}
    />,
    <Card
      image={faker.image.image()}
      title="thing3"
      description="thing3 description"
      links={['destroy', 'wake-up']}
    />,
  ];
};
export default App;
