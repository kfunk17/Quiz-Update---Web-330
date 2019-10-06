   
var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');




      var quiz_app={
                questions:[
                          {q:'What does js stand for?', 
                           options:['jQuery Script','Java Serialized','JSONScript','JavaScript'],
                           answer:4},
                           {q:'How do you print a message to the console?', 
                           options:['Logger.log();','console.log();','console.log[];','Console.log();'],
                           answer:2},
                           {q:'How do you push a value to an array?', 
                           options:['array.push(value);','push[array,value];','array_push(array,value);','array.push[value];'],
                           answer:1},
                           {q:'What does js stand for?', 
                           options:['jQuery Script','Java Serialized','JSONScript','JavaScript'],
                           answer:4},
                           {q:'How do you print a message to the console?', 
                           options:['Logger.log();','console.log();','console.log[];','Console.log();'],
                           answer:2},
                           {q:'How do you push a value to an array?', 
                           options:['array.push(value);','push[array,value];','array_push(array,value);','array.push[value];'],
                           answer:1},
                           {q:'What does js stand for?', 
                           options:['jQuery Script','Java Serialized','JSONScript','JavaScript'],
                           answer:4},
                           {q:'How do you print a message to the console?', 
                           options:['Logger.log();','console.log();','console.log[];','Console.log();'],
                           answer:2},
                           {q:'How do you push a value to an array?', 
                           options:['array.push(value);','push[array,value];','array_push(array,value);','array.push[value];'],
                           answer:1},
                           {q:'What does js stand for?', 
                           options:['jQuery Script','Java Serialized','JSONScript','JavaScript'],
                           answer:4}
                ],
          
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Quiz Over"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                   scoreCard.innerHTML=this.questions.length+"/"+this.score;
           
                }
 
           }


           window.onload=quiz_app.load();

           function button(ele){
           	     quiz_app.check(ele);
           	     quiz_app.notClickAble();
           }

         function  next(){
              quiz_app.next();
              quiz_app.clickAble();
         } 



