
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-badge { font-family: \x27Helvetica Neue\x27, Helvetica, sans-serif; -webkit-box-sizing: border-box; box-sizing: border-box; font-size: 12px; line-height: 1; display: inline-block; padding: 3px 6px; color: #333; border-radius: 100px; background-color: #f1f1f1; }\n.",[1],"uni-badge.",[1],"uni-badge-inverted { padding: 0 5px 0 0; color: #999; background-color: transparent; }\n.",[1],"uni-badge-primary { color: #fff; background-color: #007aff; }\n.",[1],"uni-badge-primary.",[1],"uni-badge-inverted { color: #007aff; background-color: transparent; }\n.",[1],"uni-badge-success { color: #fff; background-color: #4cd964; }\n.",[1],"uni-badge-success.",[1],"uni-badge-inverted { color: #4cd964; background-color: transparent; }\n.",[1],"uni-badge-warning { color: #fff; background-color: #f0ad4e; }\n.",[1],"uni-badge-warning.",[1],"uni-badge-inverted { color: #f0ad4e; background-color: transparent; }\n.",[1],"uni-badge-error { color: #fff; background-color: #dd524d; }\n.",[1],"uni-badge-error.",[1],"uni-badge-inverted { color: #dd524d; background-color: transparent; }\n.",[1],"uni-badge--small { -webkit-transform: scale(0.8); -ms-transform: scale(0.8); transform: scale(0.8); -webkit-transform-origin: center center; -ms-transform-origin: center center; transform-origin: center center; }\n@charset \x22UTF-8\x22;\n.",[1],"uni-drawer { display: block; position: fixed; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; visibility: hidden; z-index: 998; height: 100%; }\n.",[1],"uni-drawer.",[1],"uni-drawer--right .",[1],"uni-drawer__content { left: auto; right: 0; -webkit-transform: translatex(100%); -ms-transform: translatex(100%); transform: translatex(100%); }\n.",[1],"uni-drawer.",[1],"uni-drawer--visible { visibility: visible; }\n.",[1],"uni-drawer.",[1],"uni-drawer--visible .",[1],"uni-drawer__content { -webkit-transform: translatex(0); -ms-transform: translatex(0); transform: translatex(0); }\n.",[1],"uni-drawer.",[1],"uni-drawer--visible .",[1],"uni-drawer__mask { display: block; opacity: 1; }\n.",[1],"uni-drawer__mask { display: block; opacity: 0; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.4); -webkit-transition: opacity 0.3s; -o-transition: opacity 0.3s; transition: opacity 0.3s; }\n.",[1],"uni-drawer__content { display: block; position: absolute; top: 0; left: 0; width: 61.8%; height: 100%; background: #ffffff; -webkit-transition: all 0.3s ease-out; -o-transition: all 0.3s ease-out; transition: all 0.3s ease-out; -webkit-transform: translatex(-100%); -ms-transform: translatex(-100%); transform: translatex(-100%); }\n.",[1],"index { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"list_content { position: relative; top: 45px; }\n.",[1],"drawer-box{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; height: 100%; }\n.",[1],"drawer_title { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"drawer_title\x3e.",[1],"my_icon { -webkit-box-flex: 3; -webkit-flex: 3; -ms-flex: 3; flex: 3; position: relative; }\n.",[1],"drawer_title\x3e.",[1],"my_icon\x3e.",[1],"_img{ border-radius: 30px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto auto; }\n.",[1],"drawer_title\x3e.",[1],"my_name { -webkit-box-flex: 4; -webkit-flex: 4; -ms-flex: 4; flex: 4; position: relative; }\n.",[1],"my_name_box{ width: 100%; height: 55px; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto auto; }\n.",[1],"drawer_title\x3e.",[1],"copyreader { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; position: relative; }\n.",[1],"drawer_list{ -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; border: 1px solid #cccccc; }\n.",[1],"M_list { height: ",[0,150],"; border-bottom: 1px solid #CCCCCC; background-color: rgba(255, 255, 255, 0.5); display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"M_icon\x3e.",[1],"_img { border-radius: 50px; -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; padding-top: ",[0,40],"; padding-left: 25px; width: 50px; height: 50px; }\n.",[1],"M_name { -webkit-box-flex: 3; -webkit-flex: 3; -ms-flex: 3; flex: 3; padding-top: ",[0,40],"; padding-left: 25px; }\n.",[1],"M_name\x3e.",[1],"user_name { font-size: 18px; }\n.",[1],"M_name\x3e.",[1],"M_last { margin-top: 10px; font-size: 16px; color: #6a625e; width: 100px; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"M_num { padding: 0px; }\n.",[1],"M_num\x3e.",[1],"_p { background-color: #f00; display: table-cell; width: 30px; height: 30px; border-radius: 40px; text-align: center; margin-right: 0; color: #FFFFFF; font-size: 14px; padding-top: ",[0,0],"; vertical-align: middle; }\n",])();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/index/index.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      