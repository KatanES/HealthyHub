import{j as e,r as l,h as H,u as n,d as c,g as u,L as w,e as M,i as b,a as B,k as G,l as N,m as Z}from"./index-2e7381ac.js";import{C as L,a as O,L as A,B as U,p as _,b as E,c as $,d as q,A as Y,D as X}from"./index-1bba354b.js";import{B as J,L as K,D as Q,S as ee}from"./Snack-24e5909a.js";import{g as S,r as te,R as ne}from"./selectors-27bbcfe1.js";import{F as oe,b as ie,c as ae,e as re,a as se,E as de}from"./index.esm-5eefb97e.js";import{s as le}from"./symbol-31b12b17.js";L.register(O,A,U,_,E,$);const pe={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},ce=["Intake"],xe=({waterIntake:t})=>{const o={labels:ce,datasets:[{label:"Water",data:[t],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(q,{data:o,options:pe})})},he=t=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M4 8H12",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 12V4",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),me=H` 
    0% {
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform: translateY(-1400%);
        opacity: 1;
    }
  `,ge=n.h2`
  color: rgba(255, 255, 255, 1);
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
`,fe=n.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: rgba(15, 15, 15, 1);
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
`,ue=n.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: rgba(5, 5, 5, 1);
  padding: 7px;
`,be=n.p`
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
`,we=n.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px rgba(255, 196, 247, 1);
    animation: ${me} 4s linear infinite;

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
`,ye=n.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,ke=n.p`
  color: rgba(255, 255, 255, 1);
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
`,je=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,ve=n.p`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 1);
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
`,C=n.span`
  color: rgba(182, 182, 182, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,Ce=n.p`
  color: rgba(255, 255, 255, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`,We=n.span`
  color: rgba(182, 182, 182, 1);
  font-weight: 500;
  margin-left: 4px;
`,Ie=n.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: none;
  padding: 8px 10px;
  background-color: rgba(227, 255, 168, 1);

  color: rgba(15, 15, 15, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,Fe=n(he)`
  stroke: rgba(15, 15, 15, 1);
`,ze=()=>{const t=document.querySelector("#bubbles"),o=document.createElement("span");let a=Math.random()*(11-5)+5;o.style.width=a+"px",o.style.height=a+"px",o.style.left=8+Math.random()*50+"px",t.appendChild(o),setTimeout(()=>{o.remove()},9e3)},Me=({handleModal:t,waterConsumtion:o})=>{const a=1500-o,i=o<=1500?Math.round(o*100/1500):100,r=i<=84?Math.ceil(i/100*176+10):88,d=i<=85?"rgba(182, 195, 255, 1)":"green";return l.useEffect(()=>{const s=setInterval(ze,1e3);return()=>{clearInterval(s)}},[]),e.jsxs("div",{children:[e.jsx(ge,{children:"Water"}),e.jsxs(fe,{children:[e.jsx(ue,{children:e.jsxs(we,{id:"bubbles",children:[e.jsx(be,{$offset:r,$percentColor:d,children:`${i}%`}),e.jsx(xe,{waterIntake:i})]})}),e.jsxs(ye,{children:[e.jsx(ke,{children:"Water consumption"}),e.jsxs(je,{children:[e.jsxs(ve,{children:[o," ",e.jsx(C,{children:"ml"})]}),e.jsxs(Ce,{children:["left:",e.jsx(We,{children:a>0?a:0}),e.jsx(C,{children:"ml"})]})]}),e.jsxs(Ie,{onClick:t,children:[e.jsx(Fe,{}),"Add water intake"]})]})]})]})};L.register(Y,E,$);const Be={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Le={id:"bcgCircle",beforeDatasetsDraw(t,o,a){const{ctx:i}=t;i.save();const r=t.getDatasetMeta(0).data[0].x,d=t.getDatasetMeta(0).data[0].y,s=t.getDatasetMeta(0).data[0].innerRadius,p=t.getDatasetMeta(0).data[0].outerRadius,x=p-s,h=Math.PI/180;i.beginPath(),i.lineWidth=x,i.strokeStyle="rgba(41, 41, 40, 1)",i.arc(r,d,p-x/2,0,h*360,!1),i.stroke()}},T=({dailyCalories:t,inputValue:o,chartBcg:a})=>{o>t&&(o=t,a="red");const i=t-o,r={datasets:[{label:[],data:[o,i],backgroundColor:[a,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(X,{options:Be,data:r,plugins:[Le]})})},Ee=(t,o)=>{let a,i,r;switch(o){case"lose":a=.25,i=.2;break;case"gain":a=.3,i=.2;break;case"maintain":a=.2,i=.25;break;default:a=.25,i=.2}r=1-(a+i);const d=Math.round(a*t/4),s=Math.round(i*t/9);return{carbs:Math.round(r*t/4),protein:d,fat:s}},$e=n.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Se=n.div`
  position: relative;
  width: 48px;
  height: 48px;
`,Te=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Ve=n.div`
  display: flex;
  flex-direction: column;
`,De=n.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Pe=n.div`
  display: flex;
  column-gap: 12px;
`,W=n.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Re=n.p`
  width: 78px;
`,k=t=>{const{title:o,chartBcg:a,elementGoal:i,elementValue:r}=t;let d=i-r;d<0&&(d=0);let s=Math.round(r*100/i);return(s===1/0||isNaN(s))&&(s=0),s>100&&(s=100),e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsxs(Se,{children:[e.jsx(T,{dailyCalories:i,inputValue:r,chartBcg:a}),e.jsx(Te,{children:e.jsx("p",{children:`${s}%`})})]}),e.jsxs(Ve,{children:[e.jsx(De,{children:o}),e.jsxs(Pe,{children:[e.jsxs(Re,{children:["Goal: ",e.jsx(W,{children:i})]}),e.jsxs("p",{children:["left: ",e.jsx(W,{children:d})]})]})]})]})})},He=n.h2`
  color: rgba(255, 255, 255, 1);
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
`,Ge=n.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 16px 12px;
  width: 300px;
  height: 380px;
  border-radius: 12px;
  background-color: rgba(15, 15, 15, 1);
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
`,Ne=n.div`
  position: relative;

  width: 168px;
  height: 168px;

  font-size: 32px;
  font-weight: 500;
  line-height: 38px;

  p:last-child {
    color: rgba(182, 182, 182, 1);

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`,Ze=n.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Oe=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Ae=t=>t.foodIntake,Ue=t=>t.foodIntake,_e=t=>t.foodIntake,qe="rgba(255, 196, 247, 1)",Ye="rgba(255, 243, 183, 1)",Xe="rgba(182, 182, 182, 1)",Je=({dailyCalories:t})=>{const o=c(Ae),a=c(Ue);let i="#45FFBC",r=0,d=0,s=0;for(const m in o){const D=Math.round(o[m].reduce((g,{fat:f=0})=>g+f,0)*10/10);r+=D;const P=Math.round(o[m].reduce((g,{protein:f=0})=>g+f,0)*10/10);d+=P;const R=Math.round(o[m].reduce((g,{carbonohidrates:f=0})=>g+f,0)*10/10);s+=R}const{carbs:p,protein:x,fat:h}=Ee(t,"lose");return e.jsxs("div",{children:[e.jsx(He,{children:"Food"}),e.jsxs(Ge,{children:[e.jsxs(Ne,{children:[e.jsx(T,{dailyCalories:t,inputValue:a,chartBcg:i}),e.jsxs(Ze,{children:[e.jsx("p",{children:a}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Oe,{children:[e.jsx(k,{title:"Carbonohidrates",chartBcg:qe,elementGoal:p,elementValue:s}),e.jsx(k,{title:"Protein",chartBcg:Ye,elementGoal:x,elementValue:d}),e.jsx(k,{title:"Fat",chartBcg:Xe,elementGoal:h,elementValue:r})]})]})]})},Ke=t=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M51.9662 40.8665C61.4103 40.8665 69.0662 33.2106 69.0662 23.7665C69.0662 14.3225 61.4103 6.6665 51.9662 6.6665C42.5222 6.6665 34.8662 14.3225 34.8662 23.7665C34.8662 33.2106 42.5222 40.8665 51.9662 40.8665Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M21.2002 64.7999C26.8703 64.7999 31.4669 60.2034 31.4669 54.5333C31.4669 48.8632 26.8703 44.2666 21.2002 44.2666C15.5301 44.2666 10.9336 48.8632 10.9336 54.5333C10.9336 60.2034 15.5301 64.7999 21.2002 64.7999Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M55.3995 73.3333C60.1124 73.3333 63.9329 69.5128 63.9329 64.7999C63.9329 60.0871 60.1124 56.2666 55.3995 56.2666C50.6867 56.2666 46.8662 60.0871 46.8662 64.7999C46.8662 69.5128 50.6867 73.3333 55.3995 73.3333Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10})),Qe=t=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M60 50.0001V63.3334C60 68.8334 55.5 73.3334 50 73.3334H30C24.5 73.3334 20 68.8334 20 63.3334V46.6001L32.9667 46.6668C35.4 46.6668 37.8 47.2334 40 48.3334C42.2 49.4334 44.6 50.0001 47.0666 50.0001H60Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 36.0998V49.9998H47.0666C44.6 49.9998 42.2 49.4332 40 48.3332C37.8 47.2332 35.4 46.6665 32.9667 46.6665L20 46.5998V36.0998C20 34.5665 20.8668 32.4665 21.9668 31.3665L29.0334 24.2998C29.6334 23.6998 30 22.8332 30 21.9665V16.6665H50V21.9665C50 22.8332 50.3666 23.6998 50.9666 24.2998L58.0332 31.3665C59.1332 32.4665 60 34.5665 60 36.0998Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 53.3333V50",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M20 49.9334V46.6001",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M48.3337 16.6665H31.667C28.9003 16.6665 26.667 14.3998 26.667 11.6665C26.667 8.93317 28.9003 6.6665 31.667 6.6665H48.3337C51.1003 6.6665 53.3337 8.93317 53.3337 11.6665C53.3337 14.3998 51.1003 16.6665 48.3337 16.6665Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),et=n.h2`
  color: ${u.colorPrimaryWhite};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,tt=n.div`
  box-sizing: border-box;
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${u.colorPrimaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,nt=n.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,I=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,F=n.p`
  color: ${u.colorPrimaryGrey};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 4px;
  margin: 0;
`,z=n.p`
  display: flex;
  align-items: center;
  color: ${u.colorPrimaryWhite};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin: 0;
`,ot=n.span`
  color: ${u.colorPrimaryGrey};
  font-size: 14px;
  font-style: normal;
  font-family: inherit;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,it=({dailyCalories:t,dailyWaterIntake:o})=>e.jsxs("div",{children:[e.jsx(et,{children:"Daily goal"}),e.jsx(tt,{children:e.jsxs(nt,{children:[e.jsx(Ke,{}),e.jsxs(I,{children:[e.jsx(F,{children:"Calories"}),e.jsx(z,{children:t})]}),e.jsx(Qe,{}),e.jsxs(I,{children:[e.jsx(F,{children:"Water"}),e.jsxs(z,{children:[o,e.jsx(ot,{children:"ml"})]})]})]})})]}),at=n.div`
  /* border: 2px solid white; */
  max-width: 320px;
  padding: 10px;
  /* display: flex;
  gap: 19px; */

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 27px;
  }
`,rt=n.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
`,st=n.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
  margin: 0;
  padding: 0;
  text-align: center;
`,dt=n.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
`,lt=n.div`
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
`,pt=()=>e.jsxs(at,{children:[e.jsxs(dt,{children:[e.jsx(rt,{children:"Diary"}),e.jsx(w,{to:"/diary",children:e.jsx(st,{children:"See more"})})]}),e.jsxs(lt,{children:[e.jsx(J,{}),e.jsx(K,{}),e.jsx(Q,{}),e.jsx(ee,{})]})]}),ct=n.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
  }
`,xt=n.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  margin-bottom: 16px;
`,ht=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,mt=n(w)`
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
`,gt=()=>{const t=c(S),o=te(t);return e.jsxs(ct,{children:[e.jsx(xt,{children:"Recommended food"}),e.jsx(ht,{children:o.map(a=>e.jsx(ne,{info:a},a.name))}),e.jsx(mt,{to:"/recommended-food",children:"See more"})]})},ft="/HealthyHub/assets/error-3cccb7e1.svg",ut=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(3px);
`,bt=n.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  width: 300px;
  height: 266px;
  border-radius: 12px;
  padding: 16px 12px;
  background-color: var(--bg-secondary);

  font-family: Poppins;
  font-style: normal;

  @media screen and (min-width: 834px) {
    top: 180px;
    width: 338px;
    height: 280px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    top: 215px;
  }
`,wt=n(oe)`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 258px;
    padding-left: 23px;
    padding-right: 23px;
  }
`,yt=n.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,kt=n.label`
  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;

  &::after {
    position: absolute;
    bottom: -38px;
    right: 10px;
    content: '';
    display: ${({$showIcon:t})=>t};
    margin-left: 16px;
    width: 16px;
    height: 16px;
    background-image: url('${ft}');
  }
`,jt=n(ie)`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--input-border-color-normal);
  border-radius: 12px;
  margin-bottom: 16px;
  outline: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  border: ${({borderstyle:t})=>t};

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,vt=n.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  margin-bottom: 8px;
  background-color: var(--bg-button-color);
  border: none;

  color: var(--text-color-button-black);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,Ct=n.div`
  position: absolute;
  top: 69px;
  left: 0;
  color: #e74a3b;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  padding-left: 10px;

  @media screen and (min-width: 834px) {
    left: 25px;
  }
`,Wt=n.button`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  background-color: transparent;
  border: none;

  color: var(--text-color-secondary-grey);
  font-family: Poppins;
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,j=M.create({baseURL:"https://healthyhubserver.onrender.com/"}),V=t=>{j.defaults.headers.common.Authorization=`Bearer ${t}`},It=b("waterIntake/get",async(t,o)=>{try{const i=o.getState().auth.token;return i?(V(i),(await j("api/user/water-intake")).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}}),Ft=b("waterIntake/post",async(t,o)=>{try{const i=o.getState().auth.token;return i?(V(i),(await j.post("api/user/water-intake",t)).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}}),zt=ae({waterIntake:re().required("Required")}),Mt=({handleModal:t})=>{const o=B(),a=r=>{(r.code==="Escape"||r.currentTarget===r.target)&&t()};l.useEffect(()=>(window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}));const i=(r,{resetForm:d})=>{const{waterIntake:s}=r;o(Ft({value:s})),d(),t()};return e.jsx(ut,{onClick:a,children:e.jsxs(bt,{children:[e.jsx(yt,{children:"Add water intake"}),e.jsx(se,{initialValues:{waterIntake:""},validationSchema:zt,onSubmit:i,children:({errors:r,touched:d})=>e.jsxs(wt,{children:[e.jsx(kt,{htmlFor:"waterIntake",$showIcon:r.waterIntake&&d.waterIntake?"block":"none",children:"How much water"}),e.jsx(jt,{autoFocus:!0,name:"waterIntake",type:"number",min:0,placeholder:"Enter milliliters",borderstyle:r.waterIntake&&d.waterIntake?"1px solid red":""}),e.jsx(de,{name:"waterIntake",children:s=>e.jsx(Ct,{children:s})}),e.jsx(vt,{type:"submit",children:"Confirm"}),e.jsx(Wt,{type:"button",onClick:t,children:"Cancel"})]})})]})})},Bt=n.main`
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`,Lt=n.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;n(w)`
  display: flex;
  align-items: center;
  color: rgba(182, 182, 182, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;n.span`
  margin-right: 6px;
`;const Et=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`,$t=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`,St=n.svg`
  text-align: right;
  width: 16px;
  height: 16px;
`;n.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
  justify-content: space-between;
`;const Tt=n.div`
  display: flex;
`,Vt=n.div`
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
`,Dt=n.p`
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
`;n.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;const Pt=n.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
    margin-right: 0;
  }
`,Rt=t=>t.waterIntake,y=M.create({baseURL:"https://backend-healthyhub.onrender.com/"}),v=t=>{y.defaults.headers.common.Authorization=`Bearer ${t}`},Ht=b("foodIntake/get",async(t,o)=>{try{const i=o.getState().auth.token;return i?(v(i),(await y("api/user/food-intake")).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}});b("foodIntake/post",async(t,o)=>{try{const i=o.getState().auth.token;return i?(v(i),(await y.post("api/user/food-intake",t)).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}});b("foodIntake/update",async({ident:t,type:o,product:a},i)=>{try{const d=i.getState().auth.token;return d?(v(d),(await y.put(`api/user/food-intake/${t}`,{type:o,product:a})).data):i.rejectWithValue("No token")}catch(r){return i.rejectWithValue(r.message)}});const _t=()=>{const t=c(G),o=t.BMR,a=t.rateWater*1e3,i=c(Rt),r=c(_e),d=c(S),s=B(),[p,x]=l.useState(!1),h=()=>{x(m=>!m)};return l.useEffect(()=>{r||s(Ht())},[s,r]),l.useEffect(()=>{p?document.body.style.overflow="hidden":document.body.style.overflow=""},[p]),l.useEffect(()=>{!o&&s(N()),!d&&s(Z()),i===null&&s(It())},[s,o,i,d]),e.jsxs(Bt,{children:[e.jsxs(Et,{children:[e.jsx(Lt,{children:"Today"}),e.jsx(w,{to:"/dashboard",children:e.jsxs(Tt,{children:[e.jsx(Dt,{children:"On the way to the goal"}),e.jsx(St,{children:e.jsx("use",{href:le+"#icon-arrow-right"})})]})})]}),e.jsxs($t,{children:[e.jsx(it,{dailyCalories:o,dailyWaterIntake:a}),e.jsx(Me,{handleModal:h,waterConsumtion:i,waterGoal:a}),e.jsx(Je,{dailyCalories:o})]}),e.jsxs(Pt,{children:[e.jsx(Vt,{children:e.jsx(pt,{})}),e.jsx(gt,{})]}),p&&e.jsx(Mt,{handleModal:h})]})};export{_t as default};
