<<<<<<< HEAD
import { useState } from 'react';

=======
>>>>>>> 4845942fdcc7c1e20b6bd71269b944870e145803
function ProductCategoryRow({category}) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({product}) {
    const name = product.stocked ? product.name :
    <span style = {{color:'red'}}>    
        {product.name}
    </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

<<<<<<< HEAD
function ProductTable({products, filterText, isStockOnly}) {
=======
function ProductTable({products}) {
>>>>>>> 4845942fdcc7c1e20b6bd71269b944870e145803
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
<<<<<<< HEAD
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        if (isStockOnly && !product.stocked) {
            return;
        }


=======
>>>>>>> 4845942fdcc7c1e20b6bd71269b944870e145803
        if (product.category !== lastCategory) {
            rows.push(
              <ProductCategoryRow
                category={product.category}
                key={product.category} />
            );
          }
          rows.push(
            <ProductRow
              product={product}
              key={product.name} />
          );

        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

<<<<<<< HEAD
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
         <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
=======
function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..."/>
            <label>
                <input type="checkbox"/>
                {' '}
                Only Show products in stock
            </label>
        </form>
    );
}

function FilterableProductTable({products}) {
    return (
        <div>
            <SearchBar/>
            <ProductTable products={products}/>
        </div>
    );
>>>>>>> 4845942fdcc7c1e20b6bd71269b944870e145803
}

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

export default function App1() {
    return (
        <FilterableProductTable products={PRODUCTS}/>
    );
}