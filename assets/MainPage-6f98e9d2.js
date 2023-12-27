import{j as e,r as l,h as A,u as t,a as C,d as h,e as E,i as N,g as b,L as y,k as L,l as j,m as $,n as O}from"./index-64004e3d.js";import{C as S,a as Z,L as Y,B as _,p as U,b as P,c as D,d as q,A as X,D as J}from"./index-c58cfb1a.js";import{s as T}from"./symbol-0f1d585a.js";import{B as K,L as Q,D as ee,S as te}from"./Snack-62e0c476.js";import{g as V,r as ne,R as oe}from"./selectors-1c59e31a.js";import{F as ie,b as ae,c as re,e as se,a as de,E as le}from"./index.esm-34123f52.js";S.register(Z,Y,_,U,P,D);const pe={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},ce=["Intake"],xe=({waterIntake:n})=>{const o={labels:ce,datasets:[{label:"Water",data:[n],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(q,{data:o,options:pe})})},he=n=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},l.createElement("path",{d:"M4 8H12",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 12V4",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ge=A` 
    0% {
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform: translateY(-1400%);
        opacity: 1;
    }
  `,me=t.h2`
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
`,fe=t.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  position: relative;
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
    height: 200px;
    padding: 24px 40px;
  }
`,ue=t.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: rgba(5, 5, 5, 1);
  padding: 7px;
`,be=t.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({$offset:n})=>n}px);
  color: ${({$percentColor:n})=>n};
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`,we=t.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px rgba(255, 196, 247, 1);
    animation: ${ge} 4s linear infinite;

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
`,ye=t.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,je=t.p`
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
`,ke=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,ve=t.p`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 0px;
  }
`,I=t.span`
  color: rgba(182, 182, 182, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,Ce=t.p`
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
`,We=t.span`
  color: rgba(182, 182, 182, 1);
  font-weight: 500;
  margin-left: 4px;
`,Ie=t.button`
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
`,Fe=t(he)`
  stroke: rgba(15, 15, 15, 1);
`,ze=t.svg`
width: 20px;
height: 20px;
flex-shrink: 0;

`,Be=t.button`
position: absolute;
right: 12px;
top: 12px;
width: 24px;
height: 24px;
transform: translateY(50%);
padding: 0;
border: none;
cursor: pointer;
background-color: transparent;


@media screen and (min-width: 834px) {
  right: 24px;
  top: 24px;
}
`,Me=()=>{const n=document.querySelector("#bubbles"),o=document.createElement("span");let a=Math.random()*(11-5)+5;o.style.width=a+"px",o.style.height=a+"px",o.style.left=8+Math.random()*50+"px",n.appendChild(o),setTimeout(()=>{o.remove()},9e3)},Ee=({handleModal:n,waterConsumption:o})=>{const a=C(),i=h(E),s=i!=null&&i.rateWater?i.rateWater*1e3:0,d=s||s-o,r=o<=d?Math.round(o*100/d):100;l.useEffect(()=>{console.log("Water Consumption in MainPage:",o)},[o]);const p=r<=84?Math.ceil(r/100*176+10):88,c=r<=85?"rgba(182, 195, 255, 1)":"green";l.useEffect(()=>{const g=setInterval(Me,1e3);return()=>{clearInterval(g)}},[]);const x=()=>{console.log("Resetting water intake..."),a(N(o))};return e.jsxs("div",{children:[e.jsx(me,{children:"Water"}),e.jsxs(fe,{children:[e.jsx(ue,{children:e.jsxs(we,{id:"bubbles",children:[e.jsx(be,{$offset:p,$percentColor:c,children:`${r}%`}),e.jsx(xe,{waterIntake:r})]})}),e.jsxs(ye,{children:[e.jsx(je,{children:"Water consumption"}),e.jsxs(ke,{children:[e.jsxs(ve,{children:[o," ",e.jsx(I,{children:"ml"})]}),e.jsxs(Ce,{children:["left:",e.jsx(We,{children:Math.max(d,0)}),e.jsx(I,{children:"ml"})]})]}),e.jsxs(Ie,{onClick:n,children:[e.jsx(Fe,{}),"Add water intake"]}),e.jsxs(Be,{type:"button",onClick:x,children:[" ",e.jsx(ze,{children:e.jsx("use",{href:T+"#icon-trash-03"})})]})]})]})]})};S.register(X,P,D);const Le={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},$e={id:"bcgCircle",beforeDatasetsDraw(n,o,a){const{ctx:i}=n;i.save();const s=n.getDatasetMeta(0).data[0].x,d=n.getDatasetMeta(0).data[0].y,r=n.getDatasetMeta(0).data[0].innerRadius,p=n.getDatasetMeta(0).data[0].outerRadius,c=p-r,x=Math.PI/180;i.beginPath(),i.lineWidth=c,i.strokeStyle="rgba(41, 41, 40, 1)",i.arc(s,d,p-c/2,0,x*360,!1),i.stroke()}},R=({dailyCalories:n,inputValue:o,chartBcg:a})=>{o>n&&(o=n,a="red");const i=n-o,s={datasets:[{label:[],data:[o,i],backgroundColor:[a,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(J,{options:Le,data:s,plugins:[$e]})})},Se=t.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Pe=t.div`
  position: relative;
  width: 48px;
  height: 48px;
`,De=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,Te=t.div`
  display: flex;
  flex-direction: column;
`,Ve=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Re=t.div`
  display: flex;
  column-gap: 12px;
`,F=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Ge=t.p`
  width: 78px;
`,v=n=>{const{title:o,chartBcg:a,elementGoal:i,elementValue:s}=n;let d=i-s;d<0&&(d=0);let r=Math.round(s*100/i);return(r===1/0||isNaN(r))&&(r=0),r>100&&(r=100),e.jsx(e.Fragment,{children:e.jsxs(Se,{children:[e.jsxs(Pe,{children:[e.jsx(R,{dailyCalories:i,inputValue:s,chartBcg:a}),e.jsx(De,{children:e.jsx("p",{children:`${r}%`})})]}),e.jsxs(Te,{children:[e.jsx(Ve,{children:o}),e.jsxs(Re,{children:[e.jsxs(Ge,{children:["Goal: ",e.jsx(F,{children:i})]}),e.jsxs("p",{children:["left: ",e.jsx(F,{children:d})]})]})]})]})})},He=t.h2`
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
`,Ae=t.div`
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
`,Ne=t.div`
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
`,Oe=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Ze=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Ye=n=>n.foodIntake,_e=n=>n.foodIntake,Ue=n=>n.foodIntake,qe="rgba(255, 196, 247, 1)",Xe="rgba(255, 243, 183, 1)",Je="rgba(182, 182, 182, 1)",Ke=({dailyCalories:n,user:o})=>{const a=h(Ye),i=h(_e);let s="#45FFBC",d=0,r=0,p=0;for(const m in a){const w=Math.round(a[m].reduce((f,{fat:u=0})=>f+u,0)*10/10);d+=w;const G=Math.round(a[m].reduce((f,{protein:u=0})=>f+u,0)*10/10);r+=G;const H=Math.round(a[m].reduce((f,{carbonohidrates:u=0})=>f+u,0)*10/10);p+=H}const{carbs:c,protein:x,fat:g}=o;return e.jsxs("div",{children:[e.jsx(He,{children:"Food"}),e.jsxs(Ae,{children:[e.jsxs(Ne,{children:[e.jsx(R,{dailyCalories:n,inputValue:i,chartBcg:s}),e.jsxs(Oe,{children:[e.jsx("p",{children:i}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Ze,{children:[e.jsx(v,{title:"Carbonohidrates",chartBcg:qe,elementGoal:c,elementValue:p}),e.jsx(v,{title:"Protein",chartBcg:Xe,elementGoal:x,elementValue:r}),e.jsx(v,{title:"Fat",chartBcg:Je,elementGoal:g,elementValue:d})]})]})]})},Qe=n=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},l.createElement("path",{d:"M51.9662 40.8665C61.4103 40.8665 69.0662 33.2106 69.0662 23.7665C69.0662 14.3225 61.4103 6.6665 51.9662 6.6665C42.5222 6.6665 34.8662 14.3225 34.8662 23.7665C34.8662 33.2106 42.5222 40.8665 51.9662 40.8665Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M21.2002 64.7999C26.8703 64.7999 31.4669 60.2034 31.4669 54.5333C31.4669 48.8632 26.8703 44.2666 21.2002 44.2666C15.5301 44.2666 10.9336 48.8632 10.9336 54.5333C10.9336 60.2034 15.5301 64.7999 21.2002 64.7999Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M55.3995 73.3333C60.1124 73.3333 63.9329 69.5128 63.9329 64.7999C63.9329 60.0871 60.1124 56.2666 55.3995 56.2666C50.6867 56.2666 46.8662 60.0871 46.8662 64.7999C46.8662 69.5128 50.6867 73.3333 55.3995 73.3333Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10})),et=n=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},l.createElement("path",{d:"M60 50.0001V63.3334C60 68.8334 55.5 73.3334 50 73.3334H30C24.5 73.3334 20 68.8334 20 63.3334V46.6001L32.9667 46.6668C35.4 46.6668 37.8 47.2334 40 48.3334C42.2 49.4334 44.6 50.0001 47.0666 50.0001H60Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 36.0998V49.9998H47.0666C44.6 49.9998 42.2 49.4332 40 48.3332C37.8 47.2332 35.4 46.6665 32.9667 46.6665L20 46.5998V36.0998C20 34.5665 20.8668 32.4665 21.9668 31.3665L29.0334 24.2998C29.6334 23.6998 30 22.8332 30 21.9665V16.6665H50V21.9665C50 22.8332 50.3666 23.6998 50.9666 24.2998L58.0332 31.3665C59.1332 32.4665 60 34.5665 60 36.0998Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 53.3333V50",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M20 49.9334V46.6001",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M48.3337 16.6665H31.667C28.9003 16.6665 26.667 14.3998 26.667 11.6665C26.667 8.93317 28.9003 6.6665 31.667 6.6665H48.3337C51.1003 6.6665 53.3337 8.93317 53.3337 11.6665C53.3337 14.3998 51.1003 16.6665 48.3337 16.6665Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),tt=t.h2`
  color: ${b.colorPrimaryWhite};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,nt=t.div`
  box-sizing: border-box;
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${b.colorPrimaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,ot=t.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,z=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,B=t.p`
  color: ${b.colorPrimaryGrey};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 4px;
  margin: 0;
`,M=t.p`
  display: flex;
  align-items: center;
  color: ${b.colorPrimaryWhite};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin: 0;
`,it=t.span`
  color: ${b.colorPrimaryGrey};
  font-size: 14px;
  font-style: normal;
  font-family: inherit;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,at=({dailyCalories:n,dailyWaterIntake:o})=>e.jsxs("div",{children:[e.jsx(tt,{children:"Daily goal"}),e.jsx(nt,{children:e.jsxs(ot,{children:[e.jsx(Qe,{}),e.jsxs(z,{children:[e.jsx(B,{children:"Calories"}),e.jsx(M,{children:n})]}),e.jsx(et,{}),e.jsxs(z,{children:[e.jsx(B,{children:"Water"}),e.jsxs(M,{children:[o,e.jsx(it,{children:"ml"})]})]})]})})]}),rt=t.div`
  max-width: 320px;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 27px;
  }
`,st=t.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
`,dt=t.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
  margin: 0;
  padding: 0;
  text-align: center;
`,lt=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
`,pt=t.div`
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
`,ct=()=>e.jsxs(rt,{children:[e.jsxs(lt,{children:[e.jsx(st,{children:"Diary"}),e.jsx(y,{to:"/diary",children:e.jsx(dt,{children:"See more"})})]}),e.jsxs(pt,{children:[e.jsx(K,{}),e.jsx(Q,{}),e.jsx(ee,{}),e.jsx(te,{})]})]}),xt=t.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
  }
`,ht=t.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  margin-bottom: 16px;
`,gt=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,mt=t(y)`
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
`,ft=()=>{const n=h(V),o=ne(n);return e.jsxs(xt,{children:[e.jsx(ht,{children:"Recommended food"}),e.jsx(gt,{children:o.map(a=>e.jsx(oe,{info:a},a.name))}),e.jsx(mt,{to:"/recommended-food",children:"See more"})]})},ut="/HealthyHub/assets/error-3cccb7e1.svg",bt=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(3px);
`,wt=t.div`
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
`,yt=t(ie)`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 258px;
    padding-left: 23px;
    padding-right: 23px;
  }
`,jt=t.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,kt=t.label`
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
    display: ${({$showIcon:n})=>n};
    margin-left: 16px;
    width: 16px;
    height: 16px;
    background-image: url('${ut}');
  }
`,vt=t(ae)`
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
  border: ${({borderstyle:n})=>n};

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`,Ct=t.button`
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
`,Wt=t.div`
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
`,It=t.button`
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
`,Ft=re({waterIntake:se().required("Required")}),zt=({handleModal:n})=>{const o=C(),a=s=>{(s.code==="Escape"||s.currentTarget===s.target)&&n()};l.useEffect(()=>(window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}));const i=async(s,{resetForm:d})=>{const{waterIntake:r}=s;console.log("Olya",r),o(await L({value:r})),d(),n()};return e.jsx(bt,{onClick:a,children:e.jsxs(wt,{children:[e.jsx(jt,{children:"Add water intake"}),e.jsx(de,{initialValues:{waterIntake:""},validationSchema:Ft,onSubmit:i,children:({errors:s,touched:d})=>e.jsxs(yt,{children:[e.jsx(kt,{htmlFor:"waterIntake",$showIcon:s.waterIntake&&d.waterIntake?"block":"none",children:"How much water"}),e.jsx(vt,{autoFocus:!0,name:"waterIntake",type:"number",min:0,placeholder:"Enter milliliters",borderstyle:s.waterIntake&&d.waterIntake?"1px solid red":""}),e.jsx(le,{name:"waterIntake",children:r=>e.jsx(Wt,{children:r})}),e.jsx(Ct,{type:"submit",children:"Confirm"}),e.jsx(It,{type:"button",onClick:n,children:"Cancel"})]})})]})})},Bt=t.main`
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`,Mt=t.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;t(y)`
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
`;t.span`
  margin-right: 6px;
`;const Et=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`,Lt=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`,$t=t.svg`
  text-align: right;
  width: 16px;
  height: 16px;
`;t.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
  justify-content: space-between;
`;const St=t.div`
  display: flex;
`,Pt=t.div`
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
`,Dt=t.p`
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
`;t.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;const Tt=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
    margin-right: 0;
  }
`,Vt=j("api/user/fetchCaloriesIntake",async(n,o)=>{try{return(await $.get("/api/user/daily-goal-calories")).data}catch(a){return o.rejectWithValue(a.message)}}),k=$.create({baseURL:"https://backend-healthyhub.onrender.com/"}),W=n=>{k.defaults.headers.common.Authorization=`Bearer ${n}`},Rt=j("foodIntake/get",async(n,o)=>{try{const i=o.getState().auth.token;return i?(W(i),(await k("api/user/food-intake")).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}});j("foodIntake/post",async(n,o)=>{try{const i=o.getState().auth.token;return i?(W(i),(await k.post("api/user/food-intake",n)).data):o.rejectWithValue("No token")}catch(a){return o.rejectWithValue(a.message)}});j("foodIntake/update",async({ident:n,type:o,product:a},i)=>{try{const d=i.getState().auth.token;return d?(W(d),(await k.put(`api/user/food-intake/${n}`,{type:o,product:a})).data):i.rejectWithValue("No token")}catch(s){return i.rejectWithValue(s.message)}});const Yt=()=>{const n=h(E),o=(n==null?void 0:n.BMR)||0,a=n!=null&&n.rateWater?n.rateWater*1e3:0,i=h(g=>{var m,w;return(w=(m=g.waterIntake.water)==null?void 0:m.data)==null?void 0:w.water});console.log("SANYA",i);const s=h(Ue),d=h(V),r=C(),[p,c]=l.useState(!1),x=()=>{c(g=>!g)};return l.useEffect(()=>{s||r(Rt())},[r,s]),l.useEffect(()=>{p?document.body.style.overflow="hidden":document.body.style.overflow=""},[p]),l.useEffect(()=>{!o&&r(Vt()),!d&&r(O()),i===null&&r(L())},[r,o,i,d]),e.jsxs(Bt,{children:[e.jsxs(Et,{children:[e.jsx(Mt,{children:"Today"}),e.jsx(y,{to:"/dashboard",children:e.jsxs(St,{children:[e.jsx(Dt,{children:"On the way to the goal"}),e.jsx($t,{children:e.jsx("use",{href:T+"#icon-arrow-right"})})]})})]}),e.jsxs(Lt,{children:[e.jsx(at,{dailyCalories:o,dailyWaterIntake:a}),e.jsx(Ee,{handleModal:x,waterConsumption:i}),e.jsx(Ke,{dailyCalories:o,user:n})]}),e.jsxs(Tt,{children:[e.jsx(Pt,{children:e.jsx(ct,{})}),e.jsx(ft,{})]}),p&&e.jsx(zt,{handleModal:x})]})};export{Yt as default};
