import{u as i,g as r,r as m,j as e,t as R,m as b}from"./index-671a0964.js";import{c as W,d as f,e as h,a as z}from"./index.esm-5b74e021.js";const F=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  width: 300px;

  @media (min-width: 834px) {
    margin-top: 0;
    width: 491px;
  }

  @media (min-width: 1440px) {
    width: 491px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`,G=i.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`,y=i.div`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 60px;
  }
`,A=i.form`
  display: flex;
  flex-direction: column;

  gap: 40px;

  @media (min-width: 834px) {
    margin: 24px auto 0 auto;

    max-width: 491px;
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
  }
`,l=i.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  width: 280px;

  color: ${r.colorPrimaryWhite};

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  @media (min-width: 834px) {
    width: 212px;
  }
`,x=i.input`
  padding: 8px 10px;

  width: 100%;

  color: ${r.colorPrimaryWhite};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${r.colorPrimaryGrey};
  background: ${r.colorPrimaryBlack2};

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${r.colorPrimaryGreenLite};
    background: transparent;
    outline: none;
  }

  @media (min-width: 834px) {
    width: 192px;
  }
`,j=i.div`
  @media (min-width: 834px) {
    width: 219px;
  }
`,q=i.div`
  display: flex;
  align-items: center;

  margin-top: 12px;

  @media (min-width: 834px) {
    width: 219px;
  }
`,B=i.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 36px;
  height: 36px;
  object-fit: cover;
`,I=i.div`
  display: flex;
  align-items: center;
`,H=i.input`
  display: none;
`,M=i.svg`
  width: 16px;
  height: 16px;

  stroke: ${r.colorPrimaryGreenLite};

  cursor: pointer;
`,D=i.span`
  color: ${r.colorPrimaryWhite};

  font-size: 14px;
  line-height: 1.43;

  cursor: pointer;
`,v=i.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`,T=i.div`
  display: flex;
  align-items: center;

  gap: 16px;

  margin-top: 12px;

  width: 230px;

  @media (min-width: 834px) {
    width: 276px;
  }

  @media (min-width: 1440px) {
    margin-top: 12px;

    gap: 16px;

    text-align: left;
  }
`,k=i.label`
  display: flex;
  align-items: center;

  gap: 8px;

  font-size: 14px;
  line-height: 1.43;
`,d=i.input`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: ${r.colorPrimaryGreenLite};
  background-color: black;

  border: 0.11em solid ${r.colorPrimaryGrey};
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      ${r.colorPrimaryGreenLite} 40%,
      transparent 50%
    );
  }

  @media (min-width: 834px) {
    margin-top: 0;
  }
`,E=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;

  margin-top: 12px;

  width: 300px;

  @media (min-width: 834px) {
    align-items: start;
    width: 464px;
  }
`,p=i.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 300px;

  font-size: 14px;
  line-height: 1.43;

  color: ${r.colorPrimaryWhite};

  @media (min-width: 834px) {
    width: 430px;
  }
`,Y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  width: 100%;

  @media (min-width: 834px) {
    flex-direction: row;

    width: 416px;
  }
`,O=i.button`
  padding: 8px 10px;

  width: 100%;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;

  border: none;
  border-radius: 12px;

  background-color: ${r.colorPrimaryGreenLite};
  color: ${r.colorPrimaryBlack2};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${r.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${r.colorPrimaryWhite};
  }

  @media (min-width: 834px) {
    width: 212px;
  }
`,V=i.button`
  width: 280px;

  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border: none;

  background-color: transparent;
  color: ${r.colorPrimaryGrey};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
    color: ${r.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${r.colorPrimaryWhite};
  }

  @media (min-width: 834px) {
    width: 192px;
  }
`,S=W().shape({name:f().min(2,"Too Short!").max(50,"Too Long!").required("Required"),age:h().label("Age").min(1,"Must be a number from 1 to 200").max(200,"Must be a number from 1 to 200").required("Age is required"),gender:f().required("Choose one of these fields"),avatar:f(),height:h().label("Height").min(1,"Must be a number from 1 to 300").max(300,"Must be a number from 1 to 300").required("Height is required"),weight:h().label("Weight").min(1,"Must be a number from 1 to 500").max(500,"Must be a number from 1 to 500").required("Weight is required"),activity:h()}),J=()=>{const[s,w]=m.useState({}),[P,g]=m.useState(null),u=m.useRef(null),$=async()=>{try{const t=await b.get("/api/user/current");w(t.data[0]),t.data[0].avatarURL&&g(URL.createObjectURL(t.data[0].avatarURL))}catch(t){console.error("Error fetching user data:",t)}};m.useEffect(()=>{$()},[]);const U=async t=>{const o=new FormData;o.append("name",t.name),o.append("avatarURL",t.avatar),o.append("age",t.age),o.append("gender",t.gender),o.append("height",t.height),o.append("weight",t.weight),o.append("activity",t.activity),await S.validate(t,{abortEarly:!1});try{const c=await b.put("/api/user/update",o);w(c.data[0]),c.data[0].avatarUrl&&g(URL.createObjectURL(c.data[0].avatarUrl))}catch(c){console.log(c.message)}},C=()=>{u.current&&u.current.click()},L=t=>{formik.setFieldValue("avatar",t.currentTarget.files[0]),g(URL.createObjectURL(t.currentTarget.files[0]))};return e.jsx(F,{children:e.jsx(z,{enableReinitialize:!0,initialValues:{name:s.name??"",avatar:s.avatar??null,age:s.age??"",gender:s.gender??"male",height:s.height??"",weight:s.weight??"",activity:s.activity??1},onSubmit:U,validationSchema:S,children:({handleSubmit:t,submitForm:o,errors:c,touched:_,handleChange:a,handleBlur:ee,isValid:ie,values:n})=>e.jsxs(A,{children:[e.jsxs(G,{children:[e.jsxs(y,{children:[e.jsxs(l,{children:["Your name",e.jsx(x,{type:"text",id:"name",name:"name",value:n.name,onChange:a})]}),e.jsxs(j,{children:[e.jsx(l,{children:"Your photo"}),e.jsxs(q,{children:[e.jsx(B,{src:P,alt:"User Avatar"}),e.jsxs(I,{children:[e.jsx(H,{type:"file",ref:u,accept:"image/*",onChange:L}),e.jsxs("div",{onClick:C,style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:[e.jsx(M,{width:"16",height:"16",children:e.jsx("use",{href:`${R}#icon-direct-inbox`})}),e.jsx(D,{children:"Download new photo"})]})]})]})]})]}),e.jsxs(y,{children:[e.jsxs(l,{children:["Your age",e.jsx(x,{type:"number",id:"age",name:"age",value:n.age,onChange:a})]}),e.jsxs(j,{children:[e.jsx(v,{children:"Gender"}),e.jsxs(T,{children:[e.jsxs(k,{children:[e.jsx(d,{type:"radio",name:"gender",value:"male",checked:n.gender==="male",onChange:a}),"Male"]}),e.jsxs(k,{children:[e.jsx(d,{type:"radio",name:"gender",value:"female",checked:n.gender==="female",onChange:a}),"Female"]})]})]})]}),e.jsxs(y,{children:[e.jsxs(l,{children:["Height",e.jsx(x,{type:"number",id:"height",name:"height",value:n.height,onChange:a})]}),e.jsxs(l,{children:["Weight",e.jsx(x,{type:"number",id:"weight",name:"weight",value:n.weight,onChange:a})]})]})]}),e.jsxs("div",{children:[e.jsx(v,{children:"Your activity"}),e.jsxs(E,{children:[e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"activity",value:"1",checked:n.activity==="1",onChange:a}),"1.2 - if you do not have physical activity and sedentary work"]}),e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"activity",value:"2",checked:n.activity==="2",onChange:a}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"activity",value:"3",checked:n.activity==="3",onChange:a}),"1.55 - if you play sports with average loads 3-5 times a week"]}),e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"activity",value:"4",checked:n.activity==="4",onChange:a}),"1.725 - if you train fully 6-7 times a week"]}),e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"activity",value:"5",checked:n.activity==="5",onChange:a}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]})]}),e.jsxs(Y,{children:[e.jsx(O,{type:"submit",children:"Save"}),e.jsx(V,{type:"button",children:"Cancel"})]})]})})})},K="/HealthyHub/assets/settings-hero-33d54d5d.svg",N=i.div`
  padding-bottom: 40px;

  @media (min-width: 834px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-bottom: 174px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 160px;

    margin-left: 116px;
    padding-bottom: 72px;

    width: 1181px;
  }
`,Q=i.h2`
  margin: 16px 0;

  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 834px) {
    margin-top: 24px;
    margin-bottom: 20px;

    width: 200px;

    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
    margin-bottom: 24px;
  }
`,X=i.div`
  width: 300px;

  @media (min-width: 834px) {
    margin: 0 auto;

    width: 380px;
    height: 374px;
  }

  @media (min-width: 1440px) {
    width: 536px;
    height: 528px;
  }
`,Z=i.img`
  width: 100%;
  height: auto;
`,ae=()=>e.jsxs("div",{children:[e.jsx(Q,{children:"Profile setting"}),e.jsxs(N,{children:[e.jsx(X,{children:e.jsx(Z,{src:K,alt:"Settings Hero Image"})}),e.jsx(J,{})]})]});export{ae as default};
