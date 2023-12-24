import{j as e,r as d,h as G,u as o,d as c,g,L as j,e as k,i as p,a as N,k as H}from"./index-b701832e.js";import{C as M,a as Z,L as _,B as U,p as A,b as I,c as V,d as O,A as Y,D as q}from"./index-4574e2de.js";import{B as X,L as J,D as K,S as Q}from"./Snack-54a11135.js";import{g as $,r as ee,R as te}from"./selectors-789027b3.js";import{s as ne}from"./symbol-1f3213ec.js";M.register(Z,_,U,A,I,V);const oe={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},re=["Intake"],ae=({waterIntake:t})=>{const n={labels:re,datasets:[{label:"Water",data:[t],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(O,{data:n,options:oe})})},ie=t=>d.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},d.createElement("path",{d:"M4 8H12",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M8 12V4",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),se=G` 
    0% {
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform: translateY(-1400%);
        opacity: 1;
    }
  `,de=o.h2`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,le=o.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: var(--bg-secondary);
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;

    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    height: 240px;
    padding: 24px 40px;
  }
`,ce=o.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: var(--bg-primary);
  padding: 7px;
`,pe=o.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:t})=>t}px);
  color: ${({$percentColor:t})=>t};
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`,xe=o.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px var(--carbonohidrates-donut-color);
    animation: ${se} 4s linear infinite;

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      transform: scale(0.25) translate(-60%, -60%);
      background: radial-gradient(#fff, transparent);
      border-radius: 50%;
    }
  }
`,he=o.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,me=o.p`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,ge=o.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,fe=o.p`
  display: flex;
  align-items: center;
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 121.429% */
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 0px;
  }
`,W=o.span`
  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,ue=o.p`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,ye=o.span`
  color: var(--text-color-secondary-grey);
  font-weight: 500;
  margin-left: 4px;
`,we=o.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: none;
  padding: 8px 10px;
  background-color: var(--input-border-color-normal);

  color: var(--bg-secondary);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,be=o(ie)`
  stroke: var(--text-color-button-black);
`,je=()=>{const t=document.querySelector("#bubbles"),n=document.createElement("span");let a=Math.random()*(11-5)+5;n.style.width=a+"px",n.style.height=a+"px",n.style.left=8+Math.random()*50+"px",t.appendChild(n),setTimeout(()=>{n.remove()},9e3)},ke=({handleModal:t,waterConsumtion:n})=>{const a=1500-n,r=n<=1500?Math.round(n*100/1500):100,i=r<=84?Math.ceil(r/100*176+10):88,l=r<=85?"rgba(182, 195, 255, 1)":"green";return d.useEffect(()=>{const s=setInterval(je,1e3);return()=>{clearInterval(s)}},[]),e.jsxs("div",{children:[e.jsx(de,{children:"Water"}),e.jsxs(le,{children:[e.jsx(ce,{children:e.jsxs(xe,{id:"bubbles",children:[e.jsx(pe,{$offset:i,$percentColor:l,children:`${r}%`}),e.jsx(ae,{waterIntake:r})]})}),e.jsxs(he,{children:[e.jsx(me,{children:"Water consumption"}),e.jsxs(ge,{children:[e.jsxs(fe,{children:[n," ",e.jsx(W,{children:"ml"})]}),e.jsxs(ue,{children:["left:",e.jsx(ye,{children:a>0?a:0}),e.jsx(W,{children:"ml"})]})]}),e.jsxs(we,{onClick:t,children:[e.jsx(be,{}),"Add water intake"]})]})]})]})};M.register(Y,I,V);const ve={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Ce={id:"bcgCircle",beforeDatasetsDraw(t,n,a){const{ctx:r}=t;r.save();const i=t.getDatasetMeta(0).data[0].x,l=t.getDatasetMeta(0).data[0].y,s=t.getDatasetMeta(0).data[0].innerRadius,x=t.getDatasetMeta(0).data[0].outerRadius,f=x-s,y=Math.PI/180;r.beginPath(),r.lineWidth=f,r.strokeStyle="rgba(41, 41, 40, 1)",r.arc(i,l,x-f/2,0,y*360,!1),r.stroke()}},D=({dailyCalories:t,inputValue:n,chartBcg:a})=>{n>t&&(n=t,a="red");const r=t-n,i={datasets:[{label:[],data:[n,r],backgroundColor:[a,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(q,{options:ve,data:i,plugins:[Ce]})})},We=(t,n)=>{let a,r,i;switch(n){case"lose":a=.25,r=.2;break;case"gain":a=.3,r=.2;break;case"maintain":a=.2,r=.25;break;default:a=.25,r=.2}i=1-(a+r);const l=Math.round(a*t/4),s=Math.round(r*t/9);return{carbs:Math.round(i*t/4),protein:l,fat:s}},Fe=o.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Be=o.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Le=o.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,ze=o.div`
  display: flex;
  flex-direction: column;
`,Me=o.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Ie=o.div`
  display: flex;
  column-gap: 12px;
`,F=o.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Ve=o.p`
  width: 78px;
`,b=t=>{const{title:n,chartBcg:a,elementGoal:r,elementValue:i}=t;let l=r-i;l<0&&(l=0);let s=Math.round(i*100/r);return(s===1/0||isNaN(s))&&(s=0),s>100&&(s=100),e.jsx(e.Fragment,{children:e.jsxs(Fe,{children:[e.jsxs(Be,{children:[e.jsx(D,{dailyCalories:r,inputValue:i,chartBcg:a}),e.jsx(Le,{children:e.jsx("p",{children:`${s}%`})})]}),e.jsxs(ze,{children:[e.jsx(Me,{children:n}),e.jsxs(Ie,{children:[e.jsxs(Ve,{children:["Goal: ",e.jsx(F,{children:r})]}),e.jsxs("p",{children:["left: ",e.jsx(F,{children:l})]})]})]})]})})},$e=o.h2`
  color: var(--text-color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,De=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: var(--bg-secondary);
  margin-bottom: 20px;

  font-family: Poppins;
  font-style: normal;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
    height: 240px;
  }
`,Se=o.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 38px;

  p:last-child {
    color: var(--text-color-secondary-grey);

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`,Te=o.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Ee=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Pe=t=>t.foodIntake,Re=t=>t.foodIntake,Ge=t=>t.foodIntake,Ne="rgba(255, 196, 247, 1)",He="rgba(255, 243, 183, 1)",Ze="rgba(182, 182, 182, 1)",_e=({dailyCalories:t})=>{const n=c(Pe),a=c(Re);let r="#45FFBC",i=0,l=0,s=0;for(const w in n){const E=Math.round(n[w].reduce((h,{fat:m=0})=>h+m,0)*10/10);i+=E;const P=Math.round(n[w].reduce((h,{protein:m=0})=>h+m,0)*10/10);l+=P;const R=Math.round(n[w].reduce((h,{carbonohidrates:m=0})=>h+m,0)*10/10);s+=R}const{carbs:x,protein:f,fat:y}=We(t,"lose");return e.jsxs("div",{children:[e.jsx($e,{children:"Food"}),e.jsxs(De,{children:[e.jsxs(Se,{children:[e.jsx(D,{dailyCalories:t,inputValue:a,chartBcg:r}),e.jsxs(Te,{children:[e.jsx("p",{children:a}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Ee,{children:[e.jsx(b,{title:"Carbonohidrates",chartBcg:Ne,elementGoal:x,elementValue:s}),e.jsx(b,{title:"Protein",chartBcg:He,elementGoal:f,elementValue:l}),e.jsx(b,{title:"Fat",chartBcg:Ze,elementGoal:y,elementValue:i})]})]})]})},Ue=t=>d.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},d.createElement("path",{d:"M51.9662 40.8665C61.4103 40.8665 69.0662 33.2106 69.0662 23.7665C69.0662 14.3225 61.4103 6.6665 51.9662 6.6665C42.5222 6.6665 34.8662 14.3225 34.8662 23.7665C34.8662 33.2106 42.5222 40.8665 51.9662 40.8665Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),d.createElement("path",{d:"M21.2002 64.7999C26.8703 64.7999 31.4669 60.2034 31.4669 54.5333C31.4669 48.8632 26.8703 44.2666 21.2002 44.2666C15.5301 44.2666 10.9336 48.8632 10.9336 54.5333C10.9336 60.2034 15.5301 64.7999 21.2002 64.7999Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),d.createElement("path",{d:"M55.3995 73.3333C60.1124 73.3333 63.9329 69.5128 63.9329 64.7999C63.9329 60.0871 60.1124 56.2666 55.3995 56.2666C50.6867 56.2666 46.8662 60.0871 46.8662 64.7999C46.8662 69.5128 50.6867 73.3333 55.3995 73.3333Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10})),Ae=t=>d.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},d.createElement("path",{d:"M60 50.0001V63.3334C60 68.8334 55.5 73.3334 50 73.3334H30C24.5 73.3334 20 68.8334 20 63.3334V46.6001L32.9667 46.6668C35.4 46.6668 37.8 47.2334 40 48.3334C42.2 49.4334 44.6 50.0001 47.0666 50.0001H60Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M60 36.0998V49.9998H47.0666C44.6 49.9998 42.2 49.4332 40 48.3332C37.8 47.2332 35.4 46.6665 32.9667 46.6665L20 46.5998V36.0998C20 34.5665 20.8668 32.4665 21.9668 31.3665L29.0334 24.2998C29.6334 23.6998 30 22.8332 30 21.9665V16.6665H50V21.9665C50 22.8332 50.3666 23.6998 50.9666 24.2998L58.0332 31.3665C59.1332 32.4665 60 34.5665 60 36.0998Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M60 53.3333V50",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M20 49.9334V46.6001",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),d.createElement("path",{d:"M48.3337 16.6665H31.667C28.9003 16.6665 26.667 14.3998 26.667 11.6665C26.667 8.93317 28.9003 6.6665 31.667 6.6665H48.3337C51.1003 6.6665 53.3337 8.93317 53.3337 11.6665C53.3337 14.3998 51.1003 16.6665 48.3337 16.6665Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Oe=o.h2`
  color: ${g.colorPrimaryWhite};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,Ye=o.div`
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${g.colorPrimaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    height: 240px;
    padding: 24px 40px;
  }
`,qe=o.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,B=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,L=o.p`
  color: ${g.colorPrimaryGrey};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 4px;
`,z=o.p`
  display: flex;
  align-items: center;
  color: ${g.colorPrimaryWhite};
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
`,Xe=o.span`
  color: ${g.colorPrimaryGrey};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,Je=({dailyCalories:t})=>e.jsxs("div",{children:[e.jsx(Oe,{children:"Daily goal"}),e.jsx(Ye,{children:e.jsxs(qe,{children:[e.jsx(Ue,{}),e.jsxs(B,{children:[e.jsx(L,{children:"Calories"}),e.jsx(z,{children:t})]}),e.jsx(Ae,{}),e.jsxs(B,{children:[e.jsx(L,{children:"Water"}),e.jsxs(z,{children:["1500",e.jsx(Xe,{children:"ml"})]})]})]})})]}),Ke=o.div`
  /* border: 2px solid white; */
  max-width: 320px;
  padding: 10px;
  /* display: flex;
  gap: 19px; */

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 27px;
  }
`,Qe=o.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
`,et=o.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
  margin: 0;
  padding: 0;
  text-align: center;
`,tt=o.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
`,nt=o.div`
  /* border: 2px solid white; */
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 558px;
    row-gap: 28px;
  }
`,ot=()=>e.jsxs(Ke,{children:[e.jsxs(tt,{children:[e.jsx(Qe,{children:"Diary"}),e.jsx(j,{to:"/diary",children:e.jsx(et,{children:"See more"})})]}),e.jsxs(nt,{children:[e.jsx(X,{}),e.jsx(J,{}),e.jsx(K,{}),e.jsx(Q,{})]})]}),rt=o.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
  }
`,at=o.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  margin-bottom: 16px;
`,it=o.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,st=o(j)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-color-secondary-gre);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-top: 16px;
`,dt=()=>{const t=c($),n=ee(t);return e.jsxs(rt,{children:[e.jsx(at,{children:"Recommended food"}),e.jsx(it,{children:n.map(a=>e.jsx(te,{info:a},a.name))}),e.jsx(st,{to:"/recommended-food",children:"See more"})]})},lt=o.div`
  /* border: 2px solid white; */
  max-width: 320px;
  padding: 10px;
  /* display: flex;
  gap: 19px; */

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 27px;
  }

  @media (min-width: 1200px) {
    max-width: 1480px;
    padding: 34px;
  }
`,ct=o.svg`
  text-align: right;
  width: 16px;
  height: 16px;
`,pt=o.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
  justify-content: space-between;
`,xt=o.div`
  display: flex;
`,ht=o.div`
  /* border: 2px solid white; */
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 10;
    display: flex;
    gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 558px;
    padding: 10px;
    display: flex;
  }
`,mt=o.p`
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
`,gt=o.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`,ft=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
    margin-right: 0;
  }
`,ut=t=>t.caloriesGoal,yt=t=>t.waterIntake,S=k.create({baseURL:"https://healthyhubserver.onrender.com/"}),wt=t=>{S.defaults.headers.common.Authorization=`Bearer ${t}`},bt=p("caloriesGoal/get",async(t,n)=>{try{const r=n.getState().auth.token;return r?(wt(r),(await S("api/user/daily-goal-calories")).data):n.rejectWithValue("No token")}catch(a){return n.rejectWithValue(a.message)}}),v=k.create({baseURL:"https://healthyhubserver.onrender.com/"}),T=t=>{v.defaults.headers.common.Authorization=`Bearer ${t}`},jt=p("waterIntake/get",async(t,n)=>{try{const r=n.getState().auth.token;return r?(T(r),(await v("api/user/water-intake")).data):n.rejectWithValue("No token")}catch(a){return n.rejectWithValue(a.message)}});p("waterIntake/post",async(t,n)=>{try{const r=n.getState().auth.token;return r?(T(r),(await v.post("api/user/water-intake",t)).data):n.rejectWithValue("No token")}catch(a){return n.rejectWithValue(a.message)}});const u=k.create({baseURL:"https://backend-healthyhub.onrender.com/"}),C=t=>{u.defaults.headers.common.Authorization=`Bearer ${t}`},kt=p("foodIntake/get",async(t,n)=>{try{const r=n.getState().auth.token;return r?(C(r),(await u("api/user/food-intake")).data):n.rejectWithValue("No token")}catch(a){return n.rejectWithValue(a.message)}});p("foodIntake/post",async(t,n)=>{try{const r=n.getState().auth.token;return r?(C(r),(await u.post("api/user/food-intake",t)).data):n.rejectWithValue("No token")}catch(a){return n.rejectWithValue(a.message)}});p("foodIntake/update",async({ident:t,type:n,product:a},r)=>{try{const l=r.getState().auth.token;return l?(C(l),(await u.put(`api/user/food-intake/${t}`,{type:n,product:a})).data):r.rejectWithValue("No token")}catch(i){return r.rejectWithValue(i.message)}});const Lt=()=>{const t=c(ut),n=c(yt),a=c(Ge),r=c($),i=N();return d.useEffect(()=>{a||i(kt())},[i,a]),d.useEffect(()=>{!t&&i(bt()),!r&&i(H()),n===null&&i(jt())},[i,t,n,r]),e.jsxs(lt,{children:[e.jsx(Je,{dailyCalories:t}),e.jsx(ke,{waterConsumtion:n}),e.jsx(_e,{dailyCalories:t}),e.jsxs(pt,{children:[e.jsx(gt,{children:"Today"}),e.jsx(j,{to:"/dashboard",children:e.jsxs(xt,{children:[e.jsx(mt,{children:"On the way to the goal"}),e.jsx(ct,{children:e.jsx("use",{href:ne+"#icon-arrow-right"})})]})})]}),e.jsxs(ft,{children:[" ",e.jsx(ht,{children:e.jsx(ot,{})}),e.jsx(dt,{})]})]})};export{Lt as default};
