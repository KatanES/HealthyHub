import{u as r,r as h,i as p,j as e}from"./index-20366338.js";import{c as f,d as l,u as v}from"./index.esm-6625ae68.js";const y=r.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 60px;

  @media screen and (min-width: 300px) {
    
  }

  @media screen and (min-width: 780px) {
   
  }

  @media screen and (min-width: 1372px) {
    
  }
`,j=r.form`
  display: flex;
  flex-direction: column;

  width: 300px;
`,i=r.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 100%;
  margin-bottom: 40px;

  color: #ffffff;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`,d=r.input`
padding
  
  width: 280px;

  color: #ffffff;

  font-size: 14px;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid #b6b6b6;
  background: #0f0f0f;
`,g=r.input``;r.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 280px;
`;const b=r.button`
  display: inline-block;
  padding: 10px 8px;
  width: 100%;

  font-family: 'Poppins';
  color: #0f0f0f;
  background-color: #e3ffa8;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  border: none;
  border-radius: 12px;
  cursor: pointer;
`,w=r.button``,C=f().shape({name:l().min(2,"Too Short!").max(50,"Too Long!").required("Required"),age:l().max(3,"Too Long!").required("Required"),gender:l(),height:l(),weight:l(),activity:l()}),k=[{value:"1",label:"1.2 - If you do not have physical activity and sedentary work"},{value:"2",label:"1.375 - If you do short runs or light gymnastics 1-3 times a week"},{value:"3",label:"1.55 - If you play sports with average loads 3-5 times a week"},{value:"4",label:"1.725 - If you train fully 6-7 times a week"},{value:"5",label:"1.9 - If your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"}],S=()=>{const[s,u]=h.useState({}),[m,c]=h.useState(null);h.useEffect(()=>{(async()=>{try{const n=await p.get("/api/user/current");u(n.data),n.data.avatar&&c(URL.createObjectURL(n.data.avatar))}catch(n){console.error("Error fetching user data:",n)}})()},[]);const a=v({initialValues:{name:s.name||"",avatar:null,age:s.age||"",gender:s.gender||"male",height:s.height||"",weight:s.weight||"",activity:s.activity||"1"},validationSchema:C,onSubmit:async t=>{const n=new FormData;n.append("name",t.name),n.append("avatar",t.avatar),n.append("age",t.age),n.append("gender",t.gender),n.append("height",t.height),n.append("weight",t.weight),n.append("activity",t.activity);try{const o=await p.put("/api/user/update",n);console.log("User data updated:",o.data),u(o.data),o.data.avatar&&c(URL.createObjectURL(o.data.avatar))}catch(o){console.error("Error updating user data:",o)}}}),x=t=>{a.setFieldValue("avatar",t.currentTarget.files[0]),c(URL.createObjectURL(t.currentTarget.files[0]))};return e.jsx(y,{children:e.jsxs(j,{onSubmit:a.handleSubmit,children:[e.jsxs(i,{children:["Your name",e.jsx(d,{type:"text",name:"name",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.name})]}),e.jsxs(i,{children:["Your photo",e.jsxs("div",{children:[e.jsx("img",{src:m,alt:"Avatar"}),e.jsx(d,{type:"file",accept:"image/*",onChange:x})]})]}),e.jsxs(i,{children:["Your age",e.jsx(d,{type:"text",name:"age",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.age})]}),e.jsxs(i,{children:["Gender",e.jsxs("div",{children:[e.jsx(g,{type:"radio",name:"gender",value:"male",checked:a.values.gender==="male",onChange:a.handleChange}),"Male",e.jsx(g,{type:"radio",name:"gender",value:"female",checked:a.values.gender==="female",onChange:a.handleChange}),"Female"]})]}),e.jsxs(i,{children:["Height",e.jsx(d,{type:"text",name:"height",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.height})]}),e.jsxs(i,{children:["Weight",e.jsx(d,{type:"text",name:"weight",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.weight})]}),e.jsxs(i,{children:["Your activity",k.map(t=>e.jsxs("div",{children:[e.jsx(g,{type:"radio",name:"activity",value:t.value,checked:a.values.activity===t.value,onChange:a.handleChange}),t.label]},t.value))]}),e.jsxs("div",{children:[e.jsx(b,{type:"submit",children:"Save"}),e.jsx(w,{type:"button",onClick:a.handleReset,children:"Cancel"})]})]})})},U="/HealthyHub/assets/settings-hero-33d54d5d.svg",F=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Profile setting"}),e.jsx("img",{src:U,alt:"Hero Image"}),e.jsx(S,{})]});export{F as default};
