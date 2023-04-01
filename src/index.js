import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"; 

const client = new ApolloClient({
  uri: "https://restaurant-crm.onrender.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
