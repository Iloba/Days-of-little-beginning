
/*he-il rtl align and chevron align for 5158 */

.he-il a.c-call-to-action:after {
content: "\E76B" !important;}
.he-il .MiddText [data-grid*=col-] 
{float:right !important;}
.he-il span.b-call-to-action:after
{content: "\E76B" !important;}

/* ------ 28/11/16 ------ */

/*_:-ms-fullscreen, :root .he-il span.b-call-to-action:after{
margin-right: 20px;
}*/

_:-ms-fullscreen, :root .he-il span.b-call-to-action:after{
margin-right: 18px;
margin-top:1px;
}

.c-top-nav-item a:focus { outline: 1px dashed; display:  block;}
.ctafocus a.c-call-to-action:focus {outline-color:#fff;}
.MiddText .f-size-medium a:focus {border:0px solid #fff; display: block; }
.social-blade a:focus{outline: 2px dashed #000} 
.social-blade .desktop a { padding: 1px 5px 5px;}
.social-blade .scShareLink { padding:1px 0px 5px 7px;}
 /* ---------- aboutus ---------- */
body { font-size:0.938em;}
.about-page .c-heading-4 { font-size:1.6em; line-height: 1.2em; }
.about-page .c-paragraph { font-size:1em; line-height: 1.4em; }
.about-page h3.c-heading {font-size:1.25em; }
.about-page .c-subheading {font-size: 1.3em; line-height: 1.2em;}
.about-page a.c-call-to-action { font-size: 0.85em; }
 /* ---------- inner pages ---------- */
.about-page .c-heading-2 { font-size:3.07em; line-height: 56px; }
 @media only screen and (max-width:767px)
  {
    .aboutsub .c-heading-4 {font-size:1.333em; line-height:1.2em; }
  }
   @media only screen and (min-width:768px)
  {
.aboutsub .c-heading-4 {font-size:1.6em; line-height:1.2em; }
  }
.aboutsub .c-paragraph { font-size:1em; line-height: 1.3em;}
#skipTarget h2.c-heading-2  { font-size:3.07em; line-height: 3.9em; }
.c-officelocator h2.c-heading-2  { font-size:3.07em; line-height:1.2em; }
.c-officelocator p.c-paragraph-1 { font-size: 1.3em;line-height: 1.1em; }
.c-heading-5 {font-size: 1.3em;line-height: 1.2em;}
.list-container .c-list a { font-size:1.1em; line-height:1.1em;}



/* ------ 28/11/16 ------ */
/*Generic Class*/
.greyimg { height:100%; width:100%;}
.white-c {color:white;}
.padright { padding-right:10px; }
.custom-container {max-width: 100% !important}
.m-t-md{ margin-top: 0; }
.shell-search input, .shell-search input[type="search"]{height: 34px !important;}
.shell-search button{height: 34px !important;}
/*.shell-search button{height: 34px !important;}*/
/*Generic Class End*/

/*Grid Section*/
.aboutsub .c-content-placement a:hover, .aboutsub .c-content-placement a:focus,
.about-page .c-content-placement a:hover, .about-page .c-content-placement a:focus{
  text-decoration: underline;
}
h2.c-heading-4 { padding: 15px 0 4px;}
.maxheight { max-height:100% !important;}
/*Padding between column images*/
[data-grid~="pad-xs"] > [data-grid] {
    padding-left: 24px;
    padding-right: 24px;
}
/*Padding between column images End*/
@media only screen and (min-width:768px)
  {
.marg-top.c-content-placement{margin-top: 0px !important;}
  }
  @media only screen and (min-width:1084px)
  {
.marg-top-people.c-content-placement{margin-top: 0px !important;}
  }
  @media only screen and (max-width:540px)
  {
.about-page .c-content-placement{margin-top: 0px !important;}
  }
  @media only screen and (min-width:768px) and (max-width:1000px)
  {
    .about-page [data-grid~="col-12"] >  [data-grid~="col-6"] .c-content-placement{margin-top: 0px !important;}
  }

/*Grid Section end*/

/*Social Blade*/
.social-blade { padding:1% 0 } 
.social-blade a img:hover{ opacity: 0.8 }
.social-blade div:nth-child(2) div { float: right }
  @media screen and (max-width:1083px) {
.social-blade div:nth-child(2) div { float: left }
.social-blade div { width:100%; padding: 1% 0 }
  }
  
/*  @media only screen and (max-width:767px)
{
.social-blade .desktop {
    display: none;
}

}

@media only screen and (min-width:768px)
{
.social-blade .mobile {
    display: none;
}

}*/
  
/*Social Blade End*/


/*Hero Section*/
/*.about-page.c-hero img { max-width:100%;height:auto }*/
.about-page.c-hero .c-heading-1{ font-size:3.74em; line-height:1.07em;/* margin-bottom: 12px*/}
.about-page.c-hero .c-subheading-1{ font-size:1.9em; line-height:1.1em;}
@media only screen and (min-width: 768px){
/*.about-page.c-hero.theme-dark{background-color: white !important;}
.about-page.c-hero.f-y-center>div>div{top:calc(40%)}*/
} 
@media only screen and (max-width: 767px)
{
.about-page.c-hero>div {
    /*height: auto;
    padding-bottom: 10%;*/
}
/*.about-page.about-sub.c-hero.f-x-left>div>div{transform: translateY(-30%) !important;}
.about-page.about-res.c-hero.f-x-left > div > div {
    transform: translateY(-9%) !important;
}
.c-hero img{height: 100% !important;}*/
}

/*Hero Section End*/
/*Mosaic Section*/
.about-page.c-mosaic .c-group:hover { opacity:0.75; }
.about-page.c-mosaic .c-mosaic-placement .c-subheading{ max-height: initial; overflow: visible}
.about-page.c-mosaic a{ text-transform: uppercase;}
.about-page.c-mosaic a span{ overflow: visible;}
.about-page.c-mosaic a:hover span{ text-decoration: underline;}
 @media screen and (min-width:1600px)
  {
.about-page.c-mosaic .c-mosaic-placement picture img{ width: 100%}
  } 
  @media screen and (max-width:768px)
  {
.about-page.c-mosaic .c-mosaic-placement .c-heading{ padding-top: 0px}
  } 
/*Mosaic Section End*/

@media only screen and (max-width:767px)  
  {
    /*.about-page.c-hero.f-y-center > picture img {
        top: calc(50%) !important;
        left:0 !important;
        -webkit-transform: translateY(-50%) !important;
        -ms-transform: translateY(-50%) !important;
        transform: translateY(-62%) !important;
    }*/
  }
  
 /*@media only screen and (min-width:768px)  
  {
    .c-hero.f-y-center>picture img{transform: translateY(-60%)}
  }
   @media only screen and (min-width:1084px)  
  {
    .c-hero.f-y-center>picture img{transform: translateY(-60%)}
  } 
  
  @media only screen and  (min-width:1400px)  
  {
    .c-hero.f-y-center>picture img{transform: translateY(-66%)}
  }
    @media only screen and (min-width:1920px) 
  {
    .c-hero.f-y-center>picture img{transform: translateY(-72%)}
  }
     @media only screen and (min-width:2200px) 
  {
    .c-hero.f-y-center>picture img{transform: translateY(-76%)}
  }
     @media only screen and (min-width:2400px) 
  {
      .c-hero.f-y-center>picture img {
        transform: translateY(-58%);
    }
  }*/
  
  /* About Home Responsive end */
  
  /* Subpage Column Hover */
  .aboutsub .c-content-placement .hov:hover { opacity:0.8; }
/* Subpage Column Hover end*/

/*Home page responsive starts
  @media only screen and (max-width:440px)
  {
.about-res.c-hero > div {
    height: auto; padding-bottom: 12px !important; transform: translateY(-13%) !important;
}
  }
@media only screen and (min-width:441px) and (max-width:539px)
  {
.about-res.c-hero > div {
height: auto; padding-bottom: 12px !important; transform: translateY(-6%) !important;
}
  }
  @media only screen and (min-width:621px) and (max-width:767px)
  {
  .about-res.c-hero > div { height: auto; padding-bottom: 12px !important; transform: translateY(-6%) !important;
}
}
/*Home page responsive ends*/

/* Subpage responsive starts

@media only screen and (max-width:390px)
{
.about-sub.c-hero.f-x-left > div > div {
    transform: translateY(-23%) !important;
}
}

@media only screen and (min-width:391px) and (max-width:430px)
{
.about-sub.c-hero.f-x-left > div > div {
    transform: translateY(-11%) !important;
}
}
@media only screen and (min-width:461px) and (max-width:539px)
{
.about-sub.c-hero.f-x-left > div > div {
    transform: translateY(11%) !important;
}
}

@media only screen and (min-width:610px) and (max-width:660px)
{
.about-sub.c-hero.f-x-left > div > div {
    transform: translateY(14%) !important;
}
}
@media only screen and (min-width:661px) and (max-width:767px)
{
.about-sub.c-hero.f-x-left > div > div {
    transform: translateY(29%) !important;
}
}
/* Subpage responsive starts ends*/



/*@media only screen and (min-width:0px) and (max-width:369px)
{
.about-page.c-hero.f-x-left > div > div {
    transform: translateY(-25%) !important;
}
}

@media only screen and (min-width:370px) and (max-width:400px)
{
.about-page.c-hero.f-x-left > div > div {
    transform: translateY(-13%) !important;
}
}


@media only screen and (min-width:401px) and (max-width:430px)
{
.about-page.c-hero.f-x-left > div > div {
    transform: translateY(-7%) !important;
}
}


@media only screen and (min-width:431px) and (max-width:470px)
{
.about-page.c-hero.f-x-left > div > div {
    transform: translateY(-26%) !important;
}
}


@media only screen and (min-width:471px) and (max-width:500px)
{
.about-page.c-hero.f-x-left > div > div {
    transform: translateY(-14%) !important;
}
}*/

/*latest update 18-4-16*/
@media only screen and (min-width:768px) and (max-width:900px)
{
/*.about-sub.c-hero {
    height: 332px !important;
}*/
}
@media only screen and (min-width:901px) and (max-width:1083px)
{
/*.about-sub.c-hero {
    height: 390px !important;
}*/
}
@media only screen and (min-width:1084px) and (max-width:1200px)
{
/*.about-sub.c-hero {
height: 439px !important;
}*/
}
@media only screen and (min-width:1084px) and (max-width:1200px)
{
/*.values_res .about-sub.c-hero {
height: 441px !important;
}*/
}
@media only screen and (min-width:1201px) and (max-width:1399px)
{
/*.about-sub.c-hero {
height: 488px !important;
}*/
}
@media only screen and (min-width:1400px) and (max-width:1599px)
{
/*.about-sub.c-hero {
height: 492px !important;
}*/
}
@media only screen and (min-width:1600px) and (max-width:1919px)
{
/*.about-sub.c-hero {
height: 542px !important;
}*/
}
@media only screen and (min-width:1920px)
{
/*.about-sub.c-hero {
height: 637px !important;
}*/
}

@media screen and (min-width: 540px) and (max-width: 550px) {
  .es-mx_default .c-subheading {
    line-height: 22px;
  }
}
/*latest update 18-4-16 ends*/
ctafocus
/*Updates from #5158 */
/*he-il*/
/*.he-il a.c-call-to-action:after
{
        content: "\E76B" !important;
}*/

/*he-il ends*/
/*hu-hu*/
@media screen and (min-width: 540px) and (max-width: 632px) {
.hu-hu .c-group a:last-child
{
	    padding-top: 27px;
}
	}
  /*hu-hu ends*/
  /*sv-se*/
  @media screen and (min-width: 540px) and (max-width: 632px) {
.sv-se .c-group a:last-child
{
	    padding-top: 27px;
}
	}
  /*sv-se ends*/
  
/*start- About page hero section box for 4 pages */

.c-heading-2.topspace-h1 { padding-top: 0px;}

@media screen and (min-width: 768px) {
    .hero-box-bg {
        background: #fff;
        background-color: rgba(255, 255, 255, 0.6);
        padding: 2% 2%;
    }
    .hero-text-bgcolor {
        background: #000;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 2% 2%;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1599px) {
    /*.hero-text {
        width: 575px !important;
    }
    .hero-text-bgcolor {
        width: 575px !important;
    }*/
    .about-page.about-res.c-hero>div>div.hero-text-bgcolor {
      max-width: 595px;
    }
     
}

/*END -About*/
/* 14/06/2017 New hero section */
/*@media only screen and (min-width: 2619px){
  .about-page.c-hero:before {
      padding-bottom: 50%;
  }
}
@media only screen and (min-width: 2096px) and (max-width: 2618px){
  .about-page.c-hero:before {
      padding-bottom: 30%;
  }
}*/
@media only screen and (min-width: 1350px){
    .about-page.about-res.c-hero:before {
        padding-bottom: 50.04%;
    }
    .about-page.about-res.c-hero.f-y-center>picture img {
        transform: translateY(-60%); 
    }
    .about-page.about-res.c-hero.f-y-center>div>div {
      top: calc(40%);
    }
  }
@media only screen and (min-width: 2500px){
   .about-page.about-res.c-hero::before {
      padding-bottom: 30.04%;
    }
    .about-page.about-res.c-hero.f-y-center > picture img {
      transform: translateY(-74%);
    }
  }
@media only screen and (min-width: 1084px) and (max-width:1349px){
  .about-page.about-res.c-hero:before {
      padding-bottom: 50%;
  }
}
@media only screen and (max-width: 767px){
  .about-page.about-res.c-hero[class*=f-x][class*=f-y]>picture img{
    top: -20%;
  }
  .about-page.about-res.c-hero:before {
      /*padding-bottom: 75.25%;*/
  }
  .about-page.c-hero .c-subheading-1 {
    font-size: 1.3em;
  }
  .about-page.c-hero .c-heading-1, .about-page .c-heading-2.topspace-h1 {
    font-size: 2em;
    padding-top: 0;
  }
  /*.about-page.about-res.c-hero.f-x-left > div > div {
    transform: translateY(-6%);
  }*/
}
@media only screen and (max-width: 539px){
  .about-page.about-res.c-hero[class*=f-x][class*=f-y]>picture img {
      top: -13%;
  }
}
.about-page.c-hero>div{
  width: 90%;
  max-width: 1600px;
}
.MiddText{
  margin-top: 60px;
}
@media only screen and (min-width: 1779px){
  .about-sub.c-hero:before {
      padding-bottom: 26%;
  }
}
@media only screen and (min-width: 1084px) and (max-width: 1778px){
  .about-sub.c-hero:before {
      padding-bottom: 30%;
  }
}
@media only screen and (max-width: 1083px){
  .about-sub.c-hero:before {
      padding-bottom: 40%;
  }
}
@media only screen and (max-width: 767px){
  .about-sub.c-hero:before {
      padding-bottom:52.2%;
  }
 .about-val .about-sub.c-hero:before {
    padding-bottom: 41.6%;
  }
}

.about-page .c-mosaic-placement .c-call-to-action:after{
margin-top:0px;
}

#uhf-footer.c-universal-footer {
    margin-top: 0;
}

@media screen and (-ms-high-contrast:active)
     {
     .c-mosaic-placement picture::after {
         position: static;
     }
     }
 
 @media screen and (-ms-high-contrast:black-on-white){
      .about-page .c-mosaic-content .c-group a{
         background-color: white;
     }
     .about-page .c-mosaic-placement.f-height-large.f-width-large .c-heading, .about-page .c-mosaic-placement.f-height-large.f-width-large .c-subheading{
         background-color: white;
         margin: 0 25%;
         padding: 0 0.1% !important;
        }
    .about-page .c-mosaic-placement.f-height-large.f-width-small .c-heading, .about-page .c-mosaic-placement.f-height-large.f-width-small .c-subheading
    {
         background-color: white;
         margin: 0 12%;
         padding: 0 0.1% !important;
        }
 }

 @media screen and (-ms-high-contrast:white-on-black){
      .about-page .c-mosaic-content .c-group a{
         background-color: black;
     }
     .about-page .c-mosaic-placement.f-height-large.f-width-large .c-heading, .about-page .c-mosaic-placement.f-height-large.f-width-large .c-subheading{
         background-color: black;
         margin: 0 25%;
         padding: 0 0.1% !important;
        }
    .about-page .c-mosaic-placement.f-height-large.f-width-small .c-heading, .about-page .c-mosaic-placement.f-height-large.f-width-small .c-subheading
    {
         background-color: black;
         margin: 0 12%;
         padding: 0 0.1% !important;
        }
 }

/* 14/06/2017 New hero section end */
    /*bg-bg*/
  @media screen and (min-width: 540px) and (max-width: 632px) {
.bg-bg .c-group a:last-child
{
	    padding-top: 27px;
}
	}
  /*bg-bg ends*/
  
 @media screen and (max-width : 448px) and (-ms-high-contrast:black-on-white){
      .about-page .c-mosaic-content .c-group a{
         background-color: white;
     }
     .about-page .c-mosaic-placement.f-height-large.f-width-large .c-heading, .about-page .c-mosaic-placement.f-height-large.f-width-large .c-subheading{
         background-color: white;
         margin: 0 15%;
         padding: 0 0.1% !important;
        }
    .about-page .c-mosaic-placement.f-height-large.f-width-small .c-heading, .about-page .c-mosaic-placement.f-height-large.f-width-small .c-subheading
    {
         background-color: white;
         margin: 0 12%;
         padding: 0 0.1% !important;
        }
 }

 @media screen and (max-width : 448px) and (-ms-high-contrast:white-on-black){
      .about-page .c-mosaic-content .c-group a{
         background-color: black;
     }
     .about-page .c-mosaic-placement.f-height-large.f-width-large .c-heading, .about-page .c-mosaic-placement.f-height-large.f-width-large .c-subheading{
         background-color: black;
         margin: 0 15%;
         padding: 0 0.1% !important;
        }
    .about-page .c-mosaic-placement.f-height-large.f-width-small .c-heading, .about-page .c-mosaic-placement.f-height-large.f-width-small .c-subheading
    {
         background-color: black;
         margin: 0 12%;
         padding: 0 0.1% !important;
        }
 }

@media only screen and (max-width: 767px) and (min-width: 540px)
{
.cust_min_width_160 {
min-width: auto !important;
}
}
.pad0{
  word-wrap: break-word;
}


.m-cta a.c-call-to-action span {
    display: inline;
    max-width: 100%;
    text-overflow: clip;
    overflow: hidden;
    position: relative;
}



.m-cta a.c-call-to-action{
  white-space: normal;
}
/* 20171006 fix*/
    .loc-mt-fix{
            left: 0% !important;
      text-align: right !important;
    }
/* 20171006 fix*/

@media only screen and (min-width: 768px){
.m-cta a.c-call-to-action{
    text-align: left;  
  }
}
/*.m-cta a.c-call-to-action.a-cta:after{
    position: absolute;
}*/

.m-cta a.c-call-to-action.b-cta
{
  width: 80%;
}.rootTable { border-collapse: collapse; width: 100%; height: 100%; }
.mapPanel{ position: relative; height: 375px; }
.map-search-results{background-color: white}
.errorMsg { color: red; }
.c-officelocator .map-search-bar {padding-bottom: 3%;}
.pin-icon {
    background-image: url('https://c.s-microsoft.com/en-us/CMSImages/2F2F2F-number-icon-coming-soon.png?version=ffc56084-ef90-3909-3974-030cc75d627c');
    background-repeat: no-repeat;
    background-position: center center;
    font-weight: bold;
    font-size: 14px;
    left: 0;
    top: 5px;
    text-align: center;
    position: absolute;
    height: 29px;
    width: 24px;
    cursor: pointer;
}
.store.pin-icon {
    background-image: url('https://c.s-microsoft.com/en-us/CMSImages/0078D7-number-icon-coming-soon.png?version=44d4135c-ab2e-0d45-6f1f-558e0b1c5789');
}
.inovation-center.pin-icon {
    background-image: url('https://c.s-microsoft.com/en-us/CMSImages/0078D7-number-icon-coming-soon.png?version=74dc46b1-f89d-4432-bdfd-a2828631339b');
}

.infobox {
    background-color: #fff;    
    border: solid 3px #2F2F2F;
    margin: -3px 0 0 -60px;
    width: 319px;
    margin: 0;
}
#store.infobox{
    border: solid 3px #FF7F50 !important;
}
#inovation-center.infobox{
    border: solid 3px #0078D7 !important;
}
.infobox-header {
    /** background-color: #2F2F2F;*/
    color: #000;
    padding: 1.71429em 1.42857em 0 1.42857em;
    position: relative;
}
#store .infobox-header{
   /** background-color: #FF7F50 !important;*/
   color:#000;
}
#inovation-center .infobox-header{
   /** background-color: #0078D7 !important;*/
    color:#000;
}
.infobox-header .index {
    position: absolute;
}
.infobox-header .index+div {
    margin-left: 25px;
}
.infobox .description {
    padding: 0 20px;
}
.infobox .description>div {
    margin: 20px 0;
}
.field-label {
    display: inline-block;
    font-weight: bold;
    vertical-align: top;
    width: 3.92857em;
}
.field-data {
    display: inline-block;
    margin-left: 0;
    line-height: 1.42857em;
    width: 78%;
    font-weight: 300;
}
.infobox .infobox-arrow {
    position: absolute;
    left: 133px;
}
/*
.c-officelocator .list-view-link.active, .c-officelocator .map-view-link.active {
    background-color: #1570a6;
    border: 1px solid #1570a6;
}
.c-officelocator .view-links{
    display: none;
}*/
.c-officelocator .list-view-link.active .icon-inactive, .c-officelocator .map-view-link.active .icon-inactive,
.c-officelocator .list-view-link .icon-active, .c-officelocator .map-view-link .icon-active {
    display: none;
}
.c-officelocator .list-view-link.active .icon-active, .c-officelocator .map-view-link.active .icon-active,
.c-officelocator .list-view-link .icon-inactive, .c-officelocator .map-view-link .icon-inactive {
    display: inline-block;
    vertical-align: middle;
}
@media screen and (max-width: 540px) {
    .sidePanel, .mapPanel{
        width: 100%;
    }
}
@media screen and (min-width: 541px) {
    .resultsPanel { overflow-y: auto; overflow-x: hidden; 
        /*border: 1px solid silver;*/
    }
}

.miles, .shopping-cart{
    float:right;
    margin:0px 5px 0px 0px;
}
.list-div{
    padding:10px;border: 1px solid #DCDCDC;
}
.list-div:hover{
    background-color:#DCDCDC;
}
.c-content-placement>div {
    padding-right: 0px !important;
}

.c-heading-5, .h5, .type-h5, h5 {
    padding: 0px 0 0px !important; 
    font-weight: 350;
}
.list-container{
    padding:30px 0;
}
.list-container [data-grid~=col-3]{
    width: 20%;
}
@media screen and (max-width: 826px) {
   .list-container [data-grid~=col-3]{
    width: 25%;
} 
}
.c-progress{
    display: none;
    text-align: center;
}
@media screen and (min-width: 1084px) {
    .c-hero.cust-hero-height {
    height: 400px;
}
}
 .map-search-results{
     padding-bottom:40px;
 }  
 @media screen and (min-width: 320px) {
 input.c-text-field[type=text], input.form-control {
        width: 100%;
        min-width: 88px;
    max-width: 400px;}


.c-select {
    min-width: 88px;
    max-width: 400px;
}
 }

.resultsPanel .c-list {
    margin:0px;
} 	.m-social {
    padding: 0
}

.c-social,
.m-social {
    display: block;
    margin-top: 48px
}

.c-social.f-facebook>div,
.c-social.f-pinterest>div,
.c-social.f-twitter>div,
.m-social.f-facebook>div,
.m-social.f-pinterest>div,
.m-social.f-twitter>div {
    display: inline-block;
    margin-right: 24px
}

.c-social>span,
.m-social>span {
    font-size: 15px;
    line-height: 20px;
    color: rgba(0, 0, 0, .6);
    padding-right: 12px;
    margin-bottom: 4px
}

.c-social>a,
.c-social>ul>li>a,
.m-social>a,
.m-social>ul>li>a {
    position: relative;
    width: 32px;
    height: 32px;
    transition: scale .2s ease-in-out
}

@media screen and (-ms-high-contrast:active) {
    .c-social>a,
    .c-social>ul>li>a,
    .m-social>a,
    .m-social>ul>li>a {
        -ms-high-contrast-adjust: background;
        background: #FFF
    }
}

.c-social>a:focus,
.c-social>ul>li>a:focus,
.m-social>a:focus,
.m-social>ul>li>a:focus {
    outline: #000 solid 2px
}

.c-social.f-follow ul>li>a:active,
.c-social.f-follow>a:active,
.c-social.f-share ul>li>a:active,
.c-social.f-share>a:active,
.c-social>a.x-hidden-focus,
.c-social>ul>li>a.x-hidden-focus,
.m-social.f-follow ul>li>a:active,
.m-social.f-follow>a:active,
.m-social.f-share ul>li>a:active,
.m-social.f-share>a:active,
.m-social>a.x-hidden-focus,
.m-social>ul>li>a.x-hidden-focus {
    outline: 0
}

.c-social>a:focus:before,
.c-social>a:hover:before,
.c-social>ul>li>a:focus:before,
.c-social>ul>li>a:hover:before,
.m-social>a:focus:before,
.m-social>a:hover:before,
.m-social>ul>li>a:focus:before,
.m-social>ul>li>a:hover:before {
    background: rgba(0, 0, 0, .1)
}

@media screen and (-ms-high-contrast:active) {
    .c-social>a:focus:before,
    .c-social>a:hover:before,
    .c-social>ul>li>a:focus:before,
    .c-social>ul>li>a:hover:before,
    .m-social>a:focus:before,
    .m-social>a:hover:before,
    .m-social>ul>li>a:focus:before,
    .m-social>ul>li>a:hover:before {
        background: 0 0
    }
}

.c-social>a:active,
.c-social>ul>li>a:active,
.m-social>a:active,
.m-social>ul>li>a:active {
    -ms-transform: scale(.98);
    transform: scale(.98)
}

.c-social>a:active:before,
.c-social>ul>li>a:active:before,
.m-social>a:active:before,
.m-social>ul>li>a:active:before {
    background: rgba(0, 0, 0, .2)
}

.c-social>a:before,
.c-social>ul>li>a:before,
.m-social>a:before,
.m-social>ul>li>a:before {
    background: 0 0;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

.c-social>a>img,
.c-social>ul>li>a>img,
.m-social>a>img,
.m-social>ul>li>a>img {
    width: 32px;
    height: 32px
}

.c-social>a.x-hidden-focus:before,
.c-social>ul>li>a.x-hidden-focus:before,
.m-social>a.x-hidden-focus:before,
.m-social>ul>li>a.x-hidden-focus:before {
    background: 0 0
}

.c-social.f-follow ul>li>a>img,
.c-social.f-follow>a>img,
.c-social.f-share ul>li>a>img,
.c-social.f-share>a>img,
.m-social.f-follow ul>li>a>img,
.m-social.f-follow>a>img,
.m-social.f-share ul>li>a>img,
.m-social.f-share>a>img {
    opacity: .6
}

@media screen and (-ms-high-contrast:active) {
    .c-social.f-follow ul>li>a:hover:before,
    .c-social.f-follow>a:hover:before,
    .c-social.f-share ul>li>a:hover:before,
    .c-social.f-share>a:hover:before,
    .m-social.f-follow ul>li>a:hover:before,
    .m-social.f-follow>a:hover:before,
    .m-social.f-share ul>li>a:hover:before,
    .m-social.f-share>a:hover:before {
        background: 0 0
    }
    .c-social.f-follow ul>li>a>img,
    .c-social.f-follow>a>img,
    .c-social.f-share ul>li>a>img,
    .c-social.f-share>a>img,
    .m-social.f-follow ul>li>a>img,
    .m-social.f-follow>a>img,
    .m-social.f-share ul>li>a>img,
    .m-social.f-share>a>img {
        opacity: 1
    }
}

.c-social.f-follow ul>li>a>img:focus,
.c-social.f-follow ul>li>a>img:hover,
.c-social.f-follow>a>img:focus,
.c-social.f-follow>a>img:hover,
.c-social.f-share ul>li>a>img:focus,
.c-social.f-share ul>li>a>img:hover,
.c-social.f-share>a>img:focus,
.c-social.f-share>a>img:hover,
.m-social.f-follow ul>li>a>img:focus,
.m-social.f-follow ul>li>a>img:hover,
.m-social.f-follow>a>img:focus,
.m-social.f-follow>a>img:hover,
.m-social.f-share ul>li>a>img:focus,
.m-social.f-share ul>li>a>img:hover,
.m-social.f-share>a>img:focus,
.m-social.f-share>a>img:hover {
    opacity: .8
}

@media screen and (-ms-high-contrast:active) {
    .c-social.f-follow ul>li>a>img:focus,
    .c-social.f-follow ul>li>a>img:hover,
    .c-social.f-follow>a>img:focus,
    .c-social.f-follow>a>img:hover,
    .c-social.f-share ul>li>a>img:focus,
    .c-social.f-share ul>li>a>img:hover,
    .c-social.f-share>a>img:focus,
    .c-social.f-share>a>img:hover,
    .m-social.f-follow ul>li>a>img:focus,
    .m-social.f-follow ul>li>a>img:hover,
    .m-social.f-follow>a>img:focus,
    .m-social.f-follow>a>img:hover,
    .m-social.f-share ul>li>a>img:focus,
    .m-social.f-share ul>li>a>img:hover,
    .m-social.f-share>a>img:focus,
    .m-social.f-share>a>img:hover {
        opacity: 1
    }
}

.c-social.f-follow ul>li>a>img:active,
.c-social.f-follow>a>img:active,
.c-social.f-share ul>li>a>img:active,
.c-social.f-share>a>img:active,
.m-social.f-follow ul>li>a>img:active,
.m-social.f-follow>a>img:active,
.m-social.f-share ul>li>a>img:active,
.m-social.f-share>a>img:active {
    opacity: 1
}

.c-social button,
.m-social button {
    width: 32px;
    height: 32px;
    border: 0;
    background-color: transparent;
    padding: 0;
    color: rgba(0, 0, 0, .6);
    vertical-align: middle
}

.c-social button[aria-hidden=true],
.m-social button[aria-hidden=true] {
    display: none
}

.c-social button:focus,
.m-social button:focus {
    outline: #000 dashed 1px
}

.c-social .f-hide,
.m-social .f-hide {
    display: none!important
}

.c-social.f-horizontal,
.m-social.f-horizontal {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center
}

.c-social.f-horizontal ul>li>a,
.c-social.f-horizontal>a,
.m-social.f-horizontal ul>li>a,
.m-social.f-horizontal>a {
    display: inline-block;
    margin-right: 12px
}

.c-social.f-horizontal ul>li,
.m-social.f-horizontal ul>li {
    float: left
}

.c-social.f-horizontal button[aria-hidden=false],
.m-social.f-horizontal button[aria-hidden=false] {
    display: inline-block
}

.c-social.f-horizontal button.c-glyph[aria-expanded=false]:after,
.c-social.f-horizontal button.c-glyph[data-js-toggle=false]:after,
.m-social.f-horizontal button.c-glyph[aria-expanded=false]:after,
.m-social.f-horizontal button.c-glyph[data-js-toggle=false]:after {
    content: ""
}

.c-social.f-horizontal button.c-glyph[aria-expanded=true]:after,
.c-social.f-horizontal button.c-glyph[data-js-toggle=true]:after,
.m-social.f-horizontal button.c-glyph[aria-expanded=true]:after,
.m-social.f-horizontal button.c-glyph[data-js-toggle=true]:after {
    content: ""
}

.c-social.f-vertical ul>li>a,
.c-social.f-vertical>a,
.m-social.f-vertical ul>li>a,
.m-social.f-vertical>a {
    display: block;
    margin-bottom: 12px;
    margin-right: 0
}

.c-social.f-vertical button[aria-hidden=false],
.m-social.f-vertical button[aria-hidden=false] {
    display: block
}

.c-social.f-vertical button.c-glyph[aria-expanded=false]:after,
.c-social.f-vertical button.c-glyph[data-js-toggle=false]:after,
.m-social.f-vertical button.c-glyph[aria-expanded=false]:after,
.m-social.f-vertical button.c-glyph[data-js-toggle=false]:after {
    font-family: MWF-MDL2;
    content: ""
}

.c-social.f-vertical button.c-glyph[aria-expanded=true]:after,
.c-social.f-vertical button.c-glyph[data-js-toggle=true]:after,
.m-social.f-vertical button.c-glyph[aria-expanded=true]:after,
.m-social.f-vertical button.c-glyph[data-js-toggle=true]:after {
    font-family: MWF-MDL2;
    content: ""
}

@media only screen and (max-width:767px) {
    .c-social,
    .m-social {
        margin-top: 36px
    }
}