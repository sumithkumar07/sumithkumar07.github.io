// Void Kernel Website Interactions
document.addEventListener('DOMContentLoaded', () => {
    // --- LIVE NEURAL VISUALIZER (Three.js) ---
    const initNeuralViz = () => {
        const container = document.getElementById('canvas-container');
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        const particleCount = 1500;
        const geometry = new THREE.BufferGeometry();
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const r = 4 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        const material = new THREE.PointsMaterial({ size: 0.04, color: 0x7000FF, transparent: true, opacity: 0.6 });
        const brain = new THREE.Points(geometry, material);
        scene.add(brain);

        camera.position.z = 12;

        const animate = () => {
            requestAnimationFrame(animate);
            brain.rotation.y += 0.0015;
            brain.rotation.x += 0.0007;
            const time = Date.now() * 0.001;
            brain.scale.setScalar(1 + Math.sin(time) * 0.04);
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    };

    initNeuralViz();

    // Subtle mouse parallax for the void background
    document.addEventListener('mousemove', (e) => {
        const bg = document.querySelector('.void-bg');
        if (!bg) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        bg.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Neural Pulsing Effect (Console Log for fun)
    console.log("%c VOID KERNEL DETECTED ", "background: #7000FF; color: white; font-weight: bold; padding: 5px;");
});
