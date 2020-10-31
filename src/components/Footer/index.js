import './index.css';

export default function Footer(props) {
  return <div className="footer">&copy; {props.children}</div>;
}
