<script setup>
import HeaderMain from './components/HeaderMain.vue'
import HeroMain from './components/HeroMain.vue'
import SectionSecundary from './components/SectionSecundary.vue'
import SectionExclusive from './components/SectionExclusive.vue'
import SectionBestVacation from './components/SectionBestVacation.vue'
import SectionAbout from './components/SectionAbout.vue'
import SectionExclusivetre from './components/SectionExclusivetre.vue'
import SectionSuscribe from './components/SectionSubscribe.vue'
import FooterMain from './components/FooterMain.vue'

</script>

<template>
  <div>
    <HeaderMain />
    <HeroMain />
    <SectionSecundary />
    <SectionExclusive />
    <SectionBestVacation />
    <SectionAbout />
    <SectionExclusivetre />
    <SectionSuscribe />
    <FooterMain />
  </div>
</template>

<style>
/* Variables */
:root{
    --bg-body: #FEFCFB;
    --primary-color: #FA7436;
    --black-color: #222222:
    --gray-color: #666666;
    
    --fontSize-title: 40px;
    --fontSize-parrafos: 20px;
    --fontSize-textos: 16px
    --fontFamily-title: 'Volkhov';
}

body {
    background: var(--bg-body);
    font-family: 'Poppins', sans-serif;
    margin: 0;
}
h3 {
    font-size: 16px;
}

.background-secondary {
    background: #F7F8FC;
    
}

.header {
    background: #FEFCFB;
}

nav .navbar-brand img {
    width: 200px;
}

 #nav-main ul li a:hover {
    color: var(--primary-color);
}
.login {
    width: 160px;
}
.login a{
    text-align: center;
    color: var(--primary-color);
    font-size: var(--fontSize-textos);
}
.registro {
    width: 160px;
    height: 50px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.registro a{
    display: block;
    text-align: center;
    padding: 12px;
    padding-left: 100px;
    padding-right: 30px;
    color: #fff;
    border-radius: 4px;
    background: var(--primary-color);
    font-size: var(--fontSize-textos);
}

nav.bg-gym ul li.registro {
    padding-left: 40px;
}




#hero h1 {
    color: var(--black-color);
    font-family: 'Volkhov', serif;
    font-size: 64px;
    margin-bottom: 30px;
}

#hero p {
    color: var(--gray-color);
    font-size: 20px;
    line-height: 40px;
    font-weight: 400;
}

#hero button {
    padding: 15px 20px;
    color: var(--primary-color);
    background-color: transparent;
    border: 2px solid var(--primary-color);
    width: auto;
}
#hero button:hover {
    background: var(--primary-color);
    color: var(--bg-body);
}

#hero .cont-info {
    padding: 40px 90px 0px 0px;
    
}

#hero .cont-info span {
    border-bottom: 12px solid #fff;
    color: var(--primary-color);
}

#hero .cont-info p{
    color: #666666;
    font-size: var(--fontSize-parrafos);
    margin-bottom: 40px;
}

#hero .cont-info .destacados h2 {
    color: #fff;
    font-size: var(--fontSize-title);
    font-family: 'Volkhov', serif;
}

#hero .cont-info .destacados p {
    font-size: 14px;
}

#hero-section-location {
    background: #FFFFFF;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    /* width: 70%; */
}
#hero-section-location div h3 {
    font-size: 16px;
    color: #222222;
}

#hero-section-location div span {
    font-size: 12px;
    color: #666666;
}

#section-secundary {
    padding-bottom: 60px;
}
#section-secundary  span {
    color: var(--primary-color);
}

#section-secundary .title-secundary h2 {
    font-family: 'Volkhov', serif;
    font-size: 48px;
    color: #222222;
}

#section-secundary .title-secundary p {
    color: #666666;
    font-size: 18px;
    width: 482px;
    text-align: center;
}

#section-secundary img {
    width: 56px;
    height: 56px;
}

#section-secundary .card {
    width: 370px;
    height: 278px;
    padding: 40px;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

#section-secundary div {
    margin: 0;
    padding: 20px 0 0 0;
}

#section-secundary .card-section h5 {
    padding-top: 50px;
    font-size: 24px;
    font-weight: 600;
    color: var(--black-color);
}

#section-secundary .card-section p {
    font-size: 16px;
    color: var(--gray-color);
}

#section-secundary .img-secundary {
    width: 180px;
    height: auto;
}

#img-location {
    width: 32px;
}

#section-exclusive {
    padding-top: 100px;
}

#section-exclusive span {
    color: var(--primary-color);
}

#section-exclusive .title-secundary h2 {
    font-family: 'Volkhov', serif;
    font-size: 48px;
    color: #222222;
}

#section-exclusive .title-secundary p {
    color: #666666;
    font-size: 18px;
    width: 520px;
    text-align: center;
    padding-top: 16px;
    
}

.card-default {
    
    margin: 0 16px 60px 16px;
    border-color: #666666;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}


#section-exclusive .card-default:hover {
    cursor: pointer;
    box-shadow: 0px 16px 80px 0px #FE935E33;
    border: 1px solid #FFFFFF;
}

#section-exclusive .card-default h5 {
    color: #222222;
    font-weight: 600;
    font-size: 24px;
}

#section-exclusive  .card-default p {
    color: #666666;
}

#section-exclusive .card-default .price {
    background-color: rgba(250, 116, 54, 0.3);
    color: var(--primary-color);
    border-radius: 6px; 
    text-align: center; 
    width: 52px;
    height: 28px; 
    display: flex;
    align-items: center;
    justify-content: center; 
}

#section-exclusive .card-default p>del {
    border-radius: 10px; 
    text-align: center; 
    width: 52px;
    height: 28px; 
    display: flex;
    align-items: center;
    justify-content: center; 
    margin: 0;
}

#section-exclusive .img-blog {
    width: 270px;
    height: 270px;
}


#section-exclusive .blog h5  {
    padding-top: 20px;
    font-size: 18px;
    
}

 .card-blog {
    width: 270px;
}

#section-exclusive .about-us {
    width: 600px;
}

#section-about {
    height: 600px;
    
}

#section-about h2 {
    font-size: 48px;
    font-family: 'Volkhov', serif;
}

#section-about h2 span {
    color: var(--primary-color);
    
}

#section-about img {
    position: absolute;
    top: -35px; /* ajustar los valores para mover la imagen */
    left: -35px;
    width: 68px;
    height: 68px;
    display: block;
}

#section-about .about-us {
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 40px 60px 40px 40px;
    width: 504px;
}

#container-float {
    position: relative;
    box-shadow: 4px 4px 8px 0px #0000001A;
}
#container-float img {
    width: 32px;
    height: 32px;
    
    
}

#container-float .container-float {
    background: #F7F8FC;
    border-radius: 10%;
    border: none;
    position: absolute;
    top: 185px; /* ajustar los valores para mover la imagen */
    left: 1180px;
    width: 150px;
    height: 66px;
    display: block;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

#container-float .container-float {
    background: #F7F8FC;
    border-radius: px;
    border: none;
    position: absolute;
    top: -450px; /* ajustar los valores para mover la imagen */
    left: 640px;
    width: 150px;
    height: 66px;
    display: block;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
#container-float .container-float p {
    margin: 0;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
}

#container-float .container-float .title {
    font-size: 16px;
   
}
#container-float2 {
    box-shadow: 4px 4px 8px 0px #0000001A;
}
#container-float .container-float2 {
    background: #F7F8FC;
    border-radius: 5px;
    border: none;
    position: absolute;
    top: -215px; /* ajustar los valores para mover la imagen */
    left: 705px;
    width: 192px;
    height: 68px;
    display: block;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

#container-float .container-float2 p {
    margin: 0;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
}

#container-float .container-float2 title {
    margin: 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
}

#container-float .container-float3 {
    background: #F7F8FC;
    border-radius: 5px;
    border: none;
    position: absolute;
    top: -340px; /* ajustar los valores para mover la imagen */
    left: 1040px;
    width: 173px;
    height: 74px;
    display: block;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
#container-float .container-float3 p {
    margin: 0;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
}

#container-float .container-float3 title {
    margin: 0;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
}

#container-float .container-float4 img {
    position: absolute;
    top: -600px; /* ajustar los valores para mover la imagen */
    left: 590px;
    width: auto;
    height: auto;
    z-index: 1;
    display: block;
    
}

section #suscribe {
    position: relative;
}

#suscribe {
    background: var(--primary-color);
    height: 400px;
    color: var(--bg-body);
    border-radius: 20px;
    position: absolute;
    top: 220px; 
    display: block;
}
#suscribe .img-ondas {
    position: absolute;
    top: 40px;
    left: 0px; 
    display: block;
}
#suscribe .img-arboles {
    position: absolute;
    top: 10px;
    left: 1200px; 
    display: block;
}

#suscribe h2 {
    font-family: 'Volkhov', serif;
    font-size: 48px;
    width: 700px;
    
}

#suscribe .input-group {
    background: var(--bg-body);
    padding: 10px;
    border-radius: 10px;
    width: 700px;
    height: 68px;
    z-index: 10;
}

#suscribe button {
    background: var(--primary-color);
    color: var(--bg-body);
    padding: 10px;
}

#suscribe input {
    border: none;
}

footer {
    height: 600px;
    background: #F7F8FC;

}
footer ul {
    margin: 0;
    padding: 0;
}
footer h6 {
    color: #222222;
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
}

footer a {
    text-decoration: none;
    color: #666666;
    font-size: 18px;
    line-height: 26px;
    
}

footer li {
    list-style: none;
    padding-top: 10px;
}


</style>
