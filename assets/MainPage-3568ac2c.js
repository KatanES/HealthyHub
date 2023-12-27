import{j as e,r as l,h as G,u as t,a as C,d as h,e as M,i as H,g as w,L as j,k as E,l as k,m as f,n as N}from"./index-02f1e4a2.js";import{C as L,a as O,L as Z,B as Y,p as _,b as $,c as P,d as U,A as q,D as X}from"./index-85a961e3.js";import{s as S}from"./symbol-122f4874.js";import{B as J,L as K,D as Q,S as ee}from"./Snack-41b66dad.js";import{g as D,r as te,R as ne}from"./selectors-b988f030.js";import{F as oe,b as ie,c as ae,e as re,a as se,E as de}from"./index.esm-7f3921b9.js";L.register(O,Z,Y,_,$,P);const le={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},pe=["Intake"],ce=({waterIntake:n})=>{const o={labels:pe,datasets:[{label:"Water",data:[n],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(U,{data:o,options:le})})},xe=n=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},l.createElement("path",{d:"M4 8H12",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 12V4",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),he=G` 
    0% {
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform: translateY(-1400%);
        opacity: 1;
    }
  `,ge=t.h2`
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
`,me=t.div`
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
`,fe=t.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: rgba(5, 5, 5, 1);
  padding: 7px;
`,ue=t.p`
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
`,be=t.div`
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
    animation: ${he} 4s linear infinite;

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
`,we=t.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,ye=t.p`
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
`,je=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`,ke=t.p`
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
`,ve=t.p`
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
`,Ce=t.span`
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
`,We=t(xe)`
  stroke: rgba(15, 15, 15, 1);
`,Fe=t.svg`
width: 20px;
height: 20px;
flex-shrink: 0;

`,ze=t.button`
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
`,Be=()=>{const n=document.querySelector("#bubbles"),o=document.createElement("span");let i=Math.random()*(11-5)+5;o.style.width=i+"px",o.style.height=i+"px",o.style.left=8+Math.random()*50+"px",n.appendChild(o),setTimeout(()=>{o.remove()},9e3)},Me=({handleModal:n,waterConsumption:o})=>{const i=C(),a=h(M),s=a!=null&&a.rateWater?a.rateWater*1e3:0,d=s||s-o,r=o<=d?Math.round(o*100/d):100;l.useEffect(()=>{console.log("Water Consumption in MainPage:",o)},[o]);const p=r<=84?Math.ceil(r/100*176+10):88,c=r<=85?"rgba(182, 195, 255, 1)":"green";l.useEffect(()=>{const g=setInterval(Be,1e3);return()=>{clearInterval(g)}},[]);const x=()=>{console.log("Resetting water intake..."),i(H(o))};return e.jsxs("div",{children:[e.jsx(ge,{children:"Water"}),e.jsxs(me,{children:[e.jsx(fe,{children:e.jsxs(be,{id:"bubbles",children:[e.jsx(ue,{$offset:p,$percentColor:c,children:`${r}%`}),e.jsx(ce,{waterIntake:r})]})}),e.jsxs(we,{children:[e.jsx(ye,{children:"Water consumption"}),e.jsxs(je,{children:[e.jsxs(ke,{children:[o," ",e.jsx(I,{children:"ml"})]}),e.jsxs(ve,{children:["left:",e.jsx(Ce,{children:Math.max(d,0)}),e.jsx(I,{children:"ml"})]})]}),e.jsxs(Ie,{onClick:n,children:[e.jsx(We,{}),"Add water intake"]}),e.jsxs(ze,{type:"button",onClick:x,children:[" ",e.jsx(Fe,{children:e.jsx("use",{href:S+"#icon-trash-03"})})]})]})]})]})};L.register(q,$,P);const Ee={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Le={id:"bcgCircle",beforeDatasetsDraw(n,o,i){const{ctx:a}=n;a.save();const s=n.getDatasetMeta(0).data[0].x,d=n.getDatasetMeta(0).data[0].y,r=n.getDatasetMeta(0).data[0].innerRadius,p=n.getDatasetMeta(0).data[0].outerRadius,c=p-r,x=Math.PI/180;a.beginPath(),a.lineWidth=c,a.strokeStyle="rgba(41, 41, 40, 1)",a.arc(s,d,p-c/2,0,x*360,!1),a.stroke()}},T=({dailyCalories:n,inputValue:o,chartBcg:i})=>{o>n&&(o=n,i="red");const a=n-o,s={datasets:[{label:[],data:[o,a],backgroundColor:[i,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(X,{options:Ee,data:s,plugins:[Le]})})},$e=t.div`
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
`,Se=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--text-color-secondary-grey);
  font-size: 14px;
  font-weight: 400;
`,De=t.div`
  display: flex;
  flex-direction: column;
`,Te=t.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Ve=t.div`
  display: flex;
  column-gap: 12px;
`,W=t.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Re=t.p`
  width: 78px;
`,v=n=>{const{title:o,chartBcg:i,elementGoal:a,elementValue:s}=n;let d=a-s;d<0&&(d=0);let r=Math.round(s*100/a);return(r===1/0||isNaN(r))&&(r=0),r>100&&(r=100),e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsxs(Pe,{children:[e.jsx(T,{dailyCalories:a,inputValue:s,chartBcg:i}),e.jsx(Se,{children:e.jsx("p",{children:`${r}%`})})]}),e.jsxs(De,{children:[e.jsx(Te,{children:o}),e.jsxs(Ve,{children:[e.jsxs(Re,{children:["Goal: ",e.jsx(W,{children:a})]}),e.jsxs("p",{children:["left: ",e.jsx(W,{children:d})]})]})]})]})})},Ae=t.h2`
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
`,Ge=t.div`
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
`,He=t.div`
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
`,Ne=t.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Oe=t.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Ze=n=>n.foodIntake,Ye=n=>n.foodIntake,_e=n=>n.foodIntake,Ue="rgba(255, 196, 247, 1)",qe="rgba(255, 243, 183, 1)",Xe="rgba(182, 182, 182, 1)",Je=({dailyCalories:n,user:o})=>{const i=h(Ze),a=h(Ye);let s="#45FFBC",d=0,r=0,p=0;for(const m in i){const y=Math.round(i[m].reduce((u,{fat:b=0})=>u+b,0)*10/10);d+=y;const R=Math.round(i[m].reduce((u,{protein:b=0})=>u+b,0)*10/10);r+=R;const A=Math.round(i[m].reduce((u,{carbonohidrates:b=0})=>u+b,0)*10/10);p+=A}const{carbs:c,protein:x,fat:g}=o;return e.jsxs("div",{children:[e.jsx(Ae,{children:"Food"}),e.jsxs(Ge,{children:[e.jsxs(He,{children:[e.jsx(T,{dailyCalories:n,inputValue:a,chartBcg:s}),e.jsxs(Ne,{children:[e.jsx("p",{children:a}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Oe,{children:[e.jsx(v,{title:"Carbonohidrates",chartBcg:Ue,elementGoal:c,elementValue:p}),e.jsx(v,{title:"Protein",chartBcg:qe,elementGoal:x,elementValue:r}),e.jsx(v,{title:"Fat",chartBcg:Xe,elementGoal:g,elementValue:d})]})]})]})},Ke=n=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},l.createElement("path",{d:"M51.9662 40.8665C61.4103 40.8665 69.0662 33.2106 69.0662 23.7665C69.0662 14.3225 61.4103 6.6665 51.9662 6.6665C42.5222 6.6665 34.8662 14.3225 34.8662 23.7665C34.8662 33.2106 42.5222 40.8665 51.9662 40.8665Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M21.2002 64.7999C26.8703 64.7999 31.4669 60.2034 31.4669 54.5333C31.4669 48.8632 26.8703 44.2666 21.2002 44.2666C15.5301 44.2666 10.9336 48.8632 10.9336 54.5333C10.9336 60.2034 15.5301 64.7999 21.2002 64.7999Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M55.3995 73.3333C60.1124 73.3333 63.9329 69.5128 63.9329 64.7999C63.9329 60.0871 60.1124 56.2666 55.3995 56.2666C50.6867 56.2666 46.8662 60.0871 46.8662 64.7999C46.8662 69.5128 50.6867 73.3333 55.3995 73.3333Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10})),Qe=n=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},l.createElement("path",{d:"M60 50.0001V63.3334C60 68.8334 55.5 73.3334 50 73.3334H30C24.5 73.3334 20 68.8334 20 63.3334V46.6001L32.9667 46.6668C35.4 46.6668 37.8 47.2334 40 48.3334C42.2 49.4334 44.6 50.0001 47.0666 50.0001H60Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 36.0998V49.9998H47.0666C44.6 49.9998 42.2 49.4332 40 48.3332C37.8 47.2332 35.4 46.6665 32.9667 46.6665L20 46.5998V36.0998C20 34.5665 20.8668 32.4665 21.9668 31.3665L29.0334 24.2998C29.6334 23.6998 30 22.8332 30 21.9665V16.6665H50V21.9665C50 22.8332 50.3666 23.6998 50.9666 24.2998L58.0332 31.3665C59.1332 32.4665 60 34.5665 60 36.0998Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 53.3333V50",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M20 49.9334V46.6001",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M48.3337 16.6665H31.667C28.9003 16.6665 26.667 14.3998 26.667 11.6665C26.667 8.93317 28.9003 6.6665 31.667 6.6665H48.3337C51.1003 6.6665 53.3337 8.93317 53.3337 11.6665C53.3337 14.3998 51.1003 16.6665 48.3337 16.6665Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),et=t.h2`
  color: ${w.colorPrimaryWhite};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,tt=t.div`
  box-sizing: border-box;
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: ${w.colorPrimaryBlack2};
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,nt=t.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,F=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,z=t.p`
  color: ${w.colorPrimaryGrey};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 4px;
  margin: 0;
`,B=t.p`
  display: flex;
  align-items: center;
  color: ${w.colorPrimaryWhite};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin: 0;
`,ot=t.span`
  color: ${w.colorPrimaryGrey};
  font-size: 14px;
  font-style: normal;
  font-family: inherit;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,it=({dailyCalories:n,dailyWaterIntake:o})=>e.jsxs("div",{children:[e.jsx(et,{children:"Daily goal"}),e.jsx(tt,{children:e.jsxs(nt,{children:[e.jsx(Ke,{}),e.jsxs(F,{children:[e.jsx(z,{children:"Calories"}),e.jsx(B,{children:n})]}),e.jsx(Qe,{}),e.jsxs(F,{children:[e.jsx(z,{children:"Water"}),e.jsxs(B,{children:[o,e.jsx(ot,{children:"ml"})]})]})]})})]}),at=t.div`
  max-width: 320px;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 27px;
  }
`,rt=t.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
`,st=t.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
  margin: 0;
  padding: 0;
  text-align: center;
`,dt=t.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
`,lt=t.div`
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
`,pt=()=>e.jsxs(at,{children:[e.jsxs(dt,{children:[e.jsx(rt,{children:"Diary"}),e.jsx(j,{to:"/diary",children:e.jsx(st,{children:"See more"})})]}),e.jsxs(lt,{children:[e.jsx(J,{}),e.jsx(K,{}),e.jsx(Q,{}),e.jsx(ee,{})]})]}),ct=t.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
  }
`,xt=t.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  margin-bottom: 16px;
`,ht=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,gt=t(j)`
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
`,mt=()=>{const n=h(D),o=te(n);return e.jsxs(ct,{children:[e.jsx(xt,{children:"Recommended food"}),e.jsx(ht,{children:o.map(i=>e.jsx(ne,{info:i},i.name))}),e.jsx(gt,{to:"/recommended-food",children:"See more"})]})},ft="/HealthyHub/assets/error-3cccb7e1.svg",ut=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(3px);
`,bt=t.div`
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
`,wt=t(oe)`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 258px;
    padding-left: 23px;
    padding-right: 23px;
  }
`,yt=t.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,jt=t.label`
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
    background-image: url('${ft}');
  }
`,kt=t(ie)`
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
`,vt=t.button`
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
`,Ct=t.div`
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
`,Wt=ae({waterIntake:re().required("Required")}),Ft=({handleModal:n})=>{const o=C(),i=s=>{(s.code==="Escape"||s.currentTarget===s.target)&&n()};l.useEffect(()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}));const a=async(s,{resetForm:d})=>{const{waterIntake:r}=s;console.log("Olya",r),o(await E({value:r})),d(),n()};return e.jsx(ut,{onClick:i,children:e.jsxs(bt,{children:[e.jsx(yt,{children:"Add water intake"}),e.jsx(se,{initialValues:{waterIntake:""},validationSchema:Wt,onSubmit:a,children:({errors:s,touched:d})=>e.jsxs(wt,{children:[e.jsx(jt,{htmlFor:"waterIntake",$showIcon:s.waterIntake&&d.waterIntake?"block":"none",children:"How much water"}),e.jsx(kt,{autoFocus:!0,name:"waterIntake",type:"number",min:0,placeholder:"Enter milliliters",borderstyle:s.waterIntake&&d.waterIntake?"1px solid red":""}),e.jsx(de,{name:"waterIntake",children:r=>e.jsx(Ct,{children:r})}),e.jsx(vt,{type:"submit",children:"Confirm"}),e.jsx(It,{type:"button",onClick:n,children:"Cancel"})]})})]})})},zt=t.main`
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`,Bt=t.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;t(j)`
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
`;const Mt=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`,Et=t.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`,Lt=t.svg`
  text-align: right;
  width: 16px;
  height: 16px;
`;t.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
  justify-content: space-between;
`;const $t=t.div`
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
`,St=t.p`
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
`;t.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;const Dt=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
    margin-right: 0;
  }
`,Tt=k("api/user/fetchCaloriesIntake",async(n,o)=>{try{return(await f.get("/api/user/daily-goal-calories")).data}catch(i){return o.rejectWithValue(i.message)}});f.defaults.baseURL="https://healthyhubserver.onrender.com";const V=n=>{f.defaults.headers.common.Authorization=`Bearer ${n}`},Vt=k("foodIntake/get",async(n,o)=>{try{const a=o.getState().auth.token;return a?(V(a),(await f.get("/api/user/food-intake")).data):o.rejectWithValue("No token")}catch(i){return o.rejectWithValue(i.message)}});k("foodIntake/post",async(n,o)=>{try{return(await f.post("/api/user/food-intake",n)).data}catch(i){return o.rejectWithValue(i.message)}});k("foodIntake/update",async({ident:n,type:o,product:i},a)=>{try{const d=a.getState().auth.token;return d?(V(d),(await f.put(`/api/user/food-intake/${n}`,{type:o,product:i})).data):a.rejectWithValue("No token")}catch(s){return a.rejectWithValue(s.message)}});const Zt=()=>{const n=h(M),o=(n==null?void 0:n.BMR)||0,i=n!=null&&n.rateWater?n.rateWater*1e3:0,a=h(g=>{var m,y;return(y=(m=g.waterIntake.water)==null?void 0:m.data)==null?void 0:y.water});console.log("SANYA",a);const s=h(_e),d=h(D),r=C(),[p,c]=l.useState(!1),x=()=>{c(g=>!g)};return l.useEffect(()=>{s||r(Vt())},[r,s]),l.useEffect(()=>{p?document.body.style.overflow="hidden":document.body.style.overflow=""},[p]),l.useEffect(()=>{!o&&r(Tt()),!d&&r(N()),a===null&&r(E())},[r,o,a,d]),e.jsxs(zt,{children:[e.jsxs(Mt,{children:[e.jsx(Bt,{children:"Today"}),e.jsx(j,{to:"/dashboard",children:e.jsxs($t,{children:[e.jsx(St,{children:"On the way to the goal"}),e.jsx(Lt,{children:e.jsx("use",{href:S+"#icon-arrow-right"})})]})})]}),e.jsxs(Et,{children:[e.jsx(it,{dailyCalories:o,dailyWaterIntake:i}),e.jsx(Me,{handleModal:x,waterConsumption:a}),e.jsx(Je,{dailyCalories:o,user:n})]}),e.jsxs(Dt,{children:[e.jsx(Pt,{children:e.jsx(pt,{})}),e.jsx(mt,{})]}),p&&e.jsx(Ft,{handleModal:x})]})};export{Zt as default};
