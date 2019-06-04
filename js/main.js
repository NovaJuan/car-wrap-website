

document.addEventListener("DOMContentLoaded", function(event) {
    window.onload = function(){ 
        var header = document.querySelector('header');
        var heightCalc = Math.floor((window.innerHeight / 100) * 100)
        header.style.height = heightCalc + 'px';

        
        function navBG(){
            var navBg = document.getElementById('nav-bg');
            if(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0){
                navBg.style.opacity = .9;
            }else{
                navBg.style.opacity = 0;
            }
        }

        function unwrap(){
            const servicesPos = document.getElementById('services').offsetTop - 700 ;
            const galleryPos = document.getElementById('gallery').offsetTop - 400 ;
            if(document.documentElement.scrollTop > servicesPos || document.body.scrollTop > servicesPos){
                TweenMax.to('.services-cover',2,{
                    delay:.2,
                    width:'0%',
                    marginLeft:'100%',
                    ease:Expo.easeOut
                });
            }
            if(document.documentElement.scrollTop > galleryPos || document.body.scrollTop > galleryPos){
                TweenMax.to('.gallery-cover',2,{
                    delay:.2,
                    width:'0%',
                    marginRight:'100%',
                    ease:Expo.easeOut
                });
            }
        }
        unwrap()
        navBG()

        $(".scroller").click(function(){
            var section = '#' + this.getAttribute('data-goto');
            console.log(section);
            $("html,body").animate({
                scrollTop:$(section).offset().top - 80
            },500);
            return false;
        });

        window.addEventListener('scroll',function(){
            navBG();
            unwrap()
        })
        if(window.innerWidth > 900){
            TweenMax.to('.section1',1.2,{
                width:'43%',
                delay:.5,
                ease:Expo.easeOut
            });
            TweenMax.set('.text',{
                delay:1.2,
                display:'block',
            })
            TweenMax.to('.text .text-cover',1,{
                delay:1.3,
                width:'100%',
                ease:Expo.easeOut
            })
            TweenMax.set(['.text p','.text #trans-btn'],{
                delay:2,
                opacity:1
            })
            TweenMax.to('#trans-panel',1.2,{
                delay:1,
                width:'101%',
                ease:Expo.easeOut
            })
            TweenMax.set('.section2-bg',{
                delay:2.6,
                opacity:1
            });
            TweenMax.to('.text .text-cover',1,{
                delay:2.4,
                left:'105%',
                width:'0%',
                ease:Expo.easeOut
            })
            TweenMax.to('#trans-panel',1.5,{
                delay:3,
                marginLeft:'105%',
                width:'0%',
                ease:Expo.easeOut
            })
            TweenMax.set('#trans-panel',{
                delay:5,
                marginLeft:0
            });
            TweenMax.to('.down-arrow',2,{
                delay:4.2,
                opacity:1,
                y:0,
                ease:Expo.easeOut
            })
        }
    
        var currentBG = 0;
        var bgs = ['url(images/header-bg-1.png)','url(images/header-bg-2.png)','url(images/header-bg-3.png)']
        document.getElementById('trans-btn').addEventListener('click',function(){
            this.disabled=true;
            if(currentBG >= 2){
                currentBG = 0;
            }else{
                currentBG += 1;
            }
            TweenMax.to('#trans-panel',1.2,{
                delay:.1,
                width:'101%',
                ease:Expo.easeOut
            });
             
            TweenMax.set('.section2-bg',{
                delay:1.4,
                backgroundImage:bgs[currentBG]
            });
            TweenMax.to('#trans-panel',1.5,{
                delay:3,
                marginLeft:'105%',
                width:'0%',
                ease:Expo.easeOut
            })
            TweenMax.set('#trans-panel',{
                delay:4.5,
                marginLeft:0
            });
            setTimeout(()=>{
                this.disabled=false;
            },3900);
        });

        document.getElementById('close-nav').addEventListener('click',()=>mobileNav(false))
        document.getElementById('toggle-nav').addEventListener('click',()=>mobileNav(true))

        function mobileNav(mode){
            var body = document.body || document.documentElement;
            var mbNav = document.getElementById('mobile-nav');
            if(mode){
                mbNav.style.left='50%';
            }else{
                mbNav.style.left='100%';
            }
        }
    }
});