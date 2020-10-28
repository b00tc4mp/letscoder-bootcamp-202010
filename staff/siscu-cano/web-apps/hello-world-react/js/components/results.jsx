function Results(props) {
  return (
    <ul className="result">
      {props.items.map((item, i) => (
        <li key={i}>
          <span className="result__title">{item.title}</span>
          <a className="result__url" href={item.url}>
            {item.url}
          </a>
          <span className="result__preview">{item.preview}</span>
        </li>
      ))}
    </ul>
  );
}
