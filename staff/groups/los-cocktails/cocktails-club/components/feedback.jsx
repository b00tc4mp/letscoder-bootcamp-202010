function Feedback({ error, color = "red" }) {
  return (
    <>
      <p className={`feedback feedback--${color}`}>{error}</p>
    </>
  );
}
