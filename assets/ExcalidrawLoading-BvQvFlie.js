import{r as s,j as t}from"./index-jAOdAlND.js";import{E as l}from"./react-error-boundary.esm-D_MYZA0i.js";import{B as i}from"./Mermaid-Dltmc1ai.js";import{l as a}from"./CodeHighlighter-Bpnb7EmM.js";import{g as h}from"./lodash-B3VVwmZe.js";import{a as x}from"./motion-minimal-Dibf-bmP.js";const p=s.createContext({}),b=o=>{const{dls:r}=o,n=g(r),e=s.useMemo(()=>n.height?{height:/^\d+$/.test(n.height)?`${n.height}px`:n.height}:{},[n.height]);return t.jsx(l,{fallback:t.jsx(d,{style:e}),children:t.jsx(p.Provider,{value:e,children:t.jsx(u,{...n})})})},u=o=>{const[r,n]=s.useState({component:m}),e=s.useContext(p);return x(()=>{a("https://unpkg.com/styled-components/dist/styled-components.min.js").then(()=>a(o.import)).then(()=>{const c=h(window,o.name);n({component:c})})},[o]),t.jsx(l,{fallback:t.jsx(d,{style:e}),children:t.jsx(s.Suspense,{fallback:t.jsx(m,{style:e}),children:t.jsx("div",{style:e,className:"overflow-hidden",children:t.jsx(r.component,{})})})})},d=({style:o})=>t.jsx(i,{style:o,className:"bg-red-300 dark:bg-red-700",children:"Component Error"}),m=({style:o})=>t.jsx(i,{style:o,children:"Component Loading..."});function g(o){const r={};return o.split(`
`).forEach(n=>{const[e,c]=n.split("=");r[e]=c}),r}const L=()=>t.jsx(i,{children:"Excalidraw Loading..."});export{L as E,b as R};
