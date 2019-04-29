var app = document.getElementById('work');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Développeuse Web et Applications')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Développeuse <strong>Full Stack</strong> JavaScript')
    .pauseFor(2500)
    .start();