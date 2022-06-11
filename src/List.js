const List = ({items}) => (
  <div className="profile-wrap">
    {items.map(({image, id, name}) => (
      <div key={id} className="profile">
        <div>
          <img src={image} alt="" />
        </div>
        <p>{name}</p>
      </div>
    ))}
  </div>
);

export default List;
