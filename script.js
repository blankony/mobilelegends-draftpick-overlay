const pickSound = new Audio('./audio/picksound.mp3');
const banSound = new Audio('./audio/ban_sound.mp3');
// const bgm = new Audio('./audio/bgm_draftpick.mp3');
// bgm.loop = true;

const pickSlotIds = [1, 2, 3, 4, 5, 9, 10, 11, 12, 13];
const banSlotIds = [6, 7, 8, 14, 15, 16, 17, 18, 19, 20];

const heroes = [
    { name: 'Aamon', img: '/Assets/HeroPick/aamon.png' },
    { name: 'Akai', img: '/Assets/HeroPick/akai.png' },
    { name: 'Aldous', img: '/Assets/HeroPick/aldous.png' },
    { name: 'Alice', img: '/Assets/HeroPick/alice.png' },
    { name: 'Alpha', img: '/Assets/HeroPick/alpha.png' },
    { name: 'Alucard', img: '/Assets/HeroPick/alucard.png' },
    { name: 'Angela', img: '/Assets/HeroPick/angela.png' },
    { name: 'Argus', img: '/Assets/HeroPick/argus.png' },
    { name: 'Arlot', img: '/Assets/HeroPick/arlot.png' },
    { name: 'Atlas', img: '/Assets/HeroPick/atlas.png' },
    { name: 'Aulus', img: '/Assets/HeroPick/aulus.png' },
    { name: 'Aurora', img: '/Assets/HeroPick/aurora.png' },
    { name: 'Badang', img: '/Assets/HeroPick/badang.png' },
    { name: 'Balmond', img: '/Assets/HeroPick/balmond.png' },
    { name: 'Bane', img: '/Assets/HeroPick/bane.png' },
    { name: 'Barats', img: '/Assets/HeroPick/barats.png' },
    { name: 'Baxia', img: '/Assets/HeroPick/baxia.png' },
    { name: 'Beatrix', img: '/Assets/HeroPick/beatrix.png' },
    { name: 'Beleric', img: '/Assets/HeroPick/beleric.png' },
    { name: 'Benedetta', img: '/Assets/HeroPick/benedetta.png' },
    { name: 'Brody', img: '/Assets/HeroPick/brody.png' },
    { name: 'Bruno', img: '/Assets/HeroPick/bruno.png' },
    { name: 'Carmila', img: '/Assets/HeroPick/carmila.png' },
    { name: 'Cecilion', img: '/Assets/HeroPick/cecilion.png' },
    { name: 'Chang\'e', img: '/Assets/HeroPick/chang_e.png' },
    { name: 'Chip', img: '/Assets/HeroPick/chip.png' },
    { name: 'Chou', img: '/Assets/HeroPick/chou.png' },
    { name: 'Cici', img: '/Assets/HeroPick/cici.png' },
    { name: 'Claude', img: '/Assets/HeroPick/claude.png' },
    { name: 'Clint', img: '/Assets/HeroPick/clint.png' },
    { name: 'Cyclops', img: '/Assets/HeroPick/cyclops.png' },
    { name: 'Diggie', img: '/Assets/HeroPick/diggie.png' },
    { name: 'Dyroth', img: '/Assets/HeroPick/dyroth.png' },
    { name: 'Edith', img: '/Assets/HeroPick/edith.png' },
    { name: 'Esmeralda', img: '/Assets/HeroPick/esmeralda.png' },
    { name: 'Estes', img: '/Assets/HeroPick/estes.png' },
    { name: 'Eudora', img: '/Assets/HeroPick/eudora.png' },
    { name: 'Fanny', img: '/Assets/HeroPick/fanny.png' },
    { name: 'Faramis', img: '/Assets/HeroPick/faramis.png' },
    { name: 'Floryn', img: '/Assets/HeroPick/floryn.png' },
    { name: 'Franco', img: '/Assets/HeroPick/franco.png' },
    { name: 'Fredrin', img: '/Assets/HeroPick/fredrin.png' },
    { name: 'Freya', img: '/Assets/HeroPick/freya.png' },
    { name: 'Gatotkaca', img: '/Assets/HeroPick/gatotkaca.png' },
    { name: 'Gloo', img: '/Assets/HeroPick/gloo.png' },
    { name: 'Gord', img: '/Assets/HeroPick/gord.png' },
    { name: 'Granger', img: '/Assets/HeroPick/granger.png' },
    { name: 'Grock', img: '/Assets/HeroPick/grock.png' },
    { name: 'Guinevere', img: '/Assets/HeroPick/guinevere.png' },
    { name: 'Gusion', img: '/Assets/HeroPick/gusion.png' },
    { name: 'Hanabi', img: '/Assets/HeroPick/hanabi.png' },
    { name: 'Hanzo', img: '/Assets/HeroPick/hanzo.png' },
    { name: 'Harith', img: '/Assets/HeroPick/harith.png' },
    { name: 'Harley', img: '/Assets/HeroPick/harley.png' },
    { name: 'Hayabusa', img: '/Assets/HeroPick/hayabusa.png' },
    { name: 'Helcurt', img: '/Assets/HeroPick/helcurt.png' },
    { name: 'Hilda', img: '/Assets/HeroPick/hilda.png' },
    { name: 'Hylos', img: '/Assets/HeroPick/hylos.png' },
    { name: 'Irithel', img: '/Assets/HeroPick/irithel.png' },
    { name: 'Ixia', img: '/Assets/HeroPick/ixia.png' },
    { name: 'Jawhead', img: '/Assets/HeroPick/jawhead.png' },
    { name: 'Johnson', img: '/Assets/HeroPick/johnson.png' },
    { name: 'Joy', img: '/Assets/HeroPick/joy.png' },
    { name: 'Julian', img: '/Assets/HeroPick/julian.png' },
    { name: 'Kadita', img: '/Assets/HeroPick/kadita.png' },
    { name: 'Kagura', img: '/Assets/HeroPick/kagura.png' },
    { name: 'Kaja', img: '/Assets/HeroPick/kaja.png' },
    { name: 'Karina', img: '/Assets/HeroPick/karina.png' },
    { name: 'Karrie', img: '/Assets/HeroPick/karrie.png' },
    { name: 'Khaleed', img: '/Assets/HeroPick/khaleed.png' },
    { name: 'Khufra', img: '/Assets/HeroPick/khufra.png' },
    { name: 'Kimmy', img: '/Assets/HeroPick/kimmy.png' },
    { name: 'Lancelot', img: '/Assets/HeroPick/lancelot.png' },
    { name: 'Lukas', img: '/Assets/HeroPick/lukas.png' },
    { name: 'Lapu Lapu', img: '/Assets/HeroPick/lapulapu.png' },
    { name: 'Layla', img: '/Assets/HeroPick/layla.png' },
    { name: 'Leomord', img: '/Assets/HeroPick/leomord.png' },
    { name: 'Lesley', img: '/Assets/HeroPick/lesley.png' },
    { name: 'Ling', img: '/Assets/HeroPick/ling.png' },
    { name: 'Lolita', img: '/Assets/HeroPick/lolita.png' },
    { name: 'Lunox', img: '/Assets/HeroPick/lunox.png' },
    { name: 'Luo Yi', img: '/Assets/HeroPick/luoyi.png' },
    { name: 'Lylia', img: '/Assets/HeroPick/lylia.png' },
    { name: 'Marcel', img: '/Assets/HeroPick/marcel.png'},
    { name: 'Martis', img: '/Assets/HeroPick/martis.png' },
    { name: 'Masha', img: '/Assets/HeroPick/masha.png' },
    { name: 'Mathilda', img: '/Assets/HeroPick/mathilda.png' },
    { name: 'Melissa', img: '/Assets/HeroPick/melissa.png' },
    { name: 'Minotaur', img: '/Assets/HeroPick/minotour.png' },
    { name: 'Minsitthar', img: '/Assets/HeroPick/minsitthar.png' },
    { name: 'Miya', img: '/Assets/HeroPick/miya.png' },
    { name: 'Moskov', img: '/Assets/HeroPick/moskov.png' },
    { name: 'Nana', img: '/Assets/HeroPick/nana.png' },
    { name: 'Natalia', img: '/Assets/HeroPick/natalia.png' },
    { name: 'Nathan', img: '/Assets/HeroPick/nathan.png' },
    { name: 'Nolan', img: '/Assets/HeroPick/nolan.png' },
    { name: 'Novaria', img: '/Assets/HeroPick/novaria.png' },
    { name: 'Odette', img: '/Assets/HeroPick/odette.png' },
    { name: 'Paquito', img: '/Assets/HeroPick/paquito.png' },
    { name: 'Parsha', img: '/Assets/HeroPick/parsha.png' },
    { name: 'Phoveus', img: '/Assets/HeroPick/phoveus.png' },
    { name: 'Popol and Kupa', img: '/Assets/HeroPick/popolandkupa.png' },
    { name: 'Rafaela', img: '/Assets/HeroPick/rafaela.png' },
    { name: 'Roger', img: '/Assets/HeroPick/roger.png' },
    { name: 'Ruby', img: '/Assets/HeroPick/ruby.png' },
    { name: 'Saber', img: '/Assets/HeroPick/saber.png' },
    { name: 'Selena', img: '/Assets/HeroPick/selena.png' },
    { name: 'Silvanna', img: '/Assets/HeroPick/silvanna.png' },
    { name: 'Sora', img: '/Assets/HeroPick/sora.png' },
    { name: 'Sun', img: '/Assets/HeroPick/sun.png' },
    { name: 'Suyou', img: '/Assets/HeroPick/suyou.png' },
    { name: 'Terizla', img: '/Assets/HeroPick/terizla.png' },
    { name: 'Thamuz', img: '/Assets/HeroPick/thamuz.png' },
    { name: 'Tigreal', img: '/Assets/HeroPick/tigreal.png' },
    { name: 'Uranus', img: '/Assets/HeroPick/uranus.png' },
    { name: 'Vale', img: '/Assets/HeroPick/vale.png' },
    { name: 'Valentina', img: '/Assets/HeroPick/valentina.png' },
    { name: 'Valir', img: '/Assets/HeroPick/valir.png' },
    { name: 'Vexana', img: '/Assets/HeroPick/vexana.png' },
    { name: 'Wanwan', img: '/Assets/HeroPick/wanwan.png' },
    { name: 'Xavier', img: '/Assets/HeroPick/xavier.png' },
    { name: 'Xborg', img: '/Assets/HeroPick/xborg.png' },
    { name: 'Yin', img: '/Assets/HeroPick/yin.png' },
    { name: 'Yisunshin', img: '/Assets/HeroPick/yisunshin.png' },
    { name: 'Yuzhong', img: '/Assets/HeroPick/yuzhong.png' },
    { name: 'Yve', img: '/Assets/HeroPick/yve.png' },
    { name: 'Zhask', img: '/Assets/HeroPick/zhask.png' },
    { name: 'Zhuxin', img: '/Assets/HeroPick/zhuxin.png' },
    { name: 'Zilong', img: '/Assets/HeroPick/zilong.png' },
    { name: 'Zetian', img: '/Assets/HeroPick/zetian.png' },
    { name: 'Obsidia', img: '/Assets/HeroPick/obsidia.png' },
    { name: 'Kalea', img: '/Assets/HeroPick/kalea.png' },
];

function filterDropdown(id) {
    const searchInput = document.getElementById(`search-${id}`).value.toLowerCase();
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    dropdownItems.innerHTML = '';

    heroes
        .filter(hero => hero.name.toLowerCase().includes(searchInput))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = hero.name;
            item.onclick = () => selectHero(hero, id);
            dropdownItems.appendChild(item);
        });
}

function selectHero(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img');

    if (existingImage) {
        existingImage.classList.add('fly-out');
        setTimeout(() => {
            updateHeroImage(hero, id);
        }, 500);
    } else {
        updateHeroImage(hero, id);
    }
}

function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
    const searchElement = document.getElementById(`search-${id}`);
    if(searchElement) searchElement.value = hero.name;
    const dropdownElement = document.getElementById(`dropdown-items-${id}`);
    if(dropdownElement) dropdownElement.innerHTML = ''; 

    const slotIdNumber = parseInt(id);
    if (pickSlotIds.includes(slotIdNumber)) {
        pickSound.currentTime = 0;
        pickSound.play().catch(e => console.log(e));
    } else if (banSlotIds.includes(slotIdNumber)) {
        banSound.currentTime = 0;
        banSound.play().catch(e => console.log(e));
    }
}

function resetAllDropdowns() {
    for (let i = 1; i <= 20; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        if (imageDisplay && imageDisplay.innerHTML) {
            imageDisplay.querySelector('img').classList.add('fly-out');
        }

        setTimeout(() => {
            const searchInput = document.getElementById(`search-${i}`);
            const dropdownItems = document.getElementById(`dropdown-items-${i}`);
            if (searchInput) searchInput.value = '';
            if (imageDisplay) imageDisplay.innerHTML = '';
            if (dropdownItems) dropdownItems.innerHTML = '';
        }, 500);
    }
}

function updateOutput() {
    for (let i = 1; i <= 10; i++) {
        const inputText = document.getElementById('input' + i).value;
        document.getElementById('output' + i).textContent = ` ${inputText}`;
    }
}

function resetInputs() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('input' + i).value = '';
        document.getElementById('output' + i).textContent = ` `;
    }
}

function switchInputs() {
    for (let i = 1; i <= 5; i++) {
        const temp = document.getElementById('input' + i).value;
        document.getElementById('input' + i).value = document.getElementById('input' + (i + 5)).value;
        document.getElementById('input' + (i + 5)).value = temp;
    }
    updateOutput();
}

function swapContent() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    const teamDisplay1 = document.getElementById('teamNameDisplay1');
    const teamDisplay2 = document.getElementById('teamNameDisplay2');
    const tempTeamDisplay = teamDisplay1.textContent;
    teamDisplay1.textContent = teamDisplay2.textContent;
    teamDisplay2.textContent = tempTeamDisplay;
}

function loadImage(event, imgId) {
    const img = document.getElementById(imgId);
    img.src = URL.createObjectURL(event.target.files[0]);
}

function updateTeamName() {
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    document.getElementById('teamNameDisplay1').textContent = team1;
    document.getElementById('teamNameDisplay2').textContent = team2;
}

function resetContent() {
    document.getElementById('team1').value = "Team 1";
    document.getElementById('team2').value = "Team 2";
    updateTeamName();

    document.getElementById('image1').src = "https://via.placeholder.com/300x200?text=Image+1";
    document.getElementById('image2').src = "https://via.placeholder.com/300x200?text=Image+2";

    document.getElementById('file1').value = "";
    document.getElementById('file2').value = "";

    for (let i = 1; i <= 6; i++) {
        document.getElementById('checkbox' + i).checked = false;
        document.getElementById('extraImage' + i).style.display = "none";
    }
}

function toggleImage(imageId) {
    const image = document.getElementById(imageId);
    const checkbox = document.getElementById('checkbox' + imageId.slice(-1));
    image.style.display = checkbox.checked ? "block" : "none";
}

function switchAll() {
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    const tempName = team1.value;
    team1.value = team2.value;
    team2.value = tempName;
    updateTeamName();

    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    for (let i = 1; i <= 3; i++) {
        const checkboxA = document.getElementById('checkbox' + i);
        const checkboxB = document.getElementById('checkbox' + (i + 3));
        const extraImageA = document.getElementById('extraImage' + i);
        const extraImageB = document.getElementById('extraImage' + (i + 3));

        const tempChecked = checkboxA.checked;
        checkboxA.checked = checkboxB.checked;
        checkboxB.checked = tempChecked;

        extraImageA.style.display = checkboxA.checked ? "block" : "none";
        extraImageB.style.display = checkboxB.checked ? "block" : "none";
    }
}

function setMatchFormat(boxesCount) {
    const boxes = {
        1: ['w-b1', 'w-r1', 'lbl-cb1', 'lbl-cb4'],
        2: ['w-b2', 'w-r2', 'lbl-cb2', 'lbl-cb5'],
        3: ['w-b3', 'w-r3', 'lbl-cb3', 'lbl-cb6']
    };

    for (let i = 1; i <= 3; i++) {
        const isVisible = boxesCount >= i;
        const displayStyleBox = isVisible ? 'flex' : 'none';
        const displayStyleLbl = isVisible ? 'inline' : 'none';

        document.getElementById(boxes[i][0]).style.display = displayStyleBox;
        document.getElementById(boxes[i][1]).style.display = displayStyleBox;
        
        const lbl1 = document.getElementById(boxes[i][2]);
        if (lbl1) lbl1.style.display = displayStyleLbl;
        
        const lbl2 = document.getElementById(boxes[i][3]);
        if (lbl2) lbl2.style.display = displayStyleLbl;

        if (!isVisible) {
            const cbA = document.getElementById('checkbox' + i);
            const cbB = document.getElementById('checkbox' + (i+3));
            if(cbA) cbA.checked = false;
            if(cbB) cbB.checked = false;
            
            const imgA = document.getElementById('extraImage' + i);
            const imgB = document.getElementById('extraImage' + (i+3));
            if(imgA) imgA.style.display = 'none';
            if(imgB) imgB.style.display = 'none';
        }
    }
}

const phasesBan6 = [
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" }
];

const phasesBan10 = [
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/Left.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/Right.gif" }
];

let phases = phasesBan6;
let defaultTimerDuration = 35;

function setBanMode(mode) {
    const extraBans = document.querySelectorAll('.extra-ban');
    const extraBanControls = document.querySelectorAll('.extra-ban-control');
    
    if (mode === 'ban6') {
        extraBans.forEach(el => el.style.display = 'none');
        extraBanControls.forEach(el => el.style.display = 'none');
        phases = phasesBan6;
        defaultTimerDuration = 35;
    } else if (mode === 'ban10') {
        extraBans.forEach(el => el.style.display = 'block'); 
        extraBanControls.forEach(el => el.style.display = 'block');
        phases = phasesBan10;
        defaultTimerDuration = 50;
    }
    
    reset();
}

const tournamentnameInput = document.getElementById('tournamentnamemid');
const tournamentnameOutput = document.getElementById('tournamentnameOutput');

tournamentnameInput.addEventListener('input', function() {
    tournamentnameOutput.textContent = tournamentnameInput.value;
});

let currentPhaseIndex = 0;
let timer = 35;
let timerInterval;
let timerRunning = false;

const phaseElement = document.getElementById('phase');
const arrowElement = document.getElementById('arrow');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const nextPhaseButton = document.getElementById('nextPhase');
const resetButton = document.getElementById('reset');

function updateUI() {
    const directionContainer = document.getElementById('direction');

    if (currentPhaseIndex < phases.length) {
        const currentPhase = phases[currentPhaseIndex];
        phaseElement.textContent = `${currentPhase.type}`;
        arrowElement.src = currentPhase.direction;
        timerElement.textContent = timer;
        nextPhaseButton.disabled = false;

        directionContainer.classList.remove('adjustment-box'); 
    } else {
        phaseElement.textContent = "Finalizing";
        arrowElement.src = "/Assets/Other/Adjustment.gif";
        timerElement.textContent = "VS";
        nextPhaseButton.disabled = true;

        directionContainer.classList.add('adjustment-box'); 
    }
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                timerElement.textContent = timer;
            } else {
                clearInterval(timerInterval);
                timerRunning = false;
                moveToNextPhase();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function moveToNextPhase() {
    if (currentPhaseIndex < phases.length) {
        currentPhaseIndex++;
        updateUI();
        if (currentPhaseIndex < phases.length) {
            timer = defaultTimerDuration;
            startTimer();
        }
    }
}

function reset() {
    clearInterval(timerInterval);
    currentPhaseIndex = 0;
    timer = defaultTimerDuration;
    timerRunning = false;
    updateUI();
}

startButton.addEventListener('click', () => {
    startTimer();
});

stopButton.addEventListener('click', stopTimer);

nextPhaseButton.addEventListener('click', () => {
    stopTimer();
    moveToNextPhase();
});

resetButton.addEventListener('click', () => {
    reset();
});

window.addEventListener('load', function() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById('checkbox' + i).checked = false;
        document.getElementById('extraImage' + i).style.display = "none";
    }
    
    setMatchFormat(2); 

    setBanMode('ban6');
});

updateUI();