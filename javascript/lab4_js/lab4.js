// 1. Класс Book с конструктором и методом show
class Book {
  constructor(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
  }

  show() {
    console.log(`Название: ${this.title}, Цена: ${this.price}`);
  }

  // 2. Геттеры и сеттеры с проверками
  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value === 'string' && value.trim() !== '') {
      this._title = value;
    } else {
      throw new Error('Название не может быть пустым');
    }
  }

  get pubYear() {
    return this._pubYear;
  }

  set pubYear(value) {
    if (typeof value === 'number' && value > 0) {
      this._pubYear = value;
    } else {
      throw new Error('Год публикации должен быть положительным числом');
    }
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value === 'number' && value > 0) {
      this._price = value;
    } else {
      throw new Error('Цена должна быть положительным числом');
    }
  }

  // 3. Статический метод compare
  static compare(a, b) {
    return a.pubYear - b.pubYear;
  }
}

// Создание экземпляра и вызов метода show
const book1 = new Book('JavaScript', 2020, 500);
book1.show();

// Изменение свойств через сеттеры
try {
  book1.title = 'Новый JavaScript';
  book1.pubYear = 2022;
  book1.price = 600;
} catch (e) {
  console.error(e.message);
}

// Создание массива книг и сортировка
const books = [
  new Book('Книга 1', 2019, 300),
  new Book('Книга 2', 2018, 400),
  new Book('Книга 3', 2021, 350)
];

books.sort(Book.compare);
console.log(books);

// 4. Функция isEmpty
function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return Object.getOwnPropertySymbols(obj).length === 0;
}

console.log(isEmpty({})); // true
console.log(isEmpty({ [Symbol()]: true })); // false

// 5. Объект с методами addClass и removeClass
let obj = {
  className: 'open menu',
  
  addClass(cls) {
    if (!this.className.split(' ').includes(cls)) {
      this.className = this.className ? `${this.className} ${cls}` : cls;
    }
    return this;
  },
  
  removeClass(cls) {
    const classes = this.className.split(' ').filter(c => c !== cls);
    this.className = classes.join(' ');
    return this;
  }
};

obj.addClass('new').removeClass('open');
console.log(obj.className); // "menu new"

// 6. Преобразование в JSON и обратно
const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);

const obj2 = JSON.parse(jsonString);
console.log(JSON.stringify(obj) === JSON.stringify(obj2)); // true

// 7. Функция getSecondsToday
function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((now - today) / 1000);
}

console.log(getSecondsToday());

// 8. Функция formatDate
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  
  return `${day}.${month}.${year}`;
}

console.log(formatDate(new Date())); // текущая дата в формате "дд.мм.гг"