function hashVals() {

    let phrase = 'A very public secret phrase';
    let input = document.getElementById("txt").value;
    document.getElementById("userInput").innerHTML = input;
    if(input === "") alert("Input is blank, please enter string");


    let aesCphiered = CryptoJS.AES.encrypt(input, phrase).toString();
    document.getElementById("aesOpt").innerHTML = aesCphiered;

    let sha1Cphiered = CryptoJS.HmacSHA1(input, phrase).toString();
    document.getElementById("sha1Opt").innerHTML = sha1Cphiered;

    let sha224Cphiered = CryptoJS.HmacSHA224(input, phrase).toString();
    document.getElementById("sha224Opt").innerHTML = sha224Cphiered;

    let sha256Cphiered = CryptoJS.HmacSHA256(input, phrase).toString();
    document.getElementById("sha256Opt").innerHTML = sha256Cphiered;

}