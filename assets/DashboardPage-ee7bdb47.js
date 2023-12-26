import{n as o,g as r,j as e}from"./index-d0763665.js";import{C as t,a,L as n,P as s,e as l,p as d,b as c,c as p,f as g}from"./index-5e205318.js";const y=o.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-top: 34px;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
    flex-direction: row;
    gap: 20px;
  }
`,x=o.div`
  gap: 27px;
  margin-bottom: 27px;

  @media screen and (min-width: 834px) {
    gap: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 20px;
  }
`,h=o.div`
  display: flex;

  align-items: center;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    justify-content: left;
    gap: 40px;
  }
`,m=o.p`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 144.44%;
  color: ${r.colorPrimaryWhite};

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 145.5%;
  }
`,f=o.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 143%;
  color: ${r.colorPrimaryWhite};
`,b=o.div`
  @media screen and (max-width: 833px) {
    width: 310px;
    padding-bottom: 8px;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      height: 8px;
      width: 94px;

      background-color: ${r.colorPrimaryBlack2};
      border-radius: 12px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
    }
  }
`,w=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 780px;
  height: 382px;
  background-color: ${r.colorPrimaryBlack2};
  border-radius: 12px;

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 382px;
  }
`;t.register(a,n,s,l,d,c,p);const u=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],k={maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},layout:{padding:{left:14,right:31,top:25,bottom:24}},plugins:{legend:{display:!1},tooltip:{shadowOffsetX:3,shadowOffsetY:3,shadowBlur:10,shadowColor:"rgba(231, 219, 219, 0.5)",yAlign:!1,displayColors:!1,cornerRadius:8,backgroundColor:"#0F0F0F",titleColor:"#FFF",bodyAlign:"center",footerAlign:"center",shadow:"0px 4px 14px 0px rgba(227, 255, 168, 0.20)",bodyFont:{size:32,weight:"bold",family:"Poppins",lineHeight:1.19,style:"normal"},caretSize:0,footerFont:{size:14,weight:"normal",family:"Poppins",lineHeight:1.43,style:"normal"},footerColor:"#B6B6B6"}},pointRadius:0,scales:{y:{color:"#B6B6B6",min:0,max:3e3,ticks:{padding:8,stepSize:1e3,callback:i=>{if(i!==0)return i/1e3+"K";if(i===0)return i}},grid:{lineWidth:.5,color:"rgba(182, 182, 182, 1)",drawTicks:!1}},x:{stacked:!0,beginAtZero:!1,color:"#B6B6B6",ticks:{padding:6},grid:{lineWidth:.5,color:"rgba(182, 182, 182, 1)",drawTicks:!1},min:0,max:31}}},B={labels:u,datasets:[{data:[1700,1750,1650,1700,1700,1650,1700,1750,1650,1700,1700,1650,1700,1750,1650,1700,1700,1650,1700,1750,1650,1700,1700,1650,1700,1750,1650,1700,1700,1650],tension:.1,borderColor:"rgba(227, 255, 168, 1)",backgroundColor:"rgba(227, 255, 168, 1)",borderWidth:1}]},j=()=>e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Calories"}),e.jsx(f,{children:"Average value ... cal"})]}),e.jsx(b,{children:e.jsx(w,{children:e.jsx(g,{options:k,data:B})})})]});t.register(a,n,s,l,d,c,p);const C=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],F={maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},layout:{padding:{left:14,right:31,top:25,bottom:24}},plugins:{legend:{display:!1},tooltip:{shadowOffsetX:3,shadowOffsetY:3,shadowBlur:10,shadowColor:"rgba(231, 219, 219, 0.5)",yAlign:!1,displayColors:!1,cornerRadius:8,backgroundColor:"#0F0F0F",titleColor:"#FFF",bodyAlign:"center",footerAlign:"center",shadow:"0px 4px 14px 0px rgba(227, 255, 168, 0.20)",bodyFont:{size:32,weight:"bold",family:"Poppins",lineHeight:1.19,style:"normal"},caretSize:0,footerFont:{size:14,weight:"normal",family:"Poppins",lineHeight:1.43,style:"normal"},footerColor:"#B6B6B6"}},pointRadius:0,scales:{y:{color:"#B6B6B6",min:0,max:3e3,ticks:{padding:8,stepSize:1e3,callback:i=>{if(i!==0)return i/1e3+"K";if(i===0)return i}},grid:{lineWidth:.5,color:"rgba(182, 182, 182, 1)",drawTicks:!1}},x:{stacked:!0,beginAtZero:!1,color:"#B6B6B6",ticks:{padding:6},grid:{lineWidth:.5,color:"rgba(182, 182, 182, 1)",drawTicks:!1},min:0,max:31}}},A={labels:C,datasets:[{data:[1700,1750,1650,1700,1700,1650,1700,1750,1650,1700,1700,1650,1700,1750,1650,1700,1700,1650,1700,1750,1650,1700,1700,1650,1700,1750,1650,1700,1700,1650],tension:.1,borderColor:"rgba(227, 255, 168, 1)",backgroundColor:"rgba(227, 255, 168, 1)",borderWidth:1}]},P=()=>e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Water"}),e.jsx(f,{children:"Average value ... ml"})]}),e.jsx(b,{children:e.jsx(w,{children:e.jsx(g,{options:F,data:A})})})]}),S=()=>e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(j,{}),e.jsx(P,{})]})});export{S as default};
