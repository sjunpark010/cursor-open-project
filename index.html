<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>GC MediAI TMS.v2</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#f5f6fa;--sidebar:#0f172a;--accent:#6366f1;
  --surface:#fff;--surface2:#f8f9fc;--border:#e8eaef;
  --text:#1e2433;--text2:#6b7280;--text3:#9ca3af;
  --pass:#10b981;--pass-bg:#ecfdf5;--fail:#ef4444;--fail-bg:#fef2f2;
  --warn:#f59e0b;--warn-bg:#fffbeb;--block:#8b5cf6;--block-bg:#f5f3ff;
  --info:#3b82f6;--info-bg:#eff6ff;
  --shadow:0 1px 3px rgba(0,0,0,.07),0 4px 12px rgba(0,0,0,.05);
  --shadow-lg:0 4px 16px rgba(0,0,0,.1),0 12px 40px rgba(0,0,0,.08);
  --radius:10px;--radius-sm:6px;
}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);font-size:13px;display:flex;height:100vh;overflow:hidden}
.sb{width:210px;min-width:210px;background:var(--sidebar);display:flex;flex-direction:column;overflow-y:auto}
.sb::-webkit-scrollbar{width:4px}.sb::-webkit-scrollbar-thumb{background:rgba(255,255,255,.1);border-radius:2px}
.sb-logo{padding:20px 16px 16px;border-bottom:1px solid rgba(255,255,255,.06)}
.sb-logo-inner{display:flex;align-items:center;gap:10px}
.sb-logo-icon{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#6366f1,#818cf8);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.sb-logo h1{font-size:13px;font-weight:700;color:#fff}
.sb-logo p{font-size:10px;color:rgba(255,255,255,.35);margin-top:1px}
.sb-sec{font-size:9.5px;font-weight:600;color:rgba(255,255,255,.25);letter-spacing:.08em;text-transform:uppercase;padding:16px 16px 4px}
.sb-item{display:flex;align-items:center;gap:9px;padding:9px 16px;color:rgba(255,255,255,.5);font-size:12px;cursor:pointer;margin:1px 8px;border-radius:7px;transition:all .15s}
.sb-item:hover{background:rgba(255,255,255,.07);color:rgba(255,255,255,.85)}
.sb-item.active{background:rgba(99,102,241,.2);color:#a5b4fc;font-weight:600;position:relative}
.sb-item.active::before{content:'';position:absolute;left:-8px;top:50%;transform:translateY(-50%);width:3px;height:18px;background:#6366f1;border-radius:0 2px 2px 0}
.sb-item.disabled{opacity:.3;cursor:not-allowed;pointer-events:none}
.soon{margin-left:auto;font-size:9px;background:rgba(99,102,241,.25);padding:1px 6px;border-radius:8px;color:rgba(165,180,252,.7)}
.sb-bottom{padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);margin-top:auto}
.sb-bottom span{font-size:10px;color:rgba(255,255,255,.25)}
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.topbar{background:var(--surface);padding:0 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;height:56px}
.topbar-left{display:flex;align-items:center;gap:12px}
.topbar h2{font-size:15px;font-weight:700;color:var(--text)}
.topbar-badge{font-size:11px;font-weight:600;color:var(--text2);background:var(--surface2);padding:3px 9px;border-radius:20px;border:1px solid var(--border)}
.content{flex:1;overflow-y:auto;padding:24px}
.content::-webkit-scrollbar{width:6px}.content::-webkit-scrollbar-thumb{background:#dde1ea;border-radius:3px}
.page{display:none;animation:fadeUp .2s ease}.page.active{display:block}
@keyframes fadeUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.btn{padding:8px 16px;border:none;border-radius:var(--radius-sm);cursor:pointer;font-size:12px;font-weight:600;transition:all .15s;display:inline-flex;align-items:center;gap:6px}
.btn-primary{background:var(--accent);color:#fff;box-shadow:0 2px 8px rgba(99,102,241,.3)}
.btn-primary:hover{background:#4f46e5}
.btn-sm{padding:4px 10px;font-size:11px;border-radius:5px;border:none;cursor:pointer;font-weight:600;transition:all .15s}
.btn-edit{background:#eff6ff;color:#3b82f6}.btn-edit:hover{background:#dbeafe}
.btn-del{background:#fef2f2;color:#ef4444}.btn-del:hover{background:#fee2e2}
.btn-detail{background:#f0fdf4;color:#10b981}.btn-detail:hover{background:#dcfce7}
.btn-cancel{background:var(--surface2);color:var(--text2);border:1px solid var(--border)}
/* Pie Cards */
.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:22px}
.card{background:var(--surface);border-radius:var(--radius);padding:20px 24px;box-shadow:var(--shadow);display:flex;align-items:center;gap:24px;transition:transform .15s,box-shadow .15s}
.card:hover{transform:translateY(-2px);box-shadow:var(--shadow-lg)}
.pie-wrap{position:relative;flex-shrink:0}
.pie-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none}
.pie-total{font-size:22px;font-weight:800;color:var(--text);letter-spacing:-.02em;line-height:1}
.pie-sub{font-size:10px;font-weight:600;color:var(--text3);margin-top:2px}
.pie-info{flex:1;min-width:0}
.pie-info h3{font-size:13px;font-weight:700;color:var(--text);margin-bottom:12px}
.legend{display:flex;flex-direction:column;gap:7px}
.leg-item{display:flex;align-items:center;gap:8px}
.leg-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.leg-label{font-size:11.5px;color:var(--text2);flex:1;font-weight:500}
.leg-val{font-size:12px;font-weight:700;color:var(--text)}
.leg-pct{font-size:10.5px;color:var(--text3);margin-left:3px}
/* Dash */
.drow{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:18px}
.dbox{background:var(--surface);border-radius:var(--radius);padding:18px 20px;box-shadow:var(--shadow);flex:1;min-width:220px}
.dbox-title{display:flex;align-items:center;gap:8px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--border)}
.dbox-title h3{font-size:12px;font-weight:700;color:var(--text);flex:1}
.dbox-title .cnt{font-size:11px;color:var(--text3)}
.bar-row{display:flex;align-items:center;gap:10px;margin-bottom:9px}
.bar-lbl{font-size:11px;color:var(--text2);width:52px;text-align:right;flex-shrink:0;font-weight:500}
.bar-track{flex:1;background:var(--surface2);border-radius:99px;height:14px;overflow:hidden}
.bar-fill{height:100%;border-radius:99px;display:flex;align-items:center;justify-content:flex-end;padding-right:6px;min-width:20px}
.bar-fill span{font-size:9.5px;font-weight:700;color:#fff}
.bar-pct{font-size:11px;color:var(--text3);width:28px;text-align:right;font-weight:600}
.recent-item{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:7px;cursor:pointer;margin-bottom:3px;transition:background .12s}
.recent-item:hover{background:var(--surface2)}
.rid{font-family:monospace;font-size:10.5px;color:var(--text3);width:66px;flex-shrink:0}
.rtitle{flex:1;font-size:12px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
/* Toolbar */
.tb{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center}
.tb input,.tb select{padding:7px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;background:var(--surface);color:var(--text);font-family:inherit;transition:border-color .15s}
.tb input:focus,.tb select:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(99,102,241,.1)}
.tb input[type=text]{width:180px}
.tb-right{margin-left:auto}
.search-wrap{position:relative}
.search-wrap input{padding-left:30px}
.search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--text3);font-size:13px;pointer-events:none}
/* Table */
.tw{overflow-x:auto;border-radius:var(--radius);box-shadow:var(--shadow)}
table{width:100%;border-collapse:collapse;background:var(--surface);border-radius:var(--radius);overflow:hidden;table-layout:fixed}
thead{position:sticky;top:0;z-index:2}
th{background:#1e2433;color:rgba(255,255,255,.75);padding:10px 12px;text-align:left;font-size:11px;font-weight:600;white-space:nowrap;position:relative;user-select:none;cursor:pointer;letter-spacing:.02em}
th:last-child{cursor:default}
th:hover:not(:last-child){background:#252d40;color:#fff}
th .si::after{content:' ⇅';opacity:.3;font-size:9px}
th.sa .si::after{content:' ▲';opacity:.9;color:#818cf8}
th.sd .si::after{content:' ▼';opacity:.9;color:#818cf8}
.rz{position:absolute;right:0;top:0;width:4px;height:100%;cursor:col-resize;background:rgba(255,255,255,.1)}
.rz:hover,.rz.on{background:rgba(99,102,241,.6)}
td{padding:9px 12px;border-bottom:1px solid var(--border);font-size:12px;vertical-align:middle;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
tr:last-child td{border-bottom:none}
.idc{font-family:monospace;font-size:11px;color:var(--accent);font-weight:600}
.dp{font-size:10.5px;color:var(--text3);margin-top:2px}
/* TC 드롭다운 */
.tc-row{cursor:pointer}
.tc-row td{transition:background .1s}
.tc-row:hover td{background:#f8f9fc}
.tc-row.open td{background:#f0f1ff}
.tc-expand-td{padding:0 !important;border-bottom:1px solid var(--border)}
.expand-inner{display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:18px 20px;background:#fafbff;border-top:2px solid #e0e3f8}
.expand-field{display:flex;flex-direction:column;gap:5px;margin-bottom:2px}
.expand-field label{font-size:11px;font-weight:600;color:var(--text2)}
.expand-textarea{width:100%;padding:9px 12px;border:1px solid var(--border);border-radius:7px;font-size:12px;font-family:inherit;color:var(--text);background:var(--surface);resize:vertical;line-height:1.7;transition:border-color .15s}
.expand-textarea:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(99,102,241,.1)}
.expand-input{width:100%;padding:7px 10px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit;color:var(--text);background:var(--surface);transition:border-color .15s}
.expand-input:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(99,102,241,.1)}
.expand-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
.expand-save-bar{display:flex;justify-content:flex-end;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid var(--border)}
.chevron{display:inline-block;transition:transform .2s;font-size:11px;color:var(--text3);margin-left:4px}
.open .chevron{transform:rotate(180deg)}
/* 상태 버튼 */
.status-btns{display:flex;gap:6px;flex-wrap:wrap;margin-top:2px}
.status-btn{padding:5px 12px;border-radius:99px;font-size:11px;font-weight:600;cursor:pointer;border:2px solid var(--border);background:var(--surface2);color:var(--text2);transition:all .15s}
.sel-미수행{color:#64748b !important;background:#f1f5f9 !important;border-color:#64748b !important}
.sel-통과{color:var(--pass) !important;background:var(--pass-bg) !important;border-color:var(--pass) !important}
.sel-실패{color:var(--fail) !important;background:var(--fail-bg) !important;border-color:var(--fail) !important}
.sel-블로킹{color:var(--block) !important;background:var(--block-bg) !important;border-color:var(--block) !important}
/* 토글 */
.toggle-row{display:flex;align-items:center;gap:8px;margin-bottom:6px}
.toggle-row span{font-size:11px;font-weight:600;color:var(--text2)}
.tog{position:relative;width:34px;height:18px;flex-shrink:0;cursor:pointer}
.tog-track{position:absolute;inset:0;background:#d1d5db;border-radius:99px;transition:background .2s}
.tog-thumb{position:absolute;width:12px;height:12px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .2s;box-shadow:0 1px 3px rgba(0,0,0,.2)}
.tog.on .tog-track{background:var(--accent)}
.tog.on .tog-thumb{transform:translateX(16px)}
/* 요구사항 카드 그리드 */
.req-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;padding:4px 2px}
.req-card{background:var(--surface);border-radius:var(--radius);padding:16px 18px;box-shadow:var(--shadow);cursor:pointer;border:2px solid transparent;transition:all .15s;position:relative;overflow:hidden}
.req-card:hover{border-color:var(--accent);transform:translateY(-2px);box-shadow:var(--shadow-lg)}
.req-card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:6px}
.req-card-id{font-family:monospace;font-size:11px;color:var(--accent);font-weight:700}
.req-card-badges{display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end}
.req-card-title{font-size:13px;font-weight:700;color:var(--text);margin-bottom:6px;line-height:1.4}
.req-card-desc{font-size:11.5px;color:var(--text3);margin-bottom:12px;line-height:1.5;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.req-card-footer{display:flex;align-items:center;gap:6px}
.req-card-tc{font-size:11px;font-weight:700;color:var(--accent);background:#ede9fe;padding:2px 8px;border-radius:99px;margin-left:auto}
.req-card-pass{position:absolute;bottom:0;left:0;height:3px;background:var(--pass);transition:width .3s}
/* 브레드크럼 */
.tc-breadcrumb{display:flex;align-items:center;gap:8px;margin-bottom:16px;padding:10px 14px;background:var(--surface);border-radius:var(--radius-sm);box-shadow:var(--shadow);font-size:12px}
.tc-breadcrumb .bc-back{cursor:pointer;color:var(--accent);font-weight:600;display:flex;align-items:center;gap:5px;padding:4px 8px;border-radius:5px;transition:background .15s}
.tc-breadcrumb .bc-back:hover{background:var(--surface2)}
.tc-breadcrumb .bc-sep{color:var(--text3)}
.tc-breadcrumb .bc-cur{color:var(--text);font-weight:600}
.tc-breadcrumb .bc-meta{margin-left:auto;display:flex;gap:6px}
.tc-new-row td{background:#eef0ff;padding:6px 8px}
.tc-new-row td input,.tc-new-row td select{width:100%;padding:5px 7px;border:1px solid var(--accent);border-radius:5px;font-size:12px;font-family:inherit;background:#fff}
/* Badges */
.badge{display:inline-flex;align-items:center;padding:3px 9px;border-radius:99px;font-size:11px;font-weight:600;white-space:nowrap;gap:4px}
.badge::before{content:'';width:5px;height:5px;border-radius:50%;background:currentColor;opacity:.6}
.s-미수행{background:#f1f5f9;color:#64748b}
.s-통과{background:var(--pass-bg);color:var(--pass)}
.s-실패{background:var(--fail-bg);color:var(--fail)}
.s-블로킹{background:var(--block-bg);color:var(--block)}
.s-신규{background:var(--fail-bg);color:var(--fail)}
.s-진행중{background:var(--warn-bg);color:var(--warn)}
.s-해결됨{background:var(--pass-bg);color:var(--pass)}
.s-종료{background:#f1f5f9;color:#94a3b8}
.s-보류{background:var(--info-bg);color:var(--info)}
.s-확정{background:var(--pass-bg);color:var(--pass)}
.s-검토중{background:var(--warn-bg);color:var(--warn)}
.sev-높음{background:var(--fail-bg);color:var(--fail)}
.sev-중간{background:var(--warn-bg);color:var(--warn)}
.sev-낮음{background:var(--pass-bg);color:var(--pass)}
.pri-상{background:var(--fail-bg);color:var(--fail)}
.pri-중{background:var(--warn-bg);color:var(--warn)}
.pri-하{background:var(--pass-bg);color:var(--pass)}
.pri-높음{background:var(--fail-bg);color:var(--fail)}
.pri-중간{background:var(--warn-bg);color:var(--warn)}
.pri-낮음{background:var(--pass-bg);color:var(--pass)}
.type-정상{background:var(--pass-bg);color:var(--pass)}
.type-비정상{background:var(--fail-bg);color:var(--fail)}
.type-경계값{background:var(--warn-bg);color:var(--warn)}
.type-보안{background:var(--info-bg);color:var(--info)}
.area-tag{background:var(--surface2);color:var(--accent);border-radius:5px;padding:3px 8px;font-size:11px;font-weight:600;border:1px solid rgba(99,102,241,.15)}
.cnt-badge{background:var(--surface2);color:var(--text2);border-radius:99px;padding:1px 7px;font-size:10.5px;font-weight:600;border:1px solid var(--border)}
/* Modal */
.ov{display:none;position:fixed;inset:0;background:rgba(15,23,42,.5);z-index:100;align-items:center;justify-content:center;backdrop-filter:blur(4px)}
.ov.show{display:flex}
.modal{background:var(--surface);border-radius:14px;padding:26px;width:580px;max-width:95vw;max-height:92vh;overflow-y:auto;box-shadow:var(--shadow-lg);animation:modalIn .2s ease}
@keyframes modalIn{from{opacity:0;transform:scale(.97) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}
.modal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.modal-header h2{font-size:16px;font-weight:700;color:var(--text)}
.modal-close{width:28px;height:28px;border-radius:6px;background:var(--surface2);border:1px solid var(--border);cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--text2);font-size:14px;transition:all .15s}
.modal-close:hover{background:var(--fail-bg);color:var(--fail);border-color:var(--fail)}
.fr{display:flex;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.fg{display:flex;flex-direction:column;gap:5px;flex:1;min-width:140px}
.fg label{font-size:11px;font-weight:600;color:var(--text2)}
.fg input,.fg select,.fg textarea{padding:8px 10px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit;color:var(--text);background:var(--surface);transition:border-color .15s}
.fg input:focus,.fg select:focus,.fg textarea:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(99,102,241,.1)}
.fg textarea{resize:vertical;min-height:70px}
.ma{display:flex;gap:8px;justify-content:flex-end;margin-top:20px;padding-top:16px;border-top:1px solid var(--border)}
.dm{width:680px}
.dmeta{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}
.mi{background:var(--surface2);border-radius:6px;padding:5px 11px;font-size:11px;border:1px solid var(--border)}
.mi span{color:var(--text3)}.mi strong{color:var(--text);margin-left:3px}
.ddesc{background:var(--surface2);border-radius:8px;padding:14px;margin-bottom:16px;font-size:12px;white-space:pre-wrap;line-height:1.7;color:var(--text);border:1px solid var(--border)}
.sec-title{font-size:12px;font-weight:600;color:var(--text2);margin-bottom:8px;display:flex;align-items:center;gap:6px}
.igrid{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px}
.ithumb{position:relative;width:84px;height:66px;border-radius:7px;overflow:hidden;border:1px solid var(--border);cursor:pointer}
.ithumb img{width:100%;height:100%;object-fit:cover}
.ithumb .di{position:absolute;top:3px;right:3px;background:rgba(15,23,42,.7);color:#fff;border:none;border-radius:50%;width:17px;height:17px;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center}
.iupbtn{width:84px;height:66px;border:2px dashed var(--border);border-radius:7px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;color:var(--text3);font-size:10px;gap:4px;background:var(--surface2)}
.iupbtn:hover{border-color:var(--accent);color:var(--accent)}
.clist{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;max-height:190px;overflow-y:auto}
.ci{background:var(--surface2);border-radius:8px;padding:10px 12px;border:1px solid var(--border)}
.ctop{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
.cauth{font-size:11px;font-weight:700;color:var(--accent);display:flex;align-items:center;gap:5px}
.cavatar{width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#818cf8);display:flex;align-items:center;justify-content:center;font-size:9px;color:#fff;font-weight:700}
.ctime{font-size:10px;color:var(--text3)}
.cdel{background:none;border:none;color:var(--border);cursor:pointer;font-size:12px}
.cdel:hover{color:var(--fail)}
.ctxt{font-size:12px;color:var(--text);line-height:1.6}
.cinrow{display:flex;gap:7px}
.cinrow input{flex:1;padding:8px 10px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit}
.cinrow input:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px rgba(99,102,241,.1)}
.ninput{width:90px !important;flex:0 0 90px !important}
.divider{height:1px;background:var(--border);margin:14px 0}
.lb{display:none;position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:200;align-items:center;justify-content:center}
.lb.show{display:flex}
.lb img{max-width:90vw;max-height:90vh;border-radius:8px}
.lbx{position:absolute;top:18px;right:22px;color:#fff;font-size:26px;cursor:pointer;opacity:.7}
.lbx:hover{opacity:1}
.toast-wrap{position:fixed;bottom:22px;right:22px;z-index:300;display:flex;flex-direction:column;gap:8px}
.toast{background:#1e2433;color:#fff;padding:12px 16px;border-radius:10px;font-size:12px;font-weight:500;box-shadow:0 8px 24px rgba(0,0,0,.2);animation:toastIn .3s ease;max-width:290px;border-left:3px solid var(--accent)}
@keyframes toastIn{from{transform:translateX(110%);opacity:0}to{transform:translateX(0);opacity:1}}
.empty{text-align:center;padding:48px 20px;color:var(--text3);font-size:13px}
.empty-icon{font-size:36px;margin-bottom:10px}
</style>
</head>
<body>

<div class="sb">
  <div class="sb-logo">
    <div class="sb-logo-inner">
      <div class="sb-logo-icon">🧪</div>
      <div><h1>GC MediAI TMS.v2</h1><p>TC · 결함 · 요구사항</p></div>
    </div>
  </div>
  <div class="sb-sec">Overview</div>
  <div class="sb-item active" onclick="nav('dash')" id="n-dash">Dashboard</div>
  <div class="sb-sec">요구사항</div>
  <div class="sb-item" onclick="nav('req')" id="n-req">Requirements</div>
  <div class="sb-item" onclick="nav('ai-req')" id="n-ai-req">AI Requirements Analysis</div>
  <div class="sb-sec">테스트케이스</div>
  <div class="sb-item" onclick="nav('tc')" id="n-tc">Test Case</div>
  <div class="sb-item" onclick="nav('smart-tc')" id="n-smart-tc">Smart TC Generator</div>

  <div class="sb-sec">결함</div>
  <div class="sb-item" onclick="nav('def')" id="n-def">Defect List</div>
  <div class="sb-item" onclick="nav('def-stat')" id="n-def-stat">Defect Statistics</div>
  <div class="sb-sec">추적성</div>
  <div class="sb-item" onclick="nav('rtm')" id="n-rtm">RTM</div>
  <div class="sb-sec">설정</div>
  <div class="sb-item" onclick="nav('cfg')" id="n-cfg">Settings</div>
  <div class="sb-bottom"><span>v2.0 · 로컬 저장</span></div>
</div>

<div class="main">
  <div class="topbar">
    <div class="topbar-left">
      <h2 id="tbtitle">📊 대시보드</h2>
      <span class="topbar-badge" id="topbarBadge" style="display:none"></span>
    </div>
  </div>
  <div class="content">

    <!-- 대시보드 -->
    <div class="page active" id="p-dash">
      <div class="cards" id="dashCards"></div>
      <div class="drow">
        <div class="dbox" style="flex:2">
          <div class="dbox-title"><h3>📊 TC 상태 현황</h3><span class="cnt" id="tcChartCnt"></span></div>
          <div id="tcChart"></div>
        </div>
        <div class="dbox" style="flex:1">
          <div class="dbox-title"><h3>🐛 결함 심각도</h3><span class="cnt" id="defChartCnt"></span></div>
          <div id="defChart"></div>
        </div>
      </div>
      <div class="drow">
        <div class="dbox" style="flex:1">
          <div class="dbox-title"><h3>❌ 실패 TC</h3></div>
          <div id="recentTC"></div>
        </div>
        <div class="dbox" style="flex:1">
          <div class="dbox-title"><h3>⚠️ 미해결 높음 심각도 결함</h3></div>
          <div id="highDef"></div>
        </div>
      </div>
    </div>

    <!-- 요구사항 -->
    <div class="page" id="p-req">
      <div class="tb">
        <div class="search-wrap"><span class="search-icon">🔍</span><input type="text" id="reqSearch" placeholder="ID / 제목 검색"></div>
        <select id="reqFArea"><option value="">전체 영역</option></select>
        <select id="reqFPri"><option value="">전체 우선순위</option><option>상</option><option>중</option><option>하</option></select>
        <select id="reqFStatus"><option value="">전체 상태</option><option>확정</option><option>검토중</option><option>보류</option></select>
        <div class="tb-right"><button class="btn btn-primary" onclick="openModal('req')">＋ 요구사항 등록</button></div>
      </div>
      <div class="tw">
        <table id="reqTable">
          <colgroup><col style="width:90px"><col style="width:100px"><col style="width:180px"><col style="width:70px"><col style="width:80px"><col style="width:70px"><col style="width:120px"></colgroup>
          <thead><tr>
            <th data-col="id">요구사항 ID<span class="si"></span><div class="rz"></div></th>
            <th data-col="area">영역<span class="si"></span><div class="rz"></div></th>
            <th data-col="title">제목<span class="si"></span><div class="rz"></div></th>
            <th data-col="priority">우선순위<span class="si"></span><div class="rz"></div></th>
            <th data-col="status">상태<span class="si"></span><div class="rz"></div></th>
            <th data-col="tcCount">TC 수<span class="si"></span><div class="rz"></div></th>
            <th>관리</th>
          </tr></thead>
          <tbody id="reqList"></tbody>
        </table>
        <div class="empty" id="reqEmpty" style="display:none"><div class="empty-icon">📋</div>등록된 요구사항이 없습니다.</div>
      </div>
    </div>

    <!-- TC 목록 -->
    <div class="page" id="p-tc">
      <!-- 0단계: 연도 선택 -->
      <div id="tc-year-view">
        <div class="tb">
          <span style="font-size:13px;font-weight:700;color:var(--text)">📅 연도별 TC 카테고리</span>
          <div class="tb-right">
            <button class="btn btn-primary" onclick="openAddYearModal()">＋ 연도 추가</button>
          </div>
        </div>
        <div id="tc-year-cards"></div>
      </div>
      <!-- 1단계: 요구사항 선택 -->
      <div id="tc-req-view" style="display:none">
        <div class="tc-breadcrumb" id="tcYearBreadcrumb" style="margin-bottom:14px"></div>
        <div class="tb">
          <div class="search-wrap"><span class="search-icon">🔍</span><input type="text" id="tcReqSearch" placeholder="요구사항 ID / 제목 검색"></div>
          <select id="tcReqFArea"><option value="">전체 영역</option></select>
        </div>
        <div id="tc-req-cards"></div>
      </div>
      <!-- 2단계: TC 리스트 -->
      <div id="tc-list-view" style="display:none">
        <div class="tc-breadcrumb" id="tcBreadcrumb"></div>
        <div class="tb">
          <div class="search-wrap"><span class="search-icon">🔍</span><input type="text" id="tcSearch" placeholder="TC-ID / 제목 검색"></div>
          <select id="tcFArea"><option value="">전체 영역</option></select>
          <select id="tcFType"><option value="">전체 유형</option><option>정상</option><option>비정상</option><option>경계값</option><option>보안</option></select>
          <select id="tcFStatus"><option value="">전체 상태</option><option>미수행</option><option>통과</option><option>실패</option><option>블로킹</option></select>
          <select id="tcFPri"><option value="">전체 우선순위</option><option>높음</option><option>중간</option><option>낮음</option></select>
          <div class="tb-right"><button class="btn btn-primary" id="btnAddTc">＋ TC 등록</button></div>
        </div>
        <div class="tw">
          <table id="tcTable">
            <colgroup><col style="width:80px"><col style="width:200px"><col style="width:65px"><col style="width:70px"><col style="width:75px"><col style="width:80px"><col style="width:85px"><col style="width:80px"></colgroup>
            <thead><tr>
              <th data-col="id">TC-ID<span class="si"></span><div class="rz"></div></th>
              <th data-col="title">제목<span class="si"></span><div class="rz"></div></th>
              <th data-col="type">유형<span class="si"></span><div class="rz"></div></th>
              <th data-col="priority">우선순위<span class="si"></span><div class="rz"></div></th>
              <th data-col="status">상태<span class="si"></span><div class="rz"></div></th>
              <th data-col="assignee">담당자<span class="si"></span><div class="rz"></div></th>
              <th data-col="date">수행일<span class="si"></span><div class="rz"></div></th>
              <th>관리</th>
            </tr></thead>
            <tbody id="tcList"></tbody>
          </table>
          <div class="empty" id="tcEmpty" style="display:none"><div class="empty-icon">📝</div>등록된 TC가 없습니다.</div>
        </div>
      </div>
    </div>

    <!-- 결함 -->
    <div class="page" id="p-def">
      <div class="tb">
        <div class="search-wrap"><span class="search-icon">🔍</span><input type="text" id="defSearch" placeholder="결함명 / TC-ID 검색"></div>
        <select id="defFArea"><option value="">전체 영역</option></select>
        <select id="defFSev"><option value="">전체 심각도</option><option>높음</option><option>중간</option><option>낮음</option></select>
        <select id="defFStatus"><option value="">전체 상태</option><option>신규</option><option>진행중</option><option>해결됨</option><option>종료</option><option>보류</option></select>
        <div class="tb-right"><button class="btn btn-primary" onclick="openModal('def')">＋ 결함 등록</button></div>
      </div>
      <div class="tw">
        <table id="defTable">
          <colgroup><col style="width:75px"><col style="width:80px"><col style="width:100px"><col style="width:180px"><col style="width:65px"><col style="width:75px"><col style="width:80px"><col style="width:85px"><col style="width:85px"><col style="width:120px"></colgroup>
          <thead><tr>
            <th data-col="id">결함 ID<span class="si"></span><div class="rz"></div></th>
            <th data-col="tcId">TC-ID<span class="si"></span><div class="rz"></div></th>
            <th data-col="area">영역<span class="si"></span><div class="rz"></div></th>
            <th data-col="title">결함명<span class="si"></span><div class="rz"></div></th>
            <th data-col="sev">심각도<span class="si"></span><div class="rz"></div></th>
            <th data-col="status">상태<span class="si"></span><div class="rz"></div></th>
            <th data-col="assignee">담당자<span class="si"></span><div class="rz"></div></th>
            <th data-col="date">발견일<span class="si"></span><div class="rz"></div></th>
            <th data-col="reporter">등록자<span class="si"></span><div class="rz"></div></th>
            <th>관리</th>
          </tr></thead>
          <tbody id="defList"></tbody>
        </table>
        <div class="empty" id="defEmpty" style="display:none"><div class="empty-icon">🐛</div>등록된 결함이 없습니다.</div>
      </div>
    </div>

    <!-- AI 요구사항 분석 -->
    <div class="page" id="p-ai-req">
      <div class="drow">
        <div class="dbox" style="flex:2">
          <div class="dbox-title"><h3>🤖 요구사항 AI 분석</h3><span class="cnt" id="aiReqSelLabel"></span></div>
          <div class="tb" style="margin-bottom:12px">
            <select id="aiReqSel" onchange="renderAiReq()" style="padding:7px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit;min-width:220px">
              <option value="">-- 요구사항 선택 --</option>
            </select>
            <button class="btn btn-primary" onclick="runAiReqAnalysis()">🤖 AI 분석 실행</button>
          </div>
          <div id="aiReqResult" style="background:var(--surface2);border-radius:var(--radius-sm);padding:16px;min-height:120px;font-size:12.5px;line-height:1.8;color:var(--text);white-space:pre-wrap">요구사항을 선택하고 AI 분석을 실행하세요.</div>
        </div>
        <div class="dbox" style="flex:1">
          <div class="dbox-title"><h3>📋 요구사항 목록</h3><span class="cnt" id="aiReqListCnt"></span></div>
          <div id="aiReqList" style="display:flex;flex-direction:column;gap:6px"></div>
        </div>
      </div>
    </div>

    <!-- 테스트 스위트 -->
    <div class="page" id="p-suite">
      <div class="tb">
        <span style="font-size:13px;font-weight:700;color:var(--text)">📦 테스트 스위트</span>
        <div class="tb-right"><button class="btn btn-primary" onclick="openAddSuiteModal()">＋ 스위트 추가</button></div>
      </div>
      <div id="suite-cards" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;padding:4px 2px"></div>
    </div>

    <!-- Smart TC Generator -->
    <div class="page" id="p-smart-tc">
      <div class="drow">
        <div class="dbox" style="flex:1;max-width:440px">
          <div class="dbox-title"><h3>✨ Smart TC Generator</h3></div>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div>
              <label style="font-size:12px;font-weight:600;color:var(--text2);display:block;margin-bottom:6px">대상 요구사항</label>
              <select id="smartTcReqSel" style="width:100%;padding:7px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit">
                <option value="">-- 요구사항 선택 --</option>
              </select>
            </div>
            <div>
              <label style="font-size:12px;font-weight:600;color:var(--text2);display:block;margin-bottom:6px">TC 유형 (복수 선택)</label>
              <div style="display:flex;flex-wrap:wrap;gap:8px" id="smartTcTypes">
                <label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer"><input type="checkbox" value="정상" checked> 정상</label>
                <label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer"><input type="checkbox" value="비정상" checked> 비정상</label>
                <label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer"><input type="checkbox" value="경계값"> 경계값</label>
                <label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer"><input type="checkbox" value="보안"> 보안</label>
              </div>
            </div>
            <div>
              <label style="font-size:12px;font-weight:600;color:var(--text2);display:block;margin-bottom:6px">생성 연도</label>
              <select id="smartTcYear" style="width:100%;padding:7px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit"></select>
            </div>
            <button class="btn btn-primary" style="width:100%" onclick="runSmartTcGen()">✨ AI TC 생성</button>
          </div>
        </div>
        <div class="dbox" style="flex:2">
          <div class="dbox-title"><h3>📝 생성된 TC 초안</h3><span class="cnt" id="smartTcCnt"></span></div>
          <div id="smartTcResult"></div>
        </div>
      </div>
    </div>

    <!-- 결함 통계 -->
    <div class="page" id="p-def-stat">
      <div class="cards" id="defStatCards"></div>
      <div class="drow">
        <div class="dbox" style="flex:1">
          <div class="dbox-title"><h3>📊 심각도별 결함 분포</h3><span class="cnt" id="defStatSevCnt"></span></div>
          <div id="defStatSevChart"></div>
        </div>
        <div class="dbox" style="flex:1">
          <div class="dbox-title"><h3>📈 상태별 결함 분포</h3><span class="cnt" id="defStatStatusCnt"></span></div>
          <div id="defStatStatusChart"></div>
        </div>
        <div class="dbox" style="flex:1">
          <div class="dbox-title"><h3>🏷️ 영역별 결함 분포</h3><span class="cnt" id="defStatAreaCnt"></span></div>
          <div id="defStatAreaChart"></div>
        </div>
      </div>
      <div class="drow">
        <div class="dbox" style="flex:1">
          <div class="dbox-title"><h3>👤 담당자별 결함 현황</h3></div>
          <div id="defStatAssignee"></div>
        </div>
        <div class="dbox" style="flex:2">
          <div class="dbox-title"><h3>🐛 미해결 높음 결함 목록</h3></div>
          <div id="defStatOpenHigh"></div>
        </div>
      </div>
    </div>

    <!-- RTM -->
    <div class="page" id="p-rtm">
      <div class="tb" style="margin-bottom:14px">
        <select id="rtmAreaFilter" onchange="renderRtm()" style="padding:7px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit">
          <option value="">전체 영역</option>
        </select>
        <select id="rtmStatusFilter" onchange="renderRtm()" style="padding:7px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit">
          <option value="">전체 TC 상태</option>
          <option>미수행</option><option>통과</option><option>실패</option><option>블로킹</option>
        </select>
      </div>
      <div class="tw">
        <table id="rtmTable">
          <colgroup><col style="width:80px"><col style="width:80px"><col style="width:180px"><col style="width:60px"><col style="width:75px"><col style="width:80px"><col style="width:90px"><col style="width:90px"><col style="width:80px"></colgroup>
          <thead><tr>
            <th>요구사항 ID</th><th>영역</th><th>요구사항 제목</th><th>우선순위</th><th>요구사항 상태</th>
            <th>TC ID</th><th>TC 제목</th><th>TC 상태</th><th>결함</th>
          </tr></thead>
          <tbody id="rtmBody"></tbody>
        </table>
        <div class="empty" id="rtmEmpty" style="display:none"><div class="empty-icon">🔗</div>표시할 데이터가 없습니다.</div>
      </div>
    </div>

    <!-- 환경 설정 -->
    <div class="page" id="p-cfg">
      <div class="drow">
        <div class="dbox" style="flex:1;max-width:520px">
          <div class="dbox-title"><h3>👤 사용자 정보</h3></div>
          <div style="margin-bottom:14px">
            <label style="font-size:12px;font-weight:600;color:var(--text2);display:block;margin-bottom:6px">기본 작성자 이름</label>
            <div style="display:flex;gap:8px">
              <input type="text" id="cfg-user" placeholder="이름 입력" style="flex:1;padding:7px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit">
              <button class="btn btn-primary" onclick="saveCfgUser()">저장</button>
            </div>
            <p style="font-size:11px;color:var(--text3);margin-top:6px">코멘트 등록 시 자동 입력됩니다.</p>
          </div>
        </div>
        <div class="dbox" style="flex:1;max-width:520px">
          <div class="dbox-title"><h3>🏷️ 테스트 영역 관리</h3></div>
          <div id="cfg-areas" style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:12px"></div>
          <div style="display:flex;gap:8px">
            <input type="text" id="cfg-new-area" placeholder="새 영역 추가" style="flex:1;padding:7px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:inherit" onkeydown="if(event.key==='Enter')addCfgArea()">
            <button class="btn btn-primary" onclick="addCfgArea()">추가</button>
          </div>
        </div>
      </div>
      <div class="drow">
        <div class="dbox" style="flex:1;max-width:520px">
          <div class="dbox-title"><h3>🤖 Claude AI 연동</h3></div>
          <div style="margin-bottom:14px">
            <label style="font-size:12px;font-weight:600;color:var(--text2);display:block;margin-bottom:6px">Anthropic API 키</label>
            <div style="display:flex;gap:8px">
              <input type="password" id="cfg-apikey" placeholder="sk-ant-..." style="flex:1;padding:7px 11px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-family:monospace">
              <button class="btn btn-primary" onclick="saveCfgApiKey()">저장</button>
            </div>
            <p style="font-size:11px;color:var(--text3);margin-top:6px">TC 드롭다운의 [AI정리] 기능에 사용됩니다. 키는 브라우저 로컬에만 저장됩니다.</p>
          </div>
          <div id="cfg-apikey-status" style="font-size:11px;font-weight:600;padding:6px 10px;border-radius:5px;display:none"></div>
        </div>
        <div class="dbox" style="flex:1;max-width:520px">
          <div class="dbox-title"><h3>🗑️ 데이터 초기화</h3></div>
          <p style="font-size:12px;color:var(--text2);margin-bottom:14px">모든 데이터를 삭제하고 샘플 데이터로 초기화합니다.</p>
          <button class="btn" style="background:#fef2f2;color:#ef4444;border:1px solid #fecaca" onclick="if(confirm('모든 데이터를 초기화할까요?')){Object.values(KEYS).forEach(k=>localStorage.removeItem(k));load();renderAll();nav('dash');showToast('🔄 데이터가 초기화되었습니다');}">데이터 초기화</button>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- 등록/수정 Modal (req, def 전용) -->
<div class="ov" id="ov">
  <div class="modal">
    <div class="modal-header">
      <h2 id="modalTitle">등록</h2>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div id="modalBody"></div>
    <div class="ma">
      <button class="btn btn-cancel" onclick="closeModal()">취소</button>
      <button class="btn btn-primary" onclick="saveItem()">💾 저장</button>
    </div>
  </div>
</div>

<!-- 상세 Modal -->
<div class="ov" id="dov">
  <div class="modal dm">
    <div class="modal-header">
      <h2 id="d-title"></h2>
      <button class="modal-close" onclick="closeDet()">✕</button>
    </div>
    <div class="dmeta" id="d-meta"></div>
    <div class="sec-title">📄 설명</div>
    <div class="ddesc" id="d-desc"></div>
    <div>
      <div class="sec-title">📎 첨부 이미지</div>
      <div class="igrid" id="igrid">
        <label class="iupbtn" for="iup"><span style="font-size:20px">＋</span><span>이미지 추가</span></label>
        <input type="file" id="iup" accept="image/*" multiple style="display:none" onchange="handleImg(event)">
      </div>
    </div>
    <div class="divider"></div>
    <div>
      <div class="sec-title">💬 코멘트 <span class="cnt-badge" id="cntBadge">0</span></div>
      <div class="clist" id="clist"></div>
      <div class="cinrow">
        <input type="text" class="ninput" id="c-auth" placeholder="이름">
        <input type="text" id="c-txt" placeholder="코멘트 입력 후 Enter" onkeydown="if(event.key==='Enter')addComment()">
        <button class="btn btn-primary" onclick="addComment()">등록</button>
      </div>
    </div>
  </div>
</div>

<div class="lb" id="lb" onclick="closeLb()">
  <span class="lbx">✕</span>
  <img id="lbImg" src="">
</div>
<div class="toast-wrap" id="toastWrap"></div>

<script>
const KEYS = {req:'qa-req', tc:'qa-tc', def:'qa-def', areas:'qa-areas', user:'qa-user', years:'qa-tc-years', apikey:'qa-ai-key', suites:'qa-suites'};
const DEF_AREAS = ['기능','비기능','보안','UI/UX','API'];
let data = {req:[], tc:[], def:[], suites:[]};
let areas = [...DEF_AREAS];
let editId = null, editType = null, detId = null, detType = null;
let selectedYear = null;
let tcYears = [];
let sortState = {req:{col:'id',dir:'asc'}, tc:{col:'id',dir:'asc'}, def:{col:'id',dir:'asc'}};
let lastUser = localStorage.getItem(KEYS.user) || '';
let openTcIds = new Set();
let newTcRow = false;

const toDay = () => new Date().toISOString().slice(0,10);
const nowStr = () => new Date().toLocaleString('ko-KR');

function load() {
  data.req    = JSON.parse(localStorage.getItem(KEYS.req)    || '[]');
  data.tc     = JSON.parse(localStorage.getItem(KEYS.tc)     || '[]');
  data.def    = JSON.parse(localStorage.getItem(KEYS.def)    || '[]');
  data.suites = JSON.parse(localStorage.getItem(KEYS.suites) || '[]');
  areas = JSON.parse(localStorage.getItem(KEYS.areas) || JSON.stringify(DEF_AREAS));
  tcYears = JSON.parse(localStorage.getItem(KEYS.years) || '[]');
  if (!data.req.length && !data.tc.length && !data.def.length) loadSample();
  if (!tcYears.length) { tcYears = ['2026']; saveTcYears(); }
  populateAreaSelects();
}
function saveTcYears() { localStorage.setItem(KEYS.years, JSON.stringify(tcYears)); }
function save(type) { localStorage.setItem(KEYS[type], JSON.stringify(data[type])); }

function loadSample() {
  areas = ['기능','비기능','보안','UI/UX','API'];
  data.req = [
    {id:'FR-001',area:'기능',title:'사용자 로그인',desc:'이메일/비밀번호 기반 로그인. 의료진·관리자 역할 구분, SSO 지원.',priority:'상',status:'확정',comments:[{author:'이기획',text:'SSO는 3분기 이후 적용 예정 확인',time:'2026-02-10 10:15'}],images:[]},
    {id:'FR-002',area:'기능',title:'회원가입 및 계정 관리',desc:'신규 의료진 계정 등록, 이메일 인증, 프로필 수정 포함.',priority:'상',status:'확정',comments:[],images:[]},
    {id:'FR-003',area:'보안',title:'비밀번호 보안 정책',desc:'8자 이상, 대소문자·숫자·특수문자 혼합. 90일 주기 변경 권고.',priority:'중',status:'검토중',comments:[{author:'박보안',text:'HIPAA 기준으로 90일 → 60일 검토 요청',time:'2026-02-18 15:40'}],images:[]},
    {id:'FR-004',area:'UI/UX',title:'반응형 대시보드',desc:'태블릿·PC 지원. 주요 KPI 카드, TC/결함 현황 차트 포함.',priority:'하',status:'보류',comments:[],images:[]},
    {id:'FR-005',area:'API',title:'외부 연동 REST API',desc:'검사 결과 조회·등록 API. OAuth2 인증, 요청당 1,000ms 이하 응답.',priority:'상',status:'확정',comments:[],images:[]},
    {id:'FR-006',area:'기능',title:'AI 진단 보조 기능',desc:'GC MediAI 엔진 연동. 영상·수치 데이터 분석 결과를 화면에 표시.',priority:'상',status:'확정',comments:[{author:'김AI',text:'모델 v2.3 기준 정확도 94.1% 확인',time:'2026-02-25 09:30'},{author:'이QA',text:'엣지 케이스 추가 검증 필요',time:'2026-02-26 11:00'}],images:[]},
    {id:'FR-007',area:'기능',title:'환자 데이터 조회',desc:'등록번호 기반 환자 정보·검사 이력·진단 기록 조회.',priority:'상',status:'확정',comments:[],images:[]},
    {id:'FR-008',area:'기능',title:'의료 영상 뷰어',desc:'DICOM 포맷 지원. 확대·축소, 밝기/대비 조절, 레이어 표시.',priority:'상',status:'검토중',comments:[{author:'박기획',text:'DICOM 파서 라이센스 확인 중',time:'2026-03-01 14:00'}],images:[]},
    {id:'FR-009',area:'보안',title:'역할 기반 권한 관리',desc:'의사·간호사·관리자·QA 역할별 메뉴·데이터 접근 제어.',priority:'상',status:'확정',comments:[],images:[]},
    {id:'FR-010',area:'기능',title:'검사 결과 리포트 출력',desc:'PDF 출력. 환자 정보·AI 분석 결과·의사 소견 포함.',priority:'중',status:'확정',comments:[],images:[]},
    {id:'FR-011',area:'기능',title:'알림 및 공지 기능',desc:'비정상 수치 알림, 시스템 공지 팝업, 이메일 발송.',priority:'중',status:'검토중',comments:[],images:[]},
    {id:'FR-012',area:'UI/UX',title:'다국어 지원(한/영)',desc:'UI 전체 한국어·영어 전환 지원.',priority:'하',status:'보류',comments:[],images:[]},
    {id:'FR-013',area:'보안',title:'세션 및 토큰 관리',desc:'JWT 기반 인증. 30분 비활동 시 자동 로그아웃, Refresh Token 갱신.',priority:'상',status:'확정',comments:[],images:[]},
    {id:'FR-014',area:'API',title:'데이터 내보내기 API',desc:'검사 결과·로그 CSV/Excel 다운로드. 조회 조건 필터 지원.',priority:'중',status:'검토중',comments:[],images:[]},
    {id:'FR-015',area:'비기능',title:'감사 로그 기록',desc:'모든 데이터 조회·수정 이벤트 저장. 90일 보관, 관리자 조회 가능.',priority:'중',status:'확정',comments:[],images:[]},
    {id:'FR-016',area:'기능',title:'처방 조회 및 이력 관리',desc:'환자별 처방 내역 조회, 중복 처방 경고, 처방 이력 90일 보관.',priority:'상',status:'확정',comments:[{author:'이기획',text:'중복 처방 경고 알고리즘 별도 명세 필요',time:'2026-02-20 13:00'}],images:[]},
    {id:'FR-017',area:'API',title:'EMR 시스템 연동',desc:'병원 EMR과 HL7 FHIR 기반 양방향 데이터 동기화. 실시간 반영.',priority:'상',status:'검토중',comments:[{author:'박API',text:'FHIR R4 vs R5 버전 선택 논의 중',time:'2026-02-28 10:30'},{author:'이QA',text:'연동 장애 시 Fallback 시나리오 추가 요청',time:'2026-03-02 09:00'}],images:[]},
    {id:'FR-018',area:'기능',title:'약물 이상반응 알림',desc:'처방 등록 시 알려진 이상반응 DB와 자동 대조, 위험 등급 표시.',priority:'상',status:'확정',comments:[],images:[]},
    {id:'FR-019',area:'기능',title:'검사 예약 및 스케줄 관리',desc:'환자 검사 예약 등록·수정·취소. 담당 의료진 배정 및 캘린더 표시.',priority:'중',status:'확정',comments:[],images:[]},
    {id:'FR-020',area:'기능',title:'의료진 근무 스케줄 관리',desc:'의료진 근무표 등록·조회. 야간·주말 근무 구분, 부재 시 대리자 지정.',priority:'중',status:'검토중',comments:[],images:[]},
    {id:'FR-021',area:'보안',title:'저장 데이터 암호화',desc:'환자 개인정보·진단 기록 AES-256 암호화 저장. 키 관리 정책 포함.',priority:'상',status:'확정',comments:[{author:'박보안',text:'키 로테이션 주기 90일 → 30일 강화 검토',time:'2026-03-05 11:00'}],images:[]},
    {id:'FR-022',area:'비기능',title:'시스템 성능 모니터링',desc:'API 응답 시간·CPU·메모리 실시간 모니터링. 임계값 초과 시 알림.',priority:'중',status:'검토중',comments:[],images:[]},
    {id:'FR-023',area:'보안',title:'접근 IP 화이트리스트',desc:'관리자 페이지 접근을 허가된 IP 대역으로 제한. IP 변경 이력 기록.',priority:'중',status:'확정',comments:[],images:[]},
    {id:'FR-024',area:'UI/UX',title:'대시보드 위젯 커스터마이징',desc:'사용자별 대시보드 레이아웃·위젯 종류 설정 저장.',priority:'하',status:'보류',comments:[],images:[]},
    {id:'FR-025',area:'기능',title:'AI 모델 버전 관리',desc:'AI 진단 모델 버전 등록·활성화·롤백. 버전별 성능 지표 비교.',priority:'상',status:'검토중',comments:[{author:'김AI',text:'A/B 테스트 기능 포함 여부 검토 중',time:'2026-03-04 16:00'}],images:[]},
    {id:'FR-026',area:'API',title:'배치 데이터 처리 API',desc:'대용량 검사 결과 일괄 업로드. 처리 상태 조회 및 오류 리포트.',priority:'중',status:'확정',comments:[],images:[]},
    {id:'FR-027',area:'UI/UX',title:'화면 인쇄 및 스크린샷',desc:'현재 화면 인쇄 최적화 CSS 적용. 환자 정보 마스킹 후 인쇄.',priority:'하',status:'보류',comments:[],images:[]},
    {id:'FR-028',area:'기능',title:'시스템 공지사항 관리',desc:'관리자 공지 등록·수정·삭제. 로그인 시 팝업 노출, 읽음 처리.',priority:'하',status:'확정',comments:[],images:[]},
    {id:'FR-029',area:'기능',title:'비밀번호 분실 및 재설정',desc:'이메일 인증 코드 발송. 코드 유효 시간 10분, 재발송 3회 제한.',priority:'중',status:'확정',comments:[],images:[]},
    {id:'FR-030',area:'보안',title:'개인정보 처리 동의 관리',desc:'최초 로그인 시 개인정보 처리 동의 수집. 동의 이력 DB 보관.',priority:'상',status:'확정',comments:[{author:'법무팀',text:'개정 개인정보보호법 기준 반영 완료',time:'2026-02-15 14:00'}],images:[]},
  ];
  data.tc = [
    /* FR-001 로그인 */
    {id:'TC-001',reqId:'FR-001',year:'2026',area:'기능',title:'정상 이메일/PW 로그인',pre:'유효한 계정 존재',steps:'1. 이메일 입력\n2. 비밀번호 입력\n3. 로그인 버튼 클릭',expected:'메인 대시보드로 이동하고 사용자 이름 표시',type:'정상',priority:'높음',status:'통과',assignee:'김QA',date:'2026-03-05',desc:'',comments:[],images:[]},
    {id:'TC-002',reqId:'FR-001',year:'2026',area:'기능',title:'존재하지 않는 이메일 로그인',pre:'',steps:'1. 미등록 이메일 입력\n2. 비밀번호 입력\n3. 로그인 버튼 클릭',expected:'"이메일 또는 비밀번호가 올바르지 않습니다." 오류 표시',type:'비정상',priority:'높음',status:'통과',assignee:'김QA',date:'2026-03-05',desc:'',comments:[],images:[]},
    {id:'TC-003',reqId:'FR-001',year:'2026',area:'기능',title:'5회 연속 로그인 실패 계정 잠금',pre:'유효한 계정 존재',steps:'1. 틀린 비밀번호로 5회 로그인 시도\n2. 6번째 시도',expected:'계정 잠금 처리 및 잠금 안내 메시지 표시',type:'경계값',priority:'높음',status:'실패',assignee:'이QA',date:'2026-03-06',desc:'',comments:[{author:'이QA',text:'5회 초과 후에도 잠금 처리 안됨 재현 확인',time:'2026-03-06 14:22'},{author:'개발팀A',text:'인증 미들웨어 버그 확인, 핫픽스 예정',time:'2026-03-07 09:00'}],images:[]},
    {id:'TC-004',reqId:'FR-001',year:'2026',area:'기능',title:'비밀번호 입력 마스킹 확인',pre:'',steps:'1. 비밀번호 입력란에 텍스트 입력',expected:'입력 문자가 • 으로 마스킹 처리됨',type:'정상',priority:'중간',status:'통과',assignee:'박QA',date:'2026-03-05',desc:'',comments:[],images:[]},
    {id:'TC-005',reqId:'FR-001',year:'2026',area:'기능',title:'세션 만료 후 재로그인 요구',pre:'로그인 상태',steps:'1. 30분 비활동 대기\n2. 화면 조작 시도',expected:'세션 만료 알림 후 로그인 화면으로 이동',type:'정상',priority:'높음',status:'통과',assignee:'이QA',date:'2026-03-07',desc:'',comments:[],images:[]},
    /* FR-002 회원가입 */
    {id:'TC-006',reqId:'FR-002',year:'2026',area:'기능',title:'정상 신규 계정 등록',pre:'미등록 이메일',steps:'1. 회원가입 폼 접근\n2. 이름·이메일·비밀번호 입력\n3. 가입 버튼 클릭\n4. 인증 메일 확인',expected:'계정 생성 완료 메시지, 인증 이메일 수신',type:'정상',priority:'높음',status:'통과',assignee:'박QA',date:'2026-03-08',desc:'',comments:[],images:[]},
    {id:'TC-007',reqId:'FR-002',year:'2026',area:'기능',title:'중복 이메일 가입 차단',pre:'기등록 이메일 존재',steps:'1. 기존 계정과 동일한 이메일 입력\n2. 가입 시도',expected:'"이미 사용 중인 이메일입니다." 오류 표시',type:'비정상',priority:'높음',status:'통과',assignee:'박QA',date:'2026-03-08',desc:'',comments:[],images:[]},
    {id:'TC-008',reqId:'FR-002',year:'2026',area:'기능',title:'이메일 인증 미완료 로그인 차단',pre:'인증 미완료 계정',steps:'1. 인증 미완료 계정으로 로그인 시도',expected:'"이메일 인증이 필요합니다." 안내 표시',type:'비정상',priority:'중간',status:'미수행',assignee:'김QA',date:'',desc:'',comments:[],images:[]},
    /* FR-003 비밀번호 정책 */
    {id:'TC-009',reqId:'FR-003',year:'2026',area:'보안',title:'7자 비밀번호 가입 차단',pre:'',steps:'1. 비밀번호 7자 입력 후 가입 시도',expected:'"비밀번호는 8자 이상이어야 합니다." 오류 표시',type:'경계값',priority:'중간',status:'통과',assignee:'이QA',date:'2026-03-09',desc:'',comments:[],images:[]},
    {id:'TC-010',reqId:'FR-003',year:'2026',area:'보안',title:'특수문자 없는 비밀번호 차단',pre:'',steps:'1. 영문+숫자만으로 구성된 비밀번호 입력\n2. 가입 시도',expected:'"특수문자를 포함해야 합니다." 오류 표시',type:'비정상',priority:'중간',status:'실패',assignee:'이QA',date:'2026-03-09',desc:'',comments:[{author:'이QA',text:'특수문자 없이도 가입 처리됨 — 정책 미적용',time:'2026-03-09 16:05'}],images:[]},
    /* FR-005 API */
    {id:'TC-011',reqId:'FR-005',year:'2026',area:'API',title:'인증 없이 API 호출 차단',pre:'',steps:'1. Authorization 헤더 없이 GET /api/results 호출',expected:'HTTP 401 Unauthorized 응답',type:'보안',priority:'높음',status:'통과',assignee:'최API',date:'2026-03-10',desc:'',comments:[],images:[]},
    {id:'TC-012',reqId:'FR-005',year:'2026',area:'API',title:'만료 토큰으로 API 호출',pre:'만료된 JWT 토큰 보유',steps:'1. 만료 토큰으로 GET /api/results 호출',expected:'HTTP 401 응답 및 "Token expired" 메시지',type:'비정상',priority:'높음',status:'실패',assignee:'최API',date:'2026-03-10',desc:'',comments:[{author:'최API',text:'500 Internal Error 응답됨 — 예외처리 누락',time:'2026-03-10 11:30'}],images:[]},
    {id:'TC-013',reqId:'FR-005',year:'2026',area:'API',title:'API 응답 시간 1,000ms 이하',pre:'정상 인증 토큰',steps:'1. GET /api/results?patientId=P001 10회 호출\n2. 평균 응답 시간 측정',expected:'평균 응답 시간 1,000ms 이하',type:'비정상',priority:'중간',status:'통과',assignee:'최API',date:'2026-03-11',desc:'',comments:[],images:[]},
    /* FR-006 AI 진단 */
    {id:'TC-014',reqId:'FR-006',year:'2026',area:'기능',title:'AI 분석 결과 정상 표시',pre:'환자 영상 데이터 존재',steps:'1. 영상 데이터 선택\n2. AI 분석 버튼 클릭\n3. 결과 화면 확인',expected:'분석 완료 후 AI 신뢰도·진단 요약 표시',type:'정상',priority:'높음',status:'통과',assignee:'김AI',date:'2026-03-08',desc:'',comments:[],images:[]},
    {id:'TC-015',reqId:'FR-006',year:'2026',area:'기능',title:'AI 분석 중 네트워크 오류 처리',pre:'',steps:'1. 분석 요청 중 네트워크 차단\n2. 오류 응답 확인',expected:'"분석에 실패했습니다. 다시 시도해주세요." 표시',type:'비정상',priority:'높음',status:'블로킹',assignee:'김AI',date:'2026-03-10',desc:'',comments:[{author:'김AI',text:'오류 화면 공백 처리 — fallback UI 없음',time:'2026-03-10 15:00'}],images:[]},
    {id:'TC-016',reqId:'FR-006',year:'2026',area:'기능',title:'데이터 없는 환자 AI 분석 시도',pre:'분석 데이터 없는 환자',steps:'1. 데이터 없는 환자 선택\n2. AI 분석 버튼 클릭',expected:'"분석 가능한 데이터가 없습니다." 안내 표시',type:'비정상',priority:'중간',status:'통과',assignee:'박QA',date:'2026-03-11',desc:'',comments:[],images:[]},
    /* FR-007 환자 데이터 */
    {id:'TC-017',reqId:'FR-007',year:'2026',area:'기능',title:'등록번호로 환자 조회',pre:'환자 데이터 등록됨',steps:'1. 환자 등록번호 입력\n2. 조회 버튼 클릭',expected:'환자 기본 정보·검사 이력 목록 표시',type:'정상',priority:'높음',status:'통과',assignee:'김QA',date:'2026-03-07',desc:'',comments:[],images:[]},
    {id:'TC-018',reqId:'FR-007',year:'2026',area:'기능',title:'존재하지 않는 환자 조회',pre:'',steps:'1. 미등록 환자 번호 입력\n2. 조회',expected:'"검색 결과가 없습니다." 메시지 표시',type:'비정상',priority:'중간',status:'통과',assignee:'김QA',date:'2026-03-07',desc:'',comments:[],images:[]},
    /* FR-008 의료 영상 뷰어 */
    {id:'TC-019',reqId:'FR-008',year:'2026',area:'기능',title:'DICOM 파일 뷰어 로드',pre:'DICOM 파일 업로드됨',steps:'1. 영상 목록에서 DICOM 파일 선택\n2. 뷰어 로드 확인',expected:'영상이 뷰어에 정상 렌더링됨',type:'정상',priority:'높음',status:'미수행',assignee:'박QA',date:'',desc:'',comments:[],images:[]},
    {id:'TC-020',reqId:'FR-008',year:'2026',area:'기능',title:'영상 확대/축소 기능',pre:'영상 뷰어 열린 상태',steps:'1. 마우스 휠 위아래 조작\n2. 확대/축소 버튼 클릭',expected:'영상 확대·축소 정상 동작, 배율 표시',type:'정상',priority:'중간',status:'미수행',assignee:'박QA',date:'',desc:'',comments:[],images:[]},
    /* FR-009 권한 관리 */
    {id:'TC-021',reqId:'FR-009',year:'2026',area:'보안',title:'간호사 역할 관리자 메뉴 접근 차단',pre:'간호사 계정 로그인',steps:'1. 간호사 계정으로 로그인\n2. 관리자 전용 메뉴 URL 직접 접근',expected:'접근 차단 및 "권한이 없습니다." 표시',type:'보안',priority:'높음',status:'통과',assignee:'이QA',date:'2026-03-09',desc:'',comments:[],images:[]},
    {id:'TC-022',reqId:'FR-009',year:'2026',area:'보안',title:'관리자 역할 전체 메뉴 접근',pre:'관리자 계정 로그인',steps:'1. 관리자 계정으로 로그인\n2. 모든 메뉴 항목 접근 확인',expected:'모든 메뉴·기능 정상 접근 가능',type:'정상',priority:'높음',status:'통과',assignee:'이QA',date:'2026-03-09',desc:'',comments:[],images:[]},
    /* FR-010 리포트 출력 */
    {id:'TC-023',reqId:'FR-010',year:'2026',area:'기능',title:'PDF 리포트 정상 생성',pre:'검사 결과 및 AI 분석 완료',steps:'1. 검사 결과 상세 화면 진입\n2. PDF 출력 버튼 클릭',expected:'PDF 파일 생성 및 다운로드 시작',type:'정상',priority:'중간',status:'통과',assignee:'박QA',date:'2026-03-11',desc:'',comments:[],images:[]},
    /* FR-013 세션 관리 */
    {id:'TC-024',reqId:'FR-013',year:'2026',area:'보안',title:'Refresh Token 자동 갱신',pre:'액세스 토큰 만료 임박',steps:'1. 액세스 토큰 만료 5분 전 상태에서 API 호출',expected:'Refresh Token으로 자동 갱신 후 정상 응답',type:'정상',priority:'높음',status:'통과',assignee:'최API',date:'2026-03-10',desc:'',comments:[],images:[]},
    /* FR-015 감사 로그 */
    {id:'TC-025',reqId:'FR-015',year:'2026',area:'비기능',title:'환자 데이터 조회 감사 로그 기록',pre:'감사 로그 활성화',steps:'1. 의사 계정으로 환자 데이터 조회\n2. 관리자 페이지 > 감사 로그 확인',expected:'조회 이벤트(사용자·일시·대상) 로그 기록됨',type:'정상',priority:'중간',status:'통과',assignee:'이QA',date:'2026-03-12',desc:'',comments:[],images:[]},
    /* FR-016 처방 조회 */
    {id:'TC-026',reqId:'FR-016',year:'2026',area:'기능',title:'환자 처방 이력 정상 조회',pre:'처방 이력 3건 이상 존재',steps:'1. 환자 등록번호 입력\n2. 처방 이력 탭 클릭\n3. 목록 확인',expected:'처방 날짜·약명·용량 목록 표시',type:'정상',priority:'높음',status:'통과',assignee:'김QA',date:'2026-03-13',desc:'',comments:[],images:[]},
    {id:'TC-027',reqId:'FR-016',year:'2026',area:'기능',title:'중복 처방 등록 시 경고 표시',pre:'동일 약물 기존 처방 존재',steps:'1. 기존 처방과 동일한 약물 처방 입력\n2. 저장 시도',expected:'중복 처방 경고 팝업 표시 및 확인 요구',type:'경계값',priority:'높음',status:'통과',assignee:'김QA',date:'2026-03-13',desc:'',comments:[],images:[]},
    {id:'TC-028',reqId:'FR-016',year:'2026',area:'기능',title:'처방 이력 90일 초과 데이터 표시',pre:'91일 이전 처방 존재',steps:'1. 처방 이력 조회\n2. 91일 이전 항목 확인',expected:'91일 이전 처방은 목록에 표시되지 않음',type:'경계값',priority:'중간',status:'미수행',assignee:'이QA',date:'',desc:'',comments:[],images:[]},
    /* FR-017 EMR 연동 */
    {id:'TC-029',reqId:'FR-017',year:'2026',area:'API',title:'EMR 환자 데이터 실시간 동기화',pre:'EMR 연동 설정 완료',steps:'1. EMR에서 환자 정보 수정\n2. GC MediAI 화면 새로고침\n3. 데이터 일치 확인',expected:'EMR 수정 후 30초 이내 반영',type:'정상',priority:'높음',status:'미수행',assignee:'최API',date:'',desc:'',comments:[],images:[]},
    {id:'TC-030',reqId:'FR-017',year:'2026',area:'API',title:'EMR 연동 장애 시 Fallback 처리',pre:'EMR 서버 다운 상태',steps:'1. EMR 서버 강제 종료\n2. GC MediAI에서 환자 데이터 조회',expected:'마지막 캐시 데이터 표시 및 연동 오류 배너 표시',type:'비정상',priority:'높음',status:'미수행',assignee:'최API',date:'',desc:'',comments:[],images:[]},
    {id:'TC-031',reqId:'FR-017',year:'2026',area:'API',title:'FHIR R4 포맷 데이터 파싱',pre:'FHIR R4 규격 테스트 데이터',steps:'1. FHIR R4 Patient 리소스 전송\n2. GC MediAI 수신 확인',expected:'환자 ID·이름·생년월일 정상 파싱 및 저장',type:'정상',priority:'높음',status:'미수행',assignee:'최API',date:'',desc:'',comments:[],images:[]},
    /* FR-018 약물 이상반응 */
    {id:'TC-032',reqId:'FR-018',year:'2026',area:'기능',title:'이상반응 고위험 약물 처방 시 경고',pre:'이상반응 DB 최신화됨',steps:'1. 고위험 이상반응 약물 처방 입력\n2. 저장 클릭',expected:'빨간 경고 배너 표시 및 확인 서명 요구',type:'정상',priority:'높음',status:'통과',assignee:'이QA',date:'2026-03-14',desc:'',comments:[],images:[]},
    {id:'TC-033',reqId:'FR-018',year:'2026',area:'기능',title:'이상반응 없는 약물 처방 정상 저장',pre:'',steps:'1. 이상반응 없는 약물 처방 입력\n2. 저장 클릭',expected:'경고 없이 처방 정상 저장',type:'정상',priority:'중간',status:'통과',assignee:'이QA',date:'2026-03-14',desc:'',comments:[],images:[]},
    {id:'TC-034',reqId:'FR-018',year:'2026',area:'기능',title:'이상반응 DB 미갱신 시 처방 차단 여부',pre:'이상반응 DB 30일 이상 미갱신',steps:'1. 처방 입력 시도',expected:'DB 갱신 필요 경고 표시, 처방 저장 허용',type:'비정상',priority:'중간',status:'실패',assignee:'박QA',date:'2026-03-14',desc:'',comments:[{author:'박QA',text:'DB 미갱신 시 경고 없이 정상 처리됨',time:'2026-03-14 11:20'}],images:[]},
    /* FR-019 검사 예약 */
    {id:'TC-035',reqId:'FR-019',year:'2026',area:'기능',title:'검사 예약 정상 등록',pre:'의료진 스케줄 등록됨',steps:'1. 환자 선택\n2. 검사 유형·날짜·담당의 입력\n3. 예약 저장',expected:'예약 완료 메시지 및 캘린더 반영',type:'정상',priority:'중간',status:'통과',assignee:'박QA',date:'2026-03-12',desc:'',comments:[],images:[]},
    {id:'TC-036',reqId:'FR-019',year:'2026',area:'기능',title:'중복 예약 시간 슬롯 차단',pre:'특정 시간 슬롯 예약 완료',steps:'1. 동일 시간 슬롯에 다른 환자 예약 시도',expected:'"이미 예약된 시간입니다." 오류 표시',type:'경계값',priority:'중간',status:'통과',assignee:'박QA',date:'2026-03-12',desc:'',comments:[],images:[]},
    /* FR-021 데이터 암호화 */
    {id:'TC-037',reqId:'FR-021',year:'2026',area:'보안',title:'DB 직접 조회 시 데이터 암호화 확인',pre:'DB 접근 권한 보유',steps:'1. DB 클라이언트로 patients 테이블 직접 조회',expected:'주민번호·연락처 컬럼 암호화 문자열 표시',type:'보안',priority:'높음',status:'통과',assignee:'이QA',date:'2026-03-10',desc:'',comments:[],images:[]},
    {id:'TC-038',reqId:'FR-021',year:'2026',area:'보안',title:'암호화 키 로테이션 후 데이터 복호화',pre:'암호화 키 로테이션 완료',steps:'1. 키 로테이션 실행\n2. 기존 암호화 데이터 조회',expected:'기존 데이터 정상 복호화 및 화면 표시',type:'정상',priority:'높음',status:'미수행',assignee:'이QA',date:'',desc:'',comments:[],images:[]},
    /* FR-022 성능 모니터링 */
    {id:'TC-039',reqId:'FR-022',year:'2026',area:'비기능',title:'API 응답 임계값 초과 알림',pre:'모니터링 에이전트 활성화',steps:'1. API 응답 시간 3,000ms 초과 상황 재현\n2. 알림 수신 확인',expected:'5분 이내 관리자 이메일 알림 발송',type:'비정상',priority:'중간',status:'미수행',assignee:'최API',date:'',desc:'',comments:[],images:[]},
    {id:'TC-040',reqId:'FR-022',year:'2026',area:'비기능',title:'동시 접속 100명 성능 테스트',pre:'부하 테스트 환경 구성',steps:'1. 가상 사용자 100명 동시 로그인\n2. 대시보드 로드 응답 측정',expected:'평균 응답 2,000ms 이하, 오류율 1% 미만',type:'비정상',priority:'중간',status:'미수행',assignee:'최API',date:'',desc:'',comments:[],images:[]},
    /* FR-025 AI 모델 버전 */
    {id:'TC-041',reqId:'FR-025',year:'2026',area:'기능',title:'AI 모델 신규 버전 등록 및 활성화',pre:'관리자 권한 로그인',steps:'1. AI 모델 관리 메뉴 진입\n2. 모델 파일 업로드\n3. 활성화 버튼 클릭',expected:'신규 버전 활성화 완료 및 진단 기능에 즉시 반영',type:'정상',priority:'높음',status:'미수행',assignee:'김AI',date:'',desc:'',comments:[],images:[]},
    {id:'TC-042',reqId:'FR-025',year:'2026',area:'기능',title:'AI 모델 이전 버전 롤백',pre:'모델 v2.4 활성화 상태',steps:'1. 모델 버전 목록에서 v2.3 선택\n2. 롤백 버튼 클릭',expected:'v2.3 활성화 완료 메시지 및 진단 기능 정상 동작',type:'정상',priority:'높음',status:'미수행',assignee:'김AI',date:'',desc:'',comments:[],images:[]},
    /* FR-026 배치 처리 */
    {id:'TC-043',reqId:'FR-026',year:'2026',area:'API',title:'대용량 CSV 일괄 업로드',pre:'10,000건 CSV 파일 준비',steps:'1. 배치 업로드 API 호출\n2. 처리 상태 폴링',expected:'10,000건 정상 처리 완료, 처리 시간 5분 이하',type:'정상',priority:'중간',status:'미수행',assignee:'최API',date:'',desc:'',comments:[],images:[]},
    {id:'TC-044',reqId:'FR-026',year:'2026',area:'API',title:'배치 처리 중 오류 행 리포트',pre:'오류 데이터 포함 CSV',steps:'1. 필드 누락 오류 데이터 포함 CSV 업로드\n2. 처리 완료 후 리포트 조회',expected:'오류 행 번호·사유 목록 리포트 다운로드 가능',type:'비정상',priority:'중간',status:'통과',assignee:'최API',date:'2026-03-13',desc:'',comments:[],images:[]},
    /* FR-029 비밀번호 분실 */
    {id:'TC-045',reqId:'FR-029',year:'2026',area:'기능',title:'비밀번호 재설정 이메일 발송',pre:'등록된 이메일 존재',steps:'1. 비밀번호 찾기 클릭\n2. 이메일 입력\n3. 발송 버튼 클릭',expected:'10분 유효 인증코드 이메일 수신',type:'정상',priority:'중간',status:'통과',assignee:'박QA',date:'2026-03-11',desc:'',comments:[],images:[]},
    {id:'TC-046',reqId:'FR-029',year:'2026',area:'기능',title:'인증코드 10분 만료 후 재설정 차단',pre:'인증코드 발송됨',steps:'1. 인증코드 발송\n2. 10분 대기\n3. 만료 코드로 재설정 시도',expected:'"인증코드가 만료되었습니다." 오류 표시',type:'경계값',priority:'중간',status:'통과',assignee:'박QA',date:'2026-03-11',desc:'',comments:[],images:[]},
    /* FR-030 개인정보 동의 */
    {id:'TC-047',reqId:'FR-030',year:'2026',area:'보안',title:'최초 로그인 시 개인정보 동의 팝업 표시',pre:'신규 계정 첫 로그인',steps:'1. 신규 계정으로 로그인',expected:'개인정보 처리 동의 팝업 표시 및 동의 전 진행 차단',type:'정상',priority:'높음',status:'통과',assignee:'이QA',date:'2026-03-12',desc:'',comments:[],images:[]},
    {id:'TC-048',reqId:'FR-030',year:'2026',area:'보안',title:'동의 거부 시 서비스 이용 차단',pre:'',steps:'1. 동의 팝업에서 거부 클릭',expected:'서비스 이용 불가 안내 후 로그아웃',type:'비정상',priority:'높음',status:'통과',assignee:'이QA',date:'2026-03-12',desc:'',comments:[],images:[]},
    {id:'TC-049',reqId:'FR-030',year:'2026',area:'보안',title:'동의 이력 DB 저장 확인',pre:'동의 완료 후',steps:'1. 동의 완료\n2. 관리자 > 동의 이력 조회',expected:'동의 일시·IP·계정 정보 이력 저장됨',type:'정상',priority:'중간',status:'통과',assignee:'이QA',date:'2026-03-12',desc:'',comments:[],images:[]},
    {id:'TC-050',reqId:'FR-028',year:'2026',area:'기능',title:'로그인 시 미확인 공지사항 팝업 표시',pre:'미확인 공지 1건 이상 존재',steps:'1. 로그인\n2. 메인 화면 진입',expected:'공지사항 팝업 표시 및 확인 버튼 클릭 후 닫힘',type:'정상',priority:'낮음',status:'통과',assignee:'박QA',date:'2026-03-13',desc:'',comments:[],images:[]},
  ];
  tcYears = ['2026']; saveTcYears();
  data.def = [
    {id:'BUG-001',tcId:'TC-003',area:'기능',title:'5회 로그인 실패 후 계정 잠금 미처리',desc:'[재현 절차] 동일 계정으로 틀린 비밀번호 5회 입력\n[기대 결과] 계정 잠금 및 안내 메시지 표시\n[실제 결과] 잠금 처리 없이 계속 로그인 시도 가능\n[환경] Chrome 123, API v2.1',sev:'높음',status:'신규',assignee:'개발팀A',date:'2026-03-06',reporter:'이QA',comments:[{author:'이QA',text:'3회·4회·5회 모두 재현됨',time:'2026-03-06 14:22'},{author:'개발팀A',text:'인증 미들웨어 rate-limit 로직 누락 확인',time:'2026-03-07 09:15'}],images:[]},
    {id:'BUG-002',tcId:'TC-012',area:'API',title:'만료 토큰 호출 시 500 오류 반환',desc:'[재현 절차] 만료된 JWT로 GET /api/results 호출\n[기대 결과] HTTP 401 + "Token expired"\n[실제 결과] HTTP 500 Internal Server Error\n[환경] Postman, API v2.1',sev:'높음',status:'진행중',assignee:'개발팀B',date:'2026-03-10',reporter:'최API',comments:[{author:'최API',text:'토큰 파서 예외처리 전무',time:'2026-03-10 11:30'},{author:'개발팀B',text:'try-catch 추가 후 PR 올릴 예정',time:'2026-03-11 10:00'}],images:[]},
    {id:'BUG-003',tcId:'TC-010',area:'보안',title:'특수문자 없는 비밀번호 가입 허용',desc:'[재현 절차] 숫자+영문만 8자로 가입 시도\n[기대 결과] 특수문자 포함 요구 오류\n[실제 결과] 가입 정상 처리됨\n[환경] Firefox 124, 회원가입 v1.4',sev:'높음',status:'신규',assignee:'개발팀A',date:'2026-03-09',reporter:'이QA',comments:[],images:[]},
    {id:'BUG-004',tcId:'TC-015',area:'기능',title:'AI 분석 오류 시 빈 화면 표시',desc:'[재현 절차] 분석 요청 중 네트워크 차단\n[기대 결과] 오류 메시지 및 재시도 버튼 표시\n[실제 결과] 화면 전체 공백 — fallback UI 없음\n[환경] Chrome 123, AI 엔진 v2.3',sev:'높음',status:'진행중',assignee:'개발팀C',date:'2026-03-10',reporter:'김AI',comments:[{author:'개발팀C',text:'Error Boundary 추가 작업 착수',time:'2026-03-11 14:00'}],images:[]},
    {id:'BUG-005',tcId:'TC-001',area:'UI/UX',title:'로그인 버튼 모바일(375px) 우측 잘림',desc:'[재현 절차] Chrome 모바일 375px 화면에서 로그인 페이지 접근\n[기대 결과] 버튼 전체 표시\n[실제 결과] 버튼 오른쪽 10px 잘림\n[환경] iPhone SE 해상도 기준',sev:'낮음',status:'보류',assignee:'',date:'2026-03-05',reporter:'박QA',comments:[],images:[]},
    {id:'BUG-006',tcId:'TC-017',area:'기능',title:'환자 조회 목록 100건 이상 페이지네이션 오류',desc:'[재현 절차] 검사 이력 101건 이상인 환자 조회\n[기대 결과] 페이지 이동 정상 작동\n[실제 결과] 2페이지로 이동 시 1페이지 데이터 재표시\n[환경] Safari 17',sev:'중간',status:'신규',assignee:'개발팀B',date:'2026-03-07',reporter:'김QA',comments:[],images:[]},
    {id:'BUG-007',tcId:'TC-023',area:'기능',title:'PDF 리포트 한글 폰트 깨짐',desc:'[재현 절차] PDF 출력 후 파일 열기\n[기대 결과] 한글 정상 표시\n[실제 결과] 일부 한글 문자 □ 로 표시\n[환경] Adobe Reader, macOS 14',sev:'중간',status:'해결됨',assignee:'개발팀C',date:'2026-03-11',reporter:'박QA',comments:[{author:'개발팀C',text:'나눔고딕 폰트 임베드로 해결',time:'2026-03-12 16:30'}],images:[]},
    {id:'BUG-008',tcId:'TC-021',area:'보안',title:'간호사 역할 URL 직접 접근 시 403 미반환',desc:'[재현 절차] 간호사 계정으로 /admin/users 직접 접근\n[기대 결과] HTTP 403 및 접근 차단 UI\n[실제 결과] 빈 페이지 응답 (상태코드 200)\n[환경] API 게이트웨이 v1.8',sev:'높음',status:'신규',assignee:'개발팀A',date:'2026-03-09',reporter:'이QA',comments:[],images:[]},
    {id:'BUG-009',tcId:'TC-005',area:'기능',title:'세션 만료 후 로그인 화면 이동 지연',desc:'[재현 절차] 30분 비활동 후 화면 클릭\n[기대 결과] 즉시 로그인 화면 이동\n[실제 결과] 3~5초 지연 후 이동\n[환경] Edge 123',sev:'낮음',status:'진행중',assignee:'개발팀B',date:'2026-03-07',reporter:'이QA',comments:[],images:[]},
    {id:'BUG-010',tcId:'TC-014',area:'기능',title:'AI 분석 결과 신뢰도 소수점 표기 오류',desc:'[재현 절차] AI 분석 실행 후 신뢰도 수치 확인\n[기대 결과] 소수점 1자리 표시 (예: 94.1%)\n[실제 결과] 소수점 8자리 표시 (예: 94.10000001%)\n[환경] Chrome 123',sev:'낮음',status:'해결됨',assignee:'개발팀C',date:'2026-03-08',reporter:'김AI',comments:[{author:'개발팀C',text:'toFixed(1) 적용으로 해결',time:'2026-03-09 11:00'}],images:[]},
    {id:'BUG-011',tcId:'TC-027',area:'기능',title:'중복 처방 경고 팝업 버튼 클릭 무반응',desc:'[재현 절차] 중복 약물 처방 입력 후 경고 팝업 "확인" 클릭\n[기대 결과] 처방 저장 진행\n[실제 결과] 버튼 클릭 후 아무 반응 없음, 콘솔 TypeError 발생\n[환경] Chrome 123, Firefox 124',sev:'높음',status:'신규',assignee:'개발팀A',date:'2026-03-13',reporter:'김QA',comments:[{author:'김QA',text:'onClick 이벤트 핸들러 누락으로 추정',time:'2026-03-13 10:45'}],images:[]},
    {id:'BUG-012',tcId:'TC-032',area:'기능',title:'고위험 약물 이상반응 경고 미표시',desc:'[재현 절차] 이상반응 DB에 등록된 고위험 약물 처방 입력\n[기대 결과] 빨간 경고 배너 및 서명 요구\n[실제 결과] 경고 없이 처방 바로 저장됨\n[환경] 이상반응 DB v1.2, Chrome 123',sev:'높음',status:'진행중',assignee:'개발팀A',date:'2026-03-14',reporter:'이QA',comments:[{author:'개발팀A',text:'약물 코드 매핑 로직 오류 확인',time:'2026-03-14 15:00'}],images:[]},
    {id:'BUG-013',tcId:'TC-034',area:'기능',title:'이상반응 DB 미갱신 경고 미노출',desc:'[재현 절차] DB 갱신일 31일 초과 상태에서 처방 입력\n[기대 결과] DB 갱신 필요 경고 표시\n[실제 결과] 경고 없이 정상 처방 저장\n[환경] Chrome 123, DB 마지막 갱신 2026-02-10',sev:'중간',status:'신규',assignee:'개발팀B',date:'2026-03-14',reporter:'박QA',comments:[],images:[]},
    {id:'BUG-014',tcId:'TC-035',area:'기능',title:'검사 예약 저장 후 캘린더 미반영',desc:'[재현 절차] 검사 예약 저장\n[기대 결과] 캘린더에 즉시 반영\n[실제 결과] 새로고침 전까지 캘린더에 표시 안됨\n[환경] Safari 17, 예약 모듈 v1.1',sev:'중간',status:'신규',assignee:'개발팀C',date:'2026-03-12',reporter:'박QA',comments:[{author:'개발팀C',text:'캘린더 상태 업데이트 누락 — 이벤트 구독 로직 수정 필요',time:'2026-03-13 09:30'}],images:[]},
    {id:'BUG-015',tcId:'TC-037',area:'보안',title:'주민번호 컬럼 일부 미암호화',desc:'[재현 절차] DB 직접 조회로 patients 테이블 확인\n[기대 결과] 주민번호 컬럼 전체 암호화\n[실제 결과] 2026-01-15 이전 등록 데이터 평문 저장\n[환경] MySQL 8.0 직접 조회',sev:'높음',status:'진행중',assignee:'개발팀A',date:'2026-03-10',reporter:'이QA',comments:[{author:'이QA',text:'마이그레이션 스크립트 미적용 구간 확인',time:'2026-03-10 16:00'},{author:'개발팀A',text:'전체 마이그레이션 배치 작업 03/20 예정',time:'2026-03-11 10:00'}],images:[]},
    {id:'BUG-016',tcId:'TC-043',area:'API',title:'배치 업로드 5,000건 초과 시 타임아웃',desc:'[재현 절차] 10,000건 CSV 배치 업로드 요청\n[기대 결과] 5분 이내 처리 완료\n[실제 결과] 5,200건 처리 후 Gateway Timeout (504)\n[환경] Postman, API v2.1',sev:'높음',status:'신규',assignee:'개발팀B',date:'2026-03-13',reporter:'최API',comments:[],images:[]},
    {id:'BUG-017',tcId:'TC-045',area:'기능',title:'비밀번호 재설정 이메일 발송 지연',desc:'[재현 절차] 비밀번호 찾기 이메일 발송 요청\n[기대 결과] 1분 이내 수신\n[실제 결과] 평균 8~12분 후 수신\n[환경] Gmail / Naver Mail 모두 동일',sev:'중간',status:'진행중',assignee:'개발팀B',date:'2026-03-11',reporter:'박QA',comments:[{author:'개발팀B',text:'메일 서버 큐 처리 지연 확인, SMTP 설정 검토 중',time:'2026-03-12 14:00'}],images:[]},
    {id:'BUG-018',tcId:'TC-047',area:'보안',title:'개인정보 동의 팝업 뒤로 가기로 우회',desc:'[재현 절차] 동의 팝업 표시 중 브라우저 뒤로 가기 클릭\n[기대 결과] 동의 완료 전 서비스 차단\n[실제 결과] 뒤로 가기 후 메인 화면 접근 가능\n[환경] Chrome 123 모바일',sev:'높음',status:'신규',assignee:'개발팀A',date:'2026-03-12',reporter:'이QA',comments:[{author:'이QA',text:'History API 우회 취약점 — 보안 긴급 수정 요청',time:'2026-03-12 17:00'}],images:[]},
    {id:'BUG-019',tcId:'TC-041',area:'기능',title:'AI 모델 활성화 후 기존 분석 결과 초기화',desc:'[재현 절차] AI 모델 v2.4 활성화\n[기대 결과] 기존 분석 결과 유지\n[실제 결과] 기존 환자 분석 결과 전체 초기화됨\n[환경] 모델 관리 v1.0',sev:'높음',status:'신규',assignee:'개발팀C',date:'2026-03-14',reporter:'김AI',comments:[{author:'김AI',text:'치명적 데이터 손실 — 즉시 롤백 및 원인 분석 필요',time:'2026-03-14 13:00'}],images:[]},
    {id:'BUG-020',tcId:'TC-050',area:'기능',title:'공지사항 팝업 "닫기" 후 재로그인 시 재표시',desc:'[재현 절차] 공지 팝업 확인 후 로그아웃 → 재로그인\n[기대 결과] 확인한 공지는 다시 표시 안 됨\n[실제 결과] 로그인마다 동일 공지 반복 표시\n[환경] Chrome 123, 공지 모듈 v1.0',sev:'낮음',status:'해결됨',assignee:'개발팀C',date:'2026-03-13',reporter:'박QA',comments:[{author:'개발팀C',text:'읽음 처리 플래그 세션에만 저장되던 버그 수정',time:'2026-03-14 10:00'}],images:[]},
  ];
  ['req','tc','def'].forEach(t => save(t));
  localStorage.setItem(KEYS.areas, JSON.stringify(areas));
}

function populateAreaSelects() {
  ['reqFArea','tcFArea','defFArea'].forEach(id => {
    const el = document.getElementById(id); if (!el) return;
    const cur = el.value;
    el.innerHTML = '<option value="">전체 영역</option>';
    areas.forEach(a => { const o = document.createElement('option'); o.value = o.textContent = a; el.appendChild(o); });
    if (cur) el.value = cur;
  });
}

const pageMap = {dash:'📊 Dashboard', req:'📋 Requirements', 'ai-req':'🤖 AI Requirements Analysis', tc:'📝 Test Case', 'smart-tc':'✨ Smart TC Generator', def:'🐛 Defect List', 'def-stat':'📊 Defect Statistics', rtm:'🔗 RTM', cfg:'⚙️ Settings'};
const pageCnt = {req:()=>`${data.req.length}건`, tc:()=>`${data.tc.length}건`, def:()=>`${data.def.length}건`};

let selectedReqId = null;

function nav(p) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(x => x.classList.remove('active'));
  document.getElementById('p-'+p).classList.add('active');
  const ni = document.getElementById('n-'+p); if (ni) ni.classList.add('active');
  document.getElementById('tbtitle').textContent = pageMap[p] || p;
  const badge = document.getElementById('topbarBadge');
  if (pageCnt[p]) { badge.textContent = pageCnt[p](); badge.style.display = ''; }
  else badge.style.display = 'none';
  if (p==='dash') renderDash();
  if (p==='req')  renderReq();
  if (p==='tc')   { selectedReqId=null; selectedYear=null; renderTcYearView(); }
  if (p==='def')       renderDef();
  if (p==='cfg')       renderCfg();
  if (p==='ai-req')    renderAiReq();
  if (p==='suite')     renderSuite();
  if (p==='smart-tc')  renderSmartTc();
  if (p==='def-stat')  renderDefStat();
  if (p==='rtm')       renderRtm();
}

/* ── AI 정리 ── */
async function aiRefineTC(d, preTa, stepsTa, expTa, btn) {
  let apiKey = localStorage.getItem(KEYS.apikey);
  if (!apiKey) {
    apiKey = prompt('Claude API 키를 입력해주세요 (sk-ant-...)');
    if (!apiKey) return;
    apiKey = apiKey.trim();
    localStorage.setItem(KEYS.apikey, apiKey);
  }
  const origText = btn.textContent;
  btn.textContent = '⏳ AI 처리중...';
  btn.disabled = true;
  btn.style.background = '#94a3b8';

  const prompt = `당신은 전문 QA 엔지니어입니다. 아래 테스트 케이스의 테스트 절차와 기대 결과를 더 명확하고 구체적이며 검증 가능한 형태로 개선해주세요.

TC ID: ${d.id}
제목: ${d.title}
유형: ${d.type} / 우선순위: ${d.priority}
사전 조건: ${preTa.value || '없음'}
현재 테스트 절차:
${stepsTa.value || '(없음)'}
현재 기대 결과:
${expTa.value || '(없음)'}

개선 규칙:
- 테스트 절차: 번호 매긴 단계(1. 2. 3. 형식), 각 단계는 단일 행동, 명확한 동사 사용
- 기대 결과: 구체적이고 검증 가능한 형태, 시스템 반응을 명시

반드시 아래 JSON 형식으로만 응답하세요 (설명 없이):
{"steps":"개선된 테스트 절차","expected":"개선된 기대 결과"}`;

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-request-header': 'true',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${resp.status}`);
    }

    const result = await resp.json();
    const text = result.content?.[0]?.text?.trim() || '';
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('응답 파싱 실패');
    const parsed = JSON.parse(jsonMatch[0]);

    if (parsed.steps)    stepsTa.value = parsed.steps;
    if (parsed.expected) expTa.value   = parsed.expected;

    showToast('✨ AI 정리 완료! 내용 확인 후 💾 저장을 눌러주세요.');
  } catch (e) {
    showToast(`❌ AI 오류: ${e.message}`);
  } finally {
    btn.textContent = origText;
    btn.disabled = false;
    btn.style.background = 'linear-gradient(135deg,#6366f1,#818cf8)';
  }
}

function renderCfg() {
  document.getElementById('cfg-user').value = lastUser;
  const storedKey = localStorage.getItem(KEYS.apikey) || '';
  document.getElementById('cfg-apikey').value = storedKey;
  const statusEl = document.getElementById('cfg-apikey-status');
  if (storedKey) {
    statusEl.style.display = 'block';
    statusEl.style.background = '#ecfdf5'; statusEl.style.color = '#10b981';
    statusEl.textContent = '✅ API 키가 저장되어 있습니다';
  } else {
    statusEl.style.display = 'none';
  }
  const el = document.getElementById('cfg-areas');
  el.innerHTML = areas.map(a => `<span style="display:inline-flex;align-items:center;gap:5px;background:var(--surface2);border:1px solid var(--border);padding:4px 10px;border-radius:20px;font-size:12px;font-weight:500">${a}<button onclick="delCfgArea('${a}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:13px;line-height:1;padding:0">×</button></span>`).join('');
}
function saveCfgApiKey() {
  const v = document.getElementById('cfg-apikey').value.trim();
  if (!v) { localStorage.removeItem(KEYS.apikey); showToast('🗑️ API 키가 삭제되었습니다'); renderCfg(); return; }
  if (!v.startsWith('sk-ant-')) { showToast('⚠️ 올바른 Anthropic API 키를 입력해주세요 (sk-ant- 로 시작)'); return; }
  localStorage.setItem(KEYS.apikey, v);
  showToast('✅ API 키가 저장되었습니다');
  renderCfg();
}
function saveCfgUser() {
  const v = document.getElementById('cfg-user').value.trim();
  if (!v) return;
  lastUser = v;
  localStorage.setItem(KEYS.user, v);
  showToast('✅ 사용자 이름이 저장되었습니다');
}
function addCfgArea() {
  const inp = document.getElementById('cfg-new-area');
  const v = inp.value.trim();
  if (!v || areas.includes(v)) { if (!v) return; showToast('⚠️ 이미 존재하는 영역입니다'); return; }
  areas.push(v);
  localStorage.setItem(KEYS.areas, JSON.stringify(areas));
  populateAreaSelects();
  inp.value = '';
  renderCfg();
  showToast(`✅ 영역 추가: ${v}`);
}
function delCfgArea(a) {
  if (areas.length <= 1) { showToast('⚠️ 최소 1개의 영역이 필요합니다'); return; }
  areas = areas.filter(x => x !== a);
  localStorage.setItem(KEYS.areas, JSON.stringify(areas));
  populateAreaSelects();
  renderCfg();
  showToast(`🗑️ 영역 삭제: ${a}`);
}

/* ── Dashboard ── */
function makePie(segments, size=120, hole=38) {
  const R=size/2, cx=R, cy=R, r=R-8;
  let total = segments.reduce((s,x) => s+x.val, 0);
  if (total===0) segments = [{val:1, color:'#e8eaef'}];
  let angle = -Math.PI/2, paths = '';
  for (const seg of segments) {
    const ratio = seg.val/(total||1), sweep = ratio*2*Math.PI;
    if (sweep===0) continue;
    const x1=cx+r*Math.cos(angle), y1=cy+r*Math.sin(angle);
    const x2=cx+r*Math.cos(angle+sweep), y2=cy+r*Math.sin(angle+sweep);
    const large = sweep>Math.PI ? 1 : 0;
    const ix1=cx+hole*Math.cos(angle), iy1=cy+hole*Math.sin(angle);
    const ix2=cx+hole*Math.cos(angle+sweep), iy2=cy+hole*Math.sin(angle+sweep);
    paths += `<path d="M${ix1},${iy1} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} L${ix2},${iy2} A${hole},${hole} 0 ${large},0 ${ix1},${iy1} Z" fill="${seg.color}" stroke="white" stroke-width="2"/>`;
    angle += sweep;
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${paths}</svg>`;
}

function renderDash() {
  const tc=data.tc, df=data.def;
  const total=tc.length, pass=tc.filter(d=>d.status==='통과').length;
  const fail=tc.filter(d=>d.status==='실패').length, block=tc.filter(d=>d.status==='블로킹').length;
  const notRun=tc.filter(d=>d.status==='미수행').length;
  const tcSegs = [{val:pass,color:'#10b981',label:'통과'},{val:fail,color:'#ef4444',label:'실패'},{val:block,color:'#8b5cf6',label:'블로킹'},{val:notRun,color:'#94a3b8',label:'미수행'}].filter(s=>s.val>0);
  const defSegs = [
    {val:df.filter(d=>d.status==='신규').length,color:'#ef4444',label:'신규'},
    {val:df.filter(d=>d.status==='진행중').length,color:'#f59e0b',label:'진행중'},
    {val:df.filter(d=>d.status==='해결됨').length,color:'#10b981',label:'해결됨'},
    {val:df.filter(d=>d.status==='보류').length,color:'#3b82f6',label:'보류'},
    {val:df.filter(d=>d.status==='종료').length,color:'#94a3b8',label:'종료'},
  ].filter(s=>s.val>0);
  const legHtml = (segs,tot) => segs.map(s=>`<div class="leg-item"><div class="leg-dot" style="background:${s.color}"></div><span class="leg-label">${s.label}</span><span class="leg-val">${s.val}</span><span class="leg-pct">${tot?Math.round(s.val/tot*100):0}%</span></div>`).join('');
  document.getElementById('dashCards').innerHTML = `
    <div class="card"><div class="pie-wrap">${makePie(tcSegs)}<div class="pie-center"><div class="pie-total">${total}</div><div class="pie-sub">전체 TC</div></div></div><div class="pie-info"><h3>TC 상태 현황</h3><div class="legend">${legHtml(tcSegs,total)}</div></div></div>
    <div class="card"><div class="pie-wrap">${makePie(defSegs)}<div class="pie-center"><div class="pie-total">${df.length}</div><div class="pie-sub">전체 결함</div></div></div><div class="pie-info"><h3>결함 상태 현황</h3><div class="legend">${legHtml(defSegs,df.length)}</div></div></div>`;
  const statuses = [['미수행','#94a3b8',notRun],['통과','#10b981',pass],['실패','#ef4444',fail],['블로킹','#8b5cf6',block]];
  document.getElementById('tcChartCnt').textContent = `총 ${total}건`;
  document.getElementById('tcChart').innerHTML = total ? statuses.map(([lbl,clr,cnt])=>`<div class="bar-row"><div class="bar-lbl">${lbl}</div><div class="bar-track"><div class="bar-fill" style="width:${total?Math.round(cnt/total*100):0}%;background:${clr}"><span>${cnt}</span></div></div><div class="bar-pct">${total?Math.round(cnt/total*100):0}%</div></div>`).join('') : '<div class="empty">TC 없음</div>';
  const sevs = [['높음','#ef4444'],['중간','#f59e0b'],['낮음','#10b981']];
  const dmax = Math.max(...sevs.map(([s])=>df.filter(d=>d.sev===s).length), 1);
  document.getElementById('defChartCnt').textContent = `총 ${df.length}건`;
  document.getElementById('defChart').innerHTML = df.length ? sevs.map(([s,c])=>{ const cnt=df.filter(d=>d.sev===s).length; return `<div class="bar-row"><div class="bar-lbl">${s}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.round(cnt/dmax*100)}%;background:${c}"><span>${cnt}</span></div></div><div class="bar-pct">${cnt}</div></div>`; }).join('') : '<div class="empty">결함 없음</div>';
  const rTC = [...tc].filter(d=>d.status==='실패').sort((a,b)=>b.id.localeCompare(a.id)).slice(0,5);
  document.getElementById('recentTC').innerHTML = rTC.length ? rTC.map(d=>`<div class="recent-item" onclick="nav('tc')"><span class="rid">${d.id}</span><span class="rtitle">${d.title}</span><span class="badge s-${d.status}">${d.status}</span></div>`).join('') : '<div style="text-align:center;padding:24px;color:#10b981;font-size:13px">✅ 실패 TC 없음</div>';
  const hd = df.filter(d=>d.sev==='높음'&&d.status!=='종료'&&d.status!=='해결됨');
  document.getElementById('highDef').innerHTML = hd.length ? hd.map(d=>`<div class="recent-item" onclick="nav('def')"><span class="rid">${d.id}</span><span class="rtitle">${d.title}</span><span class="badge s-${d.status}">${d.status}</span></div>`).join('') : '<div style="text-align:center;padding:24px;color:#10b981;font-size:13px">✅ 미해결 높음 결함 없음</div>';
}

/* ── Sort utils ── */
const sevO  = {'높음':0,'중간':1,'낮음':2};
const statO = {'미수행':0,'진행중':1,'통과':2,'실패':3,'블로킹':4,'종료':5};
const priO  = {'상':0,'높음':0,'중':1,'중간':1,'하':2,'낮음':2};
function cmp(a,b,col) {
  let va=a[col]||'', vb=b[col]||'';
  if (col==='sev')      return (sevO[va]??9)-(sevO[vb]??9);
  if (col==='status')   return (statO[va]??9)-(statO[vb]??9);
  if (col==='priority') return (priO[va]??9)-(priO[vb]??9);
  const na=parseFloat(va), nb=parseFloat(vb);
  if (!isNaN(na)&&!isNaN(nb)) return na-nb;
  return va.localeCompare(vb,'ko',{sensitivity:'base',numeric:true});
}

/* ── Req ── */
function renderReq() {
  const s=document.getElementById('reqSearch').value.toLowerCase();
  const fa=document.getElementById('reqFArea').value, fp=document.getElementById('reqFPri').value, fs=document.getElementById('reqFStatus').value;
  let rows = data.req.filter(d => {
    if (s&&!d.id.toLowerCase().includes(s)&&!d.title.toLowerCase().includes(s)) return false;
    if (fa&&d.area!==fa) return false; if (fp&&d.priority!==fp) return false; if (fs&&d.status!==fs) return false;
    return true;
  });
  const ss = sortState.req; rows.sort((a,b) => { const c=cmp(a,b,ss.col); return ss.dir==='asc'?c:-c; });
  const tbody = document.getElementById('reqList'); tbody.innerHTML = '';
  document.getElementById('reqEmpty').style.display = rows.length ? 'none' : 'block';
  rows.forEach(d => {
    const cnt = data.tc.filter(t=>t.reqId===d.id).length;
    const sClass = d.status==='확정'?'s-확정':d.status==='검토중'?'s-검토중':'s-보류';
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="idc">${d.id}</td><td><span class="area-tag">${d.area}</span></td><td><div style="font-weight:600">${d.title}</div><div class="dp">${d.desc||''}</div></td><td><span class="badge pri-${d.priority}">${d.priority}</span></td><td><span class="badge ${sClass}">${d.status}</span></td><td><span class="cnt-badge">${cnt}</span></td><td><div style="display:flex;gap:4px"><button class="btn-sm btn-detail" onclick="openDet('req','${d.id}')">상세</button><button class="btn-sm btn-edit" onclick="openModal('req','${d.id}')">수정</button><button class="btn-sm btn-del" onclick="delItem('req','${d.id}')">삭제</button></div></td>`;
    tbody.appendChild(tr);
  });
  const badge = document.getElementById('topbarBadge');
  if (document.getElementById('p-req').classList.contains('active')) badge.textContent = `${rows.length}건`;
}

/* ── TC 연도 선택 뷰 ── */
function renderTcYearView() {
  selectedYear = null;
  document.getElementById('tc-year-view').style.display = '';
  document.getElementById('tc-req-view').style.display = 'none';
  document.getElementById('tc-list-view').style.display = 'none';

  const container = document.getElementById('tc-year-cards');
  const sorted = [...tcYears].sort((a,b) => b.localeCompare(a));

  if (!sorted.length) {
    container.innerHTML = '<div class="empty"><div class="empty-icon">📅</div>연도 카테고리가 없습니다. 연도를 추가해주세요.</div>';
    return;
  }

  container.innerHTML = '<div class="req-cards"></div>';
  const grid = container.querySelector('.req-cards');
  sorted.forEach(yr => {
    const tcList = data.tc.filter(t => t.year === yr);
    const pass  = tcList.filter(t => t.status==='통과').length;
    const fail  = tcList.filter(t => t.status==='실패').length;
    const block = tcList.filter(t => t.status==='블로킹').length;
    const notRun= tcList.filter(t => t.status==='미수행').length;
    const pct   = tcList.length ? Math.round(pass/tcList.length*100) : 0;

    const card = document.createElement('div');
    card.className = 'req-card';
    card.style.cssText = 'min-height:120px';
    card.innerHTML = `
      <div class="req-card-header">
        <div style="font-size:22px;font-weight:800;color:var(--accent);letter-spacing:-.03em">${yr}</div>
        <button onclick="event.stopPropagation();delTcYear('${yr}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:14px;padding:2px 5px;border-radius:4px" title="연도 삭제">✕</button>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 10px">
        <span class="badge s-통과">통과 ${pass}</span>
        <span class="badge s-실패">실패 ${fail}</span>
        <span class="badge s-블로킹">블로킹 ${block}</span>
        <span class="badge" style="background:#f1f5f9;color:#64748b">미수행 ${notRun}</span>
      </div>
      <div class="req-card-footer">
        <span class="req-card-tc">총 TC ${tcList.length}개</span>
        ${tcList.length ? `<span style="font-size:11px;color:var(--text3);margin-left:8px">통과율 ${pct}%</span>` : ''}
      </div>
      ${tcList.length ? `<div class="req-card-pass" style="width:${pct}%"></div>` : ''}`;
    card.addEventListener('click', () => selectYear(yr));
    grid.appendChild(card);
  });
}

function selectYear(yr) {
  selectedYear = yr;
  renderTcReqView();
}

function openAddYearModal() {
  const yr = prompt('추가할 연도를 입력하세요 (예: 2027)');
  if (!yr) return;
  const v = yr.trim();
  if (!/^\d{4}$/.test(v)) { showToast('⚠️ 4자리 연도를 입력해주세요 (예: 2027)'); return; }
  if (tcYears.includes(v)) { showToast('⚠️ 이미 존재하는 연도입니다'); return; }
  tcYears.push(v);
  saveTcYears();
  renderTcYearView();
  showToast(`✅ ${v}년 카테고리가 추가되었습니다`);
}

function delTcYear(yr) {
  const hasTC = data.tc.some(t => t.year === yr);
  if (hasTC) {
    if (!confirm(`${yr}년 카테고리를 삭제하면 해당 연도의 TC ${data.tc.filter(t=>t.year===yr).length}개도 함께 삭제됩니다. 계속할까요?`)) return;
    data.tc = data.tc.filter(t => t.year !== yr);
    save('tc');
    renderAll();
  }
  tcYears = tcYears.filter(y => y !== yr);
  saveTcYears();
  renderTcYearView();
  showToast(`🗑️ ${yr}년 카테고리가 삭제되었습니다`);
}

/* ── TC 요구사항 선택 뷰 ── */
function renderTcReqView() {
  document.getElementById('tc-year-view').style.display = 'none';
  document.getElementById('tc-req-view').style.display = '';
  document.getElementById('tc-list-view').style.display = 'none';

  const areaEl = document.getElementById('tcReqFArea');
  const curArea = areaEl.value;
  areaEl.innerHTML = '<option value="">전체 영역</option>';
  areas.forEach(a => { const o=document.createElement('option'); o.value=o.textContent=a; areaEl.appendChild(o); });
  areaEl.value = curArea;

  const s  = document.getElementById('tcReqSearch').value.toLowerCase();
  const fa = areaEl.value;

  const yearBcEl = document.getElementById('tcYearBreadcrumb');
  if (yearBcEl) {
    yearBcEl.innerHTML = `<span class="bc-back" onclick="renderTcYearView()">← 연도 목록</span><span class="bc-sep">›</span><span class="bc-cur">📅 ${selectedYear || '전체'}</span>`;
  }

  let reqs = data.req.filter(r => {
    if (s && !r.id.toLowerCase().includes(s) && !r.title.toLowerCase().includes(s)) return false;
    if (fa && r.area !== fa) return false;
    return true;
  });

  // 선택한 연도에 TC가 있는 요구사항만 표시
  if (selectedYear) {
    const yearTcReqIds = new Set(data.tc.filter(t => t.year === selectedYear).map(t => t.reqId));
    reqs = reqs.filter(r => yearTcReqIds.has(r.id) || true); // 요구사항은 전체 표시, TC 카운트는 year 필터
  }

  const container = document.getElementById('tc-req-cards');
  if (!reqs.length) { container.innerHTML = '<div class="empty"><div class="empty-icon">📋</div>요구사항이 없습니다.</div>'; return; }

  container.innerHTML = '<div class="req-cards"></div>';
  const grid = container.querySelector('.req-cards');
  reqs.forEach(r => {
    const tcList = data.tc.filter(t => t.reqId === r.id && (!selectedYear || t.year === selectedYear));
    const pass   = tcList.filter(t => t.status==='통과').length;
    const pct    = tcList.length ? Math.round(pass/tcList.length*100) : 0;
    const sClass = r.status==='확정'?'s-확정':r.status==='검토중'?'s-검토중':'s-보류';

    const card = document.createElement('div');
    card.className = 'req-card';
    card.innerHTML = `
      <div class="req-card-header">
        <div class="req-card-id">${r.id}</div>
        <div class="req-card-badges">
          <span class="area-tag">${r.area}</span>
          <span class="badge ${sClass}">${r.status}</span>
          <span class="badge pri-${r.priority}">${r.priority}</span>
        </div>
      </div>
      <div class="req-card-title">${r.title}</div>
      <div class="req-card-desc">${r.desc||'설명 없음'}</div>
      <div class="req-card-footer">
        <span class="req-card-tc">TC ${tcList.length}개</span>
      </div>
      ${tcList.length ? `<div class="req-card-pass" style="width:${pct}%"></div>` : ''}`;
    card.addEventListener('click', () => selectReq(r.id));
    grid.appendChild(card);
  });
}

function selectReq(reqId) {
  selectedReqId = reqId;
  document.getElementById('tc-req-view').style.display = 'none';
  document.getElementById('tc-list-view').style.display = '';

  const req = data.req.find(r => r.id === reqId);
  const sClass = req.status==='확정'?'s-확정':req.status==='검토중'?'s-검토중':'s-보류';
  document.getElementById('tcBreadcrumb').innerHTML = `
    <span class="bc-back" id="bcBackBtn">← 요구사항 목록</span>
    <span class="bc-sep">›</span>
    ${selectedYear ? `<span style="color:var(--accent);font-weight:600">📅 ${selectedYear}</span><span class="bc-sep">›</span>` : ''}
    <span class="bc-cur">[${req.id}] ${req.title}</span>
    <div class="bc-meta">
      <span class="area-tag">${req.area}</span>
      <span class="badge ${sClass}">${req.status}</span>
      <span class="badge pri-${req.priority}">${req.priority}</span>
    </div>`;
  document.getElementById('bcBackBtn').addEventListener('click', () => {
    selectedReqId = null;
    newTcRow = false;
    openTcIds = new Set();
    renderTcReqView();
  });

  renderTC();
}

/* ── TC ── */
function renderTC() {
  const s  = document.getElementById('tcSearch').value.toLowerCase();
  const ft = document.getElementById('tcFType').value;
  const fs = document.getElementById('tcFStatus').value;
  const fp = document.getElementById('tcFPri').value;
  let rows = data.tc.filter(d => {
    if (selectedReqId && d.reqId !== selectedReqId) return false;
    if (selectedYear && d.year !== selectedYear) return false;
    if (s&&!d.id.toLowerCase().includes(s)&&!d.title.toLowerCase().includes(s)) return false;
    if (ft&&d.type!==ft) return false;
    if (fs&&d.status!==fs) return false; if (fp&&d.priority!==fp) return false;
    return true;
  });
  const ss = sortState.tc; rows.sort((a,b) => { const c=cmp(a,b,ss.col); return ss.dir==='asc'?c:-c; });
  const tbody = document.getElementById('tcList');
  tbody.innerHTML = '';
  document.getElementById('tcEmpty').style.display = rows.length===0&&!newTcRow ? 'block' : 'none';

  rows.forEach(d => {
    const cc = (d.comments||[]).length, ic = (d.images||[]).length;
    const isOpen = openTcIds.has(d.id);

    const tr = document.createElement('tr');
    tr.className = 'tc-row' + (isOpen ? ' open' : '');

    const cells = [
      {cls:'idc', html:`${d.id}<span class="chevron">▼</span>`},
      {html:`<div style="font-weight:600;color:var(--text)">${d.title}</div><div style="display:flex;gap:4px;margin-top:3px">${cc?`<span class="cnt-badge">💬 ${cc}</span>`:''}${ic?`<span class="cnt-badge">🖼 ${ic}</span>`:''}</div>`},
      {html:`<span class="badge type-${d.type}">${d.type}</span>`},
      {html:`<span class="badge pri-${d.priority}">${d.priority}</span>`},
      {html:`<span class="badge s-${d.status}">${d.status}</span>`},
      {html:d.assignee||'-', style:'color:var(--text2)'},
      {html:d.date||'-', style:'font-size:11px;color:var(--text3)'},
    ];
    const toggleTds = [];
    cells.forEach(c => {
      const td = document.createElement('td');
      if (c.cls) td.className = c.cls;
      if (c.style) td.style.cssText = c.style;
      td.innerHTML = c.html;
      td.addEventListener('click', () => toggleTC(d.id));
      tr.appendChild(td);
      toggleTds.push(td);
    });

    const tdAct = document.createElement('td');
    const delBtn = document.createElement('button');
    delBtn.className = 'btn-sm btn-del'; delBtn.textContent = '삭제';
    delBtn.addEventListener('click', e => { e.stopPropagation(); delItem('tc', d.id); });
    tdAct.appendChild(delBtn);
    tr.appendChild(tdAct);
    tbody.appendChild(tr);

    if (!isOpen) return;

    const expTr = document.createElement('tr');
    const expTd = document.createElement('td');
    expTd.className = 'tc-expand-td'; expTd.colSpan = 8;

    const inner = document.createElement('div');
    inner.className = 'expand-inner';

    const left = document.createElement('div');
    left.style.cssText = 'display:flex;flex-direction:column;gap:2px';

    const hasPre = !!(d.pre);
    const preField = document.createElement('div'); preField.className = 'expand-field';
    const togRow = document.createElement('div'); togRow.className = 'toggle-row';
    const preLabel = document.createElement('span'); preLabel.textContent = '① 사전 조건 (Pre-condition)';
    const tog = document.createElement('div'); tog.className = 'tog' + (hasPre?' on':'');
    tog.innerHTML = '<div class="tog-track"></div><div class="tog-thumb"></div>';
    const preWrap = document.createElement('div'); preWrap.style.display = hasPre?'block':'none';
    const preTa = document.createElement('textarea'); preTa.className='expand-textarea'; preTa.style.minHeight='60px'; preTa.value=d.pre||'';
    preWrap.appendChild(preTa);
    tog.addEventListener('click', () => { tog.classList.toggle('on'); preWrap.style.display=tog.classList.contains('on')?'block':'none'; });
    const aiBtn = document.createElement('button');
    aiBtn.className = 'btn-sm';
    aiBtn.style.cssText = 'margin-left:auto;background:linear-gradient(135deg,#6366f1,#818cf8);color:#fff;font-size:11px;padding:4px 12px;border-radius:5px;cursor:pointer;white-space:nowrap';
    aiBtn.textContent = '✨ AI정리';
    aiBtn.addEventListener('click', (e) => { e.stopPropagation(); aiRefineTC(d, preTa, stepsTa, expTa, aiBtn); });
    togRow.append(preLabel, tog, aiBtn); preField.append(togRow, preWrap);

    const stepsField = document.createElement('div'); stepsField.className = 'expand-field';
    const stepsLbl = document.createElement('label'); stepsLbl.textContent = '② 테스트 절차 (Steps)';
    const stepsTa = document.createElement('textarea'); stepsTa.className='expand-textarea'; stepsTa.style.minHeight='80px'; stepsTa.value=d.steps||'';
    stepsField.append(stepsLbl, stepsTa);

    const expField2 = document.createElement('div'); expField2.className = 'expand-field';
    const expLbl2 = document.createElement('label'); expLbl2.textContent = '③ 기대 결과 (Expected Result)';
    const expTa = document.createElement('textarea'); expTa.className='expand-textarea'; expTa.style.minHeight='60px'; expTa.value=d.expected||'';
    expField2.append(expLbl2, expTa);

    left.append(preField, stepsField, expField2);

    const right = document.createElement('div');
    const grid = document.createElement('div'); grid.className='expand-grid'; grid.style.marginBottom='10px';

    const mkFld = (lbl, inp) => { const f=document.createElement('div'); f.className='expand-field'; const l=document.createElement('label'); l.textContent=lbl; f.append(l,inp); return f; };
    const mkInp = val => { const i=document.createElement('input'); i.className='expand-input'; i.value=val; return i; };

    const reqIdInp = mkInp(d.reqId||'');
    const assigneeInp = mkInp(d.assignee||'');
    const dateInp = document.createElement('input'); dateInp.type='date'; dateInp.className='expand-input'; dateInp.value=d.date||'';
    const dateField = mkFld('수행일', dateInp); dateField.style.gridColumn='span 2';

    grid.append(mkFld('요구사항 ID', reqIdInp), mkFld('담당자', assigneeInp), dateField);

    let curStatus = d.status;
    const statusField = document.createElement('div'); statusField.className='expand-field';
    const statusLbl = document.createElement('label'); statusLbl.textContent='상태';
    const statusWrap = document.createElement('div'); statusWrap.className='status-btns';
    ['미수행','통과','실패','블로킹'].forEach(v => {
      const btn = document.createElement('button');
      btn.type='button'; btn.className='status-btn'+(curStatus===v?' sel-'+v:''); btn.textContent=v;
      btn.addEventListener('click', () => {
        statusWrap.querySelectorAll('.status-btn').forEach(b => b.className='status-btn');
        btn.className='status-btn sel-'+v; curStatus=v;
      });
      statusWrap.appendChild(btn);
    });
    statusField.append(statusLbl, statusWrap);

    const saveBar = document.createElement('div'); saveBar.className='expand-save-bar';
    const detBtn2 = document.createElement('button'); detBtn2.className='btn-sm btn-detail'; detBtn2.textContent='💬 코멘트 / 이미지';
    const saveBtn = document.createElement('button'); saveBtn.className='btn btn-primary'; saveBtn.style.cssText='padding:5px 14px;font-size:12px'; saveBtn.textContent='💾 저장';
    detBtn2.addEventListener('click', () => openDet('tc', d.id));
    saveBtn.addEventListener('click', () => {
      const idx = data.tc.findIndex(x => x.id===d.id);
      if (idx===-1) return;
      const prevStatus = data.tc[idx].status;
      data.tc[idx] = {...data.tc[idx], reqId:reqIdInp.value.trim(), assignee:assigneeInp.value.trim(), date:dateInp.value, status:curStatus, pre:preTa.value.trim(), steps:stepsTa.value.trim(), expected:expTa.value.trim()};
      save('tc'); renderAll(); showToast('💾 TC가 저장되었습니다.');
      if (curStatus === '실패' && prevStatus !== '실패') {
        setTimeout(() => {
          openModal('def');
          setTimeout(() => {
            document.getElementById('m-tcId').value = d.id;
            const areaVal = data.tc[idx].area || '';
            const areaEl = document.getElementById('m-area');
            if (areaEl && areaVal) areaEl.value = areaVal;
          }, 50);
        }, 100);
      }
    });
    saveBar.append(detBtn2, saveBtn);
    right.append(grid, statusField, saveBar);
    inner.append(left, right);
    expTd.appendChild(inner);
    expTr.appendChild(expTd);
    tbody.appendChild(expTr);
  });

  /* 인라인 새 TC 입력 행 */
  if (newTcRow) {
    const ids = data.tc.map(d => parseInt(d.id.replace(/\D/g,''))||0);
    const nextNum = ids.length ? Math.max(...ids)+1 : 1;
    const nextId = 'TC-' + String(nextNum).padStart(3,'0');

    const newTr = document.createElement('tr');
    newTr.className = 'tc-new-row';

    const mkCell = (type='text', val='', placeholder='', opts=[]) => {
      const td = document.createElement('td');
      let el;
      if (type==='select') {
        el = document.createElement('select');
        opts.forEach(o => { const op=document.createElement('option'); op.value=op.textContent=o; el.appendChild(op); });
      } else if (type==='date') {
        el = document.createElement('input'); el.type='date';
      } else {
        el = document.createElement('input'); el.type='text'; el.placeholder=placeholder;
      }
      el.value = val;
      td.appendChild(el); return {td, el};
    };

    const {td:tdId,  el:elId}       = mkCell('text', nextId, 'TC-ID');
    const {td:tdTitle,el:elTitle}   = mkCell('text', '', '제목 입력');
    const {td:tdType, el:elType}    = mkCell('select','정상','',['정상','비정상','경계값','보안']);
    const {td:tdPri,  el:elPri}     = mkCell('select','높음','',['높음','중간','낮음']);
    const {td:tdStat, el:elStat}    = mkCell('select','미수행','',['미수행','통과','실패','블로킹']);
    const {td:tdAssign,el:elAssign} = mkCell('text', '', '담당자');
    const {td:tdDate,  el:elDate}   = mkCell('date');

    const tdAct = document.createElement('td');
    const saveBtn = document.createElement('button');
    saveBtn.className='btn-sm btn-detail'; saveBtn.textContent='✓ 저장';
    const cancelBtn = document.createElement('button');
    cancelBtn.className='btn-sm btn-del'; cancelBtn.style.marginLeft='4px'; cancelBtn.textContent='✕';

    saveBtn.addEventListener('click', () => {
      const id = elId.value.trim(), title = elTitle.value.trim();
      if (!id)    { alert('TC-ID를 입력해주세요.'); return; }
      if (!title) { alert('제목을 입력해주세요.');  return; }
      if (data.tc.find(x=>x.id===id)) { alert('이미 존재하는 ID입니다.'); return; }
      data.tc.push({id, reqId:selectedReqId||'', year:selectedYear||'', area: data.req.find(r=>r.id===selectedReqId)?.area||'기능', title, type:elType.value, priority:elPri.value, status:elStat.value, assignee:elAssign.value.trim(), date:elDate.value, pre:'', steps:'', expected:'', desc:'', comments:[], images:[]});
      newTcRow = false; save('tc'); renderAll(); showToast(`✨ TC 등록: ${title}`);
    });
    cancelBtn.addEventListener('click', () => { newTcRow=false; renderTC(); });

    tdAct.append(saveBtn, cancelBtn);
    newTr.append(tdId,tdTitle,tdType,tdPri,tdStat,tdAssign,tdDate,tdAct);
    tbody.appendChild(newTr);
    setTimeout(() => elTitle.focus(), 30);
  }

  const badge = document.getElementById('topbarBadge');
  if (document.getElementById('p-tc').classList.contains('active')) badge.textContent = `${rows.length}건`;
}

function toggleTC(id) {
  if (openTcIds.has(id)) openTcIds.delete(id);
  else openTcIds.add(id);
  renderTC();
}

/* ── Def ── */
function renderDef() {
  const s=document.getElementById('defSearch').value.toLowerCase();
  const fa=document.getElementById('defFArea').value, fs2=document.getElementById('defFSev').value, fs=document.getElementById('defFStatus').value;
  let rows = data.def.filter(d => {
    if (s&&!d.title.toLowerCase().includes(s)&&!(d.tcId||'').toLowerCase().includes(s)) return false;
    if (fa&&d.area!==fa) return false; if (fs2&&d.sev!==fs2) return false; if (fs&&d.status!==fs) return false;
    return true;
  });
  const ss = sortState.def; rows.sort((a,b) => { const c=cmp(a,b,ss.col); return ss.dir==='asc'?c:-c; });
  const tbody = document.getElementById('defList'); tbody.innerHTML = '';
  document.getElementById('defEmpty').style.display = rows.length ? 'none' : 'block';
  rows.forEach(d => {
    const cc=(d.comments||[]).length, ic=(d.images||[]).length;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="idc">${d.id}</td><td class="idc" style="color:var(--text3)">${d.tcId||'-'}</td><td><span class="area-tag">${d.area}</span></td><td><div style="font-weight:600">${d.title}</div><div style="display:flex;gap:4px;margin-top:3px">${cc?`<span class="cnt-badge">💬 ${cc}</span>`:''}${ic?`<span class="cnt-badge">🖼 ${ic}</span>`:''}</div></td><td><span class="badge sev-${d.sev}">${d.sev}</span></td><td><span class="badge s-${d.status}">${d.status}</span></td><td style="color:var(--text2)">${d.assignee||'-'}</td><td style="font-size:11px;color:var(--text3)">${d.date||'-'}</td><td style="font-size:11px;color:var(--text3)">${d.reporter||'-'}</td><td><div style="display:flex;gap:4px"><button class="btn-sm btn-detail" onclick="openDet('def','${d.id}')">상세</button><button class="btn-sm btn-edit" onclick="openModal('def','${d.id}')">수정</button><button class="btn-sm btn-del" onclick="delItem('def','${d.id}')">삭제</button></div></td>`;
    tbody.appendChild(tr);
  });
  const badge = document.getElementById('topbarBadge');
  if (document.getElementById('p-def').classList.contains('active')) badge.textContent = `${rows.length}건`;
}

function renderAll() { renderDash(); renderReq(); renderTC(); renderDef(); }

/* ══════════════════════════════════════════
   AI 요구사항 분석
══════════════════════════════════════════ */
function renderAiReq() {
  const sel = document.getElementById('aiReqSel');
  const cur = sel.value;
  sel.innerHTML = '<option value="">-- 요구사항 선택 --</option>';
  data.req.forEach(r => {
    const o = document.createElement('option'); o.value = r.id;
    o.textContent = `[${r.id}] ${r.title}`; sel.appendChild(o);
  });
  if (cur) sel.value = cur;

  const listEl = document.getElementById('aiReqList');
  document.getElementById('aiReqListCnt').textContent = `${data.req.length}건`;
  listEl.innerHTML = data.req.map(r => {
    const tcCnt = data.tc.filter(t => t.reqId === r.id).length;
    const sClass = r.status==='확정'?'s-확정':r.status==='검토중'?'s-검토중':'s-보류';
    const isActive = sel.value === r.id;
    return `<div onclick="document.getElementById('aiReqSel').value='${r.id}'" style="padding:9px 12px;border-radius:7px;cursor:pointer;border:1.5px solid ${isActive?'var(--accent)':'var(--border)'};background:${isActive?'#ede9fe':'var(--surface)'}">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
        <span style="font-family:monospace;font-size:11px;color:var(--accent);font-weight:700">${r.id}</span>
        <span class="badge ${sClass}" style="font-size:10px">${r.status}</span>
        <span class="cnt-badge" style="margin-left:auto">TC ${tcCnt}</span>
      </div>
      <div style="font-size:12px;font-weight:600;color:var(--text)">${r.title}</div>
    </div>`;
  }).join('') || '<div class="empty">요구사항이 없습니다.</div>';
}

async function runAiReqAnalysis() {
  const reqId = document.getElementById('aiReqSel').value;
  if (!reqId) { showToast('⚠️ 요구사항을 선택해주세요'); return; }
  let apiKey = localStorage.getItem(KEYS.apikey);
  if (!apiKey) { apiKey = prompt('Claude API 키를 입력해주세요 (sk-ant-...)'); if (!apiKey) return; localStorage.setItem(KEYS.apikey, apiKey.trim()); apiKey = apiKey.trim(); }

  const req = data.req.find(r => r.id === reqId);
  const relTc = data.tc.filter(t => t.reqId === reqId);
  const relDef = data.def.filter(d => relTc.find(t => t.id === d.tcId));
  const resultEl = document.getElementById('aiReqResult');
  resultEl.textContent = '⏳ AI 분석 중...';

  const prompt = `당신은 전문 QA/BA 엔지니어입니다. 아래 요구사항을 분석하고 한국어로 리포트를 작성해주세요.

요구사항 ID: ${req.id}
제목: ${req.title}
설명: ${req.desc || '없음'}
우선순위: ${req.priority} / 상태: ${req.status} / 영역: ${req.area}
연관 TC 수: ${relTc.length}개 (통과:${relTc.filter(t=>t.status==='통과').length}, 실패:${relTc.filter(t=>t.status==='실패').length}, 미수행:${relTc.filter(t=>t.status==='미수행').length})
연관 결함 수: ${relDef.length}개

다음 항목을 분석해주세요:
1. 요구사항 품질 평가 (명확성/완전성/검증가능성)
2. 테스트 커버리지 평가
3. 리스크 포인트 (누락된 엣지케이스, 경계값 등)
4. 개선 권고사항`;

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {'Content-Type':'application/json','x-api-key':apiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-request-header':'true'},
      body: JSON.stringify({model:'claude-haiku-4-5-20251001', max_tokens:1024, messages:[{role:'user',content:prompt}]})
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const result = await resp.json();
    resultEl.textContent = result.content[0].text;
  } catch(e) { resultEl.textContent = `❌ 오류: ${e.message}`; }
}

/* ══════════════════════════════════════════
   테스트 스위트
══════════════════════════════════════════ */
function renderSuite() {
  const container = document.getElementById('suite-cards');
  if (!data.suites.length) {
    container.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="empty-icon">📦</div>테스트 스위트가 없습니다. 스위트를 추가해주세요.</div>';
    return;
  }
  container.innerHTML = data.suites.map(s => {
    const tcList = s.tcIds.map(id => data.tc.find(t => t.id === id)).filter(Boolean);
    const pass = tcList.filter(t => t.status==='통과').length;
    const fail = tcList.filter(t => t.status==='실패').length;
    const block = tcList.filter(t => t.status==='블로킹').length;
    const notRun = tcList.filter(t => t.status==='미수행').length;
    const pct = tcList.length ? Math.round(pass/tcList.length*100) : 0;
    return `<div style="background:var(--surface);border-radius:var(--radius);padding:18px 20px;box-shadow:var(--shadow);position:relative;overflow:hidden">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px">
        <div>
          <div style="font-size:14px;font-weight:700;color:var(--text)">${s.name}</div>
          <div style="font-size:11.5px;color:var(--text3);margin-top:2px">${s.desc||'설명 없음'}</div>
        </div>
        <button onclick="delSuite('${s.id}')" style="background:none;border:none;cursor:pointer;color:var(--text3);font-size:14px">✕</button>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin:10px 0">
        <span class="badge s-통과">통과 ${pass}</span>
        <span class="badge s-실패">실패 ${fail}</span>
        <span class="badge s-블로킹">블로킹 ${block}</span>
        <span class="badge" style="background:#f1f5f9;color:#64748b">미수행 ${notRun}</span>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;font-size:11px;color:var(--text3)">
        <span>TC ${tcList.length}개</span><span>통과율 ${pct}%</span>
      </div>
      <div style="margin-top:8px;background:var(--surface2);border-radius:99px;height:6px;overflow:hidden">
        <div style="width:${pct}%;height:100%;background:var(--pass);border-radius:99px;transition:width .3s"></div>
      </div>
      ${tcList.length ? `<div style="margin-top:12px;display:flex;flex-direction:column;gap:4px">${tcList.slice(0,3).map(t=>`<div style="font-size:11px;color:var(--text2);display:flex;gap:6px"><span style="font-family:monospace;color:var(--accent)">${t.id}</span><span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.title}</span><span class="badge s-${t.status}" style="font-size:9.5px">${t.status}</span></div>`).join('')}${tcList.length>3?`<div style="font-size:11px;color:var(--text3)">+${tcList.length-3}개 더...</div>`:''}</div>` : ''}
      <div style="position:absolute;bottom:0;left:0;height:3px;background:var(--pass);width:${pct}%"></div>
    </div>`;
  }).join('');
}

function openAddSuiteModal() {
  const name = prompt('스위트 이름을 입력하세요');
  if (!name) return;
  const desc = prompt('설명 (선택사항)') || '';
  const tcIds = [];
  const id = 'SUITE-' + String(Date.now()).slice(-6);
  data.suites.push({id, name: name.trim(), desc: desc.trim(), tcIds, createdAt: new Date().toISOString().slice(0,10)});
  localStorage.setItem(KEYS.suites, JSON.stringify(data.suites));
  renderSuite();
  showToast(`✅ 스위트 "${name}" 생성됨`);
}

function delSuite(id) {
  if (!confirm('스위트를 삭제할까요?')) return;
  data.suites = data.suites.filter(s => s.id !== id);
  localStorage.setItem(KEYS.suites, JSON.stringify(data.suites));
  renderSuite();
  showToast('🗑️ 스위트가 삭제되었습니다');
}

/* ══════════════════════════════════════════
   Smart TC Generator
══════════════════════════════════════════ */
function renderSmartTc() {
  const sel = document.getElementById('smartTcReqSel');
  const cur = sel.value;
  sel.innerHTML = '<option value="">-- 요구사항 선택 --</option>';
  data.req.forEach(r => { const o=document.createElement('option'); o.value=r.id; o.textContent=`[${r.id}] ${r.title}`; sel.appendChild(o); });
  if (cur) sel.value = cur;

  const yrSel = document.getElementById('smartTcYear');
  const curYr = yrSel.value;
  yrSel.innerHTML = '';
  tcYears.forEach(y => { const o=document.createElement('option'); o.value=y; o.textContent=y; yrSel.appendChild(o); });
  if (curYr) yrSel.value = curYr;

  document.getElementById('smartTcResult').innerHTML = '<div style="color:var(--text3);font-size:12px;padding:20px 0">요구사항을 선택하고 AI TC 생성을 실행하세요.</div>';
  document.getElementById('smartTcCnt').textContent = '';
}

async function runSmartTcGen() {
  const reqId = document.getElementById('smartTcReqSel').value;
  if (!reqId) { showToast('⚠️ 요구사항을 선택해주세요'); return; }
  const types = [...document.querySelectorAll('#smartTcTypes input:checked')].map(i => i.value);
  if (!types.length) { showToast('⚠️ TC 유형을 하나 이상 선택해주세요'); return; }
  const year = document.getElementById('smartTcYear').value;

  let apiKey = localStorage.getItem(KEYS.apikey);
  if (!apiKey) { apiKey = prompt('Claude API 키를 입력해주세요 (sk-ant-...)'); if (!apiKey) return; localStorage.setItem(KEYS.apikey, apiKey.trim()); apiKey = apiKey.trim(); }

  const req = data.req.find(r => r.id === reqId);
  const resultEl = document.getElementById('smartTcResult');
  resultEl.innerHTML = '<div style="color:var(--text2);font-size:12px;padding:20px 0">⏳ AI가 TC를 생성하고 있습니다...</div>';

  const existingIds = data.tc.map(d => parseInt(d.id.replace(/\D/g,''))||0);
  const nextNum = existingIds.length ? Math.max(...existingIds)+1 : 1;

  const prompt = `당신은 전문 QA 엔지니어입니다. 아래 요구사항에 대한 테스트 케이스를 생성해주세요.

요구사항 ID: ${req.id}
제목: ${req.title}
설명: ${req.desc || '없음'}
영역: ${req.area} / 우선순위: ${req.priority}
생성할 TC 유형: ${types.join(', ')}

각 유형별로 1~2개씩 TC를 생성하고, 반드시 아래 JSON 배열 형식으로만 응답하세요:
[{"title":"TC 제목","type":"유형","priority":"높음|중간|낮음","pre":"사전 조건","steps":"1. 단계1\\n2. 단계2","expected":"기대 결과"}]`;

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {'Content-Type':'application/json','x-api-key':apiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-request-header':'true'},
      body: JSON.stringify({model:'claude-haiku-4-5-20251001', max_tokens:2048, messages:[{role:'user',content:prompt}]})
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const result = await resp.json();
    const text = result.content[0].text.trim();
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error('응답 파싱 실패');
    const tcDrafts = JSON.parse(jsonMatch[0]);

    document.getElementById('smartTcCnt').textContent = `${tcDrafts.length}개 생성됨`;
    resultEl.innerHTML = tcDrafts.map((t, i) => {
      const num = nextNum + i;
      const tcId = 'TC-' + String(num).padStart(3,'0');
      return `<div style="border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:10px;background:var(--surface)">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <span style="font-family:monospace;font-size:11px;color:var(--accent);font-weight:700">${tcId}</span>
          <span class="badge type-${t.type}">${t.type}</span>
          <span class="badge pri-${t.priority}">${t.priority}</span>
          <button onclick="saveSmartTc(${i},${num},'${reqId}','${year}')" style="margin-left:auto;background:var(--pass);color:#fff;border:none;border-radius:5px;padding:3px 10px;font-size:11px;font-weight:600;cursor:pointer">＋ TC에 추가</button>
        </div>
        <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:6px">${t.title}</div>
        <div style="font-size:11.5px;color:var(--text2)"><strong>사전조건:</strong> ${t.pre||'없음'}</div>
        <div style="font-size:11.5px;color:var(--text2);margin-top:4px"><strong>절차:</strong> ${(t.steps||'').replace(/\n/g,'<br>')}</div>
        <div style="font-size:11.5px;color:var(--text2);margin-top:4px"><strong>기대결과:</strong> ${t.expected||''}</div>
      </div>`;
    }).join('');
    window._smartTcDrafts = tcDrafts;
  } catch(e) { resultEl.innerHTML = `<div style="color:#ef4444;font-size:12px">❌ 오류: ${e.message}</div>`; }
}

function saveSmartTc(idx, num, reqId, year) {
  const t = window._smartTcDrafts[idx];
  const id = 'TC-' + String(num).padStart(3,'0');
  if (data.tc.find(x => x.id === id)) { showToast('⚠️ 이미 같은 ID가 존재합니다'); return; }
  const req = data.req.find(r => r.id === reqId);
  data.tc.push({id, reqId, year: year||'', area: req?.area||'기능', title:t.title, type:t.type, priority:t.priority, status:'미수행', assignee:'', date:'', pre:t.pre||'', steps:t.steps||'', expected:t.expected||'', desc:'', comments:[], images:[]});
  save('tc'); renderAll();
  showToast(`✅ ${id} TC 목록에 추가됨`);
  const btn = document.querySelector(`[onclick*="saveSmartTc(${idx},"]`);
  if (btn) { btn.textContent = '✓ 추가됨'; btn.disabled = true; btn.style.background = '#94a3b8'; }
}

/* ══════════════════════════════════════════
   결함 통계
══════════════════════════════════════════ */
function renderDefStat() {
  const df = data.def;
  document.getElementById('defStatSevCnt').textContent = `총 ${df.length}건`;
  document.getElementById('defStatStatusCnt').textContent = '';
  document.getElementById('defStatAreaCnt').textContent = '';

  // 상단 요약 카드
  const open = df.filter(d => !['종료','해결됨'].includes(d.status)).length;
  const high = df.filter(d => d.sev==='높음' && !['종료','해결됨'].includes(d.status)).length;
  const resolved = df.filter(d => d.status==='해결됨').length;
  const closed = df.filter(d => d.status==='종료').length;
  document.getElementById('defStatCards').innerHTML = [
    {label:'전체 결함', val:df.length, color:'#6366f1', bg:'#ede9fe'},
    {label:'미해결', val:open, color:'#ef4444', bg:'#fef2f2'},
    {label:'높음 미해결', val:high, color:'#f59e0b', bg:'#fffbeb'},
    {label:'해결/종료', val:resolved+closed, color:'#10b981', bg:'#ecfdf5'},
  ].map(c=>`<div class="card" style="flex:1;min-width:140px"><div style="display:flex;flex-direction:column;align-items:flex-start;gap:4px"><div style="font-size:11px;font-weight:600;color:var(--text2)">${c.label}</div><div style="font-size:28px;font-weight:800;color:${c.color}">${c.val}</div></div></div>`).join('');

  const mkBarChart = (items, total) => items.map(([lbl,clr,cnt]) =>
    `<div class="bar-row"><div class="bar-lbl">${lbl}</div><div class="bar-track"><div class="bar-fill" style="width:${total?Math.round(cnt/total*100):0}%;background:${clr}"><span>${cnt}</span></div></div><div class="bar-pct">${cnt}</div></div>`
  ).join('') || '<div class="empty">데이터 없음</div>';

  // 심각도별
  document.getElementById('defStatSevChart').innerHTML = mkBarChart([['높음','#ef4444',df.filter(d=>d.sev==='높음').length],['중간','#f59e0b',df.filter(d=>d.sev==='중간').length],['낮음','#10b981',df.filter(d=>d.sev==='낮음').length]], df.length);

  // 상태별
  const statuses = ['신규','진행중','해결됨','보류','종료'];
  const sColors = {'신규':'#ef4444','진행중':'#f59e0b','해결됨':'#10b981','보류':'#3b82f6','종료':'#94a3b8'};
  document.getElementById('defStatStatusChart').innerHTML = mkBarChart(statuses.map(s=>[s,sColors[s]||'#94a3b8',df.filter(d=>d.status===s).length]), df.length);

  // 영역별
  const areaCnts = {};
  df.forEach(d => { areaCnts[d.area] = (areaCnts[d.area]||0)+1; });
  document.getElementById('defStatAreaChart').innerHTML = mkBarChart(Object.entries(areaCnts).sort((a,b)=>b[1]-a[1]).map(([a,c])=>[a,'#6366f1',c]), df.length);

  // 담당자별
  const asnCnts = {};
  df.forEach(d => { const k=d.assignee||'미배정'; asnCnts[k]=(asnCnts[k]||0)+1; });
  document.getElementById('defStatAssignee').innerHTML = Object.entries(asnCnts).sort((a,b)=>b[1]-a[1]).map(([n,c])=>
    `<div class="bar-row"><div class="bar-lbl" style="width:64px">${n}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.round(c/df.length*100)}%;background:#6366f1"><span>${c}</span></div></div><div class="bar-pct">${c}</div></div>`
  ).join('') || '<div class="empty">데이터 없음</div>';

  // 미해결 높음
  const openHigh = df.filter(d => d.sev==='높음' && !['종료','해결됨'].includes(d.status));
  document.getElementById('defStatOpenHigh').innerHTML = openHigh.length
    ? openHigh.map(d=>`<div class="recent-item" onclick="nav('def')"><span class="rid">${d.id}</span><span class="rtitle">${d.title}</span><span class="badge s-${d.status}">${d.status}</span></div>`).join('')
    : '<div style="text-align:center;padding:24px;color:#10b981;font-size:13px">✅ 미해결 높음 결함 없음</div>';
}

/* ══════════════════════════════════════════
   RTM
══════════════════════════════════════════ */
function renderRtm() {
  const fa = document.getElementById('rtmAreaFilter').value;
  const fs = document.getElementById('rtmStatusFilter').value;

  // 영역 필터 셀렉트 populate
  const areaEl = document.getElementById('rtmAreaFilter');
  const curArea = areaEl.value;
  areaEl.innerHTML = '<option value="">전체 영역</option>';
  areas.forEach(a => { const o=document.createElement('option'); o.value=o.textContent=a; areaEl.appendChild(o); });
  areaEl.value = curArea;

  const tbody = document.getElementById('rtmBody');
  tbody.innerHTML = '';
  let rowCount = 0;

  data.req.filter(r => !fa || r.area === fa).forEach(r => {
    const relTc = data.tc.filter(t => t.reqId === r.id && (!fs || t.status === fs));
    const sClass = r.status==='확정'?'s-확정':r.status==='검토중'?'s-검토중':'s-보류';
    const priClass = `pri-${r.priority}`;

    if (!relTc.length) {
      if (fs) return; // TC 상태 필터 시 TC 없는 요구사항 숨김
      const tr = document.createElement('tr');
      tr.innerHTML = `<td class="idc">${r.id}</td><td><span class="area-tag">${r.area}</span></td><td style="font-weight:600">${r.title}</td><td><span class="badge ${priClass}">${r.priority}</span></td><td><span class="badge ${sClass}">${r.status}</span></td><td colspan="4" style="color:var(--text3);font-size:11px;text-align:center">TC 없음</td>`;
      tbody.appendChild(tr); rowCount++;
      return;
    }

    relTc.forEach((t, ti) => {
      const defList = data.def.filter(d => d.tcId === t.id);
      const tr = document.createElement('tr');
      const reqCells = ti === 0
        ? `<td class="idc" rowspan="${relTc.length}" style="vertical-align:top;padding-top:12px">${r.id}</td><td rowspan="${relTc.length}" style="vertical-align:top;padding-top:10px"><span class="area-tag">${r.area}</span></td><td rowspan="${relTc.length}" style="font-weight:600;vertical-align:top;padding-top:10px">${r.title}</td><td rowspan="${relTc.length}" style="vertical-align:top;padding-top:10px"><span class="badge ${priClass}">${r.priority}</span></td><td rowspan="${relTc.length}" style="vertical-align:top;padding-top:10px"><span class="badge ${sClass}">${r.status}</span></td>`
        : '';
      tr.innerHTML = `${reqCells}<td class="idc">${t.id}</td><td style="font-size:11.5px">${t.title}</td><td><span class="badge s-${t.status}">${t.status}</span></td><td>${defList.map(d=>`<span class="badge s-${d.status}" style="font-size:10px;cursor:pointer" onclick="nav('def')">${d.id}</span>`).join(' ')||'<span style="color:var(--text3);font-size:11px">-</span>'}</td>`;
      tbody.appendChild(tr); rowCount++;
    });
  });

  document.getElementById('rtmEmpty').style.display = rowCount ? 'none' : 'block';
}

/* ── Sort ── */
function initSort(tableId, type) {
  document.querySelectorAll(`#${tableId} th[data-col]`).forEach(th => {
    th.addEventListener('click', e => {
      if (e.target.classList.contains('rz')) return;
      const col=th.dataset.col, ss=sortState[type];
      ss.dir = (ss.col===col && ss.dir==='asc') ? 'desc' : 'asc'; ss.col=col;
      document.querySelectorAll(`#${tableId} th[data-col]`).forEach(t=>t.classList.remove('sa','sd'));
      th.classList.add(ss.dir==='asc'?'sa':'sd');
      if (type==='req') renderReq(); else if (type==='tc') renderTC(); else renderDef();
    });
  });
}

/* ── Modal Forms ── */
function areaOpts() { return areas.map(a=>`<option value="${a}">${a}</option>`).join(''); }
const modalForms = {
  req: (d) => `<div class="fr"><div class="fg" style="flex:0 0 130px"><label>요구사항 ID *</label><input id="m-id" value="${d?d.id:''}" placeholder="FR-001"></div><div class="fg" style="flex:2"><label>제목 *</label><input id="m-title" value="${d?d.title:''}"></div></div><div class="fr"><div class="fg"><label>영역</label><select id="m-area"><option value="">선택</option>${areaOpts()}</select></div><div class="fg"><label>우선순위</label><select id="m-priority"><option>상</option><option>중</option><option>하</option></select></div><div class="fg"><label>상태</label><select id="m-status"><option>확정</option><option>검토중</option><option>보류</option></select></div></div><div class="fr"><div class="fg" style="min-width:100%"><label>설명</label><textarea id="m-desc">${d?d.desc:''}</textarea></div></div>`,
  def: (d) => `<div class="fr"><div class="fg" style="flex:0 0 120px"><label>결함 ID *</label><input id="m-id" value="${d?d.id:''}" placeholder="BUG-001"></div><div class="fg" style="flex:2"><label>결함명 *</label><input id="m-title" value="${d?d.title:''}"></div></div><div class="fr"><div class="fg"><label>TC-ID</label><input id="m-tcId" value="${d?d.tcId:''}" placeholder="TC-001"></div><div class="fg"><label>영역</label><select id="m-area"><option value="">선택</option>${areaOpts()}</select></div></div><div class="fr"><div class="fg"><label>심각도</label><select id="m-sev"><option>높음</option><option>중간</option><option>낮음</option></select></div><div class="fg"><label>상태</label><select id="m-status"><option>신규</option><option>진행중</option><option>해결됨</option><option>종료</option><option>보류</option></select></div></div><div class="fr"><div class="fg"><label>담당자</label><input id="m-assignee" value="${d?d.assignee:''}" placeholder="담당자"></div><div class="fg"><label>등록자 *</label><input id="m-reporter" value="${d?d.reporter:lastUser}" placeholder="내 이름"></div><div class="fg"><label>발견일</label><input type="date" id="m-date" value="${d?d.date:toDay()}"></div></div><div class="fr"><div class="fg" style="min-width:100%"><label>설명</label><textarea id="m-desc">${d?d.desc:''}</textarea></div></div>`
};

function openModal(type, id) {
  editType=type; editId=id||null;
  const d = id ? data[type].find(x=>x.id===id) : null;
  const titles = {req:'요구사항', def:'결함'};
  document.getElementById('modalTitle').textContent = (id?'✏️ 수정 · ':'✨ 등록 · ') + titles[type];
  document.getElementById('modalBody').innerHTML = modalForms[type](d);
  if (d) { ['area','priority','status','sev'].forEach(f => { const el=document.getElementById('m-'+f); if(el&&d[f]) el.value=d[f]; }); }
  document.getElementById('ov').classList.add('show');
  setTimeout(() => document.getElementById('m-title')?.focus(), 100);
}
function closeModal() { document.getElementById('ov').classList.remove('show'); editId=editType=null; }

function saveItem() {
  const type=editType;
  const id=document.getElementById('m-id')?.value.trim();
  const title=document.getElementById('m-title')?.value.trim();
  if (!id)    { alert('ID를 입력해주세요.'); return; }
  if (!title) { alert('제목/결함명을 입력해주세요.'); return; }
  const get = i => { const el=document.getElementById(i); return el?el.value.trim():''; };
  const isNew = !editId;
  if (isNew && data[type].find(x=>x.id===id)) { alert('이미 존재하는 ID입니다.'); return; }
  const prev = editId ? data[type].find(x=>x.id===editId) : null;
  let item;
  if (type==='req') {
    item = {id, area:get('m-area'), title, desc:get('m-desc'), priority:get('m-priority'), status:get('m-status'), comments:prev?prev.comments:[], images:prev?prev.images:[]};
  } else {
    const reporter=get('m-reporter');
    if (reporter) { lastUser=reporter; localStorage.setItem(KEYS.user,reporter); }
    item = {id, tcId:get('m-tcId'), area:get('m-area'), title, desc:get('m-desc'), sev:get('m-sev'), status:get('m-status'), assignee:get('m-assignee'), reporter, date:get('m-date'), comments:prev?prev.comments:[], images:prev?prev.images:[]};
  }
  if (editId) { const idx=data[type].findIndex(x=>x.id===editId); data[type][idx]=item; }
  else { data[type].push(item); showToast(`✨ 등록: ${title}`); }
  save(type); closeModal(); renderAll();
}

function delItem(type, id) {
  if (!confirm('정말 삭제하시겠습니까?')) return;
  data[type] = data[type].filter(x=>x.id!==id);
  save(type); renderAll(); showToast('🗑️ 삭제되었습니다.');
}

/* ── Detail ── */
function openDet(type, id) {
  detType=type; detId=id;
  const d = data[type].find(x=>x.id===id);
  document.getElementById('d-title').textContent = `[${d.id}] ${d.title}`;
  let meta = '';
  if (type==='req') meta=`<div class="mi"><span>영역 </span><strong>${d.area}</strong></div><div class="mi"><span>우선순위 </span><span class="badge pri-${d.priority}">${d.priority}</span></div><div class="mi"><span>상태 </span><strong>${d.status}</strong></div>`;
  else if (type==='tc') meta=`<div class="mi"><span>영역 </span><strong>${d.area}</strong></div><div class="mi"><span>유형 </span><span class="badge type-${d.type}">${d.type}</span></div><div class="mi"><span>우선순위 </span><span class="badge pri-${d.priority}">${d.priority}</span></div><div class="mi"><span>상태 </span><span class="badge s-${d.status}">${d.status}</span></div><div class="mi"><span>담당자 </span><strong>${d.assignee||'-'}</strong></div>`;
  else meta=`<div class="mi"><span>영역 </span><strong>${d.area}</strong></div><div class="mi"><span>심각도 </span><span class="badge sev-${d.sev}">${d.sev}</span></div><div class="mi"><span>상태 </span><span class="badge s-${d.status}">${d.status}</span></div><div class="mi"><span>담당자 </span><strong>${d.assignee||'-'}</strong></div><div class="mi"><span>등록자 </span><strong>${d.reporter||'-'}</strong></div>`;
  document.getElementById('d-meta').innerHTML = meta;
  document.getElementById('d-desc').textContent = d.desc||'(설명 없음)';
  document.getElementById('c-auth').value = lastUser;
  renderImgs(d); renderComments(d);
  document.getElementById('dov').classList.add('show');
}
function closeDet() { document.getElementById('dov').classList.remove('show'); detId=detType=null; }

function renderImgs(d) {
  const g = document.getElementById('igrid');
  g.innerHTML = `<label class="iupbtn" for="iup"><span style="font-size:22px">＋</span><span>이미지 추가</span></label><input type="file" id="iup" accept="image/*" multiple style="display:none" onchange="handleImg(event)">`;
  (d.images||[]).forEach((src,i) => {
    const w=document.createElement('div'); w.className='ithumb';
    w.innerHTML=`<img src="${src}" onclick="openLb('${src}')"><button class="di" onclick="delImg(${i})">✕</button>`;
    g.insertBefore(w, g.firstChild);
  });
}
function handleImg(e) {
  const files=Array.from(e.target.files), d=data[detType].find(x=>x.id===detId);
  if (!d) return; let n=0;
  files.forEach(f => { const r=new FileReader(); r.onload=ev => { d.images=d.images||[]; d.images.push(ev.target.result); if(++n===files.length){save(detType);renderImgs(d);renderAll();} }; r.readAsDataURL(f); });
  e.target.value='';
}
function delImg(i) { if(!confirm('삭제?'))return; const d=data[detType].find(x=>x.id===detId); d.images.splice(i,1); save(detType); renderImgs(d); }
function openLb(src) { document.getElementById('lbImg').src=src; document.getElementById('lb').classList.add('show'); }
function closeLb() { document.getElementById('lb').classList.remove('show'); }

function renderComments(d) {
  const list=document.getElementById('clist'); list.innerHTML='';
  document.getElementById('cntBadge').textContent=(d.comments||[]).length;
  (d.comments||[]).forEach((c,i) => {
    const el=document.createElement('div'); el.className='ci';
    el.innerHTML=`<div class="ctop"><span class="cauth"><span class="cavatar">${c.author.slice(0,1)}</span>${c.author}</span><span style="display:flex;align-items:center;gap:6px"><span class="ctime">${c.time}</span><button class="cdel" onclick="delComment(${i})">✕</button></span></div><div class="ctxt">${c.text.replace(/\n/g,'<br>')}</div>`;
    list.appendChild(el);
  });
  list.scrollTop=list.scrollHeight;
}
function addComment() {
  const auth=document.getElementById('c-auth').value.trim(), txt=document.getElementById('c-txt').value.trim();
  if (!auth){alert('이름을 입력해주세요.');return;} if(!txt) return;
  lastUser=auth; localStorage.setItem(KEYS.user,auth);
  const d=data[detType].find(x=>x.id===detId);
  d.comments=d.comments||[]; d.comments.push({author:auth,text:txt,time:nowStr()});
  document.getElementById('c-txt').value=''; save(detType); renderComments(d); renderAll();
}
function delComment(i) { if(!confirm('삭제?'))return; const d=data[detType].find(x=>x.id===detId); d.comments.splice(i,1); save(detType); renderComments(d); }

function showToast(msg) {
  const w=document.getElementById('toastWrap');
  const t=document.createElement('div'); t.className='toast'; t.textContent=msg;
  w.appendChild(t); setTimeout(()=>t.remove(), 3200);
}

/* ── Column Resize ── */
(function(){
  let sx,sw,th;
  document.querySelectorAll('.rz').forEach(r=>{
    r.addEventListener('mousedown',e=>{th=r.parentElement;sx=e.pageX;sw=th.offsetWidth;r.classList.add('on');document.body.style.cursor='col-resize';document.body.style.userSelect='none';e.preventDefault();e.stopPropagation();});
  });
  document.addEventListener('mousemove',e=>{if(th)th.style.width=Math.max(50,sw+e.pageX-sx)+'px';});
  document.addEventListener('mouseup',()=>{if(!th)return;document.querySelectorAll('.rz').forEach(r=>r.classList.remove('on'));document.body.style.cursor='';document.body.style.userSelect='';th=null;});
})();

/* ── Filter Events ── */
['reqSearch','reqFArea','reqFPri','reqFStatus'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener(id.includes('Search')?'input':'change',renderReq);});
['tcSearch','tcFType','tcFStatus','tcFPri'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener(id.includes('Search')?'input':'change',renderTC);});
['tcReqSearch','tcReqFArea'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener(id.includes('Search')?'input':'change',renderTcReqView);});
['defSearch','defFArea','defFSev','defFStatus'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener(id.includes('Search')?'input':'change',renderDef);});

document.getElementById('ov').addEventListener('click',e=>{if(e.target.id==='ov')closeModal();});
document.getElementById('dov').addEventListener('click',e=>{if(e.target.id==='dov')closeDet();});
document.getElementById('btnAddTc').addEventListener('click',()=>{ newTcRow=true; renderTC(); setTimeout(()=>{ const tw=document.querySelector('#p-tc .tw'); if(tw)tw.scrollTop=tw.scrollHeight; },50); });

initSort('reqTable','req');
initSort('tcTable','tc');
initSort('defTable','def');

load(); nav('dash');
</script>
</body>
</html>
