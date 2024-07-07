var loco = () => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  
  
  
  
}
loco();

function canvasAnim() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./public/ezgif-frame-001.webp
./public/ezgif-frame-002.webp
./public/ezgif-frame-003.webp
./public/ezgif-frame-004.webp
./public/ezgif-frame-005.webp
./public/ezgif-frame-006.webp
./public/ezgif-frame-007.webp
./public/ezgif-frame-008.webp
./public/ezgif-frame-009.webp
./public/ezgif-frame-010.webp
./public/ezgif-frame-011.webp
./public/ezgif-frame-012.webp
./public/ezgif-frame-013.webp
./public/ezgif-frame-014.webp
./public/ezgif-frame-015.webp
./public/ezgif-frame-016.webp
./public/ezgif-frame-017.webp
./public/ezgif-frame-018.webp
./public/ezgif-frame-019.webp
./public/ezgif-frame-020.webp
./public/ezgif-frame-021.webp
./public/ezgif-frame-022.webp
./public/ezgif-frame-023.webp
./public/ezgif-frame-024.webp
./public/ezgif-frame-025.webp
./public/ezgif-frame-026.webp
./public/ezgif-frame-027.webp
./public/ezgif-frame-028.webp
./public/ezgif-frame-029.webp
./public/ezgif-frame-030.webp
./public/ezgif-frame-031.webp
./public/ezgif-frame-032.webp
./public/ezgif-frame-033.webp
./public/ezgif-frame-034.webp
./public/ezgif-frame-035.webp
./public/ezgif-frame-036.webp
./public/ezgif-frame-037.webp
./public/ezgif-frame-038.webp
./public/ezgif-frame-039.webp
./public/ezgif-frame-040.webp
./public/ezgif-frame-041.webp
./public/ezgif-frame-042.webp
./public/ezgif-frame-043.webp
./public/ezgif-frame-044.webp
./public/ezgif-frame-045.webp
./public/ezgif-frame-046.webp
./public/ezgif-frame-047.webp
./public/ezgif-frame-048.webp
./public/ezgif-frame-049.webp
./public/ezgif-frame-050.webp
./public/ezgif-frame-051.webp
./public/ezgif-frame-052.webp
./public/ezgif-frame-053.webp
./public/ezgif-frame-054.webp
./public/ezgif-frame-055.webp
./public/ezgif-frame-056.webp
./public/ezgif-frame-057.webp
./public/ezgif-frame-058.webp
./public/ezgif-frame-059.webp
./public/ezgif-frame-060.webp
./public/ezgif-frame-061.webp
./public/ezgif-frame-062.webp
./public/ezgif-frame-063.webp
./public/ezgif-frame-064.webp
./public/ezgif-frame-065.webp
./public/ezgif-frame-066.webp
./public/ezgif-frame-067.webp
./public/ezgif-frame-068.webp
./public/ezgif-frame-069.webp
./public/ezgif-frame-070.webp
./public/ezgif-frame-071.webp
./public/ezgif-frame-072.webp
./public/ezgif-frame-073.webp
./public/ezgif-frame-074.webp
./public/ezgif-frame-075.webp
./public/ezgif-frame-076.webp
./public/ezgif-frame-077.webp
./public/ezgif-frame-078.webp
./public/ezgif-frame-079.webp
./public/ezgif-frame-080.webp
./public/ezgif-frame-081.webp
./public/ezgif-frame-082.webp
./public/ezgif-frame-083.webp
./public/ezgif-frame-084.webp
./public/ezgif-frame-085.webp
./public/ezgif-frame-086.webp
./public/ezgif-frame-087.webp
./public/ezgif-frame-088.webp
./public/ezgif-frame-089.webp
./public/ezgif-frame-090.webp
./public/ezgif-frame-091.webp
./public/ezgif-frame-092.webp
./public/ezgif-frame-093.webp
./public/ezgif-frame-094.webp
./public/ezgif-frame-095.webp
./public/ezgif-frame-096.webp
./public/ezgif-frame-097.webp
./public/ezgif-frame-098.webp
./public/ezgif-frame-099.webp
./public/ezgif-frame-100.webp
./public/ezgif-frame-101.webp
./public/ezgif-frame-102.webp
./public/ezgif-frame-103.webp
./public/ezgif-frame-104.webp
./public/ezgif-frame-105.webp
./public/ezgif-frame-106.webp
./public/ezgif-frame-107.webp
./public/ezgif-frame-108.webp
./public/ezgif-frame-109.webp
./public/ezgif-frame-110.webp
./public/ezgif-frame-111.webp
./public/ezgif-frame-112.webp
./public/ezgif-frame-113.webp
./public/ezgif-frame-114.webp
./public/ezgif-frame-115.webp
./public/ezgif-frame-116.webp
./public/ezgif-frame-117.webp
./public/ezgif-frame-118.webp
./public/ezgif-frame-119.webp
./public/ezgif-frame-120.webp
./public/ezgif-frame-121.webp
./public/ezgif-frame-122.webp
./public/ezgif-frame-123.webp
./public/ezgif-frame-124.webp
./public/ezgif-frame-125.webp
./public/ezgif-frame-126.webp
./public/ezgif-frame-127.webp
./public/ezgif-frame-128.webp
./public/ezgif-frame-129.webp
./public/ezgif-frame-130.webp
./public/ezgif-frame-131.webp
./public/ezgif-frame-132.webp
./public/ezgif-frame-133.webp
./public/ezgif-frame-134.webp
./public/ezgif-frame-135.webp
./public/ezgif-frame-136.webp
./public/ezgif-frame-137.webp
./public/ezgif-frame-138.webp
./public/ezgif-frame-139.webp
./public/ezgif-frame-140.webp
./public/ezgif-frame-141.webp
./public/ezgif-frame-142.webp
./public/ezgif-frame-143.webp
./public/ezgif-frame-144.webp
./public/ezgif-frame-145.webp
./public/ezgif-frame-146.webp
./public/ezgif-frame-147.webp
./public/ezgif-frame-148.webp
./public/ezgif-frame-149.webp
./public/ezgif-frame-150.webp
./public/ezgif-frame-151.webp
./public/ezgif-frame-152.webp
./public/ezgif-frame-153.webp
./public/ezgif-frame-154.webp
./public/ezgif-frame-155.webp
./public/ezgif-frame-156.webp
./public/ezgif-frame-157.webp
./public/ezgif-frame-158.webp
./public/ezgif-frame-159.webp
./public/ezgif-frame-160.webp
./public/ezgif-frame-161.webp
./public/ezgif-frame-162.webp
./public/ezgif-frame-163.webp
./public/ezgif-frame-164.webp
./public/ezgif-frame-165.webp
./public/ezgif-frame-166.webp
./public/ezgif-frame-167.webp
./public/ezgif-frame-168.webp
./public/ezgif-frame-169.webp
./public/ezgif-frame-170.webp

 `;
    return data.split("\n")[index];
  }

  const frameCount = 170;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page`,
      start: `top 50%`,
      end: `300% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `300% top`,
  });
}
canvasAnim();

let tl = gsap.timeline();
function loader() {
  tl.from(
    ".wrapper .progress .line",
    {
      width: 0,
      duration: 2,
    },
    "a"
  );

  tl.to(".loader", {
    y: "-100%",
    opacity: 0,
  });
}
loader();

tl.from(".navbar",{
  y:"-100%",
})
tl.from(".landPage>h1",{
  opacity:0,
  y:"50%",
})
tl.from(".landPage>h3",{
  opacity:0,
  y:"50%",
})
function landPageAnim(){
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landPage",
      scroller: "#main",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  });
  tl2.to(".landPage h1",{
    scale:200,
  },"s")
  tl2.to(".landPage h3",{
    scale:5,
  },"s")
  
  
  gsap.to("#page canvas",{
    '--clip':"100%",
    ease:Power2,
    scrollTrigger:{
      trigger:"#page canvas",
      scroller:"#main",
      start:"top top",
      end:"bottom 50%",
      scrub:true,
    }
  })
  
  
  
}
landPageAnim()


let flag = true;
document.querySelector(".landPage .icons").addEventListener("click",function(){

  if(flag){
    gsap.to(".landPage .line1",{
      top:"50%",
      rotation:"50deg"
    })
    gsap.to(".landPage .line2",{
      top:"50%",
      rotation:"-50deg"
    })
    flag=false
  }
  else{
    gsap.to(".landPage .line1",{
      top:"40%",
      rotation:"0deg"
    })
    gsap.to(".landPage .line2",{
      top:"60%",
      rotation:"0deg"
    })
    flag = true
  }
    
})

function categoryAnim(){
  document.querySelectorAll(".cate").forEach(function(e){
    e.addEventListener("mouseenter",function(){
        gsap.to(this.querySelector("img"),{
            opacity:1,
            y:"-100%",
            duration:.5
        })
    })
  
  
    e.addEventListener("mouseleave",function(){
      gsap.to(this.querySelector("img"),{
        opacity:0,
        y:"0",
        duration:.5
    })
  })
  })
}
categoryAnim()


gsap.to(".boverlay",{
  width:"100%",
  scrollTrigger:{
    trigger:".section6",
    scroller:"#main",
    start:"top top",
    end:"bottom top",
    scrub:true,
    pin:true
  }
})

function section6TextAnim(){
  let splitText = document.querySelector(".boverlay h2").textContent.split("");
  let temp = ""
  splitText.forEach(function(e){
   temp+= `<span>${e}</span>`;
  })
  document.querySelector(".boverlay h2").innerHTML = temp;
 
  gsap.from(".boverlay h2 span",{
   opacity:0,
   y:"100%",
   stagger:.05,
   scrollTrigger:{
     trigger:".section6",
     scroller:"#main",
     start:"top top",
     end:"bottom top",
     scrub:true
   }
  })
}
section6TextAnim()


let Products = [
  {
    title: "Apple Crisp Macchiato",
    size: "237ml",
    kcal: "320",
    sugar:"29g",
    fat:"10g",
    price: 362,
    img: "./src/product-1.webp",
    tag:"popular",
    para:"Layered flavors of apple, cinnamon, oats and brown sugar harmonize with Starbucks® Blonde Espresso Roast, creamy oatmilk and spiced-apple drizzle to create a delicious apple crisp you can sip. A nostalgic autumn pick-me-up."
  },
  {
    title: "Iced Lavender Oatmilk",
    size: "237ml",
    kcal: "360",
    sugar:"33g",
    fat:"19g",
    price: 410,
    img: "./src/product-2.webp",
    tag:"seasonal",
    para:"Smooth and creamy matcha served with oatmilk over ice, topped with sweet and subtle floral notes of lavender cream cold foam--an unexpected combination that’s springtime in a cup. Beverage includes dairy."
  },
  {
    title: "Melon Burst Iced Energy",
    size: "237ml",
    kcal: "10",
    sugar:"0g",
    fat:"0g",
    price: 370,
    img: "./src/product-3.webp",
    tag:"New",
    para:"VENTI ONLY. A sparkling boost of sugar-free energy, chilled to perfection. Refreshing flavors of melon and cucumber balanced with bright Passion Tango® tea, served over ice. The ultimate afternoon jump start. 180 mg caffeine."
  },
  {
    title: "Double Chocolate Chip ",
    size: "237ml",
    kcal: "410",
    sugar:"47g",
    fat:"20g",
    price: 430,
    img: "./src/product-4.webp",
    tag:"Popular",
    para:"Rich mocha-flavored sauce meets up with chocolaty chips, milk and ice for a blender bash. Top it off with sweetened whipped cream and mocha drizzle for a real party in your mouth."
  },
  {
    title: "Pumpkin Spice Latte",
    size: "237ml",
    kcal: "390",
    sugar:"50g",
    fat:"14g",
    price: 400,
    img: "./src/product-5.webp",
    tag:"seasonal",
    para:"Our signature espresso and steamed milk with the celebrated flavor combination of pumpkin, cinnamon, nutmeg and clove. Enjoy it topped with whipped cream and real pumpkin-pie spices."
  },
  {
    title: "Java Chip Frappuccino",
    size: "237ml",
    kcal: "440",
    sugar:"59g",
    fat:"19g",
    price: 420,
    img: "./src/product-6.webp",
    tag:"Popular",
    para:"We blend mocha sauce and Frappuccino® chips with coffee, milk and ice, then top it off with whipped cream and a mocha drizzle to bring you endless java joy."
  },
  {
    title: "Iced Caramel Macchiato",
    size: "237ml",
    kcal: "250",
    sugar:"34g",
    fat:"7g",
    price: 390,
    img: "./src/product-7.webp",
    tag:"Popular",
    para:"We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with a caramel drizzle for an oh-so-sweet finish."
  },
  {
    title: "Nitro Cold Brew",
    size: "237ml",
    kcal: "5",
    sugar:"0g",
    fat:"0g",
    price: 350,
    img: "./src/product-8.webp",
    tag:"New",
    para:"Our small-batch cold brew—slow-steeped for a super-smooth taste—gets even better. We're infusing it with nitrogen to create a sweet flavor without sugar and cascading, velvety crema. Perfection is served."
  }
]

let clutter = ""
Products.forEach(function(product){
  clutter+=`<div class="item">
              <img src="${product.img}">
              <div class="introduce">
                  <div class="title">${product.tag}</div>
                  <div class="topic">${product.title}</div>
                  <div class="des">
                      <p>${product.para}</p>
                  </div>
                  <button class="seeMore">SEE MORE &#8599</button>
              </div>
              <div class="detail">
                  <div class="title">${product.title}</div>
                  <div class="des">
                      <p>${product.para}</p>
                  </div>
                  <div class="specifications">
                      <div>
                          <p>Price</p>
                          <p>${product.price}</p>
                      </div>
                      <div>
                          <p>Calories</p>
                          <p>${product.kcal}</p>
                      </div>
                      <div>
                          <p>Sugar</p>
                          <p>${product.sugar}</p>
                      </div>
                       <div>
                          <p>Size</p>
                          <p>${product.size}</p>
                      </div>
                       <div>
                          <p>Fat</p>
                          <p>${product.fat}</p>
                      </div>
                  </div>
                  <div class="checkout">
                      <button>ADD TO CART</button>
                      <button>ORDER NOW</button>
                  </div>
              </div>
          </div>`;
})
document.querySelector(".list").innerHTML=clutter;















let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}



gsap.to(".row .img img",{
    width: "32%",
    height: "50vh",
    scrollTrigger:{
      trigger:".rows",
      scroller:"#main",
      start:"top top",
      end:"bottom top",
      scrub:true,
      pin:true
    }
})

gsap.from(".rowoverlay",{
  opacity:0,
  scrollTrigger:{
    trigger:".rows",
    scroller:"#main",
    start:"top top",
    scrub:true
  }
})

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".imgSess",
    scroller:"#main",
    start:"top top",
    end:"bottom bottom",
    endTrigger:".last",
    scrub:true,
    pin:true
  }
});
tl3.to(".imgSess-container .img1",{
  y:"-100%",
})
tl3.to(".imgSess-container .img2",{
  y:"-100%",
})
tl3.to(".imgSess-container .img3",{
  y:"-100%",
})

