import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ALL_ORDERS } from "../../Query";

const Order = () => {
  const { data } = useQuery(ALL_ORDERS);
  console.log(data);

  return (
    <>
      <div className="container">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Price</th>
              <th scope="col">location</th>
              <th scope="col">OrderedAt</th>
              <th scope="col">Branch</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.getAllOrders.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <th scope="row">{e.name}</th>
                  <td>{e.number}</td>
                  <td>{e.price}</td>
                  <td>{e.location}</td>
                  <td>{e.createdAt}</td>
                  <td>{e.branchId}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
