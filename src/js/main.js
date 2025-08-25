import '../css/styles.css'
import LavaLamp from './lava-lamp.js'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.lava-lamp-canvas');
    if (canvas) {
        new LavaLamp(canvas);
    }
});

