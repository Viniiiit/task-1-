import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";

const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y29mZmVlJTIwY3VwY3VzaW5lfGVufDB8fHx8fDE2NzkzMjM4MTM&ixlib=rb-4.0.3&q=80&w=2070",
      title: "Espresso Delight",
      subTitle: "Bold, rich flavors in every sip.",
      price: 3.99,
    },
    {
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y29mZmVlJTIwY3VwY3VzaW5lfGVufDB8fHx8fDE2NzkzMjM4MTI&ixlib=rb-4.0.3&q=80&w=2070",
      title: "Morning Brew",
      subTitle: "Start your day with perfection.",
      price: 4.49,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y29mZmVlJTIwY3VwY3VzaW5lfGVufDB8fHx8fDE2NzkzMjM4MTY&ixlib=rb-4.0.3&q=80&w=2070",
      title: "Latte Bliss",
      subTitle: "Creamy, smooth, and unforgettable.",
      price: 4.99,
    },
    {
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y29mZmVlJTIwY3VwY3VzaW5lfGVufDB8fHx8fDE2NzkzMjM4MTg&ixlib=rb-4.0.3&q=80&w=2070",
      title: "Cold Brew Classic",
      subTitle: "Refreshing iced coffee goodness.",
      price: 5.49,
    },
    {
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y29mZmVlJTIwY3VwY3VzaW5lfGVufDB8fHx8fDE2NzkzMjM4MTM&ixlib=rb-4.0.3&q=80&w=2070",
      title: "Mocha Magic",
      subTitle: "A chocolate lover's dream.",
      price: 4.79,
    },
  ];

  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
