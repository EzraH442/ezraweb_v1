function getCaptchaToken() {
    return new Promise(resolve => {
        grecaptcha.ready(function () {
            grecaptcha.execute('6Le1iisaAAAAAGW7-lA_PoCubVTHxxOYBJUoc83X').then(function (token) {
                resolve(token);
            });
        });
    });
}

async function onFormSubmit(captcha, form) {
    let token = await getCaptchaToken();
    console.log(captcha);
    captcha.value = token;
    form.submit();
}

function createEmailer(captchaId, formId) {
    let form = document.getElementById(formId);

    form.addEventListener('submit', function () { return false; }, false);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        onFormSubmit(document.getElementById(captchaId), document.getElementById(formId));
    }, false);
}

createEmailer("recaptcha", "contact-form")