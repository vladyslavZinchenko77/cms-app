
import {  Link } from 'react-router-dom';
import "./Tab.scss"

const Tab = ({ id, title, path }) => {


  return (
    <div>
      <Link className='tab' to={id}>{title}</Link>
    </div>
  );
};

export default Tab;