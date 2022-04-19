import { useMutation, useQuery } from "@apollo/client";
import { RESTAURANTS, NEW_BRANCH } from "../../Query";

const Branch = () => {
  const { data } = useQuery(RESTAURANTS);
  const [newBranch] = useMutation(NEW_BRANCH, {
    update: (_, data) => {
      console.log(data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { select, branch } = e.target.elements;
    newBranch({
      variables: {
        name: branch.value,
        restaurantId: select.value,
      },
    });
  };

  return (
    <>
      <form className="border border-dark" onSubmit={(e) => handleSubmit(e)}>
        <label> Add Branch </label>
        <select
          name="select"
          className="form-select"
          aria-label="Default select example"
        >
          <option disabled defaultValue={true}>
            Choose Restaurants
          </option>
          {data &&
            data.getAllRestaurants.map((e, i) => (
              <option key={i} value={e.id}>
                {e.name}
              </option>
            ))}
        </select>

        <div className="input-group mb-3 mt-3">
          <input
            name="branch"
            type="text"
            className="form-control"
            placeholder="Restaurant..."
            aria-label="Restaurant"
            aria-describedby="basic-addon1"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Branch;
