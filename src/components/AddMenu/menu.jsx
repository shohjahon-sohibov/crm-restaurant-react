import { useMutation, useQuery } from "@apollo/client";
import { ALL_BRANCHES, NEW_MENU } from "../../Query";

const Menu = () => {
  const { data } = useQuery(ALL_BRANCHES);
  const [newMenu] = useMutation(NEW_MENU, {
    update: (_, data) => {
      console.log(data);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const { select, name, price } = e.target.elements;
    newMenu({
      variables: {
        name: name.value,
        price: price.value,
        branchId: select.value
      }
    });
  };

  return (
    <>
      <form className="border border-dark" onSubmit={(e) => handleSubmit(e)}>
        <label> Add Menu </label>
        <select
          name="select"
          className="form-select"
          aria-label="Default select example"
        >
          <option disabled defaultValue={true}>
            Choose Branches
          </option>
          {data &&
            data.getAllBranches.map((e, i) => (
              <option key={i} value={e.id}>
                {e.name}
              </option>
            ))}
        </select>

        <div className="input-group mb-3 mt-3">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="name..."
            aria-label="Restaurant"
            aria-describedby="basic-addon1"
          />
           <input
            name="price"
            type="number"
            className="form-control"
            placeholder="price..."
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

export default Menu;
