import{j as e,r as l,h as H,u as n,d as c,g as u,L as b,e as x,i as w,a as M,k as G,l as N}from"./index-d0763665.js";import{C as E,a as A,L as Z,B as O,p as _,b as L,c as $,d as U,A as q,D as Y}from"./index-5e205318.js";import{B as X,L as J,D as K,S as Q}from"./Snack-36a71b3b.js";import{g as V,r as ee,R as te}from"./selectors-6ad8207c.js";import{F as ne,b as oe,c as ie,e as re,a as ae,E as se}from"./index.esm-583577d4.js";import{s as de}from"./symbol-bc7d8e00.js";E.register(A,Z,O,_,L,$);const le={responsive:!0,aspectRatio:.364,borderRadius:20,scales:{x:{ticks:{display:!1,padding:0},grid:{drawTicks:!1,drawBorder:!1}},y:{beginAtZero:!0,ticks:{display:!1},grid:{drawTicks:!1,drawBorder:!1}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!1}}},pe=["Intake"],ce=({waterIntake:t})=>{const o={labels:pe,datasets:[{label:"Water",data:[t],backgroundColor:"#B6C3FF",hoverBackgroundColor:"#B6C3FF",barPercentage:1.001,categoryPercentage:1.001,grouped:!1},{label:"Dataset 2",data:[100],barPercentage:1.001,categoryPercentage:1.001}]};return e.jsx(e.Fragment,{children:e.jsx(U,{data:o,options:le})})},xe=t=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M4 8H12",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 12V4",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),he=H` 
    0% {
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform: translateY(-1400%);
        opacity: 1;
    }
  `,me=n.h2`
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
`,ge=n.div`
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
    height: 200px;
    padding: 24px 40px;
  }
`,fe=n.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: rgba(5, 5, 5, 1);
  padding: 7px;
`,ue=n.p`
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
`,be=n.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`,ye=n.p`
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
`,ke=n.p`
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
`,I=n.span`
  color: rgba(182, 182, 182, 1);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,ve=n.p`
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
`,Ce=n.span`
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
`,We=n(xe)`
  stroke: rgba(15, 15, 15, 1);
`,Fe=()=>{const t=document.querySelector("#bubbles"),o=document.createElement("span");let i=Math.random()*(11-5)+5;o.style.width=i+"px",o.style.height=i+"px",o.style.left=8+Math.random()*50+"px",t.appendChild(o),setTimeout(()=>{o.remove()},9e3)},ze=({handleModal:t,waterConsumtion:o})=>{const i=1500-o,r=o<=1500?Math.round(o*100/1500):100,a=r<=84?Math.ceil(r/100*176+10):88,d=r<=85?"rgba(182, 195, 255, 1)":"green";return l.useEffect(()=>{const s=setInterval(Fe,1e3);return()=>{clearInterval(s)}},[]),e.jsxs("div",{children:[e.jsx(me,{children:"Water"}),e.jsxs(ge,{children:[e.jsx(fe,{children:e.jsxs(we,{id:"bubbles",children:[e.jsx(ue,{$offset:a,$percentColor:d,children:`${r}%`}),e.jsx(ce,{waterIntake:r})]})}),e.jsxs(be,{children:[e.jsx(ye,{children:"Water consumption"}),e.jsxs(je,{children:[e.jsxs(ke,{children:[o," ",e.jsx(I,{children:"ml"})]}),e.jsxs(ve,{children:["left:",e.jsx(Ce,{children:i>0?i:0}),e.jsx(I,{children:"ml"})]})]}),e.jsxs(Ie,{onClick:t,children:[e.jsx(We,{}),"Add water intake"]})]})]})]})};E.register(q,L,$);const Be={rotation:0,cutout:"80%",plugins:{title:{display:!1},legend:{display:!1},tooltip:{enabled:!1}},animation:{animateRotate:!0,animateScale:!0}},Me={id:"bcgCircle",beforeDatasetsDraw(t,o,i){const{ctx:r}=t;r.save();const a=t.getDatasetMeta(0).data[0].x,d=t.getDatasetMeta(0).data[0].y,s=t.getDatasetMeta(0).data[0].innerRadius,p=t.getDatasetMeta(0).data[0].outerRadius,h=p-s,m=Math.PI/180;r.beginPath(),r.lineWidth=h,r.strokeStyle="rgba(41, 41, 40, 1)",r.arc(a,d,p-h/2,0,m*360,!1),r.stroke()}},P=({dailyCalories:t,inputValue:o,chartBcg:i})=>{o>t&&(o=t,i="red");const r=t-o,a={datasets:[{label:[],data:[o,r],backgroundColor:[i,"transparent"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:0,borderRadius:20}]};return e.jsx(e.Fragment,{children:e.jsx(Y,{options:Be,data:a,plugins:[Me]})})},Ee=n.div`
  display: flex;
  column-gap: 12px;
  width: 216px;
  height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`,Le=n.div`
  position: relative;
  width: 48px;
  height: 48px;
`,$e=n.div`
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
`,Pe=n.h3`
  color: var(--text-color-primary-white);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Se=n.div`
  display: flex;
  column-gap: 12px;
`,W=n.span`
  font-weight: 500;
  color: var(--text-color-secondary-grey);
`,Te=n.p`
  width: 78px;
`,v=t=>{const{title:o,chartBcg:i,elementGoal:r,elementValue:a}=t;let d=r-a;d<0&&(d=0);let s=Math.round(a*100/r);return(s===1/0||isNaN(s))&&(s=0),s>100&&(s=100),e.jsx(e.Fragment,{children:e.jsxs(Ee,{children:[e.jsxs(Le,{children:[e.jsx(P,{dailyCalories:r,inputValue:a,chartBcg:i}),e.jsx($e,{children:e.jsx("p",{children:`${s}%`})})]}),e.jsxs(Ve,{children:[e.jsx(Pe,{children:o}),e.jsxs(Se,{children:[e.jsxs(Te,{children:["Goal: ",e.jsx(W,{children:r})]}),e.jsxs("p",{children:["left: ",e.jsx(W,{children:d})]})]})]})]})})},De=n.h2`
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
`,Re=n.div`
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
`,He=n.div`
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
`,Ge=n.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);
`,Ne=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,Ae=t=>t.foodIntake,Ze=t=>t.foodIntake,Oe=t=>t.foodIntake,_e="rgba(255, 196, 247, 1)",Ue="rgba(255, 243, 183, 1)",qe="rgba(182, 182, 182, 1)",Ye=({dailyCalories:t,user:o})=>{const i=c(Ae),r=c(Ze);let a="#45FFBC",d=0,s=0,p=0;for(const k in i){const T=Math.round(i[k].reduce((g,{fat:f=0})=>g+f,0)*10/10);d+=T;const D=Math.round(i[k].reduce((g,{protein:f=0})=>g+f,0)*10/10);s+=D;const R=Math.round(i[k].reduce((g,{carbonohidrates:f=0})=>g+f,0)*10/10);p+=R}const{carbs:h,protein:m,fat:j}=o;return e.jsxs("div",{children:[e.jsx(De,{children:"Food"}),e.jsxs(Re,{children:[e.jsxs(He,{children:[e.jsx(P,{dailyCalories:t,inputValue:r,chartBcg:a}),e.jsxs(Ge,{children:[e.jsx("p",{children:r}),e.jsx("p",{children:"calories"})]})]}),e.jsxs(Ne,{children:[e.jsx(v,{title:"Carbonohidrates",chartBcg:_e,elementGoal:h,elementValue:p}),e.jsx(v,{title:"Protein",chartBcg:Ue,elementGoal:m,elementValue:s}),e.jsx(v,{title:"Fat",chartBcg:qe,elementGoal:j,elementValue:d})]})]})]})},Xe=t=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M51.9662 40.8665C61.4103 40.8665 69.0662 33.2106 69.0662 23.7665C69.0662 14.3225 61.4103 6.6665 51.9662 6.6665C42.5222 6.6665 34.8662 14.3225 34.8662 23.7665C34.8662 33.2106 42.5222 40.8665 51.9662 40.8665Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M21.2002 64.7999C26.8703 64.7999 31.4669 60.2034 31.4669 54.5333C31.4669 48.8632 26.8703 44.2666 21.2002 44.2666C15.5301 44.2666 10.9336 48.8632 10.9336 54.5333C10.9336 60.2034 15.5301 64.7999 21.2002 64.7999Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10}),l.createElement("path",{d:"M55.3995 73.3333C60.1124 73.3333 63.9329 69.5128 63.9329 64.7999C63.9329 60.0871 60.1124 56.2666 55.3995 56.2666C50.6867 56.2666 46.8662 60.0871 46.8662 64.7999C46.8662 69.5128 50.6867 73.3333 55.3995 73.3333Z",stroke:"#45FFBC",strokeWidth:2,strokeMiterlimit:10})),Je=t=>l.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},l.createElement("path",{d:"M60 50.0001V63.3334C60 68.8334 55.5 73.3334 50 73.3334H30C24.5 73.3334 20 68.8334 20 63.3334V46.6001L32.9667 46.6668C35.4 46.6668 37.8 47.2334 40 48.3334C42.2 49.4334 44.6 50.0001 47.0666 50.0001H60Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 36.0998V49.9998H47.0666C44.6 49.9998 42.2 49.4332 40 48.3332C37.8 47.2332 35.4 46.6665 32.9667 46.6665L20 46.5998V36.0998C20 34.5665 20.8668 32.4665 21.9668 31.3665L29.0334 24.2998C29.6334 23.6998 30 22.8332 30 21.9665V16.6665H50V21.9665C50 22.8332 50.3666 23.6998 50.9666 24.2998L58.0332 31.3665C59.1332 32.4665 60 34.5665 60 36.0998Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M60 53.3333V50",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M20 49.9334V46.6001",stroke:"#B6C3FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M48.3337 16.6665H31.667C28.9003 16.6665 26.667 14.3998 26.667 11.6665C26.667 8.93317 28.9003 6.6665 31.667 6.6665H48.3337C51.1003 6.6665 53.3337 8.93317 53.3337 11.6665C53.3337 14.3998 51.1003 16.6665 48.3337 16.6665Z",stroke:"#B6C3FF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ke=n.h2`
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
`,Qe=n.div`
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
`,et=n.div`
  display: flex;
  flex-wrap: wrap;
  width: 203px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`,F=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,z=n.p`
  color: ${u.colorPrimaryGrey};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 4px;
  margin: 0;
`,B=n.p`
  display: flex;
  align-items: center;
  color: ${u.colorPrimaryWhite};
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin: 0;
`,tt=n.span`
  color: ${u.colorPrimaryGrey};
  font-size: 14px;
  font-style: normal;
  font-family: inherit;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`,nt=({dailyCalories:t,dailyWaterIntake:o})=>e.jsxs("div",{children:[e.jsx(Ke,{children:"Daily goal"}),e.jsx(Qe,{children:e.jsxs(et,{children:[e.jsx(Xe,{}),e.jsxs(F,{children:[e.jsx(z,{children:"Calories"}),e.jsx(B,{children:t})]}),e.jsx(Je,{}),e.jsxs(F,{children:[e.jsx(z,{children:"Water"}),e.jsxs(B,{children:[o,e.jsx(tt,{children:"ml"})]})]})]})})]}),ot=n.div`
  max-width: 320px;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 558px;
    padding: 27px;
  }
`,it=n.h2`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
`,rt=n.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
  margin: 0;
  padding: 0;
  text-align: center;
`,at=n.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 22px;
`,st=n.div`
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
`,dt=()=>e.jsxs(ot,{children:[e.jsxs(at,{children:[e.jsx(it,{children:"Diary"}),e.jsx(b,{to:"/diary",children:e.jsx(rt,{children:"See more"})})]}),e.jsxs(st,{children:[e.jsx(X,{}),e.jsx(J,{}),e.jsx(K,{}),e.jsx(Q,{})]})]}),lt=n.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
  }
`,pt=n.h2`
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  margin-bottom: 16px;
`,ct=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,xt=n(b)`
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
`,ht=()=>{const t=c(V),o=ee(t);return e.jsxs(lt,{children:[e.jsx(pt,{children:"Recommended food"}),e.jsx(ct,{children:o.map(i=>e.jsx(te,{info:i},i.name))}),e.jsx(xt,{to:"/recommended-food",children:"See more"})]})},mt="/HealthyHub/assets/error-3cccb7e1.svg",gt=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(3px);
`,ft=n.div`
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
`,ut=n(ne)`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 258px;
    padding-left: 23px;
    padding-right: 23px;
  }
`,wt=n.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`,bt=n.label`
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
    background-image: url('${mt}');
  }
`,yt=n(oe)`
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
`,jt=n.button`
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
`,kt=n.div`
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
`,vt=n.button`
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
`,S=x("waterIntake/post",async({value:t},o)=>{try{return(await w.post("/api/user/water-intake",{water:t})).value}catch(i){return console.error("Error in addWaterIntake async action:",i),o.rejectWithValue(i.message)}});x("waterIntake/deleteWaterIntake",async(t,o)=>{try{return(await w.delete("/api/user/water-intake",t)).data}catch(i){return o.rejectWithValue(i.message)}});x("waterIntake/getForToday",async(t,o)=>{try{return(await w.post("/user/water-intake",t)).value}catch(i){return o.rejectWithValue(i.message)}});const Ct=ie({waterIntake:re().required("Required")}),It=({handleModal:t})=>{const o=M(),i=a=>{(a.code==="Escape"||a.currentTarget===a.target)&&t()};l.useEffect(()=>(window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}));const r=(a,{resetForm:d})=>{const{waterIntake:s}=a;o(S({value:s})),d(),t()};return e.jsx(gt,{onClick:i,children:e.jsxs(ft,{children:[e.jsx(wt,{children:"Add water intake"}),e.jsx(ae,{initialValues:{waterIntake:""},validationSchema:Ct,onSubmit:r,children:({errors:a,touched:d})=>e.jsxs(ut,{children:[e.jsx(bt,{htmlFor:"waterIntake",$showIcon:a.waterIntake&&d.waterIntake?"block":"none",children:"How much water"}),e.jsx(yt,{autoFocus:!0,name:"waterIntake",type:"number",min:0,placeholder:"Enter milliliters",borderstyle:a.waterIntake&&d.waterIntake?"1px solid red":""}),e.jsx(se,{name:"waterIntake",children:s=>e.jsx(kt,{children:s})}),e.jsx(jt,{type:"submit",children:"Confirm"}),e.jsx(vt,{type:"button",onClick:t,children:"Cancel"})]})})]})})},Wt=n.main`
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`,Ft=n.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;n(b)`
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
`;const zt=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`,Bt=n.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  }
`,Mt=n.svg`
  text-align: right;
  width: 16px;
  height: 16px;
`;n.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
  justify-content: space-between;
`;const Et=n.div`
  display: flex;
`,Lt=n.div`
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
`,$t=n.p`
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #b6b6b6;
`;n.h2`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;const Vt=n.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
    margin-right: 0;
  }
`,Pt=t=>t.waterIntake,St=x("api/user/fetchCaloriesIntake",async(t,o)=>{try{return(await w.get("/api/user/daily-goal-calories")).data}catch(i){return o.rejectWithValue(i.message)}}),y=w.create({baseURL:"https://backend-healthyhub.onrender.com/"}),C=t=>{y.defaults.headers.common.Authorization=`Bearer ${t}`},Tt=x("foodIntake/get",async(t,o)=>{try{const r=o.getState().auth.token;return r?(C(r),(await y("api/user/food-intake")).data):o.rejectWithValue("No token")}catch(i){return o.rejectWithValue(i.message)}});x("foodIntake/post",async(t,o)=>{try{const r=o.getState().auth.token;return r?(C(r),(await y.post("api/user/food-intake",t)).data):o.rejectWithValue("No token")}catch(i){return o.rejectWithValue(i.message)}});x("foodIntake/update",async({ident:t,type:o,product:i},r)=>{try{const d=r.getState().auth.token;return d?(C(d),(await y.put(`api/user/food-intake/${t}`,{type:o,product:i})).data):r.rejectWithValue("No token")}catch(a){return r.rejectWithValue(a.message)}});const Zt=()=>{const t=c(G),o=(t==null?void 0:t.BMR)||0,i=Math.ceil(((t==null?void 0:t.rateWater)||0)*1e3),r=c(Pt),a=c(Oe),d=c(V),s=M(),[p,h]=l.useState(!1),m=()=>{h(j=>!j)};return l.useEffect(()=>{a||s(Tt())},[s,a]),l.useEffect(()=>{p?document.body.style.overflow="hidden":document.body.style.overflow=""},[p]),l.useEffect(()=>{!o&&s(St()),!d&&s(N()),r===null&&s(S())},[s,o,r,d]),e.jsxs(Wt,{children:[e.jsxs(zt,{children:[e.jsx(Ft,{children:"Today"}),e.jsx(b,{to:"/dashboard",children:e.jsxs(Et,{children:[e.jsx($t,{children:"On the way to the goal"}),e.jsx(Mt,{children:e.jsx("use",{href:de+"#icon-arrow-right"})})]})})]}),e.jsxs(Bt,{children:[e.jsx(nt,{dailyCalories:o,dailyWaterIntake:i}),e.jsx(ze,{handleModal:m,waterConsumtion:r}),e.jsx(Ye,{dailyCalories:o,user:t})]}),e.jsxs(Vt,{children:[e.jsx(Lt,{children:e.jsx(dt,{})}),e.jsx(ht,{})]}),p&&e.jsx(It,{handleModal:m})]})};export{Zt as default};
