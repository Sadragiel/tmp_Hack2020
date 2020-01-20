export default (dispatch, timeout) => {
    let recorder = null;

    const onsuccess = (stream) => {
        recorder = new MediaRecorder(stream, {
            type: 'audio/ogg; codecs=opus'
        });

        recorder.start(); 

        recorder.ondataavailable = (e) => {
            let reader = new FileReader()
            reader.onloadend = () => {
                console.log('from recorder', reader.result);
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
}