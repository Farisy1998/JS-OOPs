function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.render = function () {
  return `<html></html>`;
};

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function extend(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
}

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(items.indexOf(item), 1);
  };

  this.render = function () {
    return `
<select>${this.items.map((item) => `
    <option>${item}</option>`).join("") /* join() combines elements in an array with space */}
</select>`;
  };
}

extend(HtmlSelectElement, HtmlElement);

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

extend(HtmlImageElement, HtmlElement);

const e = new HtmlElement();
const s = new HtmlSelectElement();
const img = new HtmlImageElement();

const elements = [
  new HtmlElement(),
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://"),
];

for (let element of elements) console.log(element.render()); // polymorphism takes place
