class Question{
    constructor(){

    }
    display(){
        this.title.html("My Quiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- The tempo describs _____ of the music. ");
        this.question.position(150, 80);
        this.option.html("1: Length ");
        this.option.position(150, 100);
        this.option.html("2: Volume ");
        this.option.position(150,120);
        this.option.html("3: Speed ");
        this.option.position(150,140);
        this.option.html("4: Height");
        this.option.position(150,160); 

        this.input1.position(150,230);

    }
}