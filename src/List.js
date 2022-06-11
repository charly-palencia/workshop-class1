import Item from "./Item";

const List = ({items}) => (
  <div className="profile-wrap">
    {items.map((profile) => <Item key={profile.id} profile={profile}/>)}
  </div>
);

export default List;
