const $ = require('jquery')
const getFormDataUploader = function (form,file,url,cb) {
    try {
        const formData =new FormData()
        formData.append('file',file)
        const xhr = new XMLHttpRequest()
        xhr.open('POST',$(form).attr('action'))
        xhr.onload = function () {
            if(xhr.status === 200){
                cb(xhr.response)
            }
        }
        xhr.send(formData)
    } catch (e) {
        return false
    }
}

const getIframeUploader = function (form,file,url,cb) {
    try {
        const seed = Math.floor(Math.random() * 1000);
        const id = "uploader-frame-" + seed;
        const callback = "uploader-cb-" + seed;
        const iframe = $('<iframe id="' + id + '" name="' + id + '" style="display:none;">');
        form.attr('target', id).append(iframe).attr('action', url + '?iframe=' + callback);
    }catch (e){
        return false
    }
}

const getUploadIterator = (...uploaders)=>{
    for(let upload of uploaders){
        console.log(upload)
        if(upload()!==false){
            return upload
        }
    }
    return 'no support upload'
}
module.exports = function () {
    return getUploadIterator(getFormDataUploader,getIframeUploader)
}
