function Results(props) {
  return (
    <ul className="result">
      {props.items.map((item, i) => (
        <li key={i}>
          <span className="result__title">{item.title}</span>
          <span className="result__url">{item.url}</span>
          <span className="result__preview">{item.preview}</span>
        </li>
      ))}
    </ul>
  );
}
