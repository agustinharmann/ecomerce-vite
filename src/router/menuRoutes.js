import {ListContainer} from '../components/pages/List/ListContainer'
import {ItemDetailContainer} from '../components/pages/itemDetail/ItemDetailContainer'
import {CartContainer} from '../components/pages/cart/CartContainer'
// import CartContainer from "../components/pages/cart/CartContainer";
// import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
// import FormFormik from "../components/pages/formFormik/FormFormik";
// import Dashboard from "../components/pages/dashboard/Dashboard";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: ListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  // {
  //   id: "checkout",
  //   path: "/checkout",
  //   Element: CheckoutContainer,
  // },
  // {
  //   id: "formik",
  //   path: "/formik",
  //   Element: FormFormik,
  // },
  // {
  //   id: "dashboard",
  //   path: "/dashboard",
  //   Element: Dashboard,
  // },
];