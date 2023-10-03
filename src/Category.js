import Content from './Content';
import Sidebar from './Sidebar';

function Category({ stores, clickHandler }) {

 
  return (
    <div style={{ display: 'flex' }}>
      <Content stores={stores} clickHandler={clickHandler} />
      <Sidebar stores={stores} />
    </div>
  );
}
export default Category;
