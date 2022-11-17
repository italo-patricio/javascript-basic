const operations = {
   count: 0,
   increment() {
       this.count += 1;
   }, 
   decrement() {
      this.count -= 1;
   },
   print: function(text = '') {
    console.log(`Seu texto é ${text} e o count é: ${this.count}`);
   } 
};

operations.print('Vai Gui');
operations.increment();
operations.increment();
operations.decrement();
operations.print();

