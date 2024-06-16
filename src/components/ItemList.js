import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
 
  const handleAddItem = (item) => {
    console.log(item)
    dispatch(addItem(item));
  };

  return (
    <div>
    <></>
    </div>
  );
};

export default ItemList;
