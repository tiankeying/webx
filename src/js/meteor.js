
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('meteorCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // 流星对象池
    const meteorPool = [];
    const activeMeteors = [];
    const MAX_METEORS = 10;
    
    // 流星类
    class Meteor {
        constructor(startFrom) {
            this.startFrom = startFrom; // 记录初始方向
            this.init();
        }
    
        init() {
            if (this.startFrom === 'bottom-right') {
                // 右下 -> 左上
                this.x = Math.random() * canvas.width / 2 + canvas.width / 2;
                this.y = canvas.height + 10;
                this.speedX = -(Math.random() * 3 + 2); // 向左
                this.speedY = -(Math.random() * 3 + 2); // 向上
            } else {
                // 左下 -> 右上
                this.x = Math.random() * canvas.width / 2;
                this.y = canvas.height + 10;
                this.speedX = Math.random() * 3 + 2; // 向右
                this.speedY = -(Math.random() * 3 + 2); // 向上
            }
    
            this.size = Math.random() * 3 + 1;
            this.trail = [];
            this.maxTrail = 15;
            this.color = `hsl(${Math.random() * 60 + 200}, 100%, 50%)`; // 蓝色系
        }
    
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
    
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > this.maxTrail) {
                this.trail.shift();
            }
    
            // 飞出屏幕时标记可回收
            if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
                return false;
            }
            return true;
        }
    
        draw() {
            // 绘制拖尾
            for (let i = 0; i < this.trail.length; i++) {
                const alpha = i / this.trail.length;
                const size = this.size * (i / this.trail.length);
                
                ctx.beginPath();
                ctx.arc(this.trail[i].x, this.trail[i].y, size, 0, Math.PI * 2);
                ctx.fillStyle = `${this.color.replace(')', `, ${alpha})`).replace('hsl', 'hsla')}`;
                ctx.fill();
            }
    
            // 绘制流星头部
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    // 初始化流星池（5个右下->左上，5个左下->右上）
    function initMeteorPool() {
        for (let i = 0; i < MAX_METEORS; i++) {
            const startFrom = i < 5 ? 'bottom-right' : 'bottom-left';
            const meteor = new Meteor(startFrom);
            meteorPool.push(meteor);
            activeMeteors.push(meteor);
        }
    }
    
    // 动画循环
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        for (let i = activeMeteors.length - 1; i >= 0; i--) {
            const meteor = activeMeteors[i];
            const isActive = meteor.update();
    
            if (!isActive) {
                // 回收流星，并重新初始化（保持原方向）
                activeMeteors.splice(i, 1);
                meteor.init(); // 重新初始化位置，但方向不变（this.startFrom 已存储）
                meteorPool.push(meteor);
                
                // 从池中取一个新流星（保持总数不变）
                if (meteorPool.length > 0) {
                    const newMeteor = meteorPool.pop();
                    newMeteor.init();
                    activeMeteors.push(newMeteor);
                }
            } else {
                meteor.draw();
            }
        }
    
        requestAnimationFrame(animate);
    }
    
    // 窗口大小调整时重置画布
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // 初始化并开始动画
    initMeteorPool();
    animate();

    });