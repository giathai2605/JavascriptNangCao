function foo() {
    return {
        x: 1,
        y: 2,
        z: 3
    };
}

/*
* Object Destructuring hay còn gọi với một tên khác là Object Property Assignment Pattern cho phép chúng ta gán property value của một object cho các biến tương ứng. Chúng ta sẽ có hai cách viết như sau:
*/

// Cách 1:
// * Cách viết đầu tiên là dạng đầy đủ của Object Destructuring trong đó mỗi property của object sẽ được gán với một biến xác định dưới dạng <<property>>: <<variable>>.

let { x: a, y: b, z: c } = foo() || {}; // Gán property(x,y,c) của object cho biến tương ứng (a,b,c)
console.log(a); // Out put: 1
console.log(a, b, c); // Out put: 1 2 3

// * Tuy nhiên nếu tên của biến trùng với tên của property, chúng ta có thể loại bỏ phần << property >>: trong cú pháp trên và kết quả thu được sẽ là cách viết thứ hai(shortened syntax).Trong trường hợp chúng ta muốn gán property của object cho một biến với tên khác so với tên của property, cách viết đầu tiên sẽ được sử dụng.

let { x, y, z } = foo() || {};
console.log(x);
console.log(x, y, z);


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) { 
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
        //Hàm này trả về một chuỗi có dạng: Order received! <<starter>> and <<main>> will be delivered to <<address>> at <<time>>
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
        // Hàm này trả về một chuỗi có dạng: Here is your delicious pizza with <<mainIngredient>> and <<otherIngredients>>
    }
};

console.log(restaurant.order(2, 0)); 


const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//* Cách 2:
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// => Out put: Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (3) ["Italian", "Pizzeria", "Vegetarian"]

//* Giá trị mặc định là giá trị mà chúng ta sẽ gán cho biến nếu property đó không tồn tại trong object. Trong tương lai ta sẽ không biết được giá trị của biến đó là gì nên phải gán giá trị mặc định cho nó để tránh lỗi

const { menu = [], starterMenu: starters = [] } = restaurant; // Tạo ra một biến menu (nếu không có menu trong object thì menu = mảng rỗng) , gán giá trị mặc định cho starterMenu là một mảng rỗng nếu starterMenu không tồn tại
console.log(menu, starters);

// * Mutating variables là việc thay đổi giá trị của biến mà không cần phải tạo ra một biến mới. Để thực hiện việc này, chúng ta sử dụng cú pháp sau:

let num_1 = 111;
let num_2 = 999;
const obj = { num_1: 23, num_2: 7, num_3: 14 }; 
({ num_1, num_2 } = obj); 
console.log(num_1, num_2); 

// Nested object  
const {
    fri: { open, close },
} = openingHours;
