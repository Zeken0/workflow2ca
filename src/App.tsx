import FetchData from "./query"
import { createProduct } from "./helpers/objectHelpers"

function App() {
  const newProduct = createProduct(12, "d f g", "This is the title of the product, it will be truncated");
  console.log(newProduct);

  return (
    <div>
      learn react
      <FetchData />
    </div>
  );
}

export default App;
