import { useMutation, useQuery } from "@apollo/client";
import { CATEGORIES, NEW_RESTAURANTS } from "../../Query";

const Restaurant = () => {
  const { data } = useQuery(CATEGORIES);
  const [newRestaurant] = useMutation(NEW_RESTAURANTS, {
    update: (_, data) => {
      console.log(data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { restaurant, select } = e.target.elements;
    newRestaurant({
      variables: {
        name: restaurant.value,
        categoryId: select.value,
      },
    });
  };

  return (
    <>
      <form className="border border-dark" onSubmit={(e) => handleSubmit(e)}>
        <label> Add Restaurant </label>
        <select
          name="select"
          className="form-select"
          aria-label="Default select example"
        >
          <option disabled defaultValue={true}>
            Choose
          </option>
          {data &&
            data.getCategories.map((e, i) => (
              <option key={i} value={e.id}>
                {e.name}
              </option>
            ))}
        </select>

        <div className="input-group mb-3 mt-3">
          <input
            name="restaurant"
            type="text"
            className="form-control"
            placeholder="Restaurant..."
            aria-label="Restaurant"
            aria-describedby="basic-addon1"
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </>
  );
};

export default Restaurant;
