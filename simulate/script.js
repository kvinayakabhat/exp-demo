const svgContainer = document.getElementById('dots-lines');
let isDrawing = false;
let startPoint = null;

const dots = [
    { x: 50, y: 50 },
    { x: 150, y: 50 },
    { x: 250, y: 50 },
    { x: 50, y: 150 },
    { x: 150, y: 150 },
    { x: 250, y: 150 }
];

dots.forEach((dot, index) => {
    const dotElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dotElement.setAttribute('class', 'dot');
    dotElement.setAttribute('cx', dot.x);
    dotElement.setAttribute('cy', dot.y);
    dotElement.setAttribute('r', 10);
    svgContainer.appendChild(dotElement);

    dotElement.addEventListener('mousedown', () => {
        startDrawing(dot.x, dot.y);
    });

    dotElement.addEventListener('mouseup', () => {
        if (isDrawing) {
            stopDrawing();
            if (index < dots.length - 1) {
                startDrawing(dots[index + 1].x, dots[index + 1].y);
            }
        }
    });
});

function startDrawing(x, y) {
    isDrawing = true;
    startPoint = { x, y };
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', 'line');
    line.setAttribute('x1', x);
    line.setAttribute('y1', y);
    line.setAttribute('x2', x);
    line.setAttribute('y2', y);
    svgContainer.appendChild(line);
}

function drawLine(x, y) {
    if (isDrawing) {
        const line = svgContainer.lastChild;
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
    }
}

function stopDrawing() {
    isDrawing = false;
    startPoint = null;
}

svgContainer.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        drawLine(e.clientX, e.clientY);
    }
});

svgContainer.addEventListener('mouseup', () => {
    if (isDrawing) {
        stopDrawing();
    }
});
