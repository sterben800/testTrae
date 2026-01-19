// 导入常量数据
import { questions, houseDescriptions, houseNames } from './data.js';

// 生成星空背景
function createStars() {
    const container = document.createElement('div');
    container.className = 'stars-container';
    document.body.appendChild(container);
    
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
        // 创建星星容器，用于实现轨道运动
        const starWrapper = document.createElement('div');
        starWrapper.style.position = 'absolute';
        
        const star = document.createElement('div');
        star.className = 'star';
        
        // 随机位置
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        // 随机大小
        const size = Math.random() * 3 + 1;
        
        // 随机颜色 - 增加白色星星数量 (蓝色20%, 紫色15%, 白色65%)
        const colorRandom = Math.random();
        if (colorRandom < 0.2) {
            star.classList.add('blue');
        } else if (colorRandom < 0.35) {
            star.classList.add('purple');
        }
        
        // 设置星星样式
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // 随机动画延迟
        star.style.animationDelay = Math.random() * 3 + 's';
        
        // 为30%的星星添加圆形轨道运动效果
        if (Math.random() < 0.3) {
            // 随机轨道半径
            const orbitRadius = Math.random() * 30 + 20;
            // 随机轨道周期
            const orbitDuration = Math.random() * 60 + 30;
            
            // 设置轨道运动 - 根据星星颜色选择不同的闪烁动画
            if (star.classList.contains('blue') || star.classList.contains('purple')) {
                star.style.animation = `twinkle-blue-purple 3s infinite alternate, orbit ${orbitDuration}s linear infinite`;
            } else {
                star.style.animation = `twinkle-white 3s infinite alternate, orbit ${orbitDuration}s linear infinite`;
            }
            // 设置轨道中心位置
            starWrapper.style.left = (x - orbitRadius) + 'px';
            starWrapper.style.top = (y - orbitRadius) + 'px';
        } else {
            // 普通星星只闪烁 - 根据星星颜色选择不同的闪烁动画
            if (star.classList.contains('blue') || star.classList.contains('purple')) {
                star.style.animation = 'twinkle-blue-purple 3s infinite alternate';
            } else {
                star.style.animation = 'twinkle-white 3s infinite alternate';
            }
            // 设置普通位置
            starWrapper.style.left = x + 'px';
            starWrapper.style.top = y + 'px';
        }
        
        // 组装星星
        starWrapper.appendChild(star);
        container.appendChild(starWrapper);
    }
}

// 创建鼠标跟随的拖尾粒子效果
function createMouseTrail() {
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // 创建多个紧跟鼠标的粒子
        for (let i = 0; i < 3; i++) {
            // 轻微的随机偏移，使粒子更自然
            const offsetX = (Math.random() - 0.5) * 6;
            const offsetY = (Math.random() - 0.5) * 6;
            // 不同大小的粒子，增强层次感
            const sizeMultiplier = 0.7 + Math.random() * 0.6;
            
            createTrailParticle(mouseX + offsetX, mouseY + offsetY, sizeMultiplier);
        }
    });
}

// 创建单个拖尾粒子
function createTrailParticle(x, y, sizeMultiplier = 1) {
    const particle = document.createElement('div');
    particle.className = 'trail-particle';
    particle.style.left = (x - 3) + 'px';
    particle.style.top = (y - 3) + 'px';
    particle.style.width = (6 * sizeMultiplier) + 'px';
    particle.style.height = (6 * sizeMultiplier) + 'px';
    
    document.body.appendChild(particle);
    
    // 自动移除粒子
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// 测试相关变量
let currentQuestionIndex = 0;
let scores = { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 0 };
let answers = []; // 存储每个问题的答案

// DOM元素
let questionText, optionsContainer, progressText, progressFill, resultArea, houseResult, houseDescription, restartBtn, sortingHat;

// 初始化DOM元素
function initDOMElements() {
    questionText = document.getElementById('questionText');
    optionsContainer = document.getElementById('optionsContainer');
    progressText = document.getElementById('progressText');
    progressFill = document.getElementById('progressFill');
    resultArea = document.getElementById('resultArea');
    houseResult = document.getElementById('houseResult');
    houseDescription = document.getElementById('houseDescription');
    restartBtn = document.getElementById('restartBtn');
    sortingHat = document.getElementById('sortingHat');
}

// 初始化测试
function initTest() {
    currentQuestionIndex = 0;
    scores = { gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 0 };
    answers = []; // 清空答案数组
    resultArea.style.display = 'none';
    showQuestion();
}

// 显示当前问题
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    // 更新进度（英文）
    progressText.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
    progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    // 清空选项
    optionsContainer.innerHTML = '';
    
    // 创建选项容器
    let selectedOption = null;
    
    // 检查是否有已保存的答案
    if (answers[currentQuestionIndex]) {
        selectedOption = answers[currentQuestionIndex];
    }
    
    // 创建下一题按钮
    const nextBtn = document.createElement('button');
    nextBtn.id = 'nextBtn';
    nextBtn.textContent = 'Next Question';
    nextBtn.disabled = !selectedOption;
    nextBtn.onclick = () => {
        if (selectedOption) {
            processOption(selectedOption);
        }
    };
    
    // 创建返回上一步按钮
    const prevBtn = document.createElement('button');
    prevBtn.id = 'prevBtn';
    prevBtn.textContent = 'Previous Question';
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.onclick = () => {
        goToPreviousQuestion();
    };
    
    // 创建选项
    question.options.forEach((option, index) => {
        // 创建选项容器
        const optionContainer = document.createElement('div');
        optionContainer.className = 'option-container';
        
        // 如果当前选项是已保存的答案，则标记为选中
        if (selectedOption === option) {
            optionContainer.classList.add('selected');
        }
        
        // 创建选项文本
        const text = document.createElement('div');
        text.className = 'option-text';
        text.textContent = option.text;
        
        // 组装选项（移除单选按钮）
        optionContainer.appendChild(text);
        
        // 添加点击事件
        optionContainer.onclick = () => {
            // 移除其他选项的选中状态
            document.querySelectorAll('.option-container').forEach(container => {
                container.classList.remove('selected');
            });
            
            // 添加当前选项的选中状态
            optionContainer.classList.add('selected');
            selectedOption = option;
            
            // 启用下一题按钮
            nextBtn.disabled = false;
        };
        
        // 添加到选项容器
        optionsContainer.appendChild(optionContainer);
    });
    
    // 添加按钮容器，确保位于div底部居中
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.gap = '15px';
    buttonsContainer.style.justifyContent = 'center';
    buttonsContainer.style.marginTop = '40px';
    buttonsContainer.style.width = '100%';
    buttonsContainer.style.textAlign = 'center';
    
    // 添加返回上一步和下一题按钮
    buttonsContainer.appendChild(prevBtn);
    buttonsContainer.appendChild(nextBtn);
    optionsContainer.appendChild(buttonsContainer);
}

// 处理选项选择
function processOption(option) {
    // 保存答案
    answers[currentQuestionIndex] = option;
    
    // 更新分数
    Object.keys(option.points).forEach(house => {
        scores[house] += option.points[house];
    });
    
    // 下一题或显示结果
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 返回上一题
function goToPreviousQuestion() {
    // 如果是第一题，不执行任何操作
    if (currentQuestionIndex === 0) {
        return;
    }
    
    // 移除当前问题的分数
    if (answers[currentQuestionIndex]) {
        const option = answers[currentQuestionIndex];
        Object.keys(option.points).forEach(house => {
            scores[house] -= option.points[house];
        });
    }
    
    // 回到上一题
    currentQuestionIndex--;
    showQuestion();
}

// 显示结果
function showResult() {
    // 计算最高分学院
    let maxScore = 0;
    let selectedHouse = 'gryffindor';
    
    Object.keys(scores).forEach(house => {
        if (scores[house] > maxScore) {
            maxScore = scores[house];
            selectedHouse = house;
        }
    });
    
    // 显示结果
    houseResult.textContent = houseNames[selectedHouse];
    houseResult.className = selectedHouse;
    houseDescription.textContent = houseDescriptions[selectedHouse];
    
    // 切换显示区域
    resultArea.style.display = 'block';
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    // 创建星空和拖尾效果
    createStars();
    createMouseTrail();
    
    // 初始化DOM元素
    initDOMElements();
    
    // 初始化测试
    initTest();
    
    // 添加重新测试按钮事件监听
    restartBtn.addEventListener('click', initTest);
});