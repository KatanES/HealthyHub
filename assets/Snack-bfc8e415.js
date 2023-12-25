import{u as s,r as n,j as e,a as N,d as B,m as V}from"./index-6ab748ed.js";import{s as H}from"./symbol-b8a774a7.js";const k=s.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    /* gap: 159px; */
  }
`,X=s.div`
  margin-bottom: 27px;
`,T=s.form`
  /* outline: none; */
`,w=s.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
`,R=s.div`
  display: flex;
  gap: 12px;
  justify-content: start;
  align-items: center;
  margin: 0;
  margin-bottom: 15px;
  width:148px;
`,O=s.img`
width: 32px;
height: 32px;
`,f=s.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${x=>x?"white":"##B6B6B6"};
  margin: 0;
`,v=s.div`
  display: flex;
  gap: 12px;
  justify-content: start;
  align-items: center;
  margin: 0;
  margin-bottom: 15px;
  
`,I=s.button`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background-color: inherit;
  color: #e3ffa8;
  border: none;
  margin: 0;
  border-radius:12px;

  &:hover {
    background-color: #e3ffa8;
    color: black;
  }

  &:active {
    background-color: #e3ffa8;
    color: black;
  }
`,M=s.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 24px;
`,y=s.input`
  background-color: inherit;
  color: #b6b6b6;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  border-radius: 12px;
  border: 1px solid #e3ffa8;
  height: 20px;
  margin-bottom: 32px;
`,W=s.svg`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
`,E=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &:hover {
    outline: none;
    border: none;
  }

  &:active {
    outline: none;
    border: none;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }

  @media (min-width: 1200px) {
  }
`,z=s.div`
  max-width: 320px;
  padding: 12px;
  top: 0;
  position: absolute;
  top: 100px;
  left: 10px;
  background: black;
  z-index: 1000;

  &:hover {
    outline: none;
    border: none;
  }

  &:active {
    outline: none;
    border: none;
  }

  @media (min-width: 768px) {
    max-width: 708px;
    padding: 27px;
    top: 212px;
  }

  @media (min-width: 1200px) {
    max-width: 708px;
    padding: 34px;
    top: 236px;
    left: 36px;
  }
`,K=s.button`
  background-color: inherit;
  color: #e3ffa8;
  border: none;
  margin: 0;
  width: 20px;
  height: 20px;
`,Z=s.button`
  background-color: inherit;
  color: #e3ffa8;
  border: none;
  margin-bottom: 72px;
`,$=s.div`
  display: flex:
  flex-wrap: wrap;
  gap: 10px;
  justify-content: end;
  background-color: inherit;
  border: none;
  flex-direction: column; 
  align-items: flex-start;
`,L=s.button`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background-color: inherit;
  color: #e3ffa8;
  border: 2px solid #e3ffa8;
  margin: 0;
  /* display: flex; */
  padding: 8px 10px;
  
  border-radius: 12px;

  &:hover {
    background-color: #e3ffa8;
    color: black;
  }

  &:active {
    background-color: #e3ffa8;
    color: black;
  }
`;s.button`
  
`;const D=({handleSubmit:x,mealName:C,setMealName:F,carbonohidrates:h,setCarbonohidrates:p,protein:A,setProtein:r,fat:u,setFat:a,closeModal:g})=>{const[i,l]=n.useState(!1),[S,j]=n.useState(""),[m,c]=n.useState(""),[b,t]=n.useState(""),[o,P]=n.useState(""),J=()=>{l(!0)},G=()=>{console.log("New Form Submitted:",{name:S,carbonohidrates:m,protein:b,fat:o}),j(""),c(""),t(""),P(""),l(!1)};return e.jsxs(T,{onSubmit:x,children:[e.jsxs(E,{children:[e.jsx(y,{type:"text",id:"mealName",value:C,onChange:d=>F(d.target.value),required:!0,placeholder:"The name of the product or dish",size:"35"}),e.jsx(y,{type:"text",id:"carbonohidrates",value:h,placeholder:"Carbonohidrates",onChange:d=>p(d.target.value),required:!0,size:"35"}),e.jsx(y,{type:"text",id:"protein",value:A,placeholder:"Protein",onChange:d=>r(d.target.value),required:!0,size:"8"}),e.jsx(y,{type:"text",id:"fat",value:u,placeholder:"Fat",onChange:d=>a(d.target.value),required:!0,size:"8"}),e.jsx(K,{type:"submit",onClick:x,children:e.jsx(W,{children:e.jsx("use",{href:H+"#icon-trash-03"})})})]}),e.jsx(Z,{type:"button",onClick:J,children:"+ Add more"}),i&&e.jsxs(E,{children:[e.jsx(y,{type:"text",id:"newMealName",value:S,onChange:d=>j(d.target.value),required:!0,placeholder:"The name of the product or dish",size:"35"}),e.jsx(y,{type:"text",id:"newCarbonohidrates",value:m,placeholder:"Carbonohidrates",onChange:d=>c(d.target.value),required:!0,size:"35"}),e.jsx(y,{type:"text",id:"newProtein",value:b,placeholder:"Protein",onChange:d=>t(d.target.value),required:!0,size:"8"}),e.jsx(y,{type:"text",id:"newFat",value:o,placeholder:"Fat",onChange:d=>P(d.target.value),required:!0,size:"8"}),e.jsx(K,{type:"submit",onClick:G,children:e.jsx(W,{children:e.jsx("use",{href:H+"#icon-trash-03"})})})]}),e.jsxs($,{children:[e.jsx(L,{type:"submit",onClick:x,children:"Save"}),e.jsx(L,{type:"button",onClick:g,children:"Cancel"})]})]})},U="data:image/png;base64,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",te=()=>{const x=N(),C=B(o=>o.diary.meals),[F,h]=n.useState(!1),[p,A]=n.useState(""),[r,u]=n.useState(""),[a,g]=n.useState(""),[i,l]=n.useState(""),[S]=n.useState(null),j=()=>{h(!0)},m=()=>{h(!1),A(""),u(""),g(""),l(""),S(null)},c=o=>{o.preventDefault(),x(V({name:p,carbonohidrates:r,protein:a,fat:i})),t(P=>({carbonohidrates:P.carbonohidrates+parseFloat(r),protein:P.protein+parseFloat(a),fat:P.fat+parseFloat(i)})),m()},[b,t]=n.useState({carbonohidrates:0,protein:0,fat:0});return e.jsxs(X,{children:[e.jsxs(k,{children:[e.jsxs(R,{children:[e.jsx(O,{src:U,alt:"Breakfast"}),e.jsx(w,{children:"Breakfast"})]}),e.jsxs(v,{children:[e.jsxs(f,{children:["Carbonohidrates: ",b.carbonohidrates]}),e.jsxs(f,{children:["Protein: ",b.protein]}),e.jsxs(f,{children:["Fat: ",b.fat]})]})]}),e.jsx(I,{onClick:j,children:"+ Record your meal"}),F&&e.jsxs(z,{children:[e.jsx(M,{children:"Record your meal"}),e.jsxs(R,{children:[e.jsx(O,{src:U,alt:"Breakfast"}),e.jsx(w,{children:"Breakfast"})]}),e.jsx(D,{handleSubmit:c,mealName:p,setMealName:A,carbonohidrates:r,setCarbonohidrates:u,protein:a,setProtein:g,fat:i,setFat:l,closeModal:m})]}),C.map(o=>e.jsxs("div",{children:[e.jsx("p",{children:o.name}),e.jsxs("p",{children:["Carbonohidrates: ",o.carbonohidrates]}),e.jsxs("p",{children:["Protein: ",o.protein]}),e.jsxs("p",{children:["Fat: ",o.fat]})]},o.id))]})};console.log();const q="data:image/png;base64,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",ne=()=>{const x=N(),C=B(t=>t.diary.meals),[F,h]=n.useState(!1),[p,A]=n.useState(""),[r,u]=n.useState(""),[a,g]=n.useState(""),[i,l]=n.useState(""),S=()=>{h(!0)},j=()=>{h(!1),A(""),u(""),g(""),l("")},m=t=>{t.preventDefault(),x(V({name:p,carbonohidrates:r,protein:a,fat:i})),b(o=>({carbonohidrates:o.carbonohidrates+parseFloat(r),protein:o.protein+parseFloat(a),fat:o.fat+parseFloat(i)})),j()},[c,b]=n.useState({carbonohidrates:0,protein:0,fat:0});return e.jsxs(X,{children:[e.jsxs(k,{children:[e.jsxs(R,{children:[e.jsx(O,{src:q,alt:"Lunch"}),e.jsx(w,{children:"Lunch"})]}),e.jsxs(v,{children:[e.jsxs(f,{children:["Carbonohidrates: ",c.carbonohidrates]}),e.jsxs(f,{children:["Protein: ",c.protein]}),e.jsxs(f,{children:["Fat: ",c.fat]})]})]}),e.jsx(I,{onClick:S,children:"+ Record your meal"}),F&&e.jsxs(z,{children:[e.jsx(M,{children:"Record your meal"}),e.jsxs(R,{children:[e.jsx(O,{src:q,alt:"Lunch"}),e.jsx(w,{children:"Lunch"})]}),e.jsx(D,{handleSubmit:m,mealName:p,setMealName:A,carbonohidrates:r,setCarbonohidrates:u,protein:a,setProtein:g,fat:i,setFat:l,closeModal:j})]}),C.map(t=>e.jsxs("div",{children:[e.jsx("p",{children:t.name}),e.jsxs("p",{children:["Carbonohidrates: ",t.carbonohidrates]}),e.jsxs("p",{children:["Protein: ",t.protein]}),e.jsxs("p",{children:["Fat: ",t.fat]})]},t.id))]})},Q="data:image/png;base64,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",oe=()=>{const x=N(),C=B(t=>t.diary.meals),[F,h]=n.useState(!1),[p,A]=n.useState(""),[r,u]=n.useState(""),[a,g]=n.useState(""),[i,l]=n.useState(""),S=()=>{h(!0)},j=()=>{h(!1),A(""),u(""),g(""),l("")},m=t=>{t.preventDefault(),x(V({name:p,carbonohidrates:r,protein:a,fat:i})),b(o=>({carbonohidrates:o.carbonohidrates+parseFloat(r),protein:o.protein+parseFloat(a),fat:o.fat+parseFloat(i)})),j()},[c,b]=n.useState({carbonohidrates:0,protein:0,fat:0});return e.jsxs(X,{children:[e.jsxs(k,{children:[e.jsxs(R,{children:[e.jsx(O,{src:Q,alt:"Dinner"}),e.jsx(w,{children:"Dinner"})]}),e.jsxs(v,{children:[e.jsxs(f,{children:["Carbonohidrates: ",c.carbonohidrates]}),e.jsxs(f,{children:["Protein: ",c.protein]}),e.jsxs(f,{children:["Fat: ",c.fat]})]})]}),e.jsx(I,{onClick:S,children:"+ Record your meal"}),F&&e.jsxs(z,{children:[e.jsx(M,{children:"Record your meal"}),e.jsxs(R,{children:[e.jsx(O,{src:Q,alt:"Dinner"}),e.jsx(w,{children:"Dinner"})]}),e.jsx(D,{handleSubmit:m,mealName:p,setMealName:A,carbonohidrates:r,setCarbonohidrates:u,protein:a,setProtein:g,fat:i,setFat:l,closeModal:j})]}),C.map(t=>e.jsxs("div",{children:[e.jsx("p",{children:t.name}),e.jsxs("p",{children:["Carbonohidrates: ",t.carbonohidrates]}),e.jsxs("p",{children:["Protein: ",t.protein]}),e.jsxs("p",{children:["Fat: ",t.fat]})]},t.id))]})},Y="data:image/png;base64,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",se=()=>{const x=N(),C=B(t=>t.diary.meals),[F,h]=n.useState(!1),[p,A]=n.useState(""),[r,u]=n.useState(""),[a,g]=n.useState(""),[i,l]=n.useState(""),S=()=>{h(!0)},j=()=>{h(!1),A(""),u(""),g(""),l("")},m=t=>{t.preventDefault(),x(V({name:p,carbonohidrates:r,protein:a,fat:i})),b(o=>({carbonohidrates:o.carbonohidrates+parseFloat(r),protein:o.protein+parseFloat(a),fat:o.fat+parseFloat(i)})),j()},[c,b]=n.useState({carbonohidrates:0,protein:0,fat:0});return e.jsxs(X,{children:[e.jsxs(k,{children:[e.jsxs(R,{children:[e.jsx(O,{src:Y,alt:"Snack"}),e.jsx(w,{children:"Snack"})]}),e.jsxs(v,{children:[e.jsxs(f,{children:["Carbonohidrates: ",c.carbonohidrates]}),e.jsxs(f,{children:["Protein: ",c.protein]}),e.jsxs(f,{children:["Fat: ",c.fat]})]})]}),e.jsx(I,{onClick:S,children:"+ Record your meal"}),F&&e.jsxs(z,{children:[e.jsx(M,{children:"Record your meal"}),e.jsxs(R,{children:[e.jsx(O,{src:Y,alt:"Snack"}),e.jsx(w,{children:"Snack"})]}),e.jsx(D,{handleSubmit:m,mealName:p,setMealName:A,carbonohidrates:r,setCarbonohidrates:u,protein:a,setProtein:g,fat:i,setFat:l,closeModal:j})]}),C.map(t=>e.jsxs("div",{style:{maxHeight:"300px",overflowY:"auto"},children:[e.jsx("p",{children:t.name}),e.jsxs("p",{children:["Carbonohidrates: ",t.carbonohidrates]}),e.jsxs("p",{children:["Protein: ",t.protein]}),e.jsxs("p",{children:["Fat: ",t.fat]})]},t.id))]})};export{te as B,oe as D,ne as L,se as S};
