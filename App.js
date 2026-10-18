const R={head:"ศีรษะ",neck:"คอ",chest:"ทรวงอก",abdomen:"ช่องท้อง",pelvis:"อุ้งเชิงกราน",arm:"แขน",hand:"มือ",leg:"ขา",foot:"เท้า"};
const S=["กระดูก","กล้ามเนื้อ","อวัยวะภายใน","ประสาทและต่อมต่าง ๆ"];
const D=[
["head","กะโหลกศีรษะ","Cranium",0,"กระดูกหลายชิ้นเชื่อมกัน ห่อหุ้มและปกป้องสมอง"],
["head","ขากรรไกรล่าง","Mandible",0,"กระดูกส่วนเดียวของใบหน้าที่ขยับได้ ใช้เคี้ยวและพูด"],
["head","กล้ามเนื้อแมสซีเตอร์","Masseter",1,"กล้ามเนื้อที่แก้ม ช่วยยกขากรรไกรล่างเวลาเคี้ยวอาหาร"],
["head","สมอง","Brain",3,"ศูนย์กลางควบคุมการคิด ความจำ การเคลื่อนไหว และการทำงานของร่างกาย"],
["neck","กระดูกสันหลังส่วนคอ","Cervical vertebrae",0,"กระดูก 7 ชิ้น รองรับศีรษะและให้ศีรษะหันได้"],
["neck","กล้ามเนื้อสเตอร์โนไคลโดมาสทอยด์","Sternocleidomastoid",1,"ช่วยหันและเอียงศีรษะ"],
["neck","หลอดลม","Trachea",2,"ท่อนำอากาศจากกล่องเสียงลงสู่ปอด"],
["neck","ต่อมไทรอยด์","Thyroid gland",3,"ผลิตฮอร์โมนควบคุมการเผาผลาญพลังงาน"],
["chest","กระดูกซี่โครง","Ribs",0,"มี 12 คู่ ป้องกันหัวใจและปอด และช่วยการหายใจ"],
["chest","กระดูกสันอก","Sternum",0,"กระดูกแบนกลางอก เป็นที่ยึดของซี่โครง"],
["chest","กล้ามเนื้อหน้าอก","Pectoralis major",1,"กล้ามเนื้อใหญ่ที่หน้าอก ช่วยเหวี่ยงแขนเข้าหาลำตัว"],
["chest","หัวใจ","Heart",2,"สูบฉีดเลือดไปเลี้ยงทั่วร่างกาย มี 4 ห้อง"],
["chest","ปอด","Lungs",2,"แลกเปลี่ยนก๊าซ รับออกซิเจนเข้าและกำจัดคาร์บอนไดออกไซด์ออก"],
["chest","กะบังลม","Diaphragm",1,"กล้ามเนื้อใต้ปอด หดตัวเพื่อดึงอากาศเข้า"],
["abdomen","กล้ามเนื้อหน้าท้อง","Rectus abdominis",1,"งอลำตัวและช่วยพยุงอวัยวะในช่องท้อง"],
["abdomen","กระเพาะอาหาร","Stomach",2,"ย่อยอาหารด้วยกรดและเอนไซม์"],
["abdomen","ตับ","Liver",2,"สร้างน้ำดี กรองสารพิษ และเก็บสะสมพลังงาน"],
["abdomen","ไต","Kidney",2,"กรองเลือดและสร้างปัสสาวะ"],
["abdomen","ลำไส้เล็ก","Small intestine",2,"ย่อยและดูดซึมสารอาหารเป็นหลัก"],
["abdomen","ลำไส้ใหญ่","Large intestine",2,"ดูดน้ำกลับและสร้างอุจจาระ"],
["pelvis","กระดูกเชิงกราน","Pelvis",0,"รับน้ำหนักลำตัวส่งไปยังขา และปกป้องอวัยวะในอุ้งเชิงกราน"],
["pelvis","กระเพาะปัสสาวะ","Urinary bladder",2,"เก็บปัสสาวะก่อนขับออก"],
["pelvis","กล้ามเนื้อก้น","Gluteus maximus",1,"กล้ามเนื้อใหญ่ที่สุดของร่างกาย ช่วยเหยียดสะโพกและลุกขึ้นยืน"],
["arm","กระดูกต้นแขน","Humerus",0,"กระดูกยาวของต้นแขน ต่อกับสะบักและข้อศอก"],
["arm","กระดูกปลายแขน","Radius และ Ulna",0,"กระดูกคู่ที่ปลายแขน ช่วยให้หมุนข้อมือได้"],
["arm","กล้ามเนื้อไบเซพส์","Biceps brachii",1,"ด้านหน้าต้นแขน งอข้อศอก"],
["arm","กล้ามเนื้อไตรเซพส์","Triceps brachii",1,"ด้านหลังต้นแขน เหยียดข้อศอก"],
["arm","กล้ามเนื้อเดลทอยด์","Deltoid",1,"คลุมหัวไหล่ ช่วยยกแขน"],
["hand","กระดูกข้อมือ","Carpals",0,"กระดูกเล็ก 8 ชิ้น ทำให้ข้อมือเคลื่อนไหวได้หลายทิศทาง"],
["hand","กระดูกนิ้วมือ","Phalanges",0,"กระดูกนิ้ว นิ้วหัวแม่มือมี 2 ชิ้น นิ้วอื่นมีนิ้วละ 3 ชิ้น"],
["leg","กระดูกต้นขา","Femur",0,"กระดูกที่ยาวและแข็งแรงที่สุดของร่างกาย"],
["leg","กระดูกสะบ้า","Patella",0,"กระดูกกลมที่หัวเข่า ปกป้องข้อเข่า"],
["leg","กระดูกหน้าแข้งและน่อง","Tibia และ Fibula",0,"กระดูกคู่ที่หน้าแข้งและน่อง โดย Tibia รับน้ำหนักเป็นหลัก"],
["leg","กล้ามเนื้อต้นขาหน้า","Quadriceps",1,"เหยียดเข่า ใช้เดินขึ้นบันได"],
["leg","กล้ามเนื้อต้นขาหลัง","Hamstrings",1,"งอเข่าและเหยียดสะโพก"],
["leg","กล้ามเนื้อน่อง","Gastrocnemius",1,"เขย่งปลายเท้า ใช้เดินและวิ่ง"],
["foot","กระดูกข้อเท้า","Tarsals",0,"กระดูก 7 ชิ้น รวมกระดูกส้นเท้า (Calcaneus)"],
["foot","กระดูกฝ่าเท้า","Metatarsals",0,"กระดูก 5 ชิ้น ช่วยรับน้ำหนักขณะเดิน"],
["foot","เอ็นร้อยหวาย","Achilles tendon",1,"เอ็นที่แข็งแรงที่สุดของร่างกาย ยึดกล้ามเนื้อน่องกับส้นเท้า"],
["chest","กระดูกไหปลาร้า","Clavicle",0,"กระดูกรูปตัว S เชื่อมกระดูกสันอกกับสะบัก ค้ำหัวไหล่ให้อยู่ห่างลำตัว"],
["chest","กระดูกสันหลังส่วนอกและเอว","Thoracic และ Lumbar vertebrae",0,"กระดูกสันหลังส่วนอก 12 ชิ้น (ต่อกับซี่โครง) และส่วนเอว 5 ชิ้น รับน้ำหนักลำตัวส่วนบน"]
].map((a,i)=>({id:"b"+i,r:a[0],n:a[1],e:a[2],s:S[a[3]],d:a[4],custom:false}));

let custom=[],fR="all",fS="all",sel=null,qs="";
try{custom=JSON.parse(localStorage.getItem("anat-custom")||"[]")}catch(e){}
const $=id=>document.getElementById(id);
const all=()=>D.concat(custom);
function save(){try{localStorage.setItem("anat-custom",JSON.stringify(custom));$("saveNote").textContent="บันทึกในเบราว์เซอร์นี้แล้ว"}catch(e){$("saveNote").textContent="บันทึกถาวรไม่ได้ในเบราว์เซอร์นี้ ข้อมูลจะอยู่จนกว่าจะปิดหน้า"}}
function esc(s){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}

function tabs(el,opts,cur,fn){
  el.innerHTML="";
  opts.forEach(([k,l])=>{const b=document.createElement("button");b.className="chip"+(k===cur?" on":"");b.textContent=l;b.type="button";b.onclick=()=>fn(k);el.appendChild(b)});
}
function renderStudy(){
  tabs($("regionTabs"),[["all","ทั้งตัว"],...Object.entries(R)],fR,k=>{fR=k;render()});
  tabs($("sysTabs"),[["all","ทุกระบบ"],...S.map(s=>[s,s])],fS,k=>{fS=k;render()});
  const t=qs.trim().toLowerCase();
  const rows=all().filter(x=>(fR==="all"||x.r===fR)&&(fS==="all"||x.s===fS)&&(!t||(x.n+" "+x.e).toLowerCase().includes(t)));
  const L=$("list");L.innerHTML="";
  if(!rows.length)L.innerHTML='<div class="empty">ไม่พบรายการ ลองเปลี่ยนตัวกรอง หรือเพิ่มรายการใหม่ด้านล่าง</div>';
  rows.forEach(x=>{const b=document.createElement("button");b.type="button";b.className="item"+(sel===x.id?" on":"");
    b.innerHTML="<b>"+esc(x.n)+"</b><small>"+esc(x.e||"")+"</small><span class=\"rt\">"+R[x.r]+"</span>";b.onclick=()=>{sel=x.id;render();$("detail").scrollIntoView({behavior:"smooth",block:"nearest"})};L.appendChild(b)});
  const x=all().find(y=>y.id===sel),dt=$("detail");
  if(!x){dt.innerHTML='<div class="empty">แตะกระดูกบนโมเดล หรือเลือกจากรายการด้านล่าง เพื่อดูชื่อและหน้าที่</div>';return}
  dt.innerHTML='<h2>'+esc(x.n)+'</h2><div class="en">'+esc(x.e||"")+'</div><span class="tag">'+R[x.r]+'</span><span class="tag">'+esc(x.s)+'</span>'+(x.custom?'<span class="tag">เพิ่มเอง</span>':'')+'<p>'+esc(x.d)+'</p>';
  if(x.custom){const row=document.createElement("div");row.className="row";const del=document.createElement("button");del.className="btn alt";del.type="button";del.textContent="ลบรายการนี้";
    del.onclick=()=>{custom=custom.filter(c=>c.id!==x.id);sel=null;save();render()};row.appendChild(del);dt.appendChild(row)}
  const ix=rows.findIndex(r=>r.id===x.id);
  if(rows.length>1&&ix>=0){const nv=document.createElement("div");nv.className="row nav";
    [["‹ ก่อนหน้า",-1],["ถัดไป ›",1]].forEach(a=>{const b=document.createElement("button");b.type="button";b.className="btn alt";b.textContent=a[0];b.onclick=()=>{sel=rows[(ix+a[1]+rows.length)%rows.length].id;render()};nv.appendChild(b)});dt.appendChild(nv)}
}
$("q").addEventListener("input",e=>{qs=e.target.value;render()});
$("r").innerHTML=Object.entries(R).map(([k,v])=>'<option value="'+k+'">'+v+'</option>').join("");
$("s").innerHTML=S.map(s=>'<option>'+s+'</option>').join("");
$("f").addEventListener("submit",e=>{
  e.preventDefault();
  const x={id:"c"+Date.now(),r:$("r").value,n:$("n").value.trim(),e:$("e").value.trim(),s:$("s").value,d:$("d").value.trim(),custom:true};
  custom.push(x);mode="study";sel=x.id;fR=x.r;fS="all";qs="";$("q").value="";save();render();$("f").reset();
});
let mode="study";
const qz={r:"all",s:"all",n:5,ph:"setup",qs:[],i:0,sc:0,done:false,pick:null};
const byId=id=>all().find(x=>x.id===id);
const sh=a=>a.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(v=>v[1]);
const pool=()=>all().filter(x=>(qz.r==="all"||x.r===qz.r)&&(qz.s==="all"||x.s===qz.s));

D.splice(0,D.length,...D.filter(x=>x.s!==S[0]));
const T=THREE,V3=(x,y,z)=>new T.Vector3(x,y,z),root=new T.Group(),BL=[];
const MT=c=>new T.MeshStandardMaterial(Object.assign({color:0xe8dcc0,roughness:.65,side:T.DoubleSide},c));
const M={base:MT({}),dim:MT({transparent:true,opacity:.12,depthWrite:false}),on:MT({color:0xf4b942,emissive:0x5a3a00})};
function B(th,en,r,d,big,ms){const g=new T.Group(),id="k"+BL.length;ms=[].concat(ms);ms.forEach(m=>{m.material=M.base;g.add(m)});g.userData.id=id;root.add(g);BL.push({id,r,g,ms});D.push({id,r,n:th,e:en,s:S[0],d,custom:false,big})}
const mk=(g,x,y,z,a,b,c)=>{const m=new T.Mesh(g);m.position.set(x,y,z);if(a)m.scale.set(a,b||a,c||a);return m};
const SPH=new T.SphereGeometry(1,14,10),BOX=new T.BoxGeometry(1,1,1);
const ball=(x,y,z,a,b,c)=>mk(SPH,x,y,z,a,b,c),box=(x,y,z,a,b,c)=>mk(BOX,x,y,z,a,b,c);
const lathe=(L,r,e)=>new T.LatheGeometry([[0,0],[r*e*.8,L*.02],[r*e,L*.09],[r*1.05,L*.25],[r,L*.5],[r*1.05,L*.75],[r*e,L*.91],[r*e*.8,L*.98],[0,L]].map(p=>new T.Vector2(p[0],p[1])),10);
const seg=(A,E,r,e)=>{const d=E.clone().sub(A),m=new T.Mesh(lathe(d.length(),r,e||1.7));m.position.copy(A);m.quaternion.setFromUnitVectors(V3(0,1,0),d.normalize());return m};
const tube=(pts,r)=>new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts.map(p=>V3(p[0],p[1],p[2]))),24,r,6));
const sd=s=>s>0?" (ซ้าย)":" (ขวา)",se=s=>s>0?" (L)":" (R)";
const PR=(th,en,r,d,big,f)=>[1,-1].forEach(s=>B(th+sd(s),en+se(s),r,d,big,f(s)));
const arc=(R,t,y,z)=>{const g=new T.TorusGeometry(R,t,6,16,Math.PI);g.rotateX(Math.PI/2);return mk(g,0,y,z)};
/* ศีรษะ */
const sk=(a,b,c,d)=>{const m=new T.Mesh(new T.SphereGeometry(9.5,20,14,a,b,c,d));m.position.set(0,180,0);m.scale.set(.95,1,1.1);return m};
B("กระดูกหน้าผาก","Frontal bone","head","กระดูกส่วนหน้าผากและขอบเบ้าตาด้านบน ปกป้องสมองส่วนหน้า",true,sk(.67,1.8,0,1.35));
PR("กระดูกข้างศีรษะ","Parietal bone","head","กระดูกคู่ที่เป็นหลังคาและด้านข้างของกะโหลก",true,s=>s>0?sk(2.47,1.34,0,1.35):sk(5.61,1.34,0,1.35));
B("กระดูกท้ายทอย","Occipital bone","head","กระดูกด้านหลังและฐานกะโหลก มีรูให้ไขสันหลังผ่าน",true,sk(3.81,1.8,0,2));
PR("กระดูกขมับ","Temporal bone","head","กระดูกคู่ด้านข้าง เป็นที่อยู่ของหูชั้นกลางและชั้นใน",true,s=>s>0?sk(2.47,1.34,1.35,.65):sk(5.61,1.34,1.35,.65));
B("กระดูกขากรรไกรบน","Maxilla","head","กระดูกกลางใบหน้า เป็นที่ยึดของฟันบน",true,box(0,172,7.5,8,5,5));
PR("กระดูกโหนกแก้ม","Zygomatic bone","head","กระดูกที่ทำให้แก้มนูน เป็นส่วนหนึ่งของเบ้าตา",true,s=>ball(s*5.5,174,7,1.8,1.4,2.2));
PR("กระดูกจมูก","Nasal bone","head","กระดูกชิ้นเล็กที่เป็นสันจมูก",true,s=>box(s*.9,176.5,10.5,1.6,3.4,1));
B("กระดูกขากรรไกรล่าง","Mandible","head","กระดูกใบหน้าชิ้นเดียวที่ขยับได้ ใช้เคี้ยวและพูด",true,[arc(6.5,.9,166.5,.5),box(6.4,169,-.5,1,4,1.4),box(-6.4,169,-.5,1,4,1.4)]);
B("กระดูกไฮออยด์","Hyoid bone","neck","กระดูกรูปตัว U ที่ลอยอยู่เหนือกล่องเสียง ไม่ต่อกับกระดูกชิ้นอื่น เป็นที่ยึดของกล้ามเนื้อลิ้น",true,arc(1.8,.35,163.5,2));
/* กระดูกสันหลัง */
const zc=y=>-2+Math.sin((y-90)/18)*1.5;
const vt=(y,r,h)=>{const z=zc(y);return[mk(new T.CylinderGeometry(r,r,h,12),0,y,z),box(0,y-.2,z-r-1.3,.7,h*.8,2.8),box(0,y,z-r-.3,2*r+4.5,.6,1)]};
for(let i=0;i<7;i++)B("กระดูกสันหลังส่วนคอ C"+(i+1)+(i==0?" (แอตลาส)":i==1?" (แอกซิส)":""),"Cervical vertebra C"+(i+1)+(i==0?" (Atlas)":i==1?" (Axis)":""),"neck",i==0?"ข้อแรก รองรับกะโหลก ทำให้พยักหน้าได้":i==1?"ข้อที่สอง มีปุ่ม (dens) ให้ข้อแรกหมุน ทำให้หันศีรษะได้":"กระดูกสันหลังส่วนคอ 7 ข้อ รองรับศีรษะและให้คอเคลื่อนไหวได้",true,vt(169-i*2.2,1.5+i*.08,1.6));
for(let i=0;i<12;i++)B("กระดูกสันหลังส่วนอก T"+(i+1),"Thoracic vertebra T"+(i+1),"chest","ข้อต่อกับซี่โครง ทำให้ทรวงอกแข็งแรง มี 12 ข้อ",true,vt(153-i*2.8,1.8+i*.05,2.2));
for(let i=0;i<5;i++)B("กระดูกสันหลังส่วนเอว L"+(i+1),"Lumbar vertebra L"+(i+1),"abdomen","ข้อที่ใหญ่ที่สุด รับน้ำหนักลำตัวส่วนบน มี 5 ข้อ",true,vt(118-i*3.8,2.5+i*.1,3));
const cg=new T.ConeGeometry(4,10,10);
B("กระดูกกระเบนเหน็บ","Sacrum","pelvis","กระดูก 5 ชิ้นที่เชื่อมกัน เป็นฐานของกระดูกสันหลังและเชื่อมกับกระดูกเชิงกราน",true,(()=>{const m=mk(cg,0,96.5,-5.5,1.1,1,.45);m.rotation.z=Math.PI;return m})());
B("กระดูกก้นกบ","Coccyx","pelvis","ปลายล่างสุดของกระดูกสันหลัง เป็นที่ยึดของเอ็นและกล้ามเนื้อ",true,(()=>{const m=mk(new T.ConeGeometry(1.3,3,8),0,88,-5.5);m.rotation.z=Math.PI;return m})());
/* ทรวงอก */
for(let i=1;i<=12;i++)PR("ซี่โครงคู่ที่ "+i,"Rib "+i,"chest",i<=7?"ซี่โครงแท้ ต่อกับกระดูกสันอกผ่านกระดูกอ่อน":i<=10?"ซี่โครงเทียม ต่อกับกระดูกอ่อนของซี่ที่อยู่เหนือขึ้นไป":"ซี่โครงลอย ปลายด้านหน้าไม่ต่อกับกระดูกชิ้นใด",true,s=>{
  const y0=153-(i-1)*2.8,z0=zc(y0),w=7+7*Math.sin(Math.PI*i/13),dd=4.5+4*Math.sin(Math.PI*i/13),zm=z0-2+dd,am=i<=7?2.9:i<=10?2.4:1.3,p=[];
  for(let k=0;k<=6;k++){const a=.1+(am-.1)*k/6;p.push([s*w*Math.sin(a),y0-a*1.3,zm-dd*Math.cos(a)])}
  return tube(p,.45)});
const st=(m,x)=>{m.rotation.x=x;return m};
B("กระดูกอกส่วนบน (แมนูเบรียม)","Manubrium","chest","ส่วนบนของกระดูกสันอก ต่อกับกระดูกไหปลาร้าและซี่โครงคู่แรก",true,st(box(0,149,8.8,6,5,1.4),-.25));
B("กระดูกสันอกส่วนลำตัว","Sternum body","chest","ส่วนกลางของกระดูกสันอก ต่อกับกระดูกอ่อนซี่โครง",true,st(box(0,139.5,11.8,3.8,12,1.3),-.25));
B("ปลายกระดูกอก (ซิฟอยด์)","Xiphoid process","chest","ปลายล่างสุดของกระดูกสันอก เดิมเป็นกระดูกอ่อน",true,st(mk(new T.ConeGeometry(1.2,3.5,6),0,131.2,14.2),Math.PI));
PR("กระดูกไหปลาร้า","Clavicle","chest","กระดูกรูปตัว S เชื่อมกระดูกสันอกกับสะบัก ค้ำหัวไหล่ให้อยู่ห่างลำตัว",true,s=>tube([[s*1.5,152.5,9],[s*8,155,8.5],[s*13,154.2,5],[s*17,152.5,-1]],.85));
PR("กระดูกสะบัก","Scapula","chest","กระดูกแบนรูปสามเหลี่ยมที่หลังส่วนบน เป็นที่ยึดของกล้ามเนื้อหัวไหล่",true,s=>{const g=new T.CylinderGeometry(6,6,.7,3);g.rotateX(Math.PI/2);g.scale(1,1.5,1);return mk(g,s*12.5,145,-8.5)});
/* เชิงกราน */
PR("กระดูกสะโพก","Hip bone","pelvis","กระดูกคู่ที่ประกอบด้วยอิเลียม อิสเคียม และพิวบิส รองรับน้ำหนักลำตัว",true,s=>{const g=new T.SphereGeometry(8,14,8,0,Math.PI*2,0,Math.PI/2),m=mk(g,s*11,99,-2,1,.9,.4);m.rotation.z=-s*.3;return[m,box(s*4,87.5,6,6,1.6,2),seg(V3(s*9,91,-1),V3(s*8,83,-3),1.4,1.2)]});
/* แขน */
PR("กระดูกต้นแขน","Humerus","arm","กระดูกยาวของต้นแขน ต่อกับสะบักและข้อศอก",true,s=>[seg(V3(s*19,150,-1),V3(s*21,121,-1),1.25,1.9),ball(s*17.5,150.5,-1,2.2)]);
PR("กระดูกเรเดียส","Radius","arm","กระดูกปลายแขนด้านนิ้วหัวแม่มือ ช่วยหมุนข้อมือ",true,s=>seg(V3(s*22.5,121,0),V3(s*23,93,0),.8,2));
PR("กระดูกอัลนา","Ulna","arm","กระดูกปลายแขนด้านนิ้วก้อย ประกอบเป็นข้อศอก",true,s=>seg(V3(s*19.8,122,-.8),V3(s*19.5,94,-.5),.75,1.9));
const CP=[["สแคฟฟอยด์","Scaphoid"],["ลูเนต","Lunate"],["ไตรเควตรัล","Triquetrum"],["พิสิฟอร์ม","Pisiform"],["ทราพีเซียม","Trapezium"],["ทราพีซอยด์","Trapezoid"],["แคปปิเตต","Capitate"],["แฮมเมต","Hamate"]];
CP.forEach((c,i)=>PR("กระดูกข้อมือ "+c[0],"Carpal: "+c[1],"hand","กระดูกข้อมือชิ้นเล็ก 1 ใน 8 ชิ้น ช่วยให้ข้อมือขยับได้หลายทิศทาง",false,s=>ball(s*(24.5-(i%4)*1.5),i<4?90.8:89.2,0,.9,.8,.9)));
const FN=["นิ้วหัวแม่มือ","นิ้วชี้","นิ้วกลาง","นิ้วนาง","นิ้วก้อย"],FE=["Thumb","Index","Middle","Ring","Little"],FF=[1,1,1.1,1.05,.85],MC=[.75,1,.98,.9,.82],PN=["ปล้องต้น","ปล้องกลาง","ปล้องปลาย"],PE=["Proximal","Middle","Distal"];
for(let k=0;k<5;k++){const xx=25.5-k*1.5;
  PR("กระดูกฝ่ามือ"+FN[k],"Metacarpal: "+FE[k],"hand","กระดูกฝ่ามือ 5 ชิ้น เชื่อมข้อมือกับนิ้ว",false,s=>seg(V3(s*xx,88.2,0),V3(s*(xx+(k?0:.8)),88.2-7.5*MC[k],0),.5,1.6));
  let y=88.2-7.5*MC[k]-.3;(k?[0,1,2]:[0,2]).forEach(j=>{const y1=y;y-=[3.8,2.4,2][j]*FF[k];const y2=y;y-=.35;
    PR("กระดูก"+FN[k]+" "+PN[j],FE[k]+" "+PE[j]+" phalanx","hand","กระดูกนิ้วมือ นิ้วหัวแม่มือมี 2 ปล้อง นิ้วอื่นมีนิ้วละ 3 ปล้อง",false,s=>seg(V3(s*xx,y1,.3),V3(s*xx,y2,.3),.42,1.5))})}
/* ขา */
PR("กระดูกต้นขา","Femur","leg","กระดูกที่ยาวและแข็งแรงที่สุดของร่างกาย",true,s=>[seg(V3(s*8.5,92,0),V3(s*7.8,51,0),1.7,1.6),ball(s*6.5,93,.5,2.6),ball(s*12.5,91,-1,1.8)]);
PR("กระดูกสะบ้า","Patella","leg","กระดูกกลมที่หัวเข่า ปกป้องข้อเข่า",true,s=>ball(s*7.8,50.5,3.2,2.2,2.4,1.1));
PR("กระดูกหน้าแข้ง","Tibia","leg","กระดูกขาท่อนล่างชิ้นใหญ่ รับน้ำหนักตัวเป็นหลัก",true,s=>seg(V3(s*7.8,50,0),V3(s*7.2,9.5,0),1.3,1.7));
PR("กระดูกน่อง","Fibula","leg","กระดูกเล็กด้านนอกของขาท่อนล่าง ช่วยให้ข้อเท้ามั่นคง",true,s=>seg(V3(s*11,47,-.5),V3(s*10.3,8.5,-.5),.55,2));
[["ทาลัส","Talus",7.2,7,.5,3,2,3.5],["กระดูกส้นเท้า","Calcaneus",7.2,3.2,-4,2.4,2.8,4.5],["นาวิคิวลาร์","Navicular",5.8,3.8,4,1.8,1.6,1.3],["คิวบอยด์","Cuboid",9.4,2.8,4,1.8,1.5,1.8],["คูนิฟอร์มด้านใน","Medial cuneiform",4.6,3.3,6.6,1.2,1.3,1.2],["คูนิฟอร์มด้านกลาง","Intermediate cuneiform",6.4,3.6,6.8,1.2,1.3,1.2],["คูนิฟอร์มด้านนอก","Lateral cuneiform",8.3,3,6.6,1.2,1.3,1.2]]
 .forEach(c=>PR("กระดูกข้อเท้า "+c[0],"Tarsal: "+c[1],"foot","กระดูกข้อเท้า 1 ใน 7 ชิ้น รับน้ำหนักและส่งแรงไปยังเท้า",c[1]=="Calcaneus"||c[1]=="Talus",s=>ball(s*c[2],c[3],c[4],c[5],c[6],c[7])));
const TN=["นิ้วหัวแม่เท้า","นิ้วเท้าที่ 2","นิ้วเท้าที่ 3","นิ้วเท้าที่ 4","นิ้วก้อยเท้า"],MF=[.95,1,.95,.9,.85];
for(let k=0;k<5;k++){const xx=4.8+k*1.6,zE=8.2+8.8*MF[k];
  PR("กระดูกฝ่าเท้า "+TN[k],"Metatarsal "+(k+1),"foot","กระดูกฝ่าเท้า 5 ชิ้น ช่วยรับน้ำหนักขณะเดิน",false,s=>seg(V3(s*xx,2.6,8.2),V3(s*xx,1.7,zE),.6,1.6));
  let z=zE+.3;(k?[0,1,2]:[0,2]).forEach(j=>{const z1=z;z+=(k?[2.2,1.5,1.2][j]:[3,0,2.4][j]);const z2=z;z+=.3;
    PR("กระดูก"+TN[k]+" "+PN[j],"Toe "+(k+1)+" "+PE[j]+" phalanx","foot","กระดูกนิ้วเท้า นิ้วหัวแม่เท้ามี 2 ปล้อง นิ้วอื่นมีนิ้วละ 3 ปล้อง",false,s=>seg(V3(s*xx,1.7,z1),V3(s*xx,1.4,z2),.45,1.5))})}

/* กล้อง การหมุน และการเลือก */
let ren;try{ren=new T.WebGLRenderer({canvas:$("cv"),antialias:true,alpha:true});ren.setPixelRatio(Math.min(window.devicePixelRatio||1,2))}catch(e){ren=null;$("cv").hidden=true;$("stage").insertAdjacentHTML("beforeend",'<p style="padding:16px;color:#dde">อุปกรณ์หรือเบราว์เซอร์นี้เปิดโมเดล 3 มิติไม่ได้</p>')}
const sc=new T.Scene(),cam=new T.PerspectiveCamera(35,1,1,2000),vw={y:0,p:.08,d:340,t:V3(0,95,0)},gl={t:V3(0,95,0),d:340};
let auto=false,drag=false,fk="";
sc.add(new T.AmbientLight(0xffffff,.55),new T.HemisphereLight(0xffffff,0x556677,.5),cam,root);
const dl=new T.DirectionalLight(0xffffff,.75);dl.position.set(.6,1,1);cam.add(dl);
const cd=d=>Math.max(25,Math.min(450,d));
function rs(){if(!ren)return;const e=$("stage"),w=e.clientWidth,h=e.clientHeight;ren.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
if(window.ResizeObserver&&ren)new ResizeObserver(rs).observe($("stage"));rs();
function loop(){requestAnimationFrame(loop);if(!ren)return;
  if(auto&&!drag)vw.y+=.006;
  vw.t.lerp(gl.t,.1);vw.d+=(gl.d-vw.d)*.1;
  cam.position.set(vw.t.x+vw.d*Math.sin(vw.y)*Math.cos(vw.p),vw.t.y+vw.d*Math.sin(vw.p),vw.t.z+vw.d*Math.cos(vw.y)*Math.cos(vw.p));cam.lookAt(vw.t);
  const dg=Math.round(((vw.y*180/Math.PI)%360+360)%360);$("rot").value=dg;$("deg").textContent=dg+"°";
  ren.render(sc,cam)}
loop();
function hl(){
  const reg=mode==="study"?fR:"all";
  BL.forEach(b=>{const m=b.id===sel?M.on:reg!=="all"&&b.r!==reg?M.dim:M.base;b.ms.forEach(x=>x.material=m)});
  const key=(sel||"")+"|"+reg;
  if(key!==fk){fk=key;const bx=new T.Box3();
    BL.forEach(b=>{if(sel?b.id===sel:reg==="all"||b.r===reg)bx.expandByObject(b.g)});
    const em=bx.isEmpty();if(em)bx.set(V3(-30,0,-15),V3(30,190,25));const sz=bx.getSize(V3(0,0,0));gl.t.copy(bx.getCenter(V3(0,0,0)));
    gl.d=sel&&!em?Math.max(45,sz.length()*2.4):reg==="all"||em?340:Math.max(110,sz.length()*2.2)}
}
const cv=$("cv"),P=new Map(),rc=new T.Raycaster();let mv=0,pd=0;
const pdist=()=>{const a=[...P.values()];return Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1])||1};
cv.addEventListener("pointerdown",e=>{cv.setPointerCapture(e.pointerId);P.set(e.pointerId,[e.clientX,e.clientY]);mv=0;drag=true;if(P.size===2)pd=pdist()});
cv.addEventListener("pointermove",e=>{const o=P.get(e.pointerId);if(!o)return;const dx=e.clientX-o[0],dy=e.clientY-o[1];P.set(e.pointerId,[e.clientX,e.clientY]);
  if(P.size===1){vw.y-=dx*.008;vw.p=Math.max(-1.2,Math.min(1.2,vw.p+dy*.006));mv+=Math.abs(dx)+Math.abs(dy)}
  else{const n=pdist();gl.d=vw.d=cd(vw.d*pd/n);pd=n;mv=99}});
const up=e=>{if(!P.has(e.pointerId))return;P.delete(e.pointerId);if(P.size)return;drag=false;
  if(mv<6&&e.type==="pointerup"){const r=cv.getBoundingClientRect();rc.setFromCamera({x:(e.clientX-r.left)/r.width*2-1,y:-((e.clientY-r.top)/r.height)*2+1},cam);
    const h=rc.intersectObjects(root.children,true);if(h.length){let o=h[0].object;while(o&&!o.userData.id)o=o.parent;if(o)pick(o.userData.id)}}};
cv.addEventListener("pointerup",up);cv.addEventListener("pointercancel",up);
cv.addEventListener("wheel",e=>{e.preventDefault();gl.d=vw.d=cd(vw.d*(1+e.deltaY*.001))},{passive:false});
$("rot").addEventListener("input",e=>{vw.y=e.target.value*Math.PI/180;auto=false;$("auto").classList.remove("on")});
document.querySelectorAll("[data-v]").forEach(b=>b.onclick=()=>{vw.y=b.dataset.v*Math.PI/180});
$("auto").onclick=()=>{auto=!auto;$("auto").classList.toggle("on",auto)};
$("rst").onclick=()=>{vw.y=0;vw.p=.08;sel=null;fR="all";render()};

function pick(id){
  if(mode==="quiz"){const q=qz.qs[qz.i];if(qz.ph==="play"&&q&&q.t==="t")ans(id===q.x.id,id);return}
  if(mode==="add")mode="study";const x=byId(id);if(!x)return;sel=id;fR=x.r;fS="all";qs="";$("q").value="";render();
}
function startQ(){
  qz.qs=sh(pool()).slice(0,qz.n).map(x=>{
    const ts=["d"];if(x.e)ts.push("e");if(x.big)ts.push("t");
    const t=ts[Math.floor(Math.random()*ts.length)];
    let o=[];
    if(t!=="t"){
      o=sh(all().filter(y=>y.id!==x.id&&(t!=="e"||y.e))).sort((a,b)=>(b.s===x.s)-(a.s===x.s)).slice(0,3).concat([x]);
      o=sh(o).map(y=>({id:y.id,l:t==="e"?y.e:y.n}));
    }
    const p=t==="d"?"ข้อมูลนี้คือส่วนไหน: "+x.d:t==="e"?"ชื่อภาษาอังกฤษของ “"+x.n+"” คือข้อใด":"แตะ “"+x.n+"” บนโมเดล 3 มิติ (หมุนดูได้)";
    return {x,t,o,p};
  });
  qz.i=0;qz.sc=0;qz.done=false;qz.pick=null;qz.ph="play";sel=null;
}
function ans(ok,p){if(qz.done)return;qz.done=true;if(ok)qz.sc++;qz.pick=p;sel=qz.qs[qz.i].x.id;render()}
function renderQuiz(){
  const Q=$("quizBox");
  if(qz.ph==="setup"){
    Q.innerHTML='<h2 style="margin:0 0 10px;font-size:1.15rem">ตั้งค่าแบบทดสอบ</h2><label>ส่วนของร่างกาย</label><div class="tabs" id="qr"></div><label>ระบบ</label><div class="tabs" id="qs2"></div><label>จำนวนข้อ</label><div class="tabs" id="qn"></div><p id="qc" class="hint" style="text-align:left"></p><div class="row"><button class="btn" id="go" type="button">เริ่มทดสอบ</button></div>';
    tabs($("qr"),[["all","ทุกส่วน"],...Object.entries(R)],qz.r,k=>{qz.r=k;render()});
    tabs($("qs2"),[["all","ทุกระบบ"],...S.map(s=>[s,s])],qz.s,k=>{qz.s=k;render()});
    tabs($("qn"),[[5,"5 ข้อ"],[10,"10 ข้อ"],[20,"20 ข้อ"]],qz.n,k=>{qz.n=k;render()});
    const c=pool().length;
    $("qc").textContent=c?"หมวดนี้มี "+c+" รายการ ข้อสอบมีแบบเลือกชื่อ เลือกภาษาอังกฤษ และแตะกระดูกบนโมเดล 3 มิติ":"หมวดนี้ยังไม่มีรายการ ลองเลือกหมวดอื่น";
    $("go").disabled=!c;$("go").onclick=()=>{startQ();render()};
    return;
  }
  if(qz.ph==="end"){
    Q.innerHTML='<h2 style="margin:0 0 6px;font-size:1.25rem">ได้ '+qz.sc+' จาก '+qz.qs.length+' ข้อ</h2><p>'+(qz.sc===qz.qs.length?"ยอดเยี่ยม ตอบถูกทุกข้อ":qz.sc>=qz.qs.length/2?"ทำได้ดี ลองทบทวนข้อที่พลาดแล้วทำอีกครั้ง":"ลองกลับไปดูโหมดเรียนรู้ แล้วมาทำใหม่")+'</p><div class="row"><button class="btn" id="again" type="button">ทำอีกครั้ง</button><button class="btn alt" id="chg" type="button">เปลี่ยนหมวด</button></div>';
    $("again").onclick=()=>{startQ();render()};$("chg").onclick=()=>{qz.ph="setup";sel=null;render()};
    return;
  }
  const q=qz.qs[qz.i],x=q.x;
  Q.innerHTML='<div class="bar"><i style="width:'+(qz.i/qz.qs.length*100)+'%"></i></div><div style="color:var(--mu)">ข้อ '+(qz.i+1)+' จาก '+qz.qs.length+' · คะแนน '+qz.sc+'</div><h2 style="font-size:1.1rem;margin:4px 0 10px;max-width:60ch">'+esc(q.p)+'</h2>';
  if(q.t==="t"&&!qz.done){const h=document.createElement("p");h.className="hint";h.style.textAlign="left";h.textContent="แตะกระดูกชิ้นที่ถูกต้องบนโมเดล 3 มิติ (หมุนดูได้)";Q.appendChild(h)}
  if(q.t!=="t"){
    const box=document.createElement("div");box.className="list";
    q.o.forEach(o=>{const b=document.createElement("button");b.type="button";b.className="item";b.innerHTML="<b>"+esc(o.l)+"</b>";
      if(qz.done){if(o.id===x.id)b.classList.add("good");else if(o.id===qz.pick)b.classList.add("bad")}
      b.onclick=()=>ans(o.id===x.id,o.id);box.appendChild(b)});
    Q.appendChild(box);
  }
  if(qz.done){
    const ok=qz.pick===x.id,fb=document.createElement("div");fb.className="fb";
    const w=q.t==="t"&&!ok&&byId(qz.pick)?" (คุณแตะ: "+byId(qz.pick).n+")":"";
    fb.textContent=(ok?"ถูกต้อง! ":"ยังไม่ถูก"+w+" ")+x.n+(x.e?" ("+x.e+") ":" ")+"– "+x.d;
    Q.appendChild(fb);
    const r=document.createElement("div");r.className="row";const nb=document.createElement("button");nb.type="button";nb.className="btn";
    nb.textContent=qz.i+1<qz.qs.length?"ข้อต่อไป":"ดูคะแนน";
    nb.onclick=()=>{if(qz.i+1<qz.qs.length){qz.i++;qz.done=false;qz.pick=null;sel=null}else{qz.ph="end";sel=null}render()};
    r.appendChild(nb);Q.appendChild(r);
  }
}
function render(){
  if(sel&&sheet===0)setSheet(1);
  tabs($("modeTabs"),[["study","สำรวจ"],["quiz","ทดสอบ"],["add","เพิ่มเอง"]],mode,k=>{mode=k;sel=null;if(sheet===0)setSheet(1);render()});
  $("study1").hidden=$("detail").hidden=mode!=="study";$("study3").hidden=mode!=="add";
  $("quizBox").hidden=mode!=="quiz";
  renderStudy();
  $("hint").textContent=mode==="quiz"?"โหมดทดสอบ":fR==="all"?"ลากเพื่อหมุน เลื่อนหรือบีบเพื่อซูม แตะกระดูกเพื่อดูรายละเอียด":"กำลังดู: "+R[fR];
  if(mode==="quiz")renderQuiz();
  hl();
}
let sheet=1;
function setSheet(n){sheet=n;$("app").style.setProperty("--sh",["84px","42vh","80vh"][n])}
$("grab").onclick=()=>setSheet(sheet===1?2:sheet===2?0:1);
setSheet(1);
render();