import{u as t,g as e,N as h,a as g,c as u,j as i,f}from"./index-651a70ba.js";import{F as w,a as y,E as b}from"./formik.esm-95f724f2.js";import{c as P,a as j}from"./index.esm-328aa90c.js";import{I as v}from"./IllustrationDesctop-3bd24af3.js";import{s as r}from"./symbol-53fb4fb4.js";const k=t.div`
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
`,$=t.div`
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
`,S=t.img`
  width: 100%;
  height: auto;
`,C=t.div`
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
`,z=t.h2`
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
`,E=t.p`
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
`,I=t(w)`
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
`,W=t.div`
  background: transparent;
  position: relative;
`,B=t.input`
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
`,F=t.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
`,G=t.div`
  font-size: 12px;
  font-weight: 400;
  margin: 0px 10px 0 0;
  color: ${e.colorSecondaryRed};
`,N=t.button`
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
`,T=t.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin: 48px 0 0 0;
  @media (min-width: 834px) {
    width: 380px;
    flex-direction: row;
    margin: 206px 0 60px 0;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
  }
`,L=t.p`
  font-size: 14px;
  line-height: 1.42;
  color: ${e.colorPrimaryGrey};
  margin: 0;
`,D=t(h)`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  color: ${e.colorPrimaryWhite};
  margin: 0 0 40px 0;
  @media (min-width: 834px) {
    margin: 0;
  }
`,s=t.svg`
  width: 16px;
  height: 16px;
  margin: 0 20px 0 0;
`,q=P().shape({email:j().email("Invalid email").required("Email is required")}),U=()=>{const l=g(),p=u(),m=o=>{console.log("Email sent to backend:",o.email),l(f({email:o.email})),p("/signin")};return i.jsxs(k,{children:[i.jsx($,{children:i.jsx(S,{src:v,alt:"The main picture a girl with a watch"})}),i.jsxs(C,{children:[i.jsx(z,{children:"Forgot your password"}),i.jsx(E,{children:"We will send you an email with recovery instructions"}),i.jsx(y,{initialValues:{email:""},validationSchema:q,onSubmit:m,children:({errors:o,touched:a,handleChange:d,handleBlur:x,isValid:c,values:n})=>i.jsxs(I,{autoComplete:"off",children:[i.jsxs(W,{style:{borderColor:a.email?o.email?"#E74A3B":"#3CBC81":""},children:[i.jsx(B,{type:"email",id:"email",name:"email",placeholder:"E-mail",onChange:d,onBlur:x,value:n.email,style:{borderColor:a.email?o.email?"#E74A3B":"#3CBC81":""},"aria-label":"Email Input"}),i.jsx(F,{style:{display:n.email?"block":"none",position:"absolute",top:"-5%",right:"10px",transform:"translateY(50%)"},children:o.email&&a.email?i.jsx(s,{children:i.jsx("use",{href:r+"#icon-error"})}):i.jsx(s,{children:i.jsx("use",{href:r+"#icon-correct"})})})]}),i.jsx(b,{name:"email",component:G}),i.jsx(N,{type:"submit",disabled:!c,children:"Send"})]})}),i.jsxs(T,{children:[i.jsx(L,{children:"Do you already have an account?"}),i.jsx(D,{to:"/signin",children:"Sign in"})]})]})]})};export{U as default};
