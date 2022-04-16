import { gql } from "@apollo/client";

const CATEGORIES = gql`
    query {
        getCategories{
            id
            name
        }
    }
`

const NEW_CATEGORY = gql`
    mutation newCategory($name: String!) {
        newCategory(name: $name) {
            id
            name
        }
    }
`
const RESTAURANTS = gql`
    query {
        getAllRestaurants {
            id
            name
        }
    }
` 

const NEW_RESTAURANTS = gql`
    mutation newRestaurant($name: String! $categoryId: ID!) {
        newRestaurant(name: $name categoryId: $categoryId) {
            id
            name
    }
    }
`

const ALL_BRANCHES = gql`
    query {
        getAllBranches {
            id
            name
        }
    }
`

const NEW_BRANCH = gql`
    mutation newBranch($name: String! $restaurantId: ID!) {
        newBranch(name: $name restaurantId: $restaurantId) {
            id
            name
        }
    }
`

const ALL_ORDERS = gql`
    query {
        getAllOrders {
            id
            name
            price
            createdAt
            location
            branchId
        }
    }
`

const NEW_MENU = gql`
    mutation newMenu($name: String! $price: Int! $branchId: ID!) {
        newMenu(name: $name price: $price branchId: $branchId) {
            id
            name
            price
            branchId
        }
    }
`

export {
    CATEGORIES,
    NEW_CATEGORY,
    RESTAURANTS,
    NEW_RESTAURANTS,
    ALL_BRANCHES,
    NEW_BRANCH,
    ALL_ORDERS,
    NEW_MENU
}