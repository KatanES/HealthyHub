import{u as a,j as i,L as x}from"./index-8d1c09d5.js";import{B as p,L as s,D as d,S as t}from"./Snack-87cc5c61.js";import{s as e}from"./symbol-9e282398.js";const n=a.div`
  /* display: flex;
  flex-wrap: wrap; */
  max-width: 320px;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 27px;
  }

  @media (min-width: 1200px) {
    max-width: 1480px;
    padding: 34px;
  }
`,r=a.svg`
  width: 16px;
  height: 16px;
`,m=a.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  margin-bottom: 19px;
`,l=a.div`
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 27px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 1460px;
    padding: 34px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    > * {
      flex-basis: calc((100% - 20px) / 2);
    }
  }
`,c=()=>i.jsxs(n,{children:[i.jsxs(m,{children:[i.jsx(x,{to:"/main",children:i.jsx(r,{children:i.jsx("use",{href:e+"#icon-arrow-left"})})}),i.jsx("h2",{children:"Diary"})]}),i.jsxs(l,{children:[i.jsx(p,{}),i.jsx(s,{}),i.jsx(d,{}),i.jsx(t,{})]})]});export{c as default};
