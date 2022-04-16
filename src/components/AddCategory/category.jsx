import { useMutation } from '@apollo/client'
import { NEW_CATEGORY } from '../../Query'

const Category = () => {

    const [ newCategory ] = useMutation(NEW_CATEGORY, {
        update: (_, data) => {
            console.log(data);
        }
    })

    const handlesubmit = (e) => { 
        e.preventDefault()
        const { category_name } = e.target.elements
        newCategory({
            variables: {
                name: category_name.value
            }
        })

        console.log(category_name.value);
    }

  return (
    <>
      <form className="border border-dark" onSubmit={handlesubmit}>
        <label>Add Category</label>
        <div className="input-group flex-nowrap">
          <input
            name='category_name'
            type="text"
            className="form-control mb-2 pt-3"
            placeholder="Category"
            aria-label="Category"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Submit
        </button>
      </form>
    </>
  );
};

export default Category;
