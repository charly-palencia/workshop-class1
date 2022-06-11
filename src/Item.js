const Item = ({profile: {image, name}}) => {
  return <div className="profile">
    <div>
      <img src={image} alt="" />
    </div>
    <p>{name}</p>
  </div>
}

export default Item;
