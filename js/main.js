// document.addEventListener('DOMContentLoaded', () => {
//     class BubbleFactory {
//         createBubble() {
//             const bubble = document.createElement('div');
//             bubble.className = 'bubble';
//             return bubble;
//         }
//     }

//     // class BubbleConfigurator {
//     //     configure(bubble) {
//     //         const size = Math.random() * 10 + 1; // Random size between 10 and 60
//     //         // const position = Math.random() * 100; // Random horizontal position

//     //         bubble.style.width = `${size}px`;
//     //         bubble.style.height = `${size}px`;
//     //         // bubble.style.left = `${position}%`;
//     //         //bubble.style.bottom = '-100px'; // Start below the viewport

//     //         return bubble;
//     //     }
//     // }

//     class BubbleAnimationManager {
//         animate(bubble) {
//             const duration = Math.random() * 25 + 45;
//             const delay = Math.random() * -25;
//             bubble.style.animation = `float ${duration}s ease-in infinite ${delay}s`;
//             return bubble;
//         }
//     }

//     class BubbleController {
//         constructor(bubbleContainer, bubbleCount) {
//             this.container = document.querySelector(bubbleContainer);
//             if (!this.container) {
//                 console.error('Bubble container not found!');
//                 return;
//             }
//             this.bubbleCount = bubbleCount;
//             this.factory = new BubbleFactory();
//             this.configurator = new BubbleConfigurator();
//             this.animationManager = new BubbleAnimationManager();
//         }

//         init() {
//             console.log('Initializing bubbles...');
//             for(let i = 0; i < this.bubbleCount; i++) {
//                 const bubble = this.factory.createBubble();
//                 this.configurator.configure(bubble);
//                 this.animationManager.animate(bubble);
//                 this.container.appendChild(bubble);
//             }
//         }
//     }

//     let numberOfBubbles = Math. trunc(Math. random() * 20);

//     const bubbleSystem = new BubbleController('.bubble-container', numberOfBubbles);
//     bubbleSystem.init();
// });