class Upload {
    constructor(uploadType){
        this.uploadType = uploadType
    }
    delFile( id ){
        uploadManager.setExternalState( id, this );
        if ( this.fileSize < 3000 ){
            return this.dom.parentNode.removeChild( this.dom );
        }
        if ( window.confirm( '确定要删除该文件吗? ' + this.fileName ) ){
            return this.dom.parentNode.removeChild( this.dom );
        }
    };
}
const UploadFactory = (function UploadFactory() {
    const createdFlyWeightObjs = {}
    return {
        create(uploadType){
            if(createdFlyWeightObjs[uploadType]){
                return createdFlyWeightObjs[uploadType]
            }else {
                return createdFlyWeightObjs[uploadType] = new Upload(uploadType)
            }
        }
    }
})();
UploadFactory.create('flash')
const uploadManage = (function () {
    const dataBase = {}
    return {
        add(id,uploadType,fileName,fileSize){
            const flyWeightObj = UploadFactory.create(uploadType)
            const dom = document.createElement( 'div' );
            dom.innerHTML =
                '<span>文件名称:'+ fileName +', 文件大小: '+ fileSize +'</span>' +
                '<button class="delFile">删除</button>';
            dom.querySelector( '.delFile' ).onclick = function(){
                flyWeightObj.delFile( id );
            }
            dataBase[id] = {
                dom,fileName,fileSize
            }
        },
        setExternalState: function( id, flyWeightObj ){
            var uploadData = uploadDatabase[ id ];
            for ( var i in uploadData ){
                flyWeightObj[ i ] = uploadData[ i ];
            }
        }
    }
})();