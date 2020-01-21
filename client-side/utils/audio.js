export default {
    base64ToFile: base64 => 
        fetch(base64).
        then(res => res.blob())
        .then(blob => new File([blob], "my-voice.wav"))
        .catch(err => console.log(err)),
    play: base64 => 
        new Audio(base64).play(),
    record: (dispatch, timeout) => {
        let recorder = null;
    
        const onsuccess = (stream) => {
            recorder = new MediaRecorder(stream, {
                type: 'audio/ogg; codecs=opus'
            });
    
            recorder.start(); 
    
            recorder.ondataavailable = (e) => {
                let reader = new FileReader()
                reader.onloadend = () => {
                    dispatch(reader.result);
                }
    
                reader.readAsDataURL(e.data);
            }
        }
    
        navigator.getUserMedia = (
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia
        );
    
        navigator.getUserMedia({
            audio: true
        }, onsuccess, (e) => {
            console.log(e);
        });
    
        setTimeout(() => {
            recorder.stop(); 
        }, timeout);
    },
}