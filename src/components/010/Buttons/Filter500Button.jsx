function Filter500Button({ classes, setSq }) {
  const clickHandler = () => {
    setSq((squares) =>
      squares.map((square) =>
        square.number > 500
          ? { ...square, show: true }
          : { ...square, show: false }
      )
    );
  };

  return (
    <button className={classes} onClick={clickHandler}>
      big 500
    </button>
  );
}

export default Filter500Button;
