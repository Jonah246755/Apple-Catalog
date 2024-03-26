class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    *getSides() {
      yield this.height;
      yield this.width;
      yield this.height;
      yield this.width;
    }
  }


    
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100
  console.log([...square.getSides()]); // [10, 10, 10, 10]

class words
{
    #msg = "";

    set msg(word)
    {
       
        if (value.length < 4) {
          alert("Name is too short.");
          return;
        }

        this.#msg = word;
    }
}


  var heh = textbox;

    heh.addEventListener("keydown", function(e){
      if(e.key === 'Enter'){
        words.msg = document.getElementById('textbox').value;
        document.querySelector("#p1").innerHTML = [...square.getSides()] + " " + words.msg;
      }

    });
   
    

class animals
{
  constructor(name)
  {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class dog extends animals //maakt een child aan van de main class wat in dit geval animals is.
{
    constructor(name)
    {
      super(name);
    }

    speak()
    {
      console.log(`${this.name} walks over.`);
      console.log(`${this.name} barks.`);
      document.querySelector("#p2").innerHTML = this.name;
    }
}



var heh2 = textbox2;

heh2.addEventListener("keydown", function(e){
  if(e.key === 'Enter'){

    var hond = new dog(document.getElementById('textbox2').value);
    hond.speak();
   
  }

});



class Pen {
  constructor(name, color, price){
      this.name = name;
      this.color = color; 
      this.price = price;
  }
  
  showPrice(){
      console.log(`Price of ${this.name} is ${this.price}`);
  }
  *showStats()
  {
    yield this.name;
    yield this.color;
    yield this.price;
  }
}
let text = "";

function sales()
{
  const pen1 = new Pen(document.getElementById('textbox3').value, document.getElementById('textbox4').value, document.getElementById('textbox5').value);
  pen1.showPrice();
  console.log([...pen1.showStats()]);

 
}

 

class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000);




// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render = () => {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   };

//   stop = () => {
//     clearInterval(this.timer);
//   };

//   start = () => {
//     this.render();
//     this.timer = setInterval(this.render, 1000);
//   };
// }

// let clock = new Clock({ template: 'h:m:s' });



class Clock2 
{
  constructor({ template })
  {
    this.template = template;
  }

  render = () =>
  {
    let date = new Date();

    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);

  console.log("current time is " + output);
  }
}


let clock2 = new Clock2({ template: 'h:m:s' });

clock2.render();