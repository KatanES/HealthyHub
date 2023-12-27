import{u as o,g as e,N as f,a as v,r as I,j as i,b as C}from"./index-671a0964.js";import{F as P,a as k,E as x}from"./index.esm-5b74e021.js";import{b as c}from"./YupSchemas-79f73736.js";import{I as E}from"./IllustrationDesctop-3bd24af3.js";import{s as r}from"./symbol-a75b2ef5.js";const z=o.div`
  width: 300px;
  @media (min-width: 834px) {
    width: 780px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1440px) {
    width: 1372px;
    display: flex;

    flex-direction: row;
    align-items: flex-start;
  }
`,B=o.div`
  width: 300px;
  margin: 40px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: 40px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-left: 116px;
  }
`,$=o.img`
  width: 100%;
  height: auto;
`,F=o.div`
  width: 300px;
  margin: 24px auto 0 auto;
  @media (min-width: 834px) {
    width: 380px;
    margin: 60px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 444px;
    margin: 120px auto 0 auto;
  }
`,W=o.h2`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,G=o.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: ${e.colorPrimaryGrey};
  margin: 16px 0 0 0;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
    text-align: center;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`,L=o(P)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 24px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;

    margin: 60px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
  }
`,m=o.div`
  background: transparent;
  position: relative;
`,h=o.input`
  width: -webkit-fill-available;
  padding: 8px 10px;

  border: 1px solid ${e.colorPrimaryGreenLite};
  border-radius: 12px;
  border-radius: 12px;
  background: transparent;
  font-size: 14px;
  color: ${e.colorPrimaryWhite};

  &:focus,
  &:hover,
  &:active {
    background: transparent;
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: ${e.colorPrimaryGrey};
  }
`,g=o.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`,w=o.div`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${e.colorSecondaryRed};
`,N=o.button`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  width: 100%;
  text-transform: none;
  padding: 8px 10px;
  margin: 20px 0 0 0;
  background-color: ${e.colorPrimaryGreenLite};
  color: ${e.colorPrimaryBlack2};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: transparent;
    color: ${e.colorPrimaryWhite};
  }

  &:active {
    background-color: transparent;
    color: ${e.colorPrimaryWhite};
  }
`,T=o.div`
  display: flex;
 margin: 14px 0 0 0;
  flex-direction: column;
  margin: 14px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
  
    margin:20px 0 0 0;
  }

  @media (min-width: 1440px) {
    width: 192px;
   
  }
`,A=o(f)`

font-size: 14px;
font-weight: 500;
line-height: 1.42;

color: ${e.colorPrimaryWhite};
text-align: center;
`,V=o.div`
  display: flex;
  gap:16px;
  justify-content: space-between;
  margin: 54px 0 40px 0;
  @media (min-width: 834px) {
    width: 380px;
    text-align: left;
    flex-direction: row;
    margin:222px 0 60px 0;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    justify-content: flex-start;
    flex-direction: row;
    margin:184px 0 60px 0;
  }
`,Y=o.p`
  font-size: 14px;
  line-height: 1.42;
  color: ${e.colorPrimaryGrey};
  margin:  0;
`,D=o(f)`

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  color: ${e.colorPrimaryWhite};
  margin: 0 0 40px 0;
  @media (min-width: 834px) {
    margin: 0;
  }
`,s=o.svg`
  width: 16px;
  height: 16px;
  margin: 0 20px 0 0;
`,M=()=>{const u=v(),[l,y]=I.useState(!1),j=()=>{y(t=>!t)},b=async t=>{try{await c.validate(t,{abortEarly:!1}),u(C({email:t.email,password:t.password})),console.log("Form sent")}catch(n){console.log("Form validation errors:",n)}};return i.jsxs(z,{children:[i.jsx(B,{children:i.jsx($,{src:E,alt:"The main picture a girl with a watch"})}),i.jsxs(F,{children:[i.jsx(W,{children:"Sign in"}),i.jsx(G,{children:"You need to login to use the service"}),i.jsx(k,{initialValues:{email:"",password:""},validationSchema:c,onSubmit:b,children:({errors:t,touched:n,handleChange:p,handleBlur:d,isValid:S,values:a})=>i.jsxs(L,{autoComplete:"off",children:[i.jsxs(m,{style:{borderColor:n.email?t.email?"#E74A3B":"#3CBC81":""},children:[i.jsx(h,{type:"email",id:"email",name:"email",placeholder:"E-mail",onChange:p,onBlur:d,value:a.email,style:{borderColor:n.email?t.email?"#E74A3B":"#3CBC81":""},"aria-label":"Email Input"}),i.jsx(g,{style:{display:a.email?"block":"none",position:"absolute",top:"-5%",right:"10px",transform:"translateY(50%)"},children:t.email&&n.email?i.jsx(s,{children:i.jsx("use",{href:r+"#icon-error"})}):i.jsx(s,{children:i.jsx("use",{href:r+"#icon-correct"})})})]}),i.jsx(x,{name:"email",component:w}),i.jsxs(m,{style:{borderColor:n.password?t.password?"#E74A3B":"#3CBC81":""},children:[i.jsx(h,{type:l?"text":"password",id:"password",name:"password",placeholder:"Password",success:"true",onChange:p,onBlur:d,value:a.password,style:{borderColor:n.password?t.password?"#E74A3B":"#3CBC81":""},"aria-label":"Password Input"}),i.jsxs(g,{style:{display:a.password?"block":"none",position:"absolute",top:"-5%",right:"10px",transform:"translateY(50%)"},onClick:j,children:[n.password&&i.jsx(s,{children:t.password?i.jsx("use",{href:r+"#icon-error"}):i.jsx("use",{href:r+"#icon-correct"})}),l?i.jsx(s,{children:i.jsx("use",{href:r+"#icon-eye"})}):i.jsx(s,{children:i.jsx("use",{href:r+"#icon-eye-off"})})]})]}),n.password&&a.password.length>=8&&i.jsx("div",{style:{color:"#3CBC81",fontSize:"12px"},children:"Password is secure"}),i.jsx(x,{name:"password",component:w}),i.jsx(N,{type:"submit",disabled:!S,children:"Sign in"})]})}),i.jsxs(T,{children:[i.jsx(A,{to:"/forgot-password",children:"Forgot your password?"})," "]}),i.jsxs(V,{children:[i.jsx(Y,{children:"If you don't have an account yet"}),i.jsx(D,{to:"/signup",children:"Sign up"})]})]})]})},K=()=>i.jsx("div",{children:i.jsx(M,{})});export{K as default};
