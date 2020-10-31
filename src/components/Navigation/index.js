import './index.css';

export default function Navigation(props) {
  return (
    <nav className="navigation">
      <ul>
        {props.items.map((item) => (
          <li key={item.title}>
            <a
              href={item.href ? item.href : '#navigate'}
              onClick={(e) => {
                if (item.href) {
                  return;
                }

                e.preventDefault();
                props.setActivePage(item.title);
              }}
              className={item.title === props.activePage ? 'active' : null}
            >
              <span className={item.icon}></span>
              <span className="navigation-title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
