import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" className="sticky-header">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignright="true">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 270, left: "-127%" }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>Rs.{prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE FROM CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
