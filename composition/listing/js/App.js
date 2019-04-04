'use strict';

// const App = ({items}) => (
//   <main>
//     {items.map(item => {
//       switch(item.type) {
//         case 'unisex':
//           return <Item color="black" item={item} />;
//         case 'male':
//           return <Item color="blue" item={item} />;
//         case 'female':
//           return <Item color="orange" item={item} />;
//       }
//     })}
//   </main>
// );


const colors = {
  'unisex': 'black',
  'male': 'blue',
  'female': 'orange'
};

const Items = ({ items }) => (
  <main>
    {items.map((item) => <Item color={colors[item.type]} item={item} />)}
  </main>
);

const App = ({ items }) => <Items items={items} />;