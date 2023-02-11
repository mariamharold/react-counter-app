function Header(props) {
  const { counter } = props;
  return (
    <div>
      <h1>Hello!</h1>
      <h1>My React Counter 😎</h1>
      <h1 className="count">{counter}</h1>
    </div>
  );
}

export default Header;
