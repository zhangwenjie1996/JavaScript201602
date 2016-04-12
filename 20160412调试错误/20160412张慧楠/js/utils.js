var utils=(function(){
    return {
        //������ת��Ϊ����
        listToArray:function(likeArray){
            var ary=[];
            try{
                ary=Array.prototype.slice.call(likeArray,0)
            }catch(e){
                for(var i= 0,len=likeArray.length;i<len;i++){
                    ary[ary.length]=likeArray[i];
                }
            }
            return ary;
        },

        //json��ʽ���ַ���ת��ΪJson��ʽ�Ķ���

        formatJSON:function(jsonStr){
            return "JSON" in window?JSON.parse(jsonStr):eval("("+jsonStr+")")
        },

        //��ȡԪ����ҳ���е�css��ʽ
        getCss:function(curEle,attr){
            var val=null,reg=null;
            if(window.getComputedStyle){
                val=window.getComputedStyle(curEle,null)[attr];
            }else{
                if(attr==="opacity"){
                    val=curEle.currentStyle[attr];
                    reg=/^alpha\(opacity=(\d+(?:\.\d+)?)\)/;
                    val=reg.exec(val)?reg.exec(val)[1]/100:1;
                }else{
                    val=curEle.currentStyle[attr];
                }
            }
            reg=/^(-?\d+(\.\d+)?)(px|pt|em|rem)?$/;
            return val=reg.test(val)?parseFloat(val):val;
        },

        //��ȡԪ��ƫ��body�ľ���
        offset:function(curEle){
            var disLeft=curEle.offsetLeft,disTop=curEle.offsetTop,par=curEle.offsetParent;
            while(par){
                if(navigator.userAgent.indexOf("MSIE 8")===-1){
                    disLeft+=par.clientLeft;
                    disTop+=par.clientTop
                }
                disLeft+=par.offsetLeft;
                disTop+=par.offsetTop;
                par=par.offsetParent
            }
            return{left:disLeft,top:disTop};
        },

        //��ȡ����ģ����Ϣ
        win:function(attr,value){
            if(typeof value==="undefined"){
                return document.documentElement[attr]||document.body[attr];
            }
            document.documentElement[attr]=[value];
            document.body[attr]=[value];
        }
    }
})();
