var app = document.getElementById('work');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Développeuse Web')
    .pauseFor(2500)
    .deleteChars(3)
    .typeString('Applications')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Développeuse <strong>Web et Applications</strong>')
    .pauseFor(2500)
    .start();