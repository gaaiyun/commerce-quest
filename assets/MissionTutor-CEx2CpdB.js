import{r as S,j as r,z as g}from"./index-BB0WT2jv.js";import{A as k,g as O,o as R,f as p}from"./tutor-Dig-JWAy.js";import{b as $}from"./functions-Bj6QMfxr.js";import{S as d,f as y,l as L}from"./sqlTutor-BL-n_NI1.js";import"./lab-Dk9sSxcc.js";function T(e){const t=new Set(["SELECT","FROM","WHERE","GROUP","BY","HAVING","ORDER","LIMIT","JOIN","LEFT","INNER","ON","AS","AND","OR","NOT","IN","IS","NULL","CASE","WHEN","THEN","ELSE","END","DESC","ASC","DISTINCT","OVER","PARTITION","WITH","SUM","COUNT","AVG","MIN","MAX","ROUND","LAG","LEAD","ROW_NUMBER","RANK","DENSE_RANK","COALESCE","CAST","BETWEEN","LIKE"]);return e.replace(/'[^']*'/g,"'___'").replace(/\b[A-Za-z_][A-Za-z0-9_]*\b/g,i=>t.has(i.toUpperCase())?i.toUpperCase():"___").replace(/\b\d+(\.\d+)?\b/g,i=>i==="100.0"||i==="1"?i:"#")}const A=[{id:"hint",text:"给我下一个提示"},{id:"explain",text:"这一步要用到哪些写法"},{id:"inspect",text:"帮我看看我写的"},{id:"teach",text:"从头教我这个知识点"}],b=Object.keys(d).sort((e,t)=>t.length-e.length),C=e=>{const t=` ${e.toUpperCase().replace(/\s+/g," ")} `;return b.filter(i=>t.includes(` ${i} `)||t.includes(` ${i}(`))},x=e=>{const t=d[e];return`**${t.title}**：${t.body}
\`\`\`sql
${t.ex}
\`\`\``},N=e=>{const t=$[e];return`**${t.syntax}**：${t.desc}${t.args?`
`+t.args.map(i=>`- ${i}`).join(`
`):""}
例：\`${t.ex}\`${t.tip?`
注意：${t.tip}`:""}`};function B(e){const[t,i]=S.useState(!1),[m,h]=S.useState([]),[j,E]=S.useState(!1),a=(n,c)=>h(s=>[...s,{role:"ai",text:n,kind:c}]),f=()=>e.kind==="sql"?C(e.reference??"").filter(n=>n!=="SELECT"):[...new Set(e.hints.flatMap(n=>p(n.replace(/[「」]/g," "))).filter(n=>$[n]))],I=async n=>{const c=A.find(s=>s.id===n).text;if(h(s=>[...s,{role:"me",text:c}]),n==="hint"){e.hintsUsed<e.hints.length?(e.onHint(),a(`提示 ${e.hintsUsed+1}：${e.hints[e.hintsUsed]}

（用提示会记为「提示下完成」，评分略降。）`,"hint")):e.kind==="sql"&&e.reference?a(`提示都用完了。给你看结构，不给答案——把 ___ 换成这题的表名和列名：
\`\`\`sql
${T(e.reference)}
\`\`\``,"hint"):a("提示都用完了。可以直接问我具体的函数或写法，比如「SUMIFS 的参数顺序」。","hint");return}if(n==="explain"){const s=f();a(s.length?`这一步用到：${s.join("、")}。

${s.slice(0,3).map(e.kind==="sql"?x:N).join(`

`)}`:`这一步的目标：${e.goal}`,"explain");return}if(n==="teach"){const s=f(),o=s[0];if(!o){a(`这一步的思路：${e.goal}`,"explain");return}e.kind==="sql"?a(`从头讲 **${o}**。

${x(o)}

${s.slice(1,3).map(x).join(`

`)}

想系统练：主菜单「实训中心 → SQL」有 37 道题，开窗函数分 12 课。`,"explain"):a(`从头讲 **${o}**。

${N(o)}

${s.slice(1,3).map(N).join(`

`)}

想系统练：主菜单「实训中心 → 表格」，函数速查里有 99 个函数的用法。`,"explain");return}if(n==="inspect"){E(!0);try{const s=(await e.readWork()).trim();if(!s){a(e.kind==="sql"?"编辑器里还是空的。先写出 SELECT … FROM …，运行一次再让我看。":"答题格还是空的。先在黄色格子里写公式，再让我看。","inspect");return}if(e.kind==="sql"){const o=L(s),l=f().filter(u=>!C(s).includes(u));a([o.length?o.map(u=>`- ${u}`).join(`
`):"- 语法上没看出明显问题。",l.length?`- 参考写法里用到了 ${l.join("、")}，你的 SQL 里还没有。`:"- 用到的写法和参考思路一致；结果不对的话，检查筛选条件和金额单位（分 / 元）。"].join(`
`),"inspect")}else{const o=p(s),l=f().filter(u=>!o.includes(u));a(`你写的：
\`\`\`
${s}
\`\`\`
${l.length?`提示里用到了 ${l.join("、")}，你还没用。`:"函数用对了；数值不对的话，检查引用的范围有没有跑偏、条件有没有写对。"}${s.includes("（手填）")?`
有的格子是手填数字，实际工作里要用公式，数据更新才能自动重算。`:""}`,"inspect")}}finally{E(!1)}}},_=async n=>{h(c=>[...c,{role:"me",text:n}]),E(!0);try{const c=await e.readWork().catch(()=>""),s=f().slice(0,4).map(l=>e.kind==="sql"?d[l]?`${d[l].title}：${d[l].body} 例：${d[l].ex}`:"":$[l]?`${$[l].syntax}：${$[l].desc}`:"").filter(Boolean).join(`
`),o=await O(n,{kind:e.kind,task:{title:e.title,goal:e.goal,steps:e.hints.slice(0,e.hintsUsed),tags:f()},work:c,refs:s,history:m});a(o??(e.kind==="sql"?y(n,null):R(n,null)),"answer")}finally{E(!1)}};return t?r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:"btn accent",onClick:()=>i(!1),children:[r.jsx(g,{size:14}),"收起助教"]}),r.jsx("div",{className:"mission-tutor",children:r.jsx(k,{chips:A,msgs:m,busy:j,onChip:n=>void I(n),onAsk:n=>void _(n),onClose:()=>i(!1)})})]}):r.jsxs("button",{className:"btn accent",onClick:()=>i(!0),children:[r.jsx(g,{size:14}),"AI 助教"]})}export{B as MissionTutor};
