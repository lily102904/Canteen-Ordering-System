import { useEffect, useState } from 'react';
import classes from './foodsAdminPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { deleteById, getAll, search } from '../../services/foodService';
import NotFound from '../../components/NotFound/NotFound';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';
import Price from '../../components/Price/Price';
import { toast } from 'react-toastify';

export default function FoodsAdminPage() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const { searchTerm } = useParams();

  useEffect(() => {
    loadFoods();
  }, [searchTerm]);

  const loadFoods = async () => {
    try {
      setLoading(true);
      const fetchedFoods = searchTerm ? await search(searchTerm) : await getAll();
      setFoods(fetchedFoods);
    } catch (error) {
      toast.error('Error loading foods');
    } finally {
      setLoading(false);
    }
  };

  const FoodsNotFound = () => {
    if (foods.length > 0) return null;

    return searchTerm ? (
      <NotFound linkRoute="/admin/foods" linkText="Show All" />
    ) : (
      <NotFound linkRoute="/dashboard" linkText="Back to dashboard!" />
    );
  };

  const deleteFood = async (food) => {
    const confirmed = window.confirm(`Delete Food ${food.name}?`);
    if (!confirmed) return;

    try {
      await deleteById(food.id);
      toast.success(`"${food.name}" Has Been Removed!`);
      setFoods((prevFoods) => prevFoods.filter(f => f.id !== food.id));
    } catch (error) {
      toast.error('Error deleting food');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Title title="Manage Foods" margin="1rem auto" />
        <Search
          searchRoute="/admin/foods/"
          defaultRoute="/admin/foods"
          margin="1rem 0"
          placeholder="Search Foods"
        />
        <Link to="/admin/addFood" className={classes.add_food}>
          Add Food +
        </Link>
        <FoodsNotFound />
        {foods.map((food) => (
          <div key={food.id} className={classes.list_item}>
            <img src={food.imageUrl} alt={food.name} />
            <Link to={`/food/${food.id}`}>{food.name}</Link>
            <Price price={food.price} />
            <div className={classes.actions}>
              <Link to={`/admin/editFood/${food.id}`}>Edit</Link>
              <button
                className={classes.delete_button} // Change link to button for better accessibility
                onClick={() => deleteFood(food)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
