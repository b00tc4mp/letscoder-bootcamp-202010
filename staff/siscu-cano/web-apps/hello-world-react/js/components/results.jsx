function Results(props) {
  return (
    <ul className="result">
      {props.searchGoogle &&
        props.items.map((item, i) => (
          <li key={i}>
            <span className="result__title">{item.title}</span>
            <a className="result__url" href={item.url}>
              {item.url}
            </a>
            <span className="result__preview">{item.preview}</span>
          </li>
        ))}
      {!props.searchGoogle &&
        props.items.map((item, i) => (
          <li key={i}>
            <img className="result__img" src={item.thumbnail} height="50" width="auto" />
            <span className="result__title">{item.name}</span>
            <span className="result__id">{item.id}</span>
            <span className="result__price"> {item.price}</span>
          </li>
        ))}
    </ul>
  );
}
