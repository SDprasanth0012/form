function randMinMax (min , max){
    return min+Math.random()*(max-min);
}
function blob (el){
    this.el=el;
    this.size=el.getBoundingClientRect().width;
    this.x=randMinMax(0,window.innerWidth-this.size);
    this.y=randMinMax(0,window.innerHeight-this.size);
    this.vx=randMinMax(250,300)*Math.random()>0.5 ? -1 : 1;
    this.vy=randMinMax(250,300)*Math.random()>0.5? -1:1;
    this.update = ()=>{
        this.x+=this.vx;
        this.y+=this.vy;
        if(this.x>=window.innerWidth-this.size){
            this.vx*=-1
            this.x=window.innerWidth-this.size
            console.log('dengey')
        }
        if(this.y>=window.innerHeight-this.size){
            this.vy*=-1;
            this.y=window.innerHeight-this.size
        }
        if(this.x<=0){
            this.vx*=-1
        }
        if(this.y<=0){
            this.vy*=-1
        }
    };
    this.move= ()=>{
        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    };
}

function  intiBolb(){
  const blobEle = document.querySelectorAll('.blob');
  const blobArr =Array.from(blobEle).map ((blobEl)=> new blob(blobEl));
 

  function update () {
    blobArr.forEach((ele)=>{
        ele.update();
        ele.move();
    })
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

intiBolb();
